"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[65],{65:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var c=t(791),r=t(689);const l={files:[],fileUrls:[]};function o(){const e=(0,c.useRef)(document.createElement("input")),n=(0,c.useRef)(l);(0,c.useEffect)((()=>{const t=e.current;return t.type="file",t.accept="image/*",t.hidden=!0,document.body.appendChild(t),()=>{document.body.removeChild(t),n.current.fileUrls.forEach((e=>URL.revokeObjectURL(e)))}}),[]);return{handleUploadFile:(0,c.useCallback)((async(c,r)=>{null===c||void 0===c||c.stopPropagation(),null===c||void 0===c||c.preventDefault();const o=e.current;return r&&Object.entries(r).forEach((e=>{let[n,t]=e})),o.addEventListener("change",(async function e(c){const r=c.target,{files:l}=r;if(!l||0===l.length)return;const a=Array.from(l),i=await a.reduce((async(e,n)=>{const c=await e,r=await async function(e){if(/\heic$|\heif$/i.test((null===e||void 0===e?void 0:e.type)||""))try{const n=URL.createObjectURL(e),c=await fetch(n),r=await c.blob();return await(await t.e(669).then(t.t.bind(t,669,23))).default({blob:r})}catch(n){return null}return e}(n);return r&&c.push(r),c}),Promise.resolve([])),s=i.map((e=>URL.createObjectURL(e)));n.current={files:i,fileUrls:s},r&&(r.value=null),o.removeEventListener("change",e)})),n.current.fileUrls.forEach((e=>URL.revokeObjectURL(e))),n.current=l,o.click(),new Promise((e=>{o.addEventListener("change",(()=>{e(n.current)}),{once:!0})}))}),[]),refFiles:n}}var a=t(184);const i=e=>{try{const e=(0,r.f_)();console.log("loaderData",e)}catch(l){console.log(l)}const{handleFileSelection:n}=(e=>{const n=(0,c.useRef)(document.createElement("input"));return(0,c.useEffect)((()=>{const e=n.current;return e.type="file",e.accept="image/*",e.hidden=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),(0,c.useEffect)((()=>{const t=()=>{var t;const c=null===(t=n.current)||void 0===t?void 0:t.files;if(c&&c.length>0){const n=c[0];e(n)}};return window.addEventListener("change",t),()=>{window.removeEventListener("change",t)}}),[]),{handleFileSelection:async()=>{await n.current.click()}}})((e=>{console.log("File \u0111\xe3 ch\u1ecdn:",e)})),{handleUploadFile:t}=o();return(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:n,children:"Ch\u1ecdn \u1ea3nh"}),(0,a.jsx)("button",{onClick:async()=>{const{files:e}=await t();console.log("arr",e)},children:"UploadFile"}),"\\"]})}}}]);
//# sourceMappingURL=65.1bfe85b4.chunk.js.map