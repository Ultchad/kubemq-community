import v from"./StatStripCard.4a3e0b45.js";import{_ as y}from"./ChannelActions.vue_vue_type_script_setup_true_lang.7637bff4.js";import{a as k,b as S,e as g,f as C,o,h as n,i as t,u as e,t as r,j as i,r as d,p as w,k as q,l as B}from"./entry.ac81eb43.js";import I from"./SendMessage.e7485725.js";import"./StatStripCardBox.e5c41b15.js";import"./ChannelSubscribe.vue_vue_type_script_setup_true_lang.06461dd3.js";import"./InputText.95e7607b.js";import"./Field.vue_vue_type_script_setup_true_lang.a9d10359.js";import"./DataField.vue_vue_type_script_setup_true_lang.6b0a27ba.js";import"./useToastMessage.dd22ad89.js";import"./ReplyCommandMessage.75e61c9a.js";import"./InputDropbox.2e614b57.js";import"./request.95ba5b66.js";import"./send_response.6fe64c15.js";import"./cqrs_request.99b5023f.js";import"./ReplyQueryMessage.435b7755.js";import"./CodeEditor.f3e0f57e.js";import"./Monitor.7260d8d6.js";import"./Clients.vue_vue_type_script_setup_true_lang.7a4885ae.js";import"./InputNumber.f5d5af79.js";import"./index.esm.108bfc55.js";const D=a=>(w("data-v-6fe2a853"),a=a(),q(),a),M={class:"flex flex-column container"},j={class:"flex justify-content-between"},A={class:"flex flex-column header-row"},R=D(()=>t("span",{class:"material-symbols-outlined text-4xl mr-1"},"arrow_back",-1)),N={key:0,class:"text-3xl"},V={key:1,class:"text-3xl"},E={class:"ml-2"},L={key:0,class:"mb-2"},Q={key:1,class:"flex"},$={key:0,class:"material-symbols-outlined text-cqrs mr-1 text-lg"},z={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},F={class:"ml-1"},G={class:"flex justify-content-end align-items-center"},H={class:"stats-row"},J={class:"flex-grow-1 actions-parent"},K={class:"bg-white border-round-2xl border-1 border-cqrs"},O=k({__name:"Channel",setup(a){const{cqrsSelectedChannelData:c,cqrsSelectedChannel:s,isStreamReady:l}=S(),_=g(),m=C(),p=()=>{_.back()},h=()=>{m.open(I,{props:{header:"Send Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!0,channel:s.value.channel,isCommands:s.value.type==="commands"}})};return(P,T)=>{const u=d("Skeleton"),b=d("Button"),x=v,f=y;return o(),n("div",M,[t("div",j,[t("div",A,[t("div",{class:"header-line cursor-pointer mb-2",onClick:p},[R,e(s).type==="queries"?(o(),n("span",N," Queries / "+r(e(s).channel),1)):(o(),n("span",V,"Commands / "+r(e(s).channel),1))]),t("div",E,[e(l)?(o(),n("div",Q,[e(c).isActive?(o(),n("span",$,"radio_button_checked")):(o(),n("span",z,"radio_button_unchecked")),t("span",F,"Last Activity: "+r(e(c).lastSeen),1)])):(o(),n("div",L,[i(u,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))])]),t("div",G,[t("div",null,[i(b,{label:"Send Message",class:"button-cqrs bg-white button-hero",icon:"pi pi-send",onClick:h,disabled:!e(l),style:{"min-width":"12rem"}},null,8,["disabled"])])])]),t("div",H,[i(x,{items:e(c).stats.Items,"background-color":"bg-cqrs","border-color":"border-cqrs"},null,8,["items"])]),t("div",J,[t("div",K,[i(f,{channel:e(s).channel,type:e(s).type,clients:e(c).channel.clients},null,8,["channel","type","clients"])])])])}}});const be=B(O,[["__scopeId","data-v-6fe2a853"]]);export{be as default};