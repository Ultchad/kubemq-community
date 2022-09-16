import E from"./InputText.2ab10032.js";import{a as N,x as T,v as f,y as q,o as b,h as C,i as e,j as c,u as i,A as _,s as S,B as $,D as A,r as w,p as U,k as Q,l as j}from"./entry.61f443fa.js";import{u as M,r as G}from"./index.esm.bd0dd375.js";import{G as m,u as D}from"./request.b3446890.js";import{u as F}from"./useToastMessage.af91aa57.js";class P extends m{constructor(t){super("create_channel",{type:"queues",name:t})}}class z extends m{constructor(t){super("create_channel",{type:"events",name:t})}}class H extends m{constructor(t){super("create_channel",{type:"events_store",name:t})}}class J extends m{constructor(t){super("create_channel",{type:"commands",name:t})}}class K extends m{constructor(t){super("create_channel",{type:"queries",name:t})}}const r=n=>(U("data-v-506ee113"),n=n(),Q(),n),L={class:"grid-nogutter grid col-12 mt-2"},O={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},W={class:"col-12 md:col-6 pt-0"},X={key:0,class:"flex align-items-end grid p-fluid col-12 pb-0 mt-2 mb-1"},Y=r(()=>e("div",{class:"col-12 md:col-12 pt-0"},[e("label",{class:"text-sm ml-1 font-medium"},"Select Channel Type")],-1)),Z={class:"col-12 md:col-12 pt-0 mt-1"},ee={class:"flex ml-1"},se={class:"mr-2"},te=r(()=>e("label",{class:"ml-1",for:"events"},"Events",-1)),le={class:"ml-2"},ne=r(()=>e("label",{class:"ml-1",for:"events_store"},"Events Store",-1)),ae={key:1,class:"flex align-items-end grid p-fluid col-12 pb-0 mt-2 mb-1"},oe=r(()=>e("div",{class:"col-12 md:col-12 pt-0"},[e("label",{class:"text-sm ml-1 font-medium"},"Channel Type")],-1)),de={class:"col-12 md:col-12 pt-0 mt-1"},ue={class:"flex ml-1"},ce={class:"mr-2"},ie=r(()=>e("label",{class:"ml-1",for:"events"},"Commands",-1)),re={class:"ml-2"},me=r(()=>e("label",{class:"ml-1",for:"events_store"},"Queries",-1)),pe={class:"flex align-items-end grid justify-content-end p-fluid col-12 pb-0 mb-1 mt-2"},ve={class:"mr-2"},_e={class:"ml-2"},he=N({__name:"AddChannel",setup(n){const t=A("dialogRef");T(()=>{p.value=t.value.data.channelType});const a=f(""),p=f(1),d=q("add-channel-pub-sub-radio-button","events"),u=q("add-channel-cqrs-radio-button","commands"),h=f(!1),g=M({channelName:{required:G}},{channelName:a}),R=D(),y=F(),k=o=>{o&&I()},V=()=>{t.value.close()},I=()=>{let o;switch(p.value){case 1:o=new P(a.value);break;case 2:d.value==="events"?o=new z(a.value):o=new H(a.value);break;case 3:u.value==="commands"?o=new J(a.value):o=new K(a.value);break}h.value=!0,R.sendRequest(o).then(s=>{y.showSuccess(`Channel '${a.value}' created successfully`),V()}).catch(s=>{y.showError("Error creating a new channel",s)}).finally(()=>{h.value=!1})};return(o,s)=>{const B=E,v=w("RadioButton"),x=w("Button");return b(),C("form",{onSubmit:s[6]||(s[6]=$(l=>k(!i(g).$invalid),["prevent"]))},[e("div",L,[e("div",O,[e("div",W,[c(B,{label:"Set Channel Name",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),placeholder:"Channel name"},null,8,["modelValue"])])]),p.value===2?(b(),C("div",X,[Y,e("div",Z,[e("div",ee,[e("div",se,[c(v,{inputId:"events",name:"pubsub",value:"events",modelValue:i(d),"onUpdate:modelValue":s[1]||(s[1]=l=>_(d)?d.value=l:null)},null,8,["modelValue"]),te]),e("div",le,[c(v,{inputId:"events_store",name:"pubsub",value:"events_store",modelValue:i(d),"onUpdate:modelValue":s[2]||(s[2]=l=>_(d)?d.value=l:null)},null,8,["modelValue"]),ne])])])])):S("",!0),p.value===3?(b(),C("div",ae,[oe,e("div",de,[e("div",ue,[e("div",ce,[c(v,{inputId:"commands",name:"cqrs",value:"commands",modelValue:i(u),"onUpdate:modelValue":s[3]||(s[3]=l=>_(u)?u.value=l:null)},null,8,["modelValue"]),ie]),e("div",re,[c(v,{inputId:"queries",name:"cqrs",value:"queries",modelValue:i(u),"onUpdate:modelValue":s[4]||(s[4]=l=>_(u)?u.value=l:null)},null,8,["modelValue"]),me])])])])):S("",!0),e("div",pe,[e("div",ve,[c(x,{label:"Cancel",onClick:s[5]||(s[5]=l=>V()),icon:"pi pi-times",class:"button-grey",style:{width:"8rem"}})]),e("div",_e,[c(x,{label:"Add",disabled:i(g).$invalid,type:"submit",icon:"pi pi-plus",class:"button-grey",loading:h.value,style:{width:"8rem"}},null,8,["disabled","loading"])])])])],32)}}}),xe=j(he,[["__scopeId","data-v-506ee113"]]);export{xe as default};
