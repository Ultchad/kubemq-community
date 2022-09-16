import N from"./InputText.2ab10032.js";import{a as F,I as L,v as i,z as W,M as j,H as A,o as c,h as g,i as s,j as d,c as C,s as k,w as y,m as E,J as H,r as p,L as J,t as w,l as O}from"./entry.61f443fa.js";const R={class:"grid-nogutter grid p-0"},U={class:"flex align-items-end col-12 md:12 align-content-between mb-1 pt-0 border-bottom-1 border-light-grey"},q={class:"flex flex-grow-1 align-items-end p-0"},G={class:"align-items-end grid p-fluid col-6 pb-0 mb-1"},K={class:"col-12 md:col-4 pt-0"},P={class:"col-12 md:col-4"},Q={class:"ml-1"},X={key:0,class:"col-12 md:col-4 pt-0"},Y={class:"mb-3"},Z={class:"flex justify-content-end",style:{"min-width":"10rem"}},ee={key:0,class:"col-12 md:12 pt-1"},te={class:"text-sm"},se=F({__name:"Monitor",props:{type:{type:String,default:()=>""},channel:{type:String,default:""}},setup(S){const b=S,{ApiBaseHost:B}=L(),l=i([]),r=i([]),u=i(""),v=i(null);let n=W({});const t=i(!1),a=()=>{v.value&&v.value.scrollToBottom()};j(()=>{a()}),A(()=>{t.value&&h()});const _=m=>{l.value.push({id:l.value.length,message:m}),u.value.length>0?r.value=l.value.filter(e=>e.message.toLowerCase().includes(u.value.toLowerCase())):r.value=l.value,a()},D=()=>{n=H(`ws://${B.value}/api/monitor?channel=${b.channel}&kind=${b.type}`,{autoClose:!1,immediate:!1,onConnected:()=>{t.value=!0,a()},onDisconnected:()=>{t.value=!1,_("Disconnected")},onError:(m,e)=>{t.value=!1,_(e.type)},onMessage:(m,e)=>{t.value=!0,_(e.data)}}),n.open(),n.send("start"),x()},h=()=>{n&&n.close()},x=()=>{l.value=[],r.value=[],a()};return(m,e)=>{const V=N,f=p("Button"),$=p("Tag"),z=p("DynamicScrollerItem"),I=p("DynamicScroller");return c(),g("div",R,[s("div",U,[s("div",q,[s("div",G,[s("div",K,[d(V,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),label:"Filter Messages",disabled:t.value,placeholder:"No Filter"},null,8,["modelValue","disabled"])]),s("div",P,[s("div",Q,[t.value?(c(),C(f,{key:1,label:"Stop",onClick:e[2]||(e[2]=o=>h()),icon:"pi pi-stop",class:"button-grey",disabled:!t.value},null,8,["disabled"])):(c(),C(f,{key:0,label:"Watch",class:"button-grey",icon:"pi pi-eye",onClick:e[1]||(e[1]=o=>D()),style:{"min-width":"5rem"}}))])]),t.value?(c(),g("div",X,[s("div",null,[d(f,{label:"Clear",class:"button-grey",icon:"pi pi-trash",onClick:e[3]||(e[3]=o=>x()),style:{"min-width":"10rem"}})])])):k("",!0)])]),s("div",Y,[s("div",Z,[d($,{class:E(["text-sm border-round-xl font-italic font-light mr-1",t.value?"bg-success":"bg-error"])},{default:y(()=>[J(w(t.value?"Watching":"Disconnected"),1)]),_:1},8,["class"])])])]),t.value?(c(),g("div",ee,[s("div",null,[s("div",null,[d(I,{items:r.value,"min-item-size":16,class:"scroller",ref_key:"dynamicScroller",ref:v,onResize:e[4]||(e[4]=o=>a())},{default:y(({item:o,index:M,active:T})=>[d(z,{item:o,active:T,"size-dependencies":[o.message],"data-index":M,class:"ml-2"},{default:y(()=>[s("pre",te,w(o.message),1)]),_:2},1032,["item","active","size-dependencies","data-index"])]),_:1},8,["items"])])])])):k("",!0)])}}}),ne=O(se,[["__scopeId","data-v-6675baf0"]]);export{ne as default};
