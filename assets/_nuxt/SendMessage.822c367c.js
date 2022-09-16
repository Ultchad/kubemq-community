import T from"./InputText.2ab10032.js";import A from"./CodeEditor.341c139e.js";import w from"./InputNumber.05cf9b73.js";import{u as U}from"./request.b3446890.js";import{u as q}from"./useToastMessage.af91aa57.js";import{a as B,y as k,v as b,z as D,x as E,o as f,h as x,i as l,j as n,u as s,s as N,w as V,B as $,D as j,r as m,G as F,l as L}from"./entry.61f443fa.js";import{u as z,r as y}from"./index.esm.bd0dd375.js";import{S as G}from"./queues_request.36fdf4e2.js";class H{setMessageId(e){return this.messageId=e,this}setChannel(e){return this.channel=e,this}setClientId(e){return this.clientId=e,this}setMetadata(e){return this.metadata=e,this}setBody(e){return this.body=e,this}setTags(e){return this.tags=e,this}setMaxReceiveCount(e){return this.maxReceiveCount=e,this}setMaxReceiveQueue(e){return this.maxReceiveQueue=e,this}setExpirationAt(e){return this.expirationAt=e,this}setDelayedTo(e){return this.delayedTo=e,this}constructor(e){this.messageId="",this.channel="",this.clientId="",this.metadata="",this.body="",this.tags="",this.maxReceiveCount=0,this.maxReceiveQueue="",this.expirationAt=0,this.delayedTo=0}}const J={class:"grid-nogutter grid col-12 mt-2"},K={key:0,class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},O={class:"col-12 md:col-3 pt-0"},P={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},W={class:"col-12 md:col-12 pt-0"},X={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1 mt-2"},Y={class:"col-12 md:col-12 pt-0"},Z={class:"flex align-items-end grid p-fluid border-top-1 border-light-grey col-12 pb-0 mb-1"},ee={class:"col-12 md:col-3 pt-0"},te={class:"col-12 md:col-3 pt-0"},se={class:"col-12 md:col-3 pt-0"},oe={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},le={class:"col-12 md:col-3 pt-0"},ae={class:"col-12 md:col-3 pt-0"},ne={class:"col-12 md:col-3 pt-0"},de={class:"col-12 md:col-3 pt-0"},ie={class:"flex align-items-end grid justify-content-end p-fluid col-12 pb-0 mb-1 mt-2"},ue={class:"mr-2"},re={class:"ml-2"},ce=B({__name:"SendMessage",setup(S){const e=k("send-queues-required-Data",{channel:"",body:""}),i=j("dialogRef"),r=b(!1);let a=D(new H(i.value.data.channel));E(()=>{r.value=i.value.data.isChannelSource,i.value.options.props.header="Send a Queue Message",r.value&&(e.value.channel=i.value.data.channel,i.value.options.props.header="Send a Queue message to: "+e.value.channel)});const M=U(),p=q(),u=b(!1),h=z({body:{required:y},channel:{required:y}},e.value),C=g=>{if(g){u.value=!0,F(()=>{u.value=!0}),a.channel=e.value.channel,a.body=e.value.body;const t=new G(a);M.sendRequest(t).then(d=>{p.showSuccess("Message Sent Successfully")}).catch(d=>{p.showError("Error sending queue message",d)}).finally(()=>{u.value=!1,v()})}},v=()=>{i.value.close()};return(g,t)=>{const d=T,R=A,c=w,I=m("AccordionTab"),Q=m("Accordion"),_=m("Button");return f(),x("form",{onSubmit:t[10]||(t[10]=$(o=>C(!s(h).$invalid),["prevent"]))},[l("div",J,[r.value?N("",!0):(f(),x("div",K,[l("div",O,[n(d,{label:"Channel*",modelValue:s(e).channel,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).channel=o),placeholder:"channel name"},null,8,["modelValue"])])])),l("div",P,[l("div",W,[n(R,{label:"Body*",modelValue:s(e).body,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).body=o),height:"300px"},null,8,["modelValue"])])]),l("div",X,[l("div",Y,[n(Q,null,{default:V(()=>[n(I,{header:"Message Attributes"},{default:V(()=>[l("div",Z,[l("div",ee,[n(d,{label:"Message Id",modelValue:s(a).messageId,"onUpdate:modelValue":t[2]||(t[2]=o=>s(a).messageId=o),placeholder:"Message Id"},null,8,["modelValue"])]),l("div",te,[n(d,{label:"Metadata",modelValue:s(a).metadata,"onUpdate:modelValue":t[3]||(t[3]=o=>s(a).metadata=o),placeholder:"metadata string..."},null,8,["modelValue"])]),l("div",se,[n(d,{label:"Tags",modelValue:s(a).tags,"onUpdate:modelValue":t[4]||(t[4]=o=>s(a).tags=o),placeholder:"key=value,key2=value2"},null,8,["modelValue"])])]),l("div",oe,[l("div",le,[n(c,{label:"Message Expiration Seconds ",modelValue:s(a).expirationAt,"onUpdate:modelValue":t[5]||(t[5]=o=>s(a).expirationAt=o),min:0,max:82320},null,8,["modelValue"])]),l("div",ae,[n(c,{label:"Message Delay Seconds",modelValue:s(a).delayedTo,"onUpdate:modelValue":t[6]||(t[6]=o=>s(a).delayedTo=o),min:0,max:82320},null,8,["modelValue"])]),l("div",ne,[n(c,{label:"Max Retries",modelValue:s(a).maxReceiveCount,"onUpdate:modelValue":t[7]||(t[7]=o=>s(a).maxReceiveCount=o),min:0,max:1024},null,8,["modelValue"])]),l("div",de,[n(d,{label:"Dead-Letter Queue",modelValue:s(a).maxReceiveQueue,"onUpdate:modelValue":t[8]||(t[8]=o=>s(a).maxReceiveQueue=o),placeholder:"No Dead-Letter Queue"},null,8,["modelValue"])])])]),_:1})]),_:1})])]),l("div",ie,[l("div",ue,[n(_,{label:"Cancel",class:"button-grey",icon:"pi pi-times",onClick:t[9]||(t[9]=o=>v()),style:{width:"10rem"}})]),l("div",re,[n(_,{label:"Send",type:"submit",disabled:s(h).$invalid,class:"button-grey",loading:u.value,icon:"pi pi-send",style:{width:"10rem"}},null,8,["disabled","loading"])])])])],32)}}}),Ve=L(ce,[["__scopeId","data-v-de16a31b"]]);export{Ve as default};
