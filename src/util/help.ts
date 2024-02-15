// export const isAdmin = () => {};
import { useCallback, useEffect, useRef } from "react";

// import { convertFileAppleToImage, isNil } from '../helpers';

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

interface RefFiles {
  files: File[];
  fileUrls: string[];
}

const defaultRefFiles: RefFiles = {
  files: [],
  fileUrls: [],
};
const isNil = (value: any) => {
  return true;
};

async function convertFileAppleToImage(file: File) {
  const regexFile = /\heic$|\heif$/i;

  const isHeicOrHeif = regexFile.test(file?.type || "");

  if (isHeicOrHeif) {
    try {
      // get image as blob url
      const blobURL = URL.createObjectURL(file);

      // convert "fetch" the new blob url
      const blobRes = await fetch(blobURL);

      // convert response to blob
      const blob = await blobRes.blob();

      // convert to PNG - response is blob
      const fileConvertBlob = await (
        await import("heic2any")
      ).default({ blob });

      // convert to blob url
      return fileConvertBlob;
    } catch (error) {
      return null;
    }
  }
  return file;
}

export function useUploadFile() {
  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
  const refFiles =
    useRef<ExtractFnReturnType<IHandleUploadFile>>(defaultRefFiles);

  // Initialize inputRef once on component mount
  useEffect(() => {
    const inputElement = inputRef.current;
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.hidden = true;

    document.body.appendChild(inputElement);

    return () => {
      document.body.removeChild(inputElement);
      refFiles.current.fileUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleUploadFile: IHandleUploadFile = useCallback(
    async (e, options) => {
      e?.stopPropagation();
      e?.preventDefault();

      const inputElement = inputRef.current;

      // Set attributes based on options provided
      if (options) {
        Object.entries(options).forEach(([key, value]) => {
          if (!isNil(value)) {
            inputElement.setAttribute(key, String(value));
          }
        });
      }

      // Clean up after files are loaded
      async function handleOnChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const { files } = target;

        if (!files || files.length === 0) {
          return;
        }

        const arrayFiles = Array.from(files);

        const convertedFiles = await arrayFiles.reduce<Promise<File[]>>(
          async (accumulatorPromise, file) => {
            const accumulator = await accumulatorPromise;
            const convertedFile = await convertFileAppleToImage(file);

            if (convertedFile) {
              accumulator.push(convertedFile as File);
            }

            return accumulator;
          },

          Promise.resolve<File[]>([])
        );

        const fileUrls = convertedFiles.map((file) =>
          URL.createObjectURL(file)
        );
        refFiles.current = { files: convertedFiles, fileUrls };

        // tips: choose same file
        if (target) {
          target.value = null as unknown as string;
        }
        inputElement.removeEventListener("change", handleOnChange);
      }

      inputElement.addEventListener("change", handleOnChange);

      refFiles.current.fileUrls.forEach((url) => URL.revokeObjectURL(url));
      refFiles.current = defaultRefFiles;

      inputElement.click();

      return new Promise<RefFiles>((resolve) => {
        inputElement.addEventListener(
          "change",
          () => {
            resolve(refFiles.current);
          },
          { once: true }
        );
      });
    },
    []
  );

  return {
    handleUploadFile,
    refFiles,
  };
}

type IHandleUploadFile = (
  e?: Event,
  options?: Partial<HTMLInputElement>
) => Promise<RefFiles>;

export const useCustomFilePicker = (onFileSelected: (file: File) => void) => {
  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));

  useEffect(() => {
    const inputElement = inputRef.current;
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.hidden = true;

    document.body.appendChild(inputElement);

    return () => {
      document.body.removeChild(inputElement);
    };
  }, []);

  const handleFileSelection = async () => {
    await inputRef.current.click();
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const fileList = inputRef.current?.files;
      if (fileList && fileList.length > 0) {
        const file = fileList[0];
        onFileSelected(file);
      }
    };
    window.addEventListener("change", handleWindowResize);
    return () => {
      window.removeEventListener("change", handleWindowResize);
    };
  }, []);

  return {
    handleFileSelection,
  };
};
