import u from"./ActionButtons.c023fe61.js";import f from"./StatStripCard.dc8224e7.js";import{_ as h}from"./Channels.vue_vue_type_script_setup_true_lang.294c5cbb.js";import{u as x}from"./stream.38699bf4.js";import{a as b,e as v,f as o,h as t,u as e,i as r,t as y,q as g,p as k,j as S,o as n,r as C,k as q}from"./entry.53b34a98.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.b6825953.js";import"./InputText.63c92f00.js";import"./index.esm.ca3d7241.js";import"./request.226e26ee.js";import"./useToastMessage.5053bbd0.js";import"./SendMessage.ad72390f.js";import"./InputNumber.c78c294d.js";import"./CodeEditor.e3cbf51f.js";import"./Field.vue_vue_type_script_setup_true_lang.8447d9ba.js";import"./DataField.vue_vue_type_script_setup_true_lang.e7665b77.js";import"./cqrs_request.975cb619.js";import"./StatStripCardBox.897e847c.js";const w=a=>(k("data-v-f2d4ba2f"),a=a(),S(),a),V={class:"flex flex-column container"},I={class:"flex justify-content-between"},B={class:"flex flex-column header-row"},D=w(()=>t("div",{class:"flex align-items-center mb-1"},[t("span",{class:"material-symbols-outlined mr-1 text-4xl"},"repartition"),t("span",{class:"text-4xl"},"Commands & Queries")],-1)),L={key:0},j={key:1,class:"flex"},A={key:0,class:"material-symbols-outlined text-cqrs mr-1 text-lg"},N={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},R={class:"ml-1"},E={key:0,class:"flex justify-content-end align-items-center"},Q={class:"stats-row"},U={class:"flex-grow-1 channels-parent"},$={class:"bg-white border-round-2xl border-1 border-cqrs"},z=b({__name:"index",setup(a){const{cqrsData:s,isStreamReady:c}=x();return v(),(F,i)=>{const l=C("Skeleton"),_=u,d=f,m=h;return n(),o("div",V,[t("div",I,[t("div",B,[D,e(c)?(n(),o("div",j,[e(s).isActive?(n(),o("span",A,"radio_button_checked")):(n(),o("span",N,"radio_button_unchecked")),t("span",R,"Last Activity: "+y(e(s).lastSeen),1)])):(n(),o("div",L,[r(l,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),e(s).channelsList.length>0?(n(),o("div",E,[r(_)])):g("",!0)]),t("div",Q,[r(d,{items:e(s).stats.Items,"background-color":"bg-cqrs","border-color":"border-cqrs"},null,8,["items"])]),t("div",U,[t("div",$,[r(m,{modelValue:e(s).channelsList,"onUpdate:modelValue":i[0]||(i[0]=p=>e(s).channelsList=p)},null,8,["modelValue"])])])])}}});const rt=q(z,[["__scopeId","data-v-f2d4ba2f"]]);export{rt as default};