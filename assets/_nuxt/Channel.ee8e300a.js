import v from"./StatStripCard.dc8224e7.js";import{_ as y}from"./ChannelActions.vue_vue_type_script_setup_true_lang.597c30c4.js";import{a as k,b as S,e as g,f as o,h as t,u as e,t as r,i,r as d,p as C,j as w,o as n,k as q}from"./entry.53b34a98.js";import{u as B}from"./stream.38699bf4.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";import I from"./SendMessage.ad72390f.js";import"./StatStripCardBox.897e847c.js";import"./ChannelSubscribe.vue_vue_type_script_setup_true_lang.643b0a3e.js";import"./InputText.63c92f00.js";import"./Field.vue_vue_type_script_setup_true_lang.8447d9ba.js";import"./DataField.vue_vue_type_script_setup_true_lang.e7665b77.js";import"./useToastMessage.5053bbd0.js";import"./ReplyCommandMessage.87bc4fbe.js";import"./InputDropbox.88dd0d8b.js";import"./request.226e26ee.js";import"./send_response.a4e33ce2.js";import"./cqrs_request.975cb619.js";import"./ReplyQueryMessage.1258562f.js";import"./CodeEditor.e3cbf51f.js";import"./Monitor.4bc5f1fe.js";import"./Clients.vue_vue_type_script_setup_true_lang.9184c7a6.js";import"./InputNumber.c78c294d.js";import"./index.esm.ca3d7241.js";const D=a=>(C("data-v-6fe2a853"),a=a(),w(),a),M={class:"flex flex-column container"},j={class:"flex justify-content-between"},A={class:"flex flex-column header-row"},R=D(()=>t("span",{class:"material-symbols-outlined text-4xl mr-1"},"arrow_back",-1)),N={key:0,class:"text-3xl"},V={key:1,class:"text-3xl"},E={class:"ml-2"},L={key:0,class:"mb-2"},Q={key:1,class:"flex"},$={key:0,class:"material-symbols-outlined text-cqrs mr-1 text-lg"},z={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},F={class:"ml-1"},G={class:"flex justify-content-end align-items-center"},H={class:"stats-row"},J={class:"flex-grow-1 actions-parent"},K={class:"bg-white border-round-2xl border-1 border-cqrs"},O=k({__name:"Channel",setup(a){const{cqrsSelectedChannelData:c,cqrsSelectedChannel:s,isStreamReady:l}=B(),_=S(),m=g(),p=()=>{_.back()},h=()=>{m.open(I,{props:{header:"Send Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!0,channel:s.value.channel,isCommands:s.value.type==="commands"}})};return(P,T)=>{const u=d("Skeleton"),b=d("Button"),x=v,f=y;return n(),o("div",M,[t("div",j,[t("div",A,[t("div",{class:"header-line cursor-pointer mb-2",onClick:p},[R,e(s).type==="queries"?(n(),o("span",N," Queries / "+r(e(s).channel),1)):(n(),o("span",V,"Commands / "+r(e(s).channel),1))]),t("div",E,[e(l)?(n(),o("div",Q,[e(c).isActive?(n(),o("span",$,"radio_button_checked")):(n(),o("span",z,"radio_button_unchecked")),t("span",F,"Last Activity: "+r(e(c).lastSeen),1)])):(n(),o("div",L,[i(u,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))])]),t("div",G,[t("div",null,[i(b,{label:"Send Message",class:"button-cqrs bg-white button-hero",icon:"pi pi-send",onClick:h,disabled:!e(l),style:{"min-width":"12rem"}},null,8,["disabled"])])])]),t("div",H,[i(x,{items:e(c).stats.Items,"background-color":"bg-cqrs","border-color":"border-cqrs"},null,8,["items"])]),t("div",J,[t("div",K,[i(f,{channel:e(s).channel,type:e(s).type,clients:e(c).channel.clients},null,8,["channel","type","clients"])])])])}}});const fe=q(O,[["__scopeId","data-v-6fe2a853"]]);export{fe as default};
