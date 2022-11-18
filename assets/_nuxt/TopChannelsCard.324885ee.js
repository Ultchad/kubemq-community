import k from"./ActionButtons.3ccad55e.js";import{a as D,v as Q,a2 as A,J as E,b as B,o as d,h as u,i as o,u as c,j as e,w as i,m as f,a3 as r,r as p,M as I,t as g,p as N,k as R,l as j}from"./entry.ac81eb43.js";import"./SendMessage.d091bbe2.js";import"./InputText.95e7607b.js";import"./CodeEditor.f3e0f57e.js";import"./InputNumber.f5d5af79.js";import"./request.95ba5b66.js";import"./useToastMessage.dd22ad89.js";import"./index.esm.108bfc55.js";import"./queues_request.a2dc7f2e.js";import"./SendMessage.bdc45793.js";import"./SendMessage.e7485725.js";import"./Field.vue_vue_type_script_setup_true_lang.a9d10359.js";import"./DataField.vue_vue_type_script_setup_true_lang.6b0a27ba.js";import"./cqrs_request.99b5023f.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.ee05719a.js";const M=l=>(N("data-v-9aaec971"),l=l(),R(),l),V=M(()=>o("div",{class:"col-12 md:12"},[o("div",{class:"flex justify-content-start align-items-center border-bottom-1 border-light-grey pb-2"},[o("span",{class:"material-icons-outlined text-grey text-4xl"},"insights"),o("span",{class:"text-grey font-bold text-2xl font-bold ml-2"},"Top Active Channels")])],-1)),K={class:"col-12 md:12"},L={key:0},z={class:"white-space-nowrap overflow-hidden text-overflow-ellipsis"},J={key:1,class:"flex align-items-center justify-content-center",style:{height:"45vh"}},P=D({__name:"TopChannelsCard",setup(l){const h=Q();A();const{setActiveTab:n}=E(),{isStreamReady:m,setPubSubSelectedChannel:b,setQueuesSelectedChannelName:x,setCQRSSelectedChannel:_,dashboardData:v}=B(),C=t=>{switch(t){case"Queue":return"text-queue border-queue";case"Events-Store":return"text-pubsub border-pubsub";case"Events":return"text-pubsub border-pubsub";case"Commands":return"text-cqrs border-cqrs";case"Queries":return"text-cqrs border-cqrs";default:return"bg-gray-500"}},S=t=>{switch(t.data.type){case"Queue":x(t.data.channel),n(1),r("/queues/queue");break;case"Events-Store":b(t.data.channel,"events_store"),n(2),r("/pubsub/channel");break;case"Events":b(t.data.channel,"events"),n(2),r("/pubsub/channel");break;case"Commands":_(t.data.channel,"commands"),n(3),r("/cqrs/channel");break;case"Queries":_(t.data.channel,"queries"),n(3),r("/cqrs/channel");break}};return(t,y)=>{const s=p("Column"),w=p("Tag"),q=p("DataTable"),T=k;return d(),u("div",{class:f(["grid-nogutter grid col-12 p-3",c(m)?"":"div-disabled"])},[V,o("div",K,[c(m)&&c(v).topChannels.length>0?(d(),u("div",L,[e(q,{value:c(v).topChannels,responsiveLayout:"scroll",class:"p-datatable-sm",selection:h.value,"onUpdate:selection":y[0]||(y[0]=a=>h.value=a),selectionMode:"single",dataKey:"channelKey",onRowSelect:S},{default:i(()=>[e(s,{header:"#"},{body:i(({index:a})=>[I(g(a+1),1)]),_:1}),e(s,{field:"type",header:"Type",headerStyle:"width:12rem"},{body:i(({data:a})=>[o("div",null,[e(w,{class:f(["font-light pt-0 pb-0 pl-2 pr-2 bg-white border-1",C(a.type)]),value:a.type,rounded:!0},null,8,["class","value"])])]),_:1}),e(s,{field:"channel",header:"Channel",headerStyle:"width:25rem"},{body:i(({data:a})=>[o("div",z,g(a.channel),1)]),_:1}),e(s,{field:"lastActivity",header:"Last Activity"}),e(s,{field:"sent",header:"Sent (msg/vol)"}),e(s,{field:"delivered",header:"Delivered (msg/vol)"}),e(s,{field:"clients",header:"Clients"})]),_:1},8,["value","selection"])])):(d(),u("div",J,[e(T)]))])],2)}}}),re=j(P,[["__scopeId","data-v-9aaec971"]]);export{re as default};