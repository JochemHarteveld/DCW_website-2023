import{S as L,i as P,s as j,k as f,q as D,a as y,l as p,m,r as H,h as d,c as O,n as g,b as G,G as c,H as k,L as w}from"../chunks/index.058e4538.js";import{d as V}from"../chunks/disputen.d6e975a7.js";function q(o,e,a){const i=o.slice();return i[0]=e[a],i[2]=a,i}function B(o){let e,a,i=o[2]+1+"",u,h,v,t,s=o[0].name+"",r,l,n,E=o[0].score+"",R,S;return{c(){e=f("div"),a=f("h3"),u=D(i),h=D("."),v=y(),t=f("h2"),r=D(s),l=y(),n=f("h4"),R=D(E),S=y(),this.h()},l(x){e=p(x,"DIV",{class:!0});var _=m(e);a=p(_,"H3",{class:!0});var b=m(a);u=H(b,i),h=H(b,"."),b.forEach(d),v=O(_),t=p(_,"H2",{class:!0});var C=m(t);r=H(C,s),C.forEach(d),l=O(_),n=p(_,"H4",{class:!0});var I=m(n);R=H(I,E),I.forEach(d),S=O(_),_.forEach(d),this.h()},h(){g(a,"class","position svelte-plexv7"),g(t,"class","dispuut-name svelte-plexv7"),g(n,"class","score svelte-plexv7"),g(e,"class","item "+(o[2]==0?"first":"")+" "+(o[2]==1?"second":"")+" "+(o[2]==2?"third":"")+" svelte-plexv7")},m(x,_){G(x,e,_),c(e,a),c(a,u),c(a,h),c(e,v),c(e,t),c(t,r),c(e,l),c(e,n),c(n,R),c(e,S)},p:k,d(x){x&&d(e)}}}function z(o){let e,a,i,u,h,v=V,t=[];for(let s=0;s<v.length;s+=1)t[s]=B(q(o,v,s));return{c(){e=f("div"),a=f("h1"),i=D("SCOREBORD"),u=y(),h=f("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var r=m(e);a=p(r,"H1",{class:!0});var l=m(a);i=H(l,"SCOREBORD"),l.forEach(d),u=O(r),h=p(r,"DIV",{class:!0});var n=m(h);for(let E=0;E<t.length;E+=1)t[E].l(n);n.forEach(d),r.forEach(d),this.h()},h(){g(a,"class","svelte-plexv7"),g(h,"class","list svelte-plexv7"),g(e,"class","container")},m(s,r){G(s,e,r),c(e,a),c(a,i),c(e,u),c(e,h);for(let l=0;l<t.length;l+=1)t[l].m(h,null)},p(s,[r]){if(r&0){v=V;let l;for(l=0;l<v.length;l+=1){const n=q(s,v,l);t[l]?t[l].p(n,r):(t[l]=B(n),t[l].c(),t[l].m(h,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=v.length}},i:k,o:k,d(s){s&&d(e),w(t,s)}}}class J extends L{constructor(e){super(),P(this,e,null,z,j,{})}}export{J as default};
