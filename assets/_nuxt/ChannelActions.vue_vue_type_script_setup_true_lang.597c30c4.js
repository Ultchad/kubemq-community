import{_ as h}from"./ChannelSubscribe.vue_vue_type_script_setup_true_lang.643b0a3e.js";import f from"./Monitor.4bc5f1fe.js";import{_ as v}from"./Clients.vue_vue_type_script_setup_true_lang.9184c7a6.js";import{u as b,a as y}from"./stream.38699bf4.js";import{a as C,s as x,v as S,f as g,i as e,w as n,l as w,u as T,r as i,o as V,h as t}from"./entry.53b34a98.js";const q=t("i",{class:"pi pi-angle-double-down mr-2"},null,-1),B=t("span",{class:"text-lg"},"Subscribe",-1),I=t("i",{class:"pi pi-eye mr-2"},null,-1),k=t("span",{class:"text-lg"},"Watch",-1),A=t("i",{class:"pi pi-users mr-2"},null,-1),M=t("span",{class:"text-lg"},"Clients",-1),R=C({__name:"ChannelActions",props:{channel:{type:String,default:()=>""},clients:{type:Array,default:()=>[]},type:{type:String,default:()=>""}},setup(a){const s=a,o=x(0),{isStreamReady:r}=b();return S(()=>{o.value=y("cqrs_channel_actions_tab",0).value}),(N,c)=>{const _=h,l=i("TabPanel"),p=f,m=v,u=i("TabView");return V(),g("div",{class:w(["col-12 md:col-12",T(r)?"":"div-disabled"])},[e(u,{ref:"cqrs-tabview",activeIndex:o.value,"onUpdate:activeIndex":c[0]||(c[0]=d=>o.value=d)},{default:n(()=>[e(l,null,{header:n(()=>[q,B]),default:n(()=>[e(_,{channel:s.channel,type:a.type},null,8,["channel","type"])]),_:1}),e(l,null,{header:n(()=>[I,k]),default:n(()=>[e(p,{channel:s.channel,type:s.type,height:"55vh"},null,8,["channel","type"])]),_:1}),e(l,null,{header:n(()=>[A,M]),default:n(()=>[e(m,{clients:a.clients},null,8,["clients"])]),_:1})]),_:1},8,["activeIndex"])],2)}}});export{R as _};
