import m from"./ActionButtons.17da0069.js";import _ from"./StatCard.7bdb77d0.js";import p from"./TopChannelsCard.479a0be7.js";import{u}from"./stream.38699bf4.js";import{a as f,f as n,h as o,u as e,i as d,q as v,a1 as h,o as l,k as b}from"./entry.53b34a98.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";import"./SendMessage.5b4d549e.js";import"./InputText.63c92f00.js";import"./CodeEditor.e3cbf51f.js";import"./InputNumber.c78c294d.js";import"./request.226e26ee.js";import"./useToastMessage.5053bbd0.js";import"./index.esm.ca3d7241.js";import"./queues_request.d6d8f046.js";import"./SendMessage.bfcdbd87.js";import"./SendMessage.ad72390f.js";import"./Field.vue_vue_type_script_setup_true_lang.8447d9ba.js";import"./DataField.vue_vue_type_script_setup_true_lang.e7665b77.js";import"./cqrs_request.975cb619.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.b6825953.js";const x={class:"flex flex-column container"},C={class:"flex justify-content-between align-content-end"},g=h('<div class="flex flex-column header-row" data-v-aa03d3fc><div class="header-line" data-v-aa03d3fc><div class="flex align-items-center" data-v-aa03d3fc><span class="material-symbols-outlined mr-2 text-4xl" data-v-aa03d3fc>dashboard</span><span class="text-4xl" data-v-aa03d3fc>Dashboard</span></div></div></div>',1),V={key:0},w={class:"stats-row"},k={class:"grid formgrid p-fluid"},D={class:"col-12 md:col-4"},q={class:"col-12 md:col-4"},y={class:"col-12 md:col-4"},S={class:"flex-grow-1 top-active-parent"},B={class:"bg-white border-round-2xl border-1 kubemq-border-color"},N=f({__name:"index",setup(F){const{dashboardData:t}=u();return(U,a)=>{const i=m,r=_,c=p;return l(),n("div",x,[o("div",C,[g,e(t).topChannels.length>0?(l(),n("div",V,[d(i)])):v("",!0)]),o("div",w,[o("div",k,[o("div",D,[d(r,{modelValue:e(t).statsCards.channels,"onUpdate:modelValue":a[0]||(a[0]=s=>e(t).statsCards.channels=s),title:"Channels",icon:"subject",showFooter:!0,borderColor:"kubemq-border-color"},null,8,["modelValue"])]),o("div",q,[d(r,{modelValue:e(t).statsCards.incoming,"onUpdate:modelValue":a[1]||(a[1]=s=>e(t).statsCards.incoming=s),title:"Sent",icon:"file_upload",showFooter:!0,borderColor:"kubemq-border-color"},null,8,["modelValue"])]),o("div",y,[d(r,{modelValue:e(t).statsCards.outgoing,"onUpdate:modelValue":a[2]||(a[2]=s=>e(t).statsCards.outgoing=s),title:"Delivered",icon:"file_download",showFooter:!0,borderColor:"kubemq-border-color"},null,8,["modelValue"])])])]),o("div",S,[o("div",B,[d(c)])])])}}});const $=b(N,[["__scopeId","data-v-aa03d3fc"]]);export{$ as default};
