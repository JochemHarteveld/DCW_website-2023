import{S as q,i as g,s as H,k as f,a as b,l as o,m as d,c as k,h as c,n as _,b as m,G as h,H as u,q as y,r as E,u as D}from"../chunks/index.058e4538.js";function v(r){let t,i=r[0].title+"",a;return{c(){t=f("h1"),a=y(i),this.h()},l(s){t=o(s,"H1",{class:!0});var e=d(t);a=E(e,i),e.forEach(c),this.h()},h(){_(t,"class","svelte-1728iqf")},m(s,e){m(s,t,e),h(t,a)},p(s,e){e&1&&i!==(i=s[0].title+"")&&D(a,i)},d(s){s&&c(t)}}}function I(r){let t,i,a,s=(r[0].content||"Yeet")+"",e=r[0].title&&v(r);return{c(){t=f("div"),e&&e.c(),i=b(),a=f("div"),this.h()},l(l){t=o(l,"DIV",{class:!0});var n=d(t);e&&e.l(n),i=k(n),a=o(n,"DIV",{class:!0});var p=d(a);p.forEach(c),n.forEach(c),this.h()},h(){_(a,"class","text svelte-1728iqf"),_(t,"class","container svelte-1728iqf")},m(l,n){m(l,t,n),e&&e.m(t,null),h(t,i),h(t,a),a.innerHTML=s},p(l,[n]){l[0].title?e?e.p(l,n):(e=v(l),e.c(),e.m(t,i)):e&&(e.d(1),e=null),n&1&&s!==(s=(l[0].content||"Yeet")+"")&&(a.innerHTML=s)},i:u,o:u,d(l){l&&c(t),e&&e.d()}}}function L(r,t,i){let{data:a}=t;return r.$$set=s=>{"data"in s&&i(0,a=s.data)},[a]}class S extends q{constructor(t){super(),g(this,t,L,I,H,{data:0})}}export{S as default};