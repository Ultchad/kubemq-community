import{a as v,v as _,o as i,h as d,t as V,s as C,i as u,j as a,w as y,C as S,m as B,R as w,r,u as k,S as E,T as c,l as N}from"./entry.86b9e19f.js";const P={key:0,class:"text-sm ml-1 font-medium"},j={class:"p-3 border-1 border-round-2xl mt-2 bg-white"},z={id:"height_style",class:"flex bg-white"},D=v({__name:"CodeEditor",props:{label:String,modelValue:String,height:{type:String,default:"300px"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{expose:m,emit:s}){const h=t;w(e=>({"44ab9fc3":t.height}));const l=_(h.modelValue),p=e=>{s("update:modelValue",e)};m({clear:e=>l.value=e||""});function g(e){return c.exports.highlight(e,c.exports.languages.json)}function b(){s("update:modelValue",""),l.value=""}return(e,o)=>{const f=r("Button"),x=r("ScrollPanel");return i(),d("div",{class:B(["flex flex-column",t.disabled?"div-disabled":""])},[t.label?(i(),d("label",P,V(t.label),1)):C("",!0),u("div",j,[a(x,{style:S([{width:"100%"},{height:t.height}])},{default:y(()=>[u("div",z,[a(k(E),{class:"my-editor",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),highlight:g,"line-numbers":"",onInput:o[1]||(o[1]=n=>p(l.value))},null,8,["modelValue"]),a(f,{class:"p-button-rounded p-button-text p-button-sm clear-button",icon:"pi pi-trash",onClick:b})])]),_:1},8,["style"])])],2)}}}),R=N(D,[["__scopeId","data-v-fa7d8ba5"]]);export{R as default};