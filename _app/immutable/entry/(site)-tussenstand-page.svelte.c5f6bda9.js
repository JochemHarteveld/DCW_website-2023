import{S as G,i as L,s as P,k as p,q as D,a as y,l as m,m as g,r as H,h as _,c as O,n as x,b as B,G as c,H as b,L as j}from"../chunks/index.058e4538.js";import{d as I}from"../chunks/disputen.23b1bcf4.js";function V(o,e,a){const i=o.slice();return i[0]=e[a],i[2]=a,i}function q(o){let e,a,i=o[2]+1+"",f,h,v,t,s=o[0].name+"",n,l,r,u,R;return{c(){e=p("div"),a=p("h3"),f=D(i),h=D("."),v=y(),t=p("h2"),n=D(s),l=y(),r=p("h4"),u=D("0"),R=y(),this.h()},l(E){e=m(E,"DIV",{class:!0});var d=g(e);a=m(d,"H3",{class:!0});var S=g(a);f=H(S,i),h=H(S,"."),S.forEach(_),v=O(d),t=m(d,"H2",{class:!0});var k=g(t);n=H(k,s),k.forEach(_),l=O(d),r=m(d,"H4",{class:!0});var C=g(r);u=H(C,"0"),C.forEach(_),R=O(d),d.forEach(_),this.h()},h(){x(a,"class","position svelte-plexv7"),x(t,"class","dispuut-name svelte-plexv7"),x(r,"class","score svelte-plexv7"),x(e,"class","item "+(o[2]==0?"first":"")+" "+(o[2]==1?"second":"")+" "+(o[2]==2?"third":"")+" svelte-plexv7")},m(E,d){B(E,e,d),c(e,a),c(a,f),c(a,h),c(e,v),c(e,t),c(t,n),c(e,l),c(e,r),c(r,u),c(e,R)},p:b,d(E){E&&_(e)}}}function w(o){let e,a,i,f,h,v=I,t=[];for(let s=0;s<v.length;s+=1)t[s]=q(V(o,v,s));return{c(){e=p("div"),a=p("h1"),i=D("SCOREBORD"),f=y(),h=p("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var n=g(e);a=m(n,"H1",{class:!0});var l=g(a);i=H(l,"SCOREBORD"),l.forEach(_),f=O(n),h=m(n,"DIV",{class:!0});var r=g(h);for(let u=0;u<t.length;u+=1)t[u].l(r);r.forEach(_),n.forEach(_),this.h()},h(){x(a,"class","svelte-plexv7"),x(h,"class","list svelte-plexv7"),x(e,"class","container")},m(s,n){B(s,e,n),c(e,a),c(a,i),c(e,f),c(e,h);for(let l=0;l<t.length;l+=1)t[l].m(h,null)},p(s,[n]){if(n&0){v=I;let l;for(l=0;l<v.length;l+=1){const r=V(s,v,l);t[l]?t[l].p(r,n):(t[l]=q(r),t[l].c(),t[l].m(h,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=v.length}},i:b,o:b,d(s){s&&_(e),j(t,s)}}}class F extends G{constructor(e){super(),L(this,e,null,w,P,{})}}export{F as default};