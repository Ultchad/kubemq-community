import{a as x,v as V,o as i,h as d,t as _,s as v,i as u,j as a,w as C,C as y,m as S,P as B,r,u as w,Q as k,R as c,l as P}from"./entry.61f443fa.js";const E={key:0,class:"text-sm ml-1 font-medium"},N={class:"p-3 border-1 border-round-2xl mt-2 bg-white"},j={id:"height_style",class:"flex bg-white"},z=x({__name:"CodeEditor",props:{label:String,modelValue:String,height:{type:String,default:"300px"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const m=e;B(t=>({"627060c8":e.height}));const o=V(m.modelValue),h=t=>{s("update:modelValue",t)};function p(t){return c.exports.highlight(t,c.exports.languages.json)}function f(){s("update:modelValue","")}return(t,l)=>{const g=r("Button"),b=r("ScrollPanel");return i(),d("div",{class:S(["flex flex-column",e.disabled?"div-disabled":""])},[e.label?(i(),d("label",E,_(e.label),1)):v("",!0),u("div",N,[a(b,{style:y([{width:"100%"},{height:e.height}])},{default:C(()=>[u("div",j,[a(w(k),{class:"my-editor",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=n=>o.value=n),highlight:p,"line-numbers":"",onInput:l[1]||(l[1]=n=>h(o.value))},null,8,["modelValue"]),a(g,{class:"p-button-rounded p-button-text p-button-sm clear-button",icon:"pi pi-trash",onClick:f})])]),_:1},8,["style"])])],2)}}}),I=P(z,[["__scopeId","data-v-30eccff3"]]);export{I as default};
