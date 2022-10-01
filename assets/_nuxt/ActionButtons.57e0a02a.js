import{a as b,b as v,f as g,v as n,o as f,h as C,i as m,j as s,r as p,l as w}from"./entry.86b9e19f.js";import y from"./SendMessage.e0f973e0.js";import M from"./SendMessage.bcbf7528.js";import S from"./SendMessage.61c4568b.js";import{_ as x}from"./AddChannel.vue_vue_type_script_setup_true_lang.86041a51.js";import"./InputText.0abbd94c.js";import"./CodeEditor.f8fdf1e5.js";import"./InputNumber.0c5624bb.js";import"./request.29e64ff5.js";import"./useToastMessage.bad030a2.js";import"./index.esm.81d2c330.js";import"./queues_request.8f3c70a9.js";import"./Field.vue_vue_type_script_setup_true_lang.2cfdd881.js";import"./DataField.vue_vue_type_script_setup_true_lang.e4b17d1e.js";import"./cqrs_request.ddf515ce.js";const k={class:"flex"},Q={class:"mr-2"},A={class:"ml-2"},B=b({__name:"ActionButtons",setup(P){v();const a=g(),t=n(),i=n([{label:"Queues",command:()=>{o("Add a Queue Channel",1)}},{label:"PubSub",command:()=>{o("Add a PubSub Channel",2)}},{label:"Commands & Queries",command:()=>{o("Add a Commands & Queries Channel",3)}}]),c=e=>{t.value.toggle(e)},l=n(),_=n([{label:"Queues",command:()=>{a.open(y,{props:{header:"Send Queue Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:""}})}},{label:"PubSub",command:()=>{a.open(M,{props:{header:"Publish Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:"",isEvents:!0}})}},{label:"Commands & Queries",command:()=>{a.open(S,{props:{header:"Send Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:"",isCommands:!0}})}}]),h=e=>{l.value.toggle(e)},o=(e,d)=>{a.open(x,{props:{header:e,style:{width:"30vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{channelType:d}})};return(e,d)=>{const r=p("Button"),u=p("Menu");return f(),C("div",k,[m("div",Q,[s(r,{type:"button",label:"Send Message",onClick:h,"aria-haspopup":"true","aria-controls":"overlay_menu_send_message",class:"button-grey header-button",icon:"pi pi-send",style:{width:"12rem"}}),s(u,{id:"overlay_menu_send_message",ref_key:"sendMessageMenu",ref:l,model:_.value,popup:!0,class:""},null,8,["model"])]),m("div",A,[s(r,{type:"button",label:"Add Channel",onClick:c,"aria-haspopup":"true","aria-controls":"overlay_menu_add_channel",class:"button-grey header-button",icon:"pi pi-plus",style:{width:"12rem"}}),s(u,{id:"overlay_menu_add_channel",ref_key:"addChannelMenu",ref:t,model:i.value,popup:!0,class:"custom-menu"},null,8,["model"])])])}}}),L=w(B,[["__scopeId","data-v-4de8d5f9"]]);export{L as default};