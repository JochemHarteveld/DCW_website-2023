import{S as Ce,i as De,s as Te,k as v,q as k,a as O,l as p,m as g,r as b,h as c,c as S,n as _,b as y,G as u,u as E,H as ee,L as J,e as ae,K as Be,g as H,f as ye,d as te,y as Le,z as Oe,A as Se,B as we,v as Ee}from"../chunks/index.058e4538.js";function oe(o,e,r){const n=o.slice();return n[3]=e[r],n}function se(o,e,r){const n=o.slice();return n[6]=e[r],n}function de(o,e,r){const n=o.slice();return n[9]=e[r],n}function ue(o){let e,r,n=o[0].endTime+"",t;return{c(){e=v("li"),r=k("Deadline: "),t=k(n),this.h()},l(i){e=p(i,"LI",{class:!0});var l=g(e);r=b(l,"Deadline: "),t=b(l,n),l.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r),u(e,t)},p(i,l){l&1&&n!==(n=i[0].endTime+"")&&E(t,n)},d(i){i&&c(e)}}}function ce(o){let e,r,n=o[0].recommendedNumberOfParticipants+"",t;return{c(){e=v("li"),r=k("Personen: "),t=k(n),this.h()},l(i){e=p(i,"LI",{class:!0});var l=g(e);r=b(l,"Personen: "),t=b(l,n),l.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r),u(e,t)},p(i,l){l&1&&n!==(n=i[0].recommendedNumberOfParticipants+"")&&E(t,n)},d(i){i&&c(e)}}}function me(o){let e,r,n=o[0].location+"",t;return{c(){e=v("li"),r=k("Locatie: "),t=k(n),this.h()},l(i){e=p(i,"LI",{class:!0});var l=g(e);r=b(l,"Locatie: "),t=b(l,n),l.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r),u(e,t)},p(i,l){l&1&&n!==(n=i[0].location+"")&&E(t,n)},d(i){i&&c(e)}}}function fe(o){let e,r,n=o[0].deliverMethod+"",t;return{c(){e=v("li"),r=k("Oplevering: "),t=k(n),this.h()},l(i){e=p(i,"LI",{class:!0});var l=g(e);r=b(l,"Oplevering: "),t=b(l,n),l.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r),u(e,t)},p(i,l){l&1&&n!==(n=i[0].deliverMethod+"")&&E(t,n)},d(i){i&&c(e)}}}function he(o){let e,r,n=o[0].compensation+"",t;return{c(){e=v("li"),r=k("Vergoeding: "),t=k(n),this.h()},l(i){e=p(i,"LI",{class:!0});var l=g(e);r=b(l,"Vergoeding: "),t=b(l,n),l.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r),u(e,t)},p(i,l){l&1&&n!==(n=i[0].compensation+"")&&E(t,n)},d(i){i&&c(e)}}}function ve(o){let e,r=o[0].requirements,n=[];for(let t=0;t<r.length;t+=1)n[t]=pe(de(o,r,t));return{c(){e=v("ul");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=p(t,"UL",{class:!0});var i=g(e);for(let l=0;l<n.length;l+=1)n[l].l(i);i.forEach(c),this.h()},h(){_(e,"class","requirements svelte-7ruce3")},m(t,i){y(t,e,i);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(t,i){if(i&1){r=t[0].requirements;let l;for(l=0;l<r.length;l+=1){const a=de(t,r,l);n[l]?n[l].p(a,i):(n[l]=pe(a),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=r.length}},d(t){t&&c(e),J(n,t)}}}function pe(o){let e,r=o[9]+"",n;return{c(){e=v("li"),n=k(r)},l(t){e=p(t,"LI",{});var i=g(e);n=b(i,r),i.forEach(c)},m(t,i){y(t,e,i),u(e,n)},p(t,i){i&1&&r!==(r=t[9]+"")&&E(n,r)},d(t){t&&c(e)}}}function ge(o){let e,r;return{c(){e=v("a"),r=k("Aanmelden"),this.h()},l(n){e=p(n,"A",{href:!0,class:!0});var t=g(e);r=b(t,"Aanmelden"),t.forEach(c),this.h()},h(){_(e,"href","https://forms.gle/3CTKQcN4sTi6uaSH8"),_(e,"class","svelte-7ruce3")},m(n,t){y(n,e,t),u(e,r)},d(n){n&&c(e)}}}function _e(o){let e,r,n=o[1]?"Verberg schema":"Toon schema",t,i,l,a,s,h=o[1]&&ke(o);return{c(){e=v("div"),r=v("button"),t=k(n),i=O(),h&&h.c(),l=ae(),this.h()},l(d){e=p(d,"DIV",{class:!0});var j=g(e);r=p(j,"BUTTON",{class:!0});var W=g(r);t=b(W,n),W.forEach(c),j.forEach(c),i=S(d),h&&h.l(d),l=ae(),this.h()},h(){_(r,"class","svelte-7ruce3"),_(e,"class","controls svelte-7ruce3")},m(d,j){y(d,e,j),u(e,r),u(r,t),y(d,i,j),h&&h.m(d,j),y(d,l,j),a||(s=Be(r,"click",o[2]),a=!0)},p(d,j){j&2&&n!==(n=d[1]?"Verberg schema":"Toon schema")&&E(t,n),d[1]?h?h.p(d,j):(h=ke(d),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null)},d(d){d&&c(e),d&&c(i),h&&h.d(d),d&&c(l),a=!1,s()}}}function ke(o){let e,r,n=o[0].schedule,t=[];for(let i=0;i<n.length;i+=1)t[i]=je(oe(o,n,i));return{c(){e=v("div"),r=v("table");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=p(i,"DIV",{class:!0});var l=g(e);r=p(l,"TABLE",{});var a=g(r);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(c),l.forEach(c),this.h()},h(){_(e,"class","schedule svelte-7ruce3")},m(i,l){y(i,e,l),u(e,r);for(let a=0;a<t.length;a+=1)t[a].m(r,null)},p(i,l){if(l&1){n=i[0].schedule;let a;for(a=0;a<n.length;a+=1){const s=oe(i,n,a);t[a]?t[a].p(s,l):(t[a]=je(s),t[a].c(),t[a].m(r,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(i){i&&c(e),J(t,i)}}}function be(o){let e,r=o[6]+"",n;return{c(){e=v("td"),n=k(r),this.h()},l(t){e=p(t,"TD",{class:!0});var i=g(e);n=b(i,r),i.forEach(c),this.h()},h(){_(e,"class","svelte-7ruce3")},m(t,i){y(t,e,i),u(e,n)},p(t,i){i&1&&r!==(r=t[6]+"")&&E(n,r)},d(t){t&&c(e)}}}function je(o){let e,r,n=o[3],t=[];for(let i=0;i<n.length;i+=1)t[i]=be(se(o,n,i));return{c(){e=v("tr");for(let i=0;i<t.length;i+=1)t[i].c();r=O()},l(i){e=p(i,"TR",{});var l=g(e);for(let a=0;a<t.length;a+=1)t[a].l(l);r=S(l),l.forEach(c)},m(i,l){y(i,e,l);for(let a=0;a<t.length;a+=1)t[a].m(e,null);u(e,r)},p(i,l){if(l&1){n=i[3];let a;for(a=0;a<n.length;a+=1){const s=se(i,n,a);t[a]?t[a].p(s,l):(t[a]=be(s),t[a].c(),t[a].m(e,r))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(i){i&&c(e),J(t,i)}}}function Ne(o){let e,r,n=o[0].daypart+"",t,i,l,a=o[0].title+"",s,h,d,j,W,P=o[0].startTime+"",Z,Q,K,V,R,F,$,z,U=o[0].description+"",G,X,N,Y,q,M=o[0].endTime&&ue(o),A=o[0].recommendedNumberOfParticipants&&ce(o),I=o[0].location&&me(o),C=o[0].deliverMethod&&fe(o),D=o[0].compensation&&he(o),T=o[0].requirements!=null&&ve(o),L=o[0].daypart=="Woensdagavond"&&ge(),B=o[0].schedule&&_e(o);return{c(){e=v("article"),r=v("h1"),t=k(n),i=O(),l=v("h2"),s=k(a),h=O(),d=v("div"),j=v("li"),W=k("Tijd: "),Z=k(P),Q=O(),M&&M.c(),K=O(),A&&A.c(),V=O(),I&&I.c(),R=O(),C&&C.c(),F=O(),D&&D.c(),$=O(),z=v("p"),G=k(U),X=O(),N=v("div"),T&&T.c(),Y=O(),L&&L.c(),q=O(),B&&B.c(),this.h()},l(m){e=p(m,"ARTICLE",{class:!0});var f=g(e);r=p(f,"H1",{class:!0});var ne=g(r);t=b(ne,n),ne.forEach(c),i=S(f),l=p(f,"H2",{class:!0});var le=g(l);s=b(le,a),le.forEach(c),h=S(f),d=p(f,"DIV",{class:!0});var w=g(d);j=p(w,"LI",{class:!0});var x=g(j);W=b(x,"Tijd: "),Z=b(x,P),x.forEach(c),Q=S(w),M&&M.l(w),K=S(w),A&&A.l(w),V=S(w),I&&I.l(w),R=S(w),C&&C.l(w),F=S(w),D&&D.l(w),w.forEach(c),$=S(f),z=p(f,"P",{});var ie=g(z);G=b(ie,U),ie.forEach(c),X=S(f),N=p(f,"DIV",{class:!0});var re=g(N);T&&T.l(re),re.forEach(c),Y=S(f),L&&L.l(f),q=S(f),B&&B.l(f),f.forEach(c),this.h()},h(){_(r,"class","svelte-7ruce3"),_(l,"class","svelte-7ruce3"),_(j,"class","svelte-7ruce3"),_(d,"class","info svelte-7ruce3"),_(N,"class","requirements svelte-7ruce3"),_(e,"class","svelte-7ruce3")},m(m,f){y(m,e,f),u(e,r),u(r,t),u(e,i),u(e,l),u(l,s),u(e,h),u(e,d),u(d,j),u(j,W),u(j,Z),u(d,Q),M&&M.m(d,null),u(d,K),A&&A.m(d,null),u(d,V),I&&I.m(d,null),u(d,R),C&&C.m(d,null),u(d,F),D&&D.m(d,null),u(e,$),u(e,z),u(z,G),u(e,X),u(e,N),T&&T.m(N,null),u(e,Y),L&&L.m(e,null),u(e,q),B&&B.m(e,null)},p(m,[f]){f&1&&n!==(n=m[0].daypart+"")&&E(t,n),f&1&&a!==(a=m[0].title+"")&&E(s,a),f&1&&P!==(P=m[0].startTime+"")&&E(Z,P),m[0].endTime?M?M.p(m,f):(M=ue(m),M.c(),M.m(d,K)):M&&(M.d(1),M=null),m[0].recommendedNumberOfParticipants?A?A.p(m,f):(A=ce(m),A.c(),A.m(d,V)):A&&(A.d(1),A=null),m[0].location?I?I.p(m,f):(I=me(m),I.c(),I.m(d,R)):I&&(I.d(1),I=null),m[0].deliverMethod?C?C.p(m,f):(C=fe(m),C.c(),C.m(d,F)):C&&(C.d(1),C=null),m[0].compensation?D?D.p(m,f):(D=he(m),D.c(),D.m(d,null)):D&&(D.d(1),D=null),f&1&&U!==(U=m[0].description+"")&&E(G,U),m[0].requirements!=null?T?T.p(m,f):(T=ve(m),T.c(),T.m(N,null)):T&&(T.d(1),T=null),m[0].daypart=="Woensdagavond"?L||(L=ge(),L.c(),L.m(e,q)):L&&(L.d(1),L=null),m[0].schedule?B?B.p(m,f):(B=_e(m),B.c(),B.m(e,null)):B&&(B.d(1),B=null)},i:ee,o:ee,d(m){m&&c(e),M&&M.d(),A&&A.d(),I&&I.d(),C&&C.d(),D&&D.d(),T&&T.d(),L&&L.d(),B&&B.d()}}}function We(o,e,r){let{assignment:n}=e,t=!1;function i(){r(1,t=!t)}return o.$$set=l=>{"assignment"in l&&r(0,n=l.assignment)},[n,t,i]}class Pe extends Ce{constructor(e){super(),De(this,e,We,Ne,Te,{assignment:0})}}const Me=[{daypart:"Maandagmiddag",title:"Survival DIY",location:null,startTime:"10:00",endTime:"16:00",recommendedNumberOfParticipants:">1 persoon",deliverMethod:"Demonstratiefilmpje waarin alle onderdelen van het overlevingspakket worden uitgelegd.",compensation:"10 EURO (mits bonnetje)",description:"Met een zware, volle, drukke, GEWELDIGE DCWeek voor de boeg is het belangrijk om goed voorbereid te zijn. Met een week vol gevaren moet je op alles berekend zijn. Jullie knutselopdracht speelt daarop in, want wat zijn dé essentiële dingen die jouw dispuut nodig heeft om de week te overleven? Maak er een pakket van waar je heel de week gebruik van kunt maken",requirements:["Minimaal 3 overlevingsvoorwerpen totaal","Minimaal 1 van de overlevingsvoorwerpen om een vijand mee te verslaan","Minimaal 1 van de overlevingsvoorwerpen om jezelf te verdedigen tegen een vijand","Minimaal 1 van de overlevingvoorwerpen om je dispuut te kunnen blijven voorzien van basisbehoeften (zoals eten, kleding, dak boven je hoofd, etc.)"],schedule:null},{daypart:"Maandagavond",title:"De Zwakste Schakel",location:"GWZ",startTime:"Zie schema",endTime:null,recommendedNumberOfParticipants:"maximaal 5 personen",deliverMethod:null,compensation:null,description:"Hoe vindt een gemiddelde filmacteur zijn einde? Wat moet je doen als je vliegtuig op een onbewoond eiland strandt? Heb jij vroeger goed opgelet op de scouting? Test het tijdens de pubquiz!",requirements:null,schedule:[["Ronde","Tijd","Disputen"],["1","19:45 - 21:15","M.O.C.C.A., L.U.C.I.F.E.R., L.D.G Soixante-Neuf, 9x7, de Bokkerijders, Witte Wieven, Terra F., Amaryllis, K.O.B.R.A., VINUM"],["2","21:30 - 23:00","T.A.E.N.I.A., Zephyr, Corduroy, K.I.N.K. ID, Zoutkorrel, Volante, Supra Modum, Perropates, BLOQ, C.U.P.A."]]},{daypart:"Dinsdagmiddag",title:"Goodbye My Cherished Fraternity",location:"GWZ",startTime:"10:00",endTime:"16:00",recommendedNumberOfParticipants:"Hele dispuut, 1 contactpersoon",deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"In tijden van komen en gaan, is het tijd om afscheid te nemen van elkaar. Vandaag verwachten wij traan-tuitende en emotie-geladen brieven te ontvangen waarin jullie afscheid nemen van een ander geliefd dispuut. Zijn jullie in staat om je emoties bloot te leggen en de ware aard van jullie relatie tot een ander dispuut te onthullen? Of het nou je scharrel, kwarrel, 10 jaar soort van friends met benefits maar het nog niet echt weten, of langdurende relatie was, het einde is in zicht. Een goed verhaal bezit een introductie, een midden en een slot. De rode draad is duidelijk. Maak het zo smeuïg mogelijk. We verwachten minimaal de volgende elementen terug te vinden in jullie brieven:",requirements:["Omschrijving van de (romantische) relatie tussen de twee disputen","Hoe het ander geliefde dispuut ten is gegaan","De kwaliteit die jullie het meest zullen missen van het andere dispuut","Jullie beste herinnering samen","Een waardig afscheid"],schedule:[["Dispuut","Schrijft een brief naar"],["M.O.C.C.A","C.U.P.A."],["T.A.E.N.I.A.","Supra Modum"],["L.U.C.I.F.E.R.","VINUM"],["L.D.G. Soixante-neuf","Perropates"],["Corduroy","K.O.B.R.A."],["9x7","Amaryllis"],["Bokkerijders","Volante"],["K.I.N.K. ID","Terra F."],["BLOQ","Zoutkorrel"],["Witte Wieven","Zephyr"],["Zephyr","Witte Wieven"],["Zoutkorrel","BLOQ"],["Terra F","K.I.N.K. ID"],["Volante","Bokkerijders"],["Amaryllis","9x7"],["K.O.B.R.A.","Corduroy"],["Perropates","L.D.G. Soixante-neuf"],["VINUM","L.U.C.I.F.E.R."],["Supra Modum","T.A.E.N.I.A."],["C.U.P.A.","M.O.C.C.A"]]},{daypart:"Dinsdagavond",title:"Game Over",location:"GWZ",startTime:"Zie schema",endTime:null,recommendedNumberOfParticipants:"Maximaal 2 per spel",deliverMethod:null,compensation:null,description:"Speel vanavond twee tegen twee met een ander dispuut en probeer in leven te blijven! Durf jij vanavond het heft in eigen handen te nemen op een echte operatietafel? Of maak jij de cruciale fout en sla je de gehele toren om? Blijf je vliegen, of wordt het vanavond een werkelijke crash & burn? Test het vanavond tijdens de borrel. Durf je het niet aan? Dan hebben we ook nog andere spellen op de borrel om aan mee te doen!",requirements:null,schedule:[["Tijd","Disputen","Spel"],["20:30 - 20:50","M.O.C.C.A. vs. VINUM","Dr. Bibber"],["20:30 - 20:50","L.U.C.I.F.E.R. vs. L.D.G. Soixante-neuf","Jenga"],["20:30 - 20:50","Corduroy vs. 9X7","Memory"],["20:30 - 20:50","Bokkerijders vs. K.I.N.K. ID","Mega Beerpong"],["20:30 - 20:50","Witte Wieven vs. BLOQ","Stef stuntpiloot"],["20:50 - 21:10","Zephyr vs. Zoutkorrel","Dr. Bibber"],["20:50 - 21:10","Volante vs. Terra F","Jenga"],["20:50 - 21:10","Amaryllis vs. K.O.B.R.A.","Memory"],["20:50 - 21:10","Perropates vs. C.U.P.A.","Mega Beerpong"],["20:50 - 21:10","M.O.C.C.A. vs. Supra Modum","Stef stuntpiloot"],["21:10 - 21:30","Witte wieven vs. Terra F.","Dr. Bibber"],["21:10 - 21:30","T.A.E.N.I.A. vs. Corduroy","Jenga"],["21:10 - 21:30","L.D.G. Soixante-neuf vs. Bokkerijders","Memory"],["21:10 - 21:30","VINUM vs. Zephyr","Mega Beerpong"],["21:10 - 21:30","K.I.N.K. ID vs. Zoutkorrel","Stef stuntpiloot"],["21:30 - 21:50","L.U.C.I.F.E.R. vs. 9x7","Dr. Bibber"],["21:30 - 21:50","M.O.C.C.A. vs. Amaryllis","Jenga"],["21:30 - 21:50","Volante vs. Perropates","Memory"],["21:30 - 21:50","K.O.B.R.A. vs. BLOQ","Mega Beerpong"],["21:30 - 21:50","T.A.E.N.I.A. vs. L.U.C.I.F.E.R.","Stef stuntpiloot"],["21:50 - 22:10","Amaryllis vs. Supra Modum","Dr. Bibber"],["21:50 - 22:10","9x7 vs. K.O.B.R.A.","Jenga"],["21:50 - 22:10","C.U.P.A. vs. VINUM","Memory"],["21:50 - 22:10","Corduroy vs. Witte Wieven","Mega Beerpong"],["21:50 - 22:10","Zephyr vs. Terra F.","Stef stuntpiloot"],["22:10 - 22:30","Volante vs. Bokkerijders","Dr. Bibber"],["22:10 - 22:30","Zoutkorrel vs. C.U.P.A.","Jenga"],["22:10 - 22:30","K.I.N.K. ID vs. Supra Modum","Memory"],["22:10 - 22:30","M.O.C.C.A. vs. L.U.C.I.F.E.R.","Mega Beerpong"],["22:10 - 22:30","L.D.G. Soixante-neuf vs. Corduroy","Stef stuntpiloot"],["22:30 - 22:50","K.O.B.R.A. vs. Perropates","Dr. Bibber"],["22:30 - 22:50","BLOQ vs. VINUM","Jenga"],["22:30 - 22:50","T.A.E.N.I.A. vs. Witte Wieven","Memory"],["22:30 - 22:50","9x7 vs. Zoutkorrel","Mega Beerpong"],["22:30 - 22:50","Volante vs. Amaryllis","Stef stuntpiloot"],["22:50 - 23:10","L.D.G. Soixante-neuf vs. Terra F.","Dr. Bibber"],["22:50 - 23:10","Zephyr vs. Supra Modum","Jenga"],["22:50 - 23:10","M.O.C.C.A. vs. Corduroy","Memory"],["22:50 - 23:10","T.A.E.N.I.A. vs. Amaryllis","Mega Beerpong"],["22:50 - 23:10","Bokkerijders vs. C.U.P.A.","Stef stuntpiloot"],["23:10 - 23:30","K.I.N.K. ID vs. BLOQ","Dr. Bibber"],["23:10 - 23:30","Witte Wieven vs. Perropates","Jenga"],["23:10 - 23:30","L.U.C.I.F.E.R. vs. Zephyr","Memory"],["23:10 - 23:30","Volante vs. Terra F.","Mega Beerpong"],["23:10 - 23:30","9x7 vs. VINUM","Stef stuntpiloot"],["23:30 - 23:50","T.A.E.N.I.A. vs. C.U.P.A.","Dr. Bibber"],["23:30 - 23:50","K.I.N.K. ID vs. Perropates","Jenga"],["23:30 - 23:50","BLOQ vs. Zoutkorrel","Memory"],["23:30 - 23:50","L.D.G. Soixante-neuf vs. Supra Modum","Mega Beerpong"],["23:30 - 23:50","K.O.B.R.A. vs. Bokkerijders","Stef stuntpiloot"]]},{daypart:"Woensdagmiddag",title:"Het Zinkende Schip",location:"SSR",startTime:"Zie schema. Let op! Te laat komen gaat van eigen tijd af!!",endTime:"19:00",recommendedNumberOfParticipants:"Maximaal 5 personen",deliverMethod:null,compensation:null,description:"SOS Jullie gaan een spannend nieuw leven beginnen in de nieuwe wereld, maar plots komt dat in gevaar! Los de puzzels en codes op en redt jullie zelf en je medepassagiers! Hiervoor worden jullie het hele schip doorgevoerd, van de gevaarlijke en lawaaierige machinekamer tot de grimmige lower class, de glorieuze upper class en de kapiteinshut. Welk dispuut kan het beste samenwerken, puzzels oplossen en overleeft op die manier de zinkende Titanic?",requirements:null,schedule:[["Tijd","Dispuut"],["10:50","Zephy"],["11:10","K.I.N.K. ID"],["11:30","L.U.C.I.F.E.R."],["11:50","Terra F."],["12:10","Volante"],["12:30","T.A.E.N.I.A."],["13:10","Amaryllis"],["13:30","Bokkerijders"],["13:50","M.O.C.C.A."],["14:10","VINUM"],["14:30","BLOQ"],["14:50","Witte Wieven"],["15:30","K.O.B.R.A."],["15:50","L.D.G. Soixante-neuf"],["16:10","Corduroy"],["16:30","Supra Modum"],["16:50","C.U.P.A."],["17:10","9X7"],["17:30","Zoutkorrel"],["17:50","Perropates"]]},{daypart:"Woensdagavond",title:"Het Laatste Liedje",location:"GWZ",startTime:"21:00",endTime:null,recommendedNumberOfParticipants:"maximaal 10 per dispuut",deliverMethod:"Doe opgeven via form",compensation:null,description:"Tijd om de overwinning te vieren met karaoke!! Zing alsof het je laatste avond is en zorg dat je dispuut er niet aan gaat van de zenuwen. Wie hebben de meest gouden keeltjes van SSR?",requirements:null,schedule:null},{daypart:"Donderdagmiddag",title:"World War Z",location:"USC Sporthal",startTime:"10:00",endTime:"16:00",recommendedNumberOfParticipants:"Hele dispuut, 1 contactpersoon",deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"Jullie vredige wereld wordt opeens geïnfiltreerd door wezens van andere disputen die je er liever niet ziet. Schiet ze allemaal met je lasergun en redt je vrienden en familie. Maar pas op dat je zelf niet geraakt wordt!! Want gevaar zit in een donker hoekje… Welk dispuut is het snelst en behendigst?",requirements:["Let op! Het is verplicht om het materiaal tijdens deze opdracht met zorg te behandelen"],schedule:[["Ronde","Tijd","Disputen"],["1","11: 00 - 11: 20","Volante + C.U.P.A. + Terra F. + L.D.G. Soixante-neuf"],["2","11:25 - 11:45","Terra F. + L.D.G. Soixante-neuf + 9X7 + Zephyr"],["3","11: 50 - 12: 10","Volante + C.U.P.A. + Bokkerijders + Perropates"],["4","12: 15 - 12: 35","9X7 + Zephyr + Bokkerijders + Perropates"],["Pauze","12:40 - 13:30","Pauze"],["5","13:30 - 13:50","Supra Modum + K.I.N.K. ID + Amaryllis. + Witte Wieven"],["6","13:55 - 14:15","Amaryllis + Witte Wieven + M.O.C.C.A. + K.O.B.R.A."],["7","14:20 - 14:40","Supra Modum +  K.I.N.K. ID + L.U.C.I.F.E.R. + BLOQ"],["8","14:45 - 15:05","M.O.C.C.A. + K.O.B.R.A. + Corduroy + VINUM"],["9","15:10 - 15:30","L.U.C.I.F.E.R. + BLOQ + T.A.E.N.I.A. + Zoutkorrel"],["10","15:35 - 15:55","Corduroy + VINUM + T.A.E.N.I.A. + Zoutkorrel"]]},{daypart:"Donderdagavond",title:"Het Laatste Avondmaal",location:"Redactie zit in de VWZ",startTime:"Zie schema. De redactie zal in de VWZ zitten.",endTime:null,recommendedNumberOfParticipants:null,deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"Zoals Jezus op donderdag zijn laatste avondmaal had, gaan wij ook van jullie kookkunsten genieten! Haal je inner Gordon Ramsey naar boven en hak de andere disputen in de pan! Welke maaltijd zou jullie laatste avondmaal zijn?",requirements:["Let op: bij het nagerecht zal het extra gewaardeerd worden als het toetje in thema staat van onze jarige Quaestor Jasper!"],schedule:[["Soort eten","Ronde","Tijd","Disputen"],["Voorgerecht","1","18:30 - 19:00","Zephyr, Terra F. Amaryllis"],["Voorgerecht","2","19: 00 - 19: 30","L.U.C.I.F.E.R., Supra Modum, Perropates"],["Hoofdgerecht","1","19: 30 - 20: 10","BLOQ, C.U.P.A., L.D.G. Soixante-neuf, Witte Wieven"],["Hoofdgerecht","2","20: 10 - 20: 50","M.O.C.C.A., VINUM, K.I.N.K.ID, Corduroy"],["Nagerecht","1","20:50 - 21.20","K.O.B.R.A., Zoutkorrel, 9X7"],["Nagerecht","2","21:20 - 21:50","T.A.E.N.I.A., Bokkerijders, Volante"]]}];function Ae(o,e,r){const n=o.slice();return n[0]=e[r],n}function Ie(o){let e,r;return e=new Pe({props:{assignment:o[0]}}),{c(){Le(e.$$.fragment)},l(n){Oe(e.$$.fragment,n)},m(n,t){Se(e,n,t),r=!0},p:ee,i(n){r||(H(e.$$.fragment,n),r=!0)},o(n){te(e.$$.fragment,n),r=!1},d(n){we(e,n)}}}function ze(o){let e,r,n=Me,t=[];for(let l=0;l<n.length;l+=1)t[l]=Ie(Ae(o,n,l));const i=l=>te(t[l],1,1,()=>{t[l]=null});return{c(){e=v("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var a=g(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(c),this.h()},h(){_(e,"class","container svelte-purytm")},m(l,a){y(l,e,a);for(let s=0;s<t.length;s+=1)t[s].m(e,null);r=!0},p(l,[a]){if(a&0){n=Me;let s;for(s=0;s<n.length;s+=1){const h=Ae(l,n,s);t[s]?(t[s].p(h,a),H(t[s],1)):(t[s]=Ie(h),t[s].c(),H(t[s],1),t[s].m(e,null))}for(Ee(),s=n.length;s<t.length;s+=1)i(s);ye()}},i(l){if(!r){for(let a=0;a<n.length;a+=1)H(t[a]);r=!0}},o(l){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)te(t[a]);r=!1},d(l){l&&c(e),J(t,l)}}}class Ze extends Ce{constructor(e){super(),De(this,e,null,ze,Te,{})}}export{Ze as default};
