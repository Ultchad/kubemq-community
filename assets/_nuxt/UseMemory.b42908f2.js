import{g as p}from"./stream.38699bf4.js";import{a as m,u as e,o as i,f as a,F as _,h as o,t as r,q as l}from"./entry.53b34a98.js";const u={key:0,class:"inline-grid grid-cols-2 gap-x-4 gap-y-2"},y=o("div",{opacity:"50"}," Used ",-1),f=o("div",{opacity:"50"}," Allocated ",-1),v=o("div",{opacity:"50"}," Limit ",-1),g={key:1},x=m({__name:"UseMemory",setup(h){const s=n=>`${(n/1024/1024).toFixed(2)} MB`,{isSupported:c,memory:t}=p();return(n,d)=>e(c)&&e(t)?(i(),a("div",u,[e(t)?(i(),a(_,{key:0},[y,o("div",null,r(s(e(t).usedJSHeapSize)),1),f,o("div",null,r(s(e(t).totalJSHeapSize)),1),v,o("div",null,r(s(e(t).jsHeapSizeLimit)),1)],64)):l("",!0)])):(i(),a("div",g," Your browser does not support performance memory API "))}});export{x as default};
