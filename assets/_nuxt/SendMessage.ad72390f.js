var H=Object.defineProperty;var P=(i,m,r)=>m in i?H(i,m,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[m]=r;var n=(i,m,r)=>(P(i,typeof m!="symbol"?m+"":m,r),r);import W from"./InputText.63c92f00.js";import L from"./InputNumber.c78c294d.js";import O from"./CodeEditor.e3cbf51f.js";import{_ as G}from"./Field.vue_vue_type_script_setup_true_lang.8447d9ba.js";import{_ as J}from"./DataField.vue_vue_type_script_setup_true_lang.e7665b77.js";import{u as K}from"./request.226e26ee.js";import{u as X}from"./useToastMessage.5053bbd0.js";import{a as Z,s as V,M as ee,v as se,f as _,h as e,l as oe,i as l,u as o,A as B,q as f,w as T,N as le,O as te,F as ae,P as ne,r as q,o as h,p as de,j as ie,E as me,k as ue}from"./entry.53b34a98.js";import{u as ce,r as I}from"./index.esm.ca3d7241.js";import{S as re}from"./cqrs_request.975cb619.js";import{b as pe,a as F}from"./stream.38699bf4.js";import{h as ve}from"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";class _e{constructor(){n(this,"requestId");n(this,"channel");n(this,"clientId");n(this,"metadata");n(this,"body");n(this,"tags");n(this,"isCommands");n(this,"timeout");this.requestId="",this.channel="",this.clientId="",this.metadata="",this.body="",this.tags="",this.isCommands=!1,this.timeout=0}}class he{constructor(){n(this,"metadata");n(this,"body");n(this,"tags");n(this,"timestamp");n(this,"executed");n(this,"error");this.metadata="",this.body="",this.tags="",this.timestamp=0,this.executed=!1,this.error=""}}const A=i=>(de("data-v-b6e0d1f4"),i=i(),ie(),i),fe={key:0},ge={key:0,class:"flex align-items-end grid p-fluid col-12 pb-0 mb-2"},be={class:"col-12 md:col-3 pt-0"},ye={class:"col-12 md:col-3 pt-0"},Ce={class:"flex"},Se={class:"mr-2"},Ve=A(()=>e("label",{class:"ml-1",for:"commands"},"Commands",-1)),qe={class:"ml-2"},xe=A(()=>e("label",{class:"ml-1",for:"queries"},"Queries",-1)),Re={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-2"},Ie={class:"col-12 md:col-2 pt-0"},Me={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1"},ke={class:"col-12 md:col-12 pt-0"},we={class:"flex align-items-end grid p-fluid col-12 pb-0 mb-1 mt-2"},Be={class:"col-12 md:col-12 pt-0"},Te={class:"flex align-items-end grid p-fluid border-top-1 border-light-grey col-12 pb-0 mb-1"},Fe={class:"col-12 md:col-4 pt-0"},Ae={class:"col-12 md:col-4 pt-0"},Qe={class:"col-12 md:col-4 pt-0"},Ue={class:"grid-nogutter grid col-12 mt-2"},Ee={class:"flex align-items-end grid justify-content-end p-fluid col-12 pb-0 mb-1 mt-2"},$e={class:"mr-2"},De={class:"ml-2"},Ne={key:1,class:"grid formgrid p-fluid col-12 md:12 pt-3"},Ye={class:"col-12 md:col-3 p-1"},je={class:"col-12 md:col-3 p-1"},ze={class:"col-12 md:col-6 p-1"},He={key:0,class:"col-12 md:col-6 p-1"},Pe={key:1,class:"col-12 md:col-6 p-1"},We={key:2,class:"col-12 md:col-12 p-1"},Le=Z({__name:"SendMessage",setup(i){const m=pe("system-connection"),r=v=>{v==="disconnected"&&close()};m.on(r);const d=F("send-cqrs-required-Data",{channel:"",body:"",timeout:60}),c=F("send-cqrs-radio-button","commands"),u=ne("dialogRef"),x=V(!1);let a=ee(new _e);const p=V(new he);se(()=>{x.value=u.value.data.isChannelSource,C.value=!1,u.value.options.props.header="Send a Commands & Queries Message",x.value&&(d.value.channel=u.value.data.channel,c.value=u.value.data.isCommands?"commands":"queries",u.value.data.isCommands?u.value.options.props.header="Send a Command message to: "+d.value.channel:u.value.options.props.header="Send a Query message to: "+d.value.channel)});const Q=K();let y=null;const R=X(),g=V(!1),C=V(!1),M=ce({body:{required:I},channel:{required:I},timeout:{required:I}},d.value),U=v=>{v&&(g.value=!0,me(()=>{g.value=!0}),a.isCommands=c.value==="commands",a.channel=d.value.channel,a.body=d.value.body,a.timeout=d.value.timeout,y=new re(a),Q.sendRequest(y).then(s=>{R.showSuccess("Message Sent Successfully"),C.value=!0,u.value.options.props.header="Commands & Queries Message Response",p.value=s.data}).catch(s=>{s.isCanceled?R.showWarn("Request Canceled"):R.showWarn("Error sending Commands & Queries message",s.message)}).finally(()=>{g.value=!1}))},E=()=>{y&&y.abort(),u.value.close()},$=v=>v===0?"N/A":ve(v).format("YYYY-MM-DD HH:mm:ss");return(v,s)=>{const S=W,k=q("RadioButton"),D=L,N=O,Y=q("AccordionTab"),j=q("Accordion"),w=q("Button"),b=G,z=J;return h(),_(ae,null,[C.value?f("",!0):(h(),_("div",fe,[e("form",{onSubmit:s[9]||(s[9]=le(t=>U(!o(M).$invalid),["prevent"]))},[e("div",{class:oe(["grid-nogutter grid col-12 mt-2",g.value?"div-disabled":""])},[x.value?f("",!0):(h(),_("div",ge,[e("div",be,[l(S,{label:"Channel*",modelValue:o(d).channel,"onUpdate:modelValue":s[0]||(s[0]=t=>o(d).channel=t),placeholder:"Channel name"},null,8,["modelValue"])]),e("div",ye,[e("div",Ce,[e("div",Se,[l(k,{inputId:"commands",name:"cqrs",value:"commands",modelValue:o(c),"onUpdate:modelValue":s[1]||(s[1]=t=>B(c)?c.value=t:null)},null,8,["modelValue"]),Ve]),e("div",qe,[l(k,{inputId:"queries",name:"cqrs",value:"queries",modelValue:o(c),"onUpdate:modelValue":s[2]||(s[2]=t=>B(c)?c.value=t:null)},null,8,["modelValue"]),xe])])])])),e("div",Re,[e("div",Ie,[l(D,{label:"Timeout in Seconds",modelValue:o(d).timeout,"onUpdate:modelValue":s[3]||(s[3]=t=>o(d).timeout=t),min:1,max:82320},null,8,["modelValue"])])]),e("div",Me,[e("div",ke,[l(N,{label:"Body*",modelValue:o(d).body,"onUpdate:modelValue":s[4]||(s[4]=t=>o(d).body=t),height:"300px"},null,8,["modelValue"])])]),e("div",we,[e("div",Be,[l(j,null,{default:T(()=>[l(Y,{header:"Message Attributes"},{default:T(()=>[e("div",Te,[e("div",Fe,[l(S,{label:"Request Id",modelValue:o(a).requestId,"onUpdate:modelValue":s[5]||(s[5]=t=>o(a).requestId=t),placeholder:"Request Id"},null,8,["modelValue"])]),e("div",Ae,[l(S,{label:"Metadata",modelValue:o(a).metadata,"onUpdate:modelValue":s[6]||(s[6]=t=>o(a).metadata=t),placeholder:"metadata string..."},null,8,["modelValue"])]),e("div",Qe,[l(S,{label:"Tags",modelValue:o(a).tags,"onUpdate:modelValue":s[7]||(s[7]=t=>o(a).tags=t),placeholder:"key=value,key2=value2"},null,8,["modelValue"])])])]),_:1})]),_:1})])])],2),e("div",Ue,[e("div",Ee,[e("div",$e,[l(w,{label:"Cancel",class:"button-grey",icon:"pi pi-times",onClick:s[8]||(s[8]=t=>E()),style:{width:"10rem"}})]),e("div",De,[l(w,{label:"Send",type:"submit",disabled:o(M).$invalid,class:"button-grey",loading:g.value,icon:"pi pi-send",style:{width:"10rem"}},null,8,["disabled","loading"])])])])],32)])),C.value?(h(),_("div",Ne,[e("div",{class:"grid formgrid p-fluid col-12 md:12",style:te(o(a).isCommands?"height: 15vh":"")},[e("div",Ye,[l(b,{label:"Executed",value:p.value.executed},null,8,["value"])]),e("div",je,[l(b,{label:"Timestamp",value:$(p.value.timestamp)},null,8,["value"])]),e("div",ze,[l(b,{label:"Error",value:p.value.error},null,8,["value"])])],4),o(a).isCommands?f("",!0):(h(),_("div",He,[l(b,{label:"Metadata",value:p.value.metadata},null,8,["value"])])),o(a).isCommands?f("",!0):(h(),_("div",Pe,[l(b,{label:"Tags",value:p.value.tags},null,8,["value"])])),o(a).isCommands?f("",!0):(h(),_("div",We,[l(z,{label:"Body",value:p.value.body,styleProp:"height: 32vh"},null,8,["value"])]))])):f("",!0)],64)}}}),is=ue(Le,[["__scopeId","data-v-b6e0d1f4"]]);export{is as default};