import{S as Ye,i as et,s as tt,k as p,q as h,a as K,l as c,m,r as f,h as r,c as V,n as C,b as P,G as a,u as R,H as me,e as ze,K as nt,L as fe,g as re,f as ot,d as he,y as lt,z as at,A as it,B as rt,v as st}from"../chunks/index.058e4538.js";function Ze(s,e,i){const o=s.slice();return o[3]=e[i],o}function Ke(s,e,i){const o=s.slice();return o[6]=e[i],o}function Ve(s){let e,i,o=s[0].recommendedNumberOfParticipants+"",t;return{c(){e=p("li"),i=h("Personen: "),t=h(o),this.h()},l(l){e=c(l,"LI",{class:!0});var n=m(e);i=f(n,"Personen: "),t=f(n,o),n.forEach(r),this.h()},h(){C(e,"class","svelte-dpyjwk")},m(l,n){P(l,e,n),a(e,i),a(e,t)},p(l,n){n&1&&o!==(o=l[0].recommendedNumberOfParticipants+"")&&R(t,o)},d(l){l&&r(e)}}}function Re(s){let e,i,o=s[0].location+"",t;return{c(){e=p("li"),i=h("Locatie: "),t=h(o),this.h()},l(l){e=c(l,"LI",{class:!0});var n=m(e);i=f(n,"Locatie: "),t=f(n,o),n.forEach(r),this.h()},h(){C(e,"class","svelte-dpyjwk")},m(l,n){P(l,e,n),a(e,i),a(e,t)},p(l,n){n&1&&o!==(o=l[0].location+"")&&R(t,o)},d(l){l&&r(e)}}}function Fe(s){let e,i,o=s[0].deliverMethod+"",t;return{c(){e=p("li"),i=h("Oplevering: "),t=h(o),this.h()},l(l){e=c(l,"LI",{class:!0});var n=m(e);i=f(n,"Oplevering: "),t=f(n,o),n.forEach(r),this.h()},h(){C(e,"class","svelte-dpyjwk")},m(l,n){P(l,e,n),a(e,i),a(e,t)},p(l,n){n&1&&o!==(o=l[0].deliverMethod+"")&&R(t,o)},d(l){l&&r(e)}}}function Ge(s){let e,i,o=s[0].compensation+"",t;return{c(){e=p("li"),i=h("Vergoeding: "),t=h(o),this.h()},l(l){e=c(l,"LI",{class:!0});var n=m(e);i=f(n,"Vergoeding: "),t=f(n,o),n.forEach(r),this.h()},h(){C(e,"class","svelte-dpyjwk")},m(l,n){P(l,e,n),a(e,i),a(e,t)},p(l,n){n&1&&o!==(o=l[0].compensation+"")&&R(t,o)},d(l){l&&r(e)}}}function He(s){let e,i,o=s[1]?"Verberg schema":"Toon schema",t,l,n,d,v,j=s[1]&&Je(s);return{c(){e=p("div"),i=p("button"),t=h(o),l=K(),j&&j.c(),n=ze(),this.h()},l(u){e=c(u,"DIV",{class:!0});var M=m(e);i=c(M,"BUTTON",{class:!0});var w=m(i);t=f(w,o),w.forEach(r),M.forEach(r),l=V(u),j&&j.l(u),n=ze(),this.h()},h(){C(i,"class","svelte-dpyjwk"),C(e,"class","controls svelte-dpyjwk")},m(u,M){P(u,e,M),a(e,i),a(i,t),P(u,l,M),j&&j.m(u,M),P(u,n,M),d||(v=nt(i,"click",s[2]),d=!0)},p(u,M){M&2&&o!==(o=u[1]?"Verberg schema":"Toon schema")&&R(t,o),u[1]?j?j.p(u,M):(j=Je(u),j.c(),j.m(n.parentNode,n)):j&&(j.d(1),j=null)},d(u){u&&r(e),u&&r(l),j&&j.d(u),u&&r(n),d=!1,v()}}}function Je(s){let e,i,o,t,l,n,d,v,j,u,M,w,F,L,X,S,H,W,x,D,G,U,Y,I,T,O,y,b,g,_,te,Z,B,z,ne,J,se,Q,de,q,ue,$,ve,ie,ee,oe,pe,_e,le=s[0].schedule,E=[];for(let A=0;A<le.length;A+=1)E[A]=qe(Ze(s,le,A));return{c(){e=p("select"),i=p("option"),o=h("Alle disputen"),t=p("option"),l=h("M.O.C.C.A"),n=p("option"),d=h("T.A.E.N.I.A."),v=p("option"),j=h("L.U.C.I.F.E.R."),u=p("option"),M=h("L.D.G. Soixante-Neuf"),w=p("option"),F=h("Corduroy"),L=p("option"),X=h("9X7"),S=p("option"),H=h("Bokkerijders"),W=p("option"),x=h("K.I.N.K. ID"),D=p("option"),G=h("BLOQ"),U=p("option"),Y=h("Witte Wieven"),I=p("option"),T=h("Zephyr"),O=p("option"),y=h("Zoutkorrel"),b=p("option"),g=h("Terra F."),_=p("option"),te=h("Volante"),Z=p("option"),B=h("Amaryllis"),z=p("option"),ne=h("K.O.B.R.A."),J=p("option"),se=h("Perropates"),Q=p("option"),de=h("VINUM"),q=p("option"),ue=h("Supra Modum"),$=p("option"),ve=h("C.U.P.A."),ie=K(),ee=p("div"),oe=p("table");for(let A=0;A<E.length;A+=1)E[A].c();this.h()},l(A){e=c(A,"SELECT",{name:!0,id:!0,class:!0});var k=m(e);i=c(k,"OPTION",{});var N=m(i);o=f(N,"Alle disputen"),N.forEach(r),t=c(k,"OPTION",{});var ae=m(t);l=f(ae,"M.O.C.C.A"),ae.forEach(r),n=c(k,"OPTION",{});var ge=m(n);d=f(ge,"T.A.E.N.I.A."),ge.forEach(r),v=c(k,"OPTION",{});var ke=m(v);j=f(ke,"L.U.C.I.F.E.R."),ke.forEach(r),u=c(k,"OPTION",{});var je=m(u);M=f(je,"L.D.G. Soixante-Neuf"),je.forEach(r),w=c(k,"OPTION",{});var Ie=m(w);F=f(Ie,"Corduroy"),Ie.forEach(r),L=c(k,"OPTION",{});var Oe=m(L);X=f(Oe,"9X7"),Oe.forEach(r),S=c(k,"OPTION",{});var be=m(S);H=f(be,"Bokkerijders"),be.forEach(r),W=c(k,"OPTION",{});var Ae=m(W);x=f(Ae,"K.I.N.K. ID"),Ae.forEach(r),D=c(k,"OPTION",{});var Me=m(D);G=f(Me,"BLOQ"),Me.forEach(r),U=c(k,"OPTION",{});var Te=m(U);Y=f(Te,"Witte Wieven"),Te.forEach(r),I=c(k,"OPTION",{});var ye=m(I);T=f(ye,"Zephyr"),ye.forEach(r),O=c(k,"OPTION",{});var Ne=m(O);y=f(Ne,"Zoutkorrel"),Ne.forEach(r),b=c(k,"OPTION",{});var Ce=m(b);g=f(Ce,"Terra F."),Ce.forEach(r),_=c(k,"OPTION",{});var Ee=m(_);te=f(Ee,"Volante"),Ee.forEach(r),Z=c(k,"OPTION",{});var we=m(Z);B=f(we,"Amaryllis"),we.forEach(r),z=c(k,"OPTION",{});var De=m(z);ne=f(De,"K.O.B.R.A."),De.forEach(r),J=c(k,"OPTION",{});var Be=m(J);se=f(Be,"Perropates"),Be.forEach(r),Q=c(k,"OPTION",{});var Pe=m(Q);de=f(Pe,"VINUM"),Pe.forEach(r),q=c(k,"OPTION",{});var Le=m(q);ue=f(Le,"Supra Modum"),Le.forEach(r),$=c(k,"OPTION",{});var Se=m($);ve=f(Se,"C.U.P.A."),Se.forEach(r),k.forEach(r),ie=V(A),ee=c(A,"DIV",{class:!0});var We=m(ee);oe=c(We,"TABLE",{});var Ue=m(oe);for(let ce=0;ce<E.length;ce+=1)E[ce].l(Ue);Ue.forEach(r),We.forEach(r),this.h()},h(){i.__value="all",i.value=i.__value,t.__value="mocca",t.value=t.__value,n.__value="taenia",n.value=n.__value,v.__value="lucifer",v.value=v.__value,u.__value="soixante-neuf",u.value=u.__value,w.__value="corduroy",w.value=w.__value,L.__value="9X7",L.value=L.__value,S.__value="bokkerijders",S.value=S.__value,W.__value="kinkid",W.value=W.__value,D.__value="bloq",D.value=D.__value,U.__value="witte-wieven",U.value=U.__value,I.__value="zephyr",I.value=I.__value,O.__value="zoutkorrel",O.value=O.__value,b.__value="terra-f",b.value=b.__value,_.__value="volante",_.value=_.__value,Z.__value="amaryllis",Z.value=Z.__value,z.__value="kobra",z.value=z.__value,J.__value="perropates",J.value=J.__value,Q.__value="vinum",Q.value=Q.__value,q.__value="supra-modum",q.value=q.__value,$.__value="cupa",$.value=$.__value,C(e,"name","disputen"),C(e,"id","disputen"),C(e,"class","svelte-dpyjwk"),C(ee,"class","schedule svelte-dpyjwk")},m(A,k){P(A,e,k),a(e,i),a(i,o),a(e,t),a(t,l),a(e,n),a(n,d),a(e,v),a(v,j),a(e,u),a(u,M),a(e,w),a(w,F),a(e,L),a(L,X),a(e,S),a(S,H),a(e,W),a(W,x),a(e,D),a(D,G),a(e,U),a(U,Y),a(e,I),a(I,T),a(e,O),a(O,y),a(e,b),a(b,g),a(e,_),a(_,te),a(e,Z),a(Z,B),a(e,z),a(z,ne),a(e,J),a(J,se),a(e,Q),a(Q,de),a(e,q),a(q,ue),a(e,$),a($,ve),P(A,ie,k),P(A,ee,k),a(ee,oe);for(let N=0;N<E.length;N+=1)E[N].m(oe,null);pe||(_e=nt(e,"change",ut),pe=!0)},p(A,k){if(k&1){le=A[0].schedule;let N;for(N=0;N<le.length;N+=1){const ae=Ze(A,le,N);E[N]?E[N].p(ae,k):(E[N]=qe(ae),E[N].c(),E[N].m(oe,null))}for(;N<E.length;N+=1)E[N].d(1);E.length=le.length}},d(A){A&&r(e),A&&r(ie),A&&r(ee),fe(E,A),pe=!1,_e()}}}function Qe(s){let e,i=s[6]+"",o;return{c(){e=p("td"),o=h(i),this.h()},l(t){e=c(t,"TD",{class:!0});var l=m(e);o=f(l,i),l.forEach(r),this.h()},h(){C(e,"class","svelte-dpyjwk")},m(t,l){P(t,e,l),a(e,o)},p(t,l){l&1&&i!==(i=t[6]+"")&&R(o,i)},d(t){t&&r(e)}}}function qe(s){let e,i,o=s[3],t=[];for(let l=0;l<o.length;l+=1)t[l]=Qe(Ke(s,o,l));return{c(){e=p("tr");for(let l=0;l<t.length;l+=1)t[l].c();i=K()},l(l){e=c(l,"TR",{});var n=m(e);for(let d=0;d<t.length;d+=1)t[d].l(n);i=V(n),n.forEach(r)},m(l,n){P(l,e,n);for(let d=0;d<t.length;d+=1)t[d].m(e,null);a(e,i)},p(l,n){if(n&1){o=l[3];let d;for(d=0;d<o.length;d+=1){const v=Ke(l,o,d);t[d]?t[d].p(v,n):(t[d]=Qe(v),t[d].c(),t[d].m(e,i))}for(;d<t.length;d+=1)t[d].d(1);t.length=o.length}},d(l){l&&r(e),fe(t,l)}}}function dt(s){let e,i,o=s[0].daypart+"",t,l,n,d=s[0].title+"",v,j,u,M,w,F=s[0].startTime+"",L,X,S,H,W,x,D,G=s[0].description+"",U,Y,I=s[0].recommendedNumberOfParticipants&&Ve(s),T=s[0].location&&Re(s),O=s[0].deliverMethod&&Fe(s),y=s[0].compensation&&Ge(s),b=s[0].schedule&&He(s);return{c(){e=p("article"),i=p("h1"),t=h(o),l=K(),n=p("h2"),v=h(d),j=K(),u=p("div"),M=p("li"),w=h("Tijd: "),L=h(F),X=K(),I&&I.c(),S=K(),T&&T.c(),H=K(),O&&O.c(),W=K(),y&&y.c(),x=K(),D=p("p"),U=h(G),Y=K(),b&&b.c(),this.h()},l(g){e=c(g,"ARTICLE",{class:!0});var _=m(e);i=c(_,"H1",{class:!0});var te=m(i);t=f(te,o),te.forEach(r),l=V(_),n=c(_,"H2",{class:!0});var Z=m(n);v=f(Z,d),Z.forEach(r),j=V(_),u=c(_,"DIV",{class:!0});var B=m(u);M=c(B,"LI",{class:!0});var z=m(M);w=f(z,"Tijd: "),L=f(z,F),z.forEach(r),X=V(B),I&&I.l(B),S=V(B),T&&T.l(B),H=V(B),O&&O.l(B),W=V(B),y&&y.l(B),B.forEach(r),x=V(_),D=c(_,"P",{});var ne=m(D);U=f(ne,G),ne.forEach(r),Y=V(_),b&&b.l(_),_.forEach(r),this.h()},h(){C(i,"class","svelte-dpyjwk"),C(n,"class","svelte-dpyjwk"),C(M,"class","svelte-dpyjwk"),C(u,"class","info svelte-dpyjwk"),C(e,"class","svelte-dpyjwk")},m(g,_){P(g,e,_),a(e,i),a(i,t),a(e,l),a(e,n),a(n,v),a(e,j),a(e,u),a(u,M),a(M,w),a(M,L),a(u,X),I&&I.m(u,null),a(u,S),T&&T.m(u,null),a(u,H),O&&O.m(u,null),a(u,W),y&&y.m(u,null),a(e,x),a(e,D),a(D,U),a(e,Y),b&&b.m(e,null)},p(g,[_]){_&1&&o!==(o=g[0].daypart+"")&&R(t,o),_&1&&d!==(d=g[0].title+"")&&R(v,d),_&1&&F!==(F=g[0].startTime+"")&&R(L,F),g[0].recommendedNumberOfParticipants?I?I.p(g,_):(I=Ve(g),I.c(),I.m(u,S)):I&&(I.d(1),I=null),g[0].location?T?T.p(g,_):(T=Re(g),T.c(),T.m(u,H)):T&&(T.d(1),T=null),g[0].deliverMethod?O?O.p(g,_):(O=Fe(g),O.c(),O.m(u,W)):O&&(O.d(1),O=null),g[0].compensation?y?y.p(g,_):(y=Ge(g),y.c(),y.m(u,null)):y&&(y.d(1),y=null),_&1&&G!==(G=g[0].description+"")&&R(U,G),g[0].schedule?b?b.p(g,_):(b=He(g),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:me,o:me,d(g){g&&r(e),I&&I.d(),T&&T.d(),O&&O.d(),y&&y.d(),b&&b.d()}}}function ut(s){console.log("Changed"),console.log(s.target.value)}function vt(s,e,i){let{assignment:o}=e,t=!1;function l(){i(1,t=!t)}return s.$$set=n=>{"assignment"in n&&i(0,o=n.assignment)},[o,t,l]}class pt extends Ye{constructor(e){super(),et(this,e,vt,dt,tt,{assignment:0})}}const $e=[{daypart:"Maandagmiddag",title:"Survival DIY",location:null,startTime:"10:00",endTime:"17:00",recommendedNumberOfParticipants:">1 persoon",deliverMethod:"Demonstratiefilmpje waarin alle onderdelen van het overlevingspakket worden uitgelegd.",compensation:"10 EURO (mits bonnetje)",description:"Met een zware, volle, drukke, GEWELDIGE DCWeek voor de boeg is het belangrijk om goed voorbereid te zijn. Met een week vol gevaren moet je op alles berekend zijn. Jullie knutselopdracht speelt daarop in, want wat zijn dé essentiële dingen die jouw dispuut nodig heeft om de week te overleven? Maak er een pakket van waar je heel de week gebruik van kunt maken",requirements:["Minimaal 3 overlevingsvoorwerpen totaal","Minimaal 1 van de overlevingsvoorwerpen om een vijand mee te verslaan","Minimaal 1 van de overlevingsvoorwerpen om jezelf te verdedigen tegen een vijand","Minimaal 1 van de overlevingvoorwerpen om je dispuut te kunnen blijven voorzien van basisbehoeften (zoals eten, kleding, dak boven je hoofd, etc.)"],schedule:null},{daypart:"Maandagavond",title:"De Zwakste Schakel",location:"GWZ",startTime:"Zie schema",endTime:null,recommendedNumberOfParticipants:"maximaal 5 personen",deliverMethod:null,compensation:null,description:"Hoe vindt een gemiddelde filmacteur zijn einde? Wat moet je doen als je vliegtuig op een onbewoond eiland strandt? Heb jij vroeger goed opgelet op de scouting? Test het tijdens de pubquiz!",requirements:null,schedule:[["Ronde","Tijd","Disputen"],["1","19:45 - 21:15","M.O.C.C.A., L.U.C.I.F.E.R., L.D.G Soixante-Neuf, 9x7, de Bokkerijders, Witte Wieven, Terra F., Amaryllis, K.O.B.R.A., VINUM"],["2","21:30 - 23:00","T.A.E.N.I.A., Zephyr, Corduroy, K.I.N.K. ID, Zoutkorrel, Volante, Supra Modum, Perropates, BLOQ, C.U.P.A."]]},{daypart:"Dinsdagmiddag",title:"Goodbye My Cherished Fraternity",location:"GWZ",startTime:"10:00",endTime:"16:00",recommendedNumberOfParticipants:"Hele dispuut, 1 contactpersoon",deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"In tijden van komen en gaan, is het tijd om afscheid te nemen van elkaar. Vandaag verwachten wij traan-tuitende en emotie-geladen brieven te ontvangen waarin jullie afscheid nemen van een ander geliefd dispuut. Zijn jullie in staat om je emoties bloot te leggen en de ware aard van jullie relatie tot een ander dispuut te onthullen? Of het nou je scharrel, kwarrel, 10 jaar soort van friends met benefits maar het nog niet echt weten, of langdurende relatie was, het einde is in zicht. Een goed verhaal bezit een introductie, een midden en een slot. De rode draad is duidelijk. Maak het zo smeuïg mogelijk. We verwachten minimaal de volgende elementen terug te vinden in jullie brieven:",requirements:["Omschrijving van de (romantische) relatie tussen de twee disputen","Hoe het ander geliefde dispuut ten is gegaan","De kwaliteit die jullie het meest zullen missen van het andere dispuut","Jullie beste herinnering samen","Een waardig afscheid"],schedule:[["Dispuut","Schrijft een brief naar"],["M.O.C.C.A","C.U.P.A."],["T.A.E.N.I.A.","Supra Modum"],["L.U.C.I.F.E.R.","VINUM"],["L.D.G. Soixante-neuf","Perropates"],["Corduroy","K.O.B.R.A."],["9x7","Amaryllis"],["Bokkerijders","Volante"],["K.I.N.K. ID","Terra F."],["BLOQ","Zoutkorrel"],["Witte Wieven","Zephyr"],["Zephyr","Witte Wieven"],["Zoutkorrel","BLOQ"],["Terra F","K.I.N.K. ID"],["Volante","Bokkerijders"],["Amaryllis","9x7"],["K.O.B.R.A.","Corduroy"],["Perropates","L.D.G. Soixante-neuf"],["VINUM","L.U.C.I.F.E.R."],["Supra Modum","T.A.E.N.I.A."],["C.U.P.A.","M.O.C.C.A"]]},{daypart:"Dinsdagavond",title:"Game Over",location:"GWZ",startTime:"Zie schema",endTime:null,recommendedNumberOfParticipants:"Maximaal 2 per spel",deliverMethod:null,compensation:null,description:"Speel vanavond twee tegen twee met een ander dispuut en probeer in leven te blijven! Durf jij vanavond het heft in eigen handen te nemen op een echte operatietafel? Of maak jij de cruciale fout en sla je de gehele toren om? Blijf je vliegen, of wordt het vanavond een werkelijke crash & burn? Test het vanavond tijdens de borrel. Durf je het niet aan? Dan hebben we ook nog andere spellen op de borrel om aan mee te doen!",requirements:null,schedule:[["Tijd","Disputen","Spel"],["20:30 - 20:50","M.O.C.C.A. vs. VINUM","Dr. Bibber"],["20:30 - 20:50","L.U.C.I.F.E.R. vs. L.D.G. Soixante-neuf","Jenga"],["20:30 - 20:50","Corduroy vs. 9X7","Memory"],["20:30 - 20:50","Bokkerijders vs. K.I.N.K. ID","Mega Beerpong"],["20:30 - 20:50","Witte Wieven vs. BLOQ","Stef stuntpiloot"],["20:50 - 21:10","Zephyr vs. Zoutkorrel","Dr. Bibber"],["20:50 - 21:10","Volante vs. Terra F","Jenga"],["20:50 - 21:10","Amaryllis vs. K.O.B.R.A.","Memory"],["20:50 - 21:10","Perropates vs. C.U.P.A.","Mega Beerpong"],["20:50 - 21:10","M.O.C.C.A. vs. Supra Modum","Stef stuntpiloot"],["21:10 - 21:30","L.U.C.I.F.E.R. vs. 9x7","Dr. Bibber"],["21:10 - 21:30","T.A.E.N.I.A. vs. Corduroy","Jenga"],["21:10 - 21:30","L.D.G. Soixante-neuf vs. Bokkerijders","Memory"],["21:10 - 21:30","VINUM vs. Zephyr","Mega Beerpong"],["21:10 - 21:30","K.I.N.K. ID vs. Zoutkorrel","Stef stuntpiloot"],["21:30 - 21:50","L.U.C.I.F.E.R. vs. 9x7","Dr. Bibber"],["21:30 - 21:50","M.O.C.C.A. vs. Amaryllis","Jenga"],["21:30 - 21:50","Volante vs. Perropates","Memory"],["21:30 - 21:50","K.O.B.R.A. vs. BLOQ","Mega Beerpong"],["21:30 - 21:50","T.A.E.N.I.A. vs. L.U.C.I.F.E.R.","Stef stuntpiloot"],["21:50 - 22:10","Amaryllis vs. Supra Modum","Dr. Bibber"],["21:50 - 22:10","9x7 vs. K.O.B.R.A.","Jenga"],["21:50 - 22:10","C.U.P.A. vs. VINUM","Memory"],["21:50 - 22:10","Corduroy vs. Witte Wieven","Mega Beerpong"],["21:50 - 22:10","Zephyr vs. Terra F.","Stef stuntpiloot"],["22:10 - 22:30","Volante vs. Bokkerijders","Dr. Bibber"],["22:10 - 22:30","Zoutkorrel vs. C.U.P.A.","Jenga"],["22:10 - 22:30","K.I.N.K. ID vs. Supra Modum","Memory"],["22:10 - 22:30","M.O.C.C.A. vs. L.U.C.I.F.E.R.","Mega Beerpong"],["22:10 - 22:30","L.D.G. Soixante-neuf vs. Corduroy","Stef stuntpiloot"],["22:30 - 22:50","K.O.B.R.A. vs. Perropates","Dr. Bibber"],["22:30 - 22:50","BLOQ vs. VINUM","Jenga"],["22:30 - 22:50","T.A.E.N.I.A. vs. Witte Wieven","Memory"],["22:30 - 22:50","9x7 vs. Zoutkorrel","Mega Beerpong"],["22:30 - 22:50","Volante vs. Amaryllis","Stef stuntpiloot"],["22:50 - 23:10","L.D.G. Soixante-neuf vs. Corduroy","Dr. Bibber"],["22:50 - 23:10","Zephyr vs. Supra Modum","Jenga"],["22:50 - 23:10","M.O.C.C.A. vs. Terra F.","Memory"],["22:50 - 23:10","T.A.E.N.I.A. vs. Amaryllis","Mega Beerpong"],["22:50 - 23:10","Bokkerijders vs. C.U.P.A.","Stef stuntpiloot"],["23:10 - 23:30","K.I.N.K. ID vs. BLOQ","Dr. Bibber"],["23:10 - 23:30","Witte Wieven vs. Perropates","Jenga"],["23:10 - 23:30","L.U.C.I.F.E.R. vs. Zephyr","Memory"],["23:10 - 23:30","Volante vs. Terra F.","Mega Beerpong"],["23:10 - 23:30","9x7 vs. VINUM","Stef stuntpiloot"],["23:30 - 23:50","T.A.E.N.I.A. vs. C.U.P.A.","Dr. Bibber"],["23:30 - 23:50","K.I.N.K. ID vs. Bokkerijders","Jenga"],["23:30 - 23:50","BLOQ vs. Zoutkorrel","Memory"],["23:30 - 23:50","L.D.G. Soixante-neuf vs. Supra Modum","Mega Beerpong"],["23:30 - 23:50","K.O.B.R.A. vs. Perropates","Stef stuntpiloot"]]},{daypart:"Woensdagmiddag",title:"Het Zinkende Schip",location:"SSR",startTime:"Zie schema. Let op! Te laat komen gaat van eigen tijd af!!",endTime:"19:00",recommendedNumberOfParticipants:"Maximaal 5 personen",deliverMethod:null,compensation:null,description:"SOS Jullie gaan een spannend nieuw leven beginnen in de nieuwe wereld, maar plots komt dat in gevaar! Los de puzzels en codes op en redt jullie zelf en je medepassagiers! Hiervoor worden jullie het hele schip doorgevoerd, van de gevaarlijke en lawaaierige machinekamer tot de grimmige lower class, de glorieuze upper class en de kapiteinshut. Welk dispuut kan het beste samenwerken, puzzels oplossen en overleeft op die manier de zinkende Titanic?",requirements:null,schedule:[["Tijd","Dispuut"],["11:00","Zephy"],["11:20","K.I.N.K. ID"],["11:40","L.U.C.I.F.E.R."],["12:00","Terra F."],["12:20","Volante"],["12:40","T.A.E.N.I.A."],["13:20","Amaryllis"],["13:40","Bokkerijders"],["14:00","M.O.C.C.A."],["14:20","VINUM"],["14:40","BLOQ"],["15:00","Witte Wieven"],["15:40","K.O.B.R.A."],["16:00","L.D.G. Soixante-neuf"],["16:20","Corduroy"],["16:40","Supra Modum"],["17:00","C.U.P.A."],["17:20","9X7"],["17:40","Zoutkorrel"],["18:00","Perropates"]]},{daypart:"Woensdagavond",title:"Het Laatste Liedje",location:"GWZ",startTime:"21:00",endTime:null,recommendedNumberOfParticipants:"maximaal 10 per dispuut",deliverMethod:"Er zal nog een form komen waarmee ieder dispuut zich op kan geven voor de karaoke",compensation:null,description:"Tijd om de overwinning te vieren met karaoke!! Zing alsof het je laatste avond is en zorg dat je dispuut er niet aan gaat van de zenuwen. Wie hebben de meest gouden keeltjes van SSR?",requirements:null,schedule:null},{daypart:"Donderdagmiddag",title:"World War Z",location:"USC Sporthal",startTime:"10:00",endTime:"16:00",recommendedNumberOfParticipants:"Hele dispuut, 1 contactpersoon",deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"Jullie vredige wereld wordt opeens geïnfiltreerd door wezens van andere disputen die je er liever niet ziet. Schiet ze allemaal met je lasergun en redt je vrienden en familie. Maar pas op dat je zelf niet geraakt wordt!! Want gevaar zit in een donker hoekje… Welk dispuut is het snelst en behendigst?",requirements:["Let op! Het is verplicht om het materiaal tijdens deze opdracht met zorg te behandelen"],schedule:[["Ronde","Tijd","Disputen"],["1","11: 00 - 11: 20","Volante + C.U.P.A. + Terra F. + L.D.G. Soixante-neuf"],["2","11:25 - 11:45","Terra F. + L.D.G. Soixante-neuf + 9X7 + Zephyr"],["3","11: 50 - 12: 10","Volante + C.U.P.A. + Bokkerijders + Perropates"],["4","12: 15 - 12: 35","9X7 + Zephyr + Bokkerijders + Perropates"],["Pauze","12:40 - 13:30","Pauze"],["5","13:30 - 13:50","Supra Modum + K.I.N.K. ID + Amaryllis. + Witte Wieven"],["6","13:55 - 14:15","Amaryllis + Witte Wieven + M.O.C.C.A. + K.O.B.R.A."],["7","14:20 - 14:40","Supra Modum +  K.I.N.K. ID + L.U.C.I.F.E.R. + BLOQ"],["8","14:45 - 15:05","M.O.C.C.A. + K.O.B.R.A. + Corduroy + VINUM"],["9","15:10 - 15:30","L.U.C.I.F.E.R. + BLOQ + T.A.E.N.I.A. + Zoutkorrel"],["10","15:35 - 15:55","Corduroy + VINUM + T.A.E.N.I.A. + Zoutkorrel"]]},{daypart:"Donderdagavond",title:"Het Laatste Avondmaal",location:"Redactie zit in de VWZ",startTime:"Zie schema. De redactie zal in de VWZ zitten.",endTime:null,recommendedNumberOfParticipants:null,deliverMethod:"DCW mail dcw@ssr-leiden.nl",compensation:null,description:"Zoals Jezus op donderdag zijn laatste avondmaal had, gaan wij ook van jullie kookkunsten genieten! Haal je inner Gordon Ramsey naar boven en hak de andere disputen in de pan! Welke maaltijd zou jullie laatste avondmaal zijn?",requirements:["Let op: bij het nagerecht zal het extra gewaardeerd worden als het toetje in thema staat van onze jarige Quaestor Jasper!"],schedule:[["Soort eten","Ronde","Tijd","Disputen"],["Voorgerecht","1","18:30 - 19:00","Zephyr, Terra F. Amaryllis"],["Voorgerecht","2","19: 00 - 19: 30","L.U.C.I.F.E.R., Supra Modum, Perropates"],["Hoofdgerecht","1","19: 30 - 20: 10","BLOQ, C.U.P.A., L.D.G. Soixante-neuf, Witte Wieven"],["Hoofdgerecht","2","20: 10 - 20: 50","M.O.C.C.A., VINUM, K.I.N.K.ID, Corduroy"],["Nagerecht","1","20:50 - 21.20","K.O.B.R.A., Zoutkorrel, 9X7"],["Nagerecht","2","21:20 - 21:50","T.A.E.N.I.A., Bokkerijders, Volante"]]}];function Xe(s,e,i){const o=s.slice();return o[0]=e[i],o}function xe(s){let e,i;return e=new pt({props:{assignment:s[0]}}),{c(){lt(e.$$.fragment)},l(o){at(e.$$.fragment,o)},m(o,t){it(e,o,t),i=!0},p:me,i(o){i||(re(e.$$.fragment,o),i=!0)},o(o){he(e.$$.fragment,o),i=!1},d(o){rt(e,o)}}}function ct(s){let e,i,o=$e,t=[];for(let n=0;n<o.length;n+=1)t[n]=xe(Xe(s,o,n));const l=n=>he(t[n],1,1,()=>{t[n]=null});return{c(){e=p("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=c(n,"DIV",{class:!0});var d=m(e);for(let v=0;v<t.length;v+=1)t[v].l(d);d.forEach(r),this.h()},h(){C(e,"class","container svelte-purytm")},m(n,d){P(n,e,d);for(let v=0;v<t.length;v+=1)t[v].m(e,null);i=!0},p(n,[d]){if(d&0){o=$e;let v;for(v=0;v<o.length;v+=1){const j=Xe(n,o,v);t[v]?(t[v].p(j,d),re(t[v],1)):(t[v]=xe(j),t[v].c(),re(t[v],1),t[v].m(e,null))}for(st(),v=o.length;v<t.length;v+=1)l(v);ot()}},i(n){if(!i){for(let d=0;d<o.length;d+=1)re(t[d]);i=!0}},o(n){t=t.filter(Boolean);for(let d=0;d<t.length;d+=1)he(t[d]);i=!1},d(n){n&&r(e),fe(t,n)}}}class ht extends Ye{constructor(e){super(),et(this,e,null,ct,tt,{})}}export{ht as default};