import{S as w,i as P,s as V,C as q,k as d,a as D,l as m,m as g,h as p,c as j,n as f,b as k,G as v,D as C,E as G,F as L,g as M,d as S,L as A,I as F,M as N,N as b}from"../chunks/index.058e4538.js";import{d as y}from"../chunks/disputen.b60130b5.js";import{p as U}from"../chunks/stores.0c2a9ea3.js";import{b as E}from"../chunks/paths.2c933c53.js";function I(n,s,l){const a=n.slice();return a[3]=s[l],a}function $(n){let s,l,a,c,o;return{c(){s=d("div"),l=d("a"),a=d("img"),o=D(),this.h()},l(e){s=m(e,"DIV",{class:!0});var u=g(s);l=m(u,"A",{href:!0});var i=g(l);a=m(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(p),o=j(u),u.forEach(p),this.h()},h(){f(a,"class","cover svelte-1gwpvvj"),N(a.src,c=""+(E+n[3].logoUrl))||f(a,"src",c),f(a,"alt",""),b(a,"active",n[0].url.pathname==n[3].dispuutPath),f(l,"href",""+(E+n[3].dispuutPath)),f(s,"class","list-item")},m(e,u){k(e,s,u),v(s,l),v(l,a),v(s,o)},p(e,u){u&1&&b(a,"active",e[0].url.pathname==e[3].dispuutPath)},d(e){e&&p(s)}}}function z(n){let s,l,a,c,o=y,e=[];for(let t=0;t<o.length;t+=1)e[t]=$(I(n,o,t));const u=n[2].default,i=q(u,n,n[1],null);return{c(){s=d("div"),l=d("div");for(let t=0;t<e.length;t+=1)e[t].c();a=D(),i&&i.c(),this.h()},l(t){s=m(t,"DIV",{class:!0});var _=g(s);l=m(_,"DIV",{class:!0});var r=g(l);for(let h=0;h<e.length;h+=1)e[h].l(r);r.forEach(p),a=j(_),i&&i.l(_),_.forEach(p),this.h()},h(){f(l,"class","list svelte-1gwpvvj"),f(s,"class","container svelte-1gwpvvj")},m(t,_){k(t,s,_),v(s,l);for(let r=0;r<e.length;r+=1)e[r].m(l,null);v(s,a),i&&i.m(s,null),c=!0},p(t,[_]){if(_&1){o=y;let r;for(r=0;r<o.length;r+=1){const h=I(t,o,r);e[r]?e[r].p(h,_):(e[r]=$(h),e[r].c(),e[r].m(l,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=o.length}i&&i.p&&(!c||_&2)&&C(i,u,t,t[1],c?L(u,t[1],_,null):G(t[1]),null)},i(t){c||(M(i,t),c=!0)},o(t){S(i,t),c=!1},d(t){t&&p(s),A(e,t),i&&i.d(t)}}}function B(n,s,l){let a;F(n,U,e=>l(0,a=e));let{$$slots:c={},$$scope:o}=s;return n.$$set=e=>{"$$scope"in e&&l(1,o=e.$$scope)},[a,o,c]}class Q extends w{constructor(s){super(),P(this,s,B,z,V,{})}}export{Q as default};