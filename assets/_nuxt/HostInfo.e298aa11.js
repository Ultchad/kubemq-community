import{a as p,o as v,c as f,w as o,h as e,t as s,i as a,l as i,O as r,r as c,p as g,j as b,k as x}from"./entry.53b34a98.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.52c9345e.js";import"./stream.38699bf4.js";const n=t=>(g("data-v-54e5501e"),t=t(),b(),t),y={class:"line-container"},V={class:"flex justify-content-start align-items-center"},C=n(()=>e("span",{class:"material-icons text-grey text-3xl"},"dns",-1)),U={class:"ml-1"},w={class:"text-grey font-bold text-2xl font-bold"},z={class:"flex justify-content-end align-items-center"},S={class:"line-container mb-2 text-lg font-medium"},k=n(()=>e("span",null,"Uptime:",-1)),I={class:"line-container mb-2 text-lg font-medium"},j=n(()=>e("span",null,"Role:",-1)),B={class:"line-container mb-2 text-lg font-medium"},O=n(()=>e("span",null,"Version:",-1)),T={class:"line-container mb-2 text-lg font-medium"},A=n(()=>e("span",null,"Connected Active Clients:",-1)),D={class:"line-container text-lg font-medium"},H=n(()=>e("span",null,"Last Seen:",-1)),N={class:"flex justify-content-between align-items-center"},L={class:"col-12 md:col-6 pl-0 pr-3"},M={class:"line-container mb-2"},R=n(()=>e("span",null,"CPU CORS: ",-1)),$={class:"line-container mb-2 ml-0"},q=n(()=>e("span",null,"OS Threads: ",-1)),P={class:"line-container ml-0"},E=n(()=>e("span",null,"Utilization: ",-1)),F={class:"line-container"},G={class:"surface-300 w-full mt-2",style:{height:"7px","border-radius":"4px"}},J={class:"col-12 md:col-6 pl-3 pr-0"},K={class:"line-container mb-2"},Q=n(()=>e("span",null,"Memory Used: ",-1)),W={class:"line-container mb-2"},X=n(()=>e("span",null,"Memory Allocated: ",-1)),Y={class:"line-container"},Z=n(()=>e("span",null,"Utilization: ",-1)),ee={class:"line-container"},te={class:"surface-300 w-full mt-2",style:{height:"7px","border-radius":"4px"}},se=p({__name:"HostInfo",props:{modelValue:{type:Object,default:()=>({host:"Unknown Host"})},showSkeleton:{type:Boolean,default:!1}},setup(t){const d=l=>l<50?"bg-green-500":l<75?"bg-orange-500":"bg-red-500",m=l=>{switch(l.toLowerCase()){case"unknown":return"bg-gray-500";case"running":return"status-running";default:return"status-not-running"}};return(l,ne)=>{const h=c("Tag"),u=c("Divider"),_=c("Card");return v(),f(_,{class:"shadow-none border-round-xl border-1 kubemq-border-color"},{title:o(()=>[e("div",y,[e("div",V,[C,e("div",U,[e("span",w,s(t.modelValue.host),1)])]),e("div",z,[a(h,{class:i(m(t.modelValue.status)),value:t.modelValue.status,rounded:!0},null,8,["class","value"])])])]),subtitle:o(()=>[a(u,{class:"my-3"}),e("div",S,[k,e("span",null,s(t.modelValue.uptime),1)]),e("div",I,[j,e("span",null,s(t.modelValue.role),1)]),e("div",B,[O,e("span",null,s(t.modelValue.version),1)]),e("div",T,[A,e("span",null,s(t.modelValue.activeClients),1)]),e("div",D,[H,e("span",null,s(t.modelValue.lastUpdate),1)]),a(u,{class:"my-3"})]),content:o(()=>[e("div",N,[e("div",L,[e("div",M,[R,e("span",null,s(t.modelValue.cpuCores),1)]),e("div",$,[q,e("span",null,s(t.modelValue.osThreads),1)]),e("div",P,[E,e("span",null,s(t.modelValue.cpuUtilization)+"%",1)]),e("div",F,[e("div",G,[e("div",{class:i([d(t.modelValue.cpuUtilization),"h-full"]),style:r([{"border-radius":"4px"},`width:${t.modelValue.cpuUtilization}%;`])},null,6)])])]),e("div",J,[e("div",K,[Q,e("span",null,s(t.modelValue.memoryUsed),1)]),e("div",W,[X,e("span",null,s(t.modelValue.memoryAllocated),1)]),e("div",Y,[Z,e("span",null,s(t.modelValue.memoryUtilization)+"%",1)]),e("div",ee,[e("div",te,[e("div",{class:i([d(t.modelValue.memoryUtilization),"h-full"]),style:r([{"border-radius":"4px"},`width:${t.modelValue.memoryUtilization}%;`])},null,6)])])])])]),_:1})}}}),ie=x(se,[["__scopeId","data-v-54e5501e"]]);export{ie as default};
