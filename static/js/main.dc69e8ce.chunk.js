(window.webpackJsonpmarkus=window.webpackJsonpmarkus||[]).push([[0],{37:function(n,e,t){n.exports=t(48)},48:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(22),c=t.n(i),l=t(23),o=t(24),u=t(34),m=t(25),s=t(35),p=t(10),h=t(33),d=t(2),f=t(1);function g(){var n=Object(d.a)(["\n  position: absolute;\n  width: 25px;\n  height: 3px;\n  background-color: black;\n  left: 0;\n  /* transform: rotate(0deg); */\n  transition: all .50s ease-in-out;\n  &:nth-child(1) {\n    top: 0px;\n  }\n  &:nth-child(2) {\n    top: 6px\n  }\n  &:last-child {\n    top: 12px;\n  }\n  .open > & {\n    transition: all 1s ease-in-out;\n  }\n  .open  > &:first-child {\n    top: 45%;\n    transform: rotate(135deg);\n    transition: all .50s ease-in-out;\n  }\n  .open > &:nth-child(2){\n    opacity: 0;\n    left: -60px;\n    transition: all .50s ease-in-out;\n  }\n  .open > &:nth-child(3) {\n    transform: rotate(-135deg);\n    transition: all .50s ease-in-out;\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(d.a)(["\n  width: 40px;\n  height: 25px;\n  position: relative;\n  display: none;\n  margin-left: auto;\n  cursor: pointer;\n  @media (max-width: 950px) {\n    display: block;\n  }\n"]);return b=function(){return n},n}var E=f.a.div(b()),x=f.a.div(g()),v=function(n){var e=n.isOpen,t=n.setIsOpen;return r.a.createElement(E,{className:e?"open":"closed",onClick:function(){return t(!e)}},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null))},w=t(8);function j(){var n=Object(d.a)(["\n  list-style: none;\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n  padding-right: 10px;\n"]);return O=function(){return n},n}function y(){var n=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0,0,0, 0.7);\n  left: -120rem;\n  transition: left .75s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  &.show {\n    left: 0;\n  }\n  & > a {\n    color: white;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(d.a)(["\n  display:inline-block;\n  text-decoration: none;\n  padding: 15px;\n  text-transform: uppercase;\n  color: white;\n  &:hover {\n \n  }\n  &.active{\n    border-bottom: 1px solid #f5c303;\n  }\n  .show > &.active {\n    border-bottom: none;\n    color: gold;\n  }\n"]);return k=function(){return n},n}function M(){var n=Object(d.a)(["\n  display:inline-block;\n  text-decoration: none;\n  padding: 15px;\n  text-transform: uppercase;\n  color: black;\n  &:hover {\n   \n  }\n  &.active{\n    border-bottom: 1px solid black;\n    transform: scale(1.5);\n    color: #f5c303;\n  }\n"]);return M=function(){return n},n}function D(){var n=Object(d.a)(["\n  padding: 10px 0;\n  text-align: right;\n  margin-right: 21px;\n  @media (max-width: 950px) {\n    a {\n      display:none;\n    }\n  }\n"]);return D=function(){return n},n}function S(){var n=Object(d.a)(["\n  background-color: ",";\n"]);return S=function(){return n},n}var z=f.a.div(S(),(function(n){return n.color?n.color:"black"})),A=f.a.div(D()),C=Object(f.a)(w.b)(M()),I=Object(f.a)(w.b)(k()),N=f.a.div(y()),F=f.a.ul(O()),R=f.a.li(j()),U=function(n){var e=n.routes,t=void 0===e?[]:e,i=Object(a.useState)(!1),c=Object(h.a)(i,2),l=c[0],o=c[1];return window.onresize=function(){return window.innerWidth>900&&l&&o(!1)},r.a.createElement(z,{color:"white",display:""},r.a.createElement(A,null,t.map((function(n){return r.a.createElement(C,{exact:!0,to:"/".concat(n)},n)})),r.a.createElement(v,{setIsOpen:o,isOpen:l})),r.a.createElement(N,{className:l?"show":"hide"},r.a.createElement(F,null,t.map((function(n){return r.a.createElement(R,{onClick:function(){return o(!l)}},r.a.createElement(I,{exact:!0,to:"/".concat(n)},n))})))))};function W(){var n=Object(d.a)(["\n  font-size: 20px;\n  position: relative;\n  left: 3px;\n"]);return W=function(){return n},n}function G(){var n=Object(d.a)(["\n  width: 17%;\n  margin: 4px;\n  border-radius: 5px;\n  font-weight: bold;\n  &:nth-child(1) {\n   margin-left: 3px;\n  }\n  &:hover {\n    background: rgba(245, 195, 3, 1);\n    border: rgba(245, 195, 3, 1);\n    transform: scale(1.1);\n    position: relative;\n  }\n"]);return G=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: inline-block;\n  text-decoration: none;\n  margin: 15px;\n  text-transform: uppercase;\n  color: black;\n  &:nth-child(1) {\n   \n  }\n"]);return T=function(){return n},n}function B(){var n=Object(d.a)(["\ndisplay: flex;\njustify-content: center;\nmargin-top: 60px;\n"]);return B=function(){return n},n}function J(){var n=Object(d.a)(["\n  font-size: 2em;\n  @media (max-width: 820px) {\n    font-size: 1.5em;\n  }\n  @media (max-width: 550px) {\n    font-size: 1em;\n  }\n"]);return J=function(){return n},n}function L(){var n=Object(d.a)(["\n  font-size: 4em;\n  margin: 0px;\n  @media (max-width: 820px) {\n    font-size: 3em;\n  }\n  @media (max-width: 670px) {\n    font-size: 2.5em;\n  }\n"]);return L=function(){return n},n}function K(){var n=Object(d.a)(["\n  \n"]);return K=function(){return n},n}function Y(){var n=Object(d.a)(["\n  width: 50%;\n  @media (max-width: 550px) {\n    width: 59%;\n  }\n"]);return Y=function(){return n},n}function H(){var n=Object(d.a)(["\n  width: 65%;\n  @media (max-width: 550px) {\n    width: 100%;\n  }\n"]);return H=function(){return n},n}function P(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 50%;\n  @media (max-width: 550px) {\n    width: 40%;\n  }\n"]);return P=function(){return n},n}var X=f.a.div(P()),q=f.a.img(H()),V=f.a.div(Y()),Q=(f.a.div(K()),f.a.h1(L())),Z=f.a.p(J()),$=f.a.section(B()),_=(Object(f.a)(w.b)(T()),f.a.button(G()),f.a.small(W())),nn=function(){return r.a.createElement("div",null,r.a.createElement($,null,r.a.createElement(X,null,r.a.createElement(q,{src:"https://i.imgur.com/LttW85S.jpg"})),r.a.createElement(V,null,r.a.createElement(Q,null,"Full Stack",r.a.createElement("br",null)," Life Developer"),r.a.createElement(Z,null,'"Debugging our Life"',r.a.createElement("br",null),r.a.createElement(_,null,"De'Markus Matthews")))))},en=t(30),tn=t(31),an=t(14);function rn(){var n=Object(d.a)(["\n  color: black;\n  width: 35px;\n  &:hover {\n    color: #f5c303;\n    transform: scale(1.3)\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(d.a)(["\n  color: black;\n  width: 35px;\n  &:hover {\n    color: #f5c303;\n    transform: scale(1.3)\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(d.a)(["\n  color: black;\n  width: 35px;\n  &:hover {\n    color: #f5c303;\n    transform: scale(1.3)\n  }\n"]);return ln=function(){return n},n}function on(){var n=Object(d.a)(["\n  width: 325px;\n  height: 350px;\n"]);return on=function(){return n},n}function un(){var n=Object(d.a)(["\n  letter-spacing: 1px;\n  line-height: 30px;\n  font-size: 1.2em;\n"]);return un=function(){return n},n}function mn(){var n=Object(d.a)(["\n  text-decoration: none;\n  margin-right: 50px;\n"]);return mn=function(){return n},n}function sn(){var n=Object(d.a)(["\n  display: flex;\n  @media (max-width: 800px) {\n    padding-bottom: 20px;\n  }\n"]);return sn=function(){return n},n}function pn(){var n=Object(d.a)(["\n  width: 48%;\n  display: flex;\n  justify-content: center;\n"]);return pn=function(){return n},n}function hn(){var n=Object(d.a)(["\n\n"]);return hn=function(){return n},n}function dn(){var n=Object(d.a)(["\n  width: 48%;\n  @media (max-width: 800px) {\n    width: 71%;\n  }\n  @media (max-width: 500px) {\n    width: 94%;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(d.a)(["\n\n"]);return fn=function(){return n},n}function gn(){var n=Object(d.a)(["\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 800px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return gn=function(){return n},n}var bn=f.a.section(gn()),En=f.a.h2(fn()),xn=f.a.div(dn()),vn=f.a.div(hn()),wn=f.a.div(pn()),jn=f.a.div(sn()),On=f.a.a(mn()),yn=f.a.p(un()),kn=f.a.img(on()),Mn=(Object(f.a)(en.a)(ln()),Object(f.a)(tn.a)(cn())),Dn=Object(f.a)(an.a)(rn()),Sn=function(){return r.a.createElement("div",null,r.a.createElement(bn,null,r.a.createElement(wn,null,r.a.createElement(kn,{src:"https://i.imgur.com/pzAOYmB.jpg"})),r.a.createElement(xn,null,r.a.createElement(yn,null,"Exceptional full stack web developer with a mind to solve complex problems. I have a strong work ethic and like to finish in a timely manner. Always generating new ideas and I'm very good at seeing the pros and cons in them. A good understanding in a variety of web programming languages. Understanding the core concepts and techniques of maintenance and construction of websites. Active listener and can communicate in a clear way."),r.a.createElement(vn,null,r.a.createElement(En,null,"Contact Me"),r.a.createElement(jn,null,r.a.createElement(On,{href:"https://www.linkedin.com/in/demarkus-matthews-a12051172/"},r.a.createElement(Mn,null)),r.a.createElement(On,{href:"https://github.com/DManthonyx?tab=repositories"},r.a.createElement(Dn,null)))))))};function zn(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return zn=function(){return n},n}function An(){var n=Object(d.a)(["\n  width: 125px;\n  height: 125px;\n  padding: 22px;\n  @media (max-width: 500px) {\n    padding: 8px;\n  }\n"]);return An=function(){return n},n}function Cn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px 100px;\n  &:nth-child(1) {\n    margin-top: 50px;\n  }\n  @media (max-width: 720px) {\n    padding: 20px 0px;\n    margin-bottom: 50px;\n  }\n"]);return Cn=function(){return n},n}var In=f.a.section(Cn()),Nn=f.a.div(An()),Fn=f.a.img(zn()),Rn=function(){return r.a.createElement("div",null,r.a.createElement(In,null,r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/e30ab8k.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/pvriFr2.jpg"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/RxBss0D.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/usKsowm.png"}))),r.a.createElement(In,null,r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/LQ55RYG.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/Wa65cuK.jpg"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/6mIDpjF.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/c85eM21.png"}))),r.a.createElement(In,null,r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/1Np725C.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/siEyT2v.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/vjkDpeh.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/CdFOg7x.jpg"}))),r.a.createElement(In,null,r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/4CWoqhE.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/Ol54srT.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/3blU1ee.png"})),r.a.createElement(Nn,null,r.a.createElement(Fn,{src:"https://i.imgur.com/fUOJxle.jpg"}))))},Un=["home","portfolio","skills","about"],Wn=t(32);function Gn(){var n=Object(d.a)(["\n  color: black;\n  width: 35px;\n  &:hover {\n    color: #f5c303;\n    transform: scale(1.3)\n  }\n"]);return Gn=function(){return n},n}function Tn(){var n=Object(d.a)(["\n  color: black;\n  width: 45px;\n  &:hover {\n    color: #f5c303;\n    transform: scale(1.3)\n  }\n"]);return Tn=function(){return n},n}function Bn(){var n=Object(d.a)(["\n\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return Jn=function(){return n},n}function Ln(){var n=Object(d.a)(["\n  font-size: 1em;\n  letter-spacing: 1px;\n  line-height: 25px;\n"]);return Ln=function(){return n},n}function Kn(){var n=Object(d.a)(["\n  width: 75%;\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n"]);return Kn=function(){return n},n}function Yn(){var n=Object(d.a)(["\n  width: 75%;\n  height: 400px;\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n"]);return Yn=function(){return n},n}function Hn(){var n=Object(d.a)(["\n  font-size: 2.5em;\n  margin: 0px;\n  letter-spacing: 1px;\n"]);return Hn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70%;\n  margin-bottom: 20px;\n  border-bottom: 3px solid #f5c303;\n  @media (max-width: 511px) {\n    width: 94%;\n  }\n"]);return Pn=function(){return n},n}function Xn(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  @media (max-width: 780px) {\n    margin-bottom: 50px;\n  }\n"]);return Xn=function(){return n},n}var qn=f.a.section(Xn()),Vn=f.a.div(Pn()),Qn=f.a.h2(Hn()),Zn=f.a.img(Yn()),$n=f.a.div(Kn()),_n=f.a.p(Ln()),ne=f.a.div(Jn()),ee=f.a.a(Bn()),te=Object(f.a)(Wn.a)(Tn()),ae=Object(f.a)(an.a)(Gn()),re=function(){return r.a.createElement("div",null,r.a.createElement(qn,null,r.a.createElement(Vn,null,r.a.createElement(Qn,null,"SoberLiving"),r.a.createElement(Zn,{src:"https://i.imgur.com/9E5ZjG9.png"}),r.a.createElement($n,null,r.a.createElement(_n,null,"A web app/platform that list all the sober living homes/ treatment centers. Purpose is to serve both victims of addiction and businesses by providing a user friendly website that locates facilities in their area. Also for the business to better market themselves."),r.a.createElement(_n,null,"Technologies used: React, Postgres, Flask, Google Maps,"),r.a.createElement(ne,null,r.a.createElement(ee,{href:"https://sober-living-react.herokuapp.com/"},r.a.createElement(te,null)),r.a.createElement(ee,{href:"https://github.com/DManthonyx/react-sober-living"},r.a.createElement(ae,null))))),r.a.createElement(Vn,null,r.a.createElement(Qn,null,"Dipn N Sipn"),r.a.createElement(Zn,{src:"https://i.imgur.com/a1f8xyn.png"}),r.a.createElement($n,null,r.a.createElement(_n,null,"A social driving adventure website. Is a mobile view app that serves the user by generating random locations specifically 3 at a time being based on there location first and than what ever city he/she would like to go bar hoping in. Making the night a bit easier by picking the location and making a adventure."),r.a.createElement(_n,null,"Technologies used: React, Firebase, Google Maps, Yelp"),r.a.createElement(ne,null,r.a.createElement(ee,{href:"https://dipn-n-sipn.firebaseapp.com/"},r.a.createElement(te,null)),r.a.createElement(ee,{href:"https://github.com/DManthonyx/DipnSipn"},r.a.createElement(ae,null))))),r.a.createElement(Vn,null,r.a.createElement(Qn,null,"FortNite Mania"),r.a.createElement(Zn,{src:"https://i.imgur.com/n0RwIUS.png"}),r.a.createElement($n,null,r.a.createElement(_n,null,"A youtube for FortNite, where users can create an account to post their videos and show off their skills and see how many comments and likes that they receive. Has Also is mobile view/ fully responsive"),r.a.createElement(_n,null,"Technologies used: JavaScript, EJS, Node, Express, Mongoose"),r.a.createElement(ne,null,r.a.createElement(ee,{href:"https://fornite-mania.herokuapp.com/?fbclid=IwAR2XH0AXVpsy5YWBGNKP5mUNmVbcd2ORU3Os8pXKaW8w-7SooyOfO3xGB6o "},r.a.createElement(te,null)),r.a.createElement(ee,{href:"https://github.com/DManthonyx/CRUD-app-project"},r.a.createElement(ae,null))))),r.a.createElement(Vn,null,r.a.createElement(Qn,null,"SlotMachine"),r.a.createElement(Zn,{src:"https://i.imgur.com/GaIvUx1.png"}),r.a.createElement($n,null,r.a.createElement(_n,null,"A simple but fun and interactive slot machine game. Cost 2 dollars to play and having 3 different options to select from, which is 20 50 100. 20 being the easiest and 100 being the hardest. Can win by getting either all bars which is the jack pot and thats double the pay and all the same fruit or 2 of the same fruit and one bar is the only way to win."),r.a.createElement(_n,null,"Technologies used: JavaScript,HTML5, CSS3"),r.a.createElement(ne,null,r.a.createElement(ee,{href:"https://pages.git.generalassemb.ly/dmanthonyx/slotMachine/"},r.a.createElement(te,null)),r.a.createElement(ee,{href:"https://github.com/DManthonyx/slotMachinee"},r.a.createElement(ae,null)))))))},ie=function(){return r.a.createElement(p.a,{to:"/home"})},ce=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(U,{routes:Un}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(nn,null)}}),r.a.createElement(p.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(nn,null)}}),r.a.createElement(p.b,{exact:!0,path:"/about",render:function(){return r.a.createElement(Sn,null)}}),r.a.createElement(p.b,{exact:!0,path:"/skills",render:function(){return r.a.createElement(Rn,null)}}),r.a.createElement(p.b,{exact:!0,path:"/portfolio",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(p.b,{component:ie})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w.a,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dc69e8ce.chunk.js.map