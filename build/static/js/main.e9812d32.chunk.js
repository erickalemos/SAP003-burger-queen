(this["webpackJsonpburger-queen"]=this["webpackJsonpburger-queen"]||[]).push([[0],{29:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),u=(a(34),a(8),a(12)),m=a(7),i=a(10),o=a(3),s=a(5),d=a(18),f=a.n(d);a(35);f.a.initializeApp({apiKey:"AIzaSyDFu7wII6Reoj8CDbryoadIRR9YpJRsGQU",authDomain:"burger-queen-e2837.firebaseapp.com",databaseURL:"https://burger-queen-e2837.firebaseio.com",projectId:"burger-queen-e2837",storageBucket:"burger-queen-e2837.appspot.com",messagingSenderId:"633316136467",appId:"1:633316136467:web:c178da27d83882e8ddd1e6",measurementId:"G-PV2M0L0L2B"});var E=f.a;var b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){E.firestore().collection("menu").get().then((function(e){var t=e.docs.map((function(e){return Object(i.a)({},e.data())}));r(t)}))}),[]),a};var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return e.onClick(e)},className:e.className},r.a.createElement("p",null,e.Name),r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.type))))};var p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return e.onClick(e)},className:e.className},r.a.createElement("p",null,e.Name),r.a.createElement("p",null,"R$",e.Price,",00"),r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.type))))};var v=function(e){return r.a.createElement("button",{onClick:function(){return e.onClick(e)},className:e.className},r.a.createElement("span",null,e.title))};var h=function(e){return r.a.createElement("input",{className:e.className,placeholder:e.placeholder,text:e.text,value:e.value,onChange:e.onChange})},g=a(13),k=a.n(g),j=function(){var e=b(),t=e.filter((function(e){return e.breakfast})),a=e.filter((function(e){return!e.breakfast})),c=Object(n.useState)([]),l=Object(s.a)(c,2),u=l[0],m=l[1],d=Object(n.useState)([]),f=Object(s.a)(d,2),g=f[0],j=f[1],C=Object(n.useState)([]),O=Object(s.a)(C,2),P=O[0],y=O[1],w=Object(n.useState)([]),x=Object(s.a)(w,2),I=x[0],q=x[1],S=function(e){var t=u.findIndex((function(t){return t.Name===e.Name}));-1===t?m([].concat(Object(o.a)(u),[Object(i.a)({},e,{quantity:1})])):(u[t].quantity+=1,m(Object(o.a)(u)))},F=u.reduce((function(e,t){return e+t.Price*t.quantity}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"container-restaurant"},r.a.createElement("div",{className:"box-items"},r.a.createElement("div",{className:"bt-menutype"},r.a.createElement("h3",null,"Menu"),r.a.createElement("div",{className:"menutype"},r.a.createElement(N,{Name:"Caf\xe9 da Manh\xe3",className:"bt-color bt-menu",onClick:function(){return j(Object(o.a)(t))}}),r.a.createElement(N,{Name:"Resto do Dia",className:"bt-color  bt-menu",onClick:function(){return j(Object(o.a)(a))}}))),r.a.createElement("div",{className:"button-Itemsmenu"},r.a.createElement("div",{class:"drink flex"},g.map((function(e){return"drink"===e.type&&r.a.createElement(p,{className:"bt bt-Itemsmenu",Name:e.Name,Price:e.Price,onClick:function(){return S(e)}})}))),r.a.createElement("div",{class:"sandwich flex"},g.map((function(e){return"sandwich"===e.type&&r.a.createElement(p,{className:"bt bt-Itemsmenu",Name:e.Name,Price:e.Price,onClick:function(){return S(e)}})}))),r.a.createElement("div",{class:"extra flex"},g.map((function(e){return"extra"===e.type&&r.a.createElement(p,{className:"bt bt-Itemsmenu",Name:e.Name,Price:e.Price,onClick:function(){return S(e)}})}))),r.a.createElement("div",{class:"additional flex"},g.map((function(e){return"additional"===e.type&&r.a.createElement(p,{className:"bt bt-Itemsmenu",Name:e.Name,Price:e.Price,onClick:function(){return S(e)}})}))))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"box-order"},r.a.createElement("h3",null,"Dados do Pedido"),r.a.createElement(h,{placeholder:"Nome do Cliente",className:"input-data name-data",value:P,onChange:function(e){return y(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(h,{placeholder:"N\xba da mesa",value:I,className:"input-data table-data",onChange:function(e){return q(e.target.value)}}),u.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"order"},e.Name," - Qtde: ",e.quantity,r.a.createElement(v,{className:"btn-del",title:"\ud83d\uddd1",onClick:function(){return function(e){var t=u.findIndex((function(t){return t.Name===e.Name})),a=u.filter((function(t){return t.Name!==e.Name}));1===u[t].quantity?(u.splice(t,1),m(Object(o.a)(a))):(u[t].quantity-=1,m(Object(o.a)(u)))}(e)}})))})),r.a.createElement("h3",null,"Total: R$ ",F,",00"),r.a.createElement(N,{Name:"Enviar",className:"bt-color",onClick:function(){u.length&&I.length&&P.length?E.firestore().collection("orders").add({Name:P,table:I,order:u,status:"Pendente",timestamp:E.firestore.FieldValue.serverTimestamp()}).then(k.a.fire({icon:"success",title:"Pedido enviado com sucesso!",showConfirmButton:!1,timer:1500}),y(""),q(""),m([])):0===u.length?k.a.fire({icon:"error",title:"Selecione ao menos um item!",showConfirmButton:!1,timer:1500}):0===P.length?k.a.fire({icon:"warning",title:"Digite o nome do cliente",showConfirmButton:!1,timer:1500}):0===I.length&&k.a.fire({icon:"error",title:"Digite o n\xb0 da mesa",showConfirmButton:!1,timer:1500})}})))))},C=function(e){return r.a.createElement("img",{src:"logo.png",className:e.className})};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"box-logo"},r.a.createElement(C,{className:"logo"})),r.a.createElement("div",{className:"csstabs"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",{className:"main-menu"},r.a.createElement("li",{className:"nav-restaurant"},r.a.createElement(u.b,{to:"/Restaurant",className:"nav-restaurant"},r.a.createElement("h3",{className:"restaurant"},"Restaurante"))),r.a.createElement("li",{className:"nav-kitchen"},r.a.createElement(u.b,{to:"/Kitchen",className:"nav-kitchen"},r.a.createElement("h3",{className:"kitchen"},"Cozinha")))))))};var P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),u=Object(s.a)(l,2),m=u[0],d=u[1],f=a.filter((function(e){return"Pendente"===e.status})),b=a.filter((function(e){return"Pronto"===e.status})),p=a.filter((function(e){return"Entregue"===e.status}));Object(n.useEffect)((function(){E.firestore().collection("orders").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));c(t)}))}),[]);var v=function(e,t,n){E.firestore().collection("orders").doc(e.id).update({status:t});var r=a.map((function(a){return a===e?(a.status=t,a):a})).filter((function(e){return e.status===n}));d(Object(o.a)(r))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"data-order"},r.a.createElement("div",{className:"bt-menuStatus"},r.a.createElement(N,{Name:"Pendente",className:"bt-kitchen",onClick:function(){return d(Object(o.a)(f))}}),r.a.createElement(N,{Name:"Pronto",className:"bt-kitchen",onClick:function(){return d(Object(o.a)(b))}}),r.a.createElement(N,{Name:"Entregue",className:"bt-kitchen",onClick:function(){return d(Object(o.a)(p))}})),r.a.createElement("div",{className:"box-cards"},m.map((function(e){return r.a.createElement("div",{className:"card-item"},r.a.createElement("div",{className:"divisor"},r.a.createElement("p",null,r.a.createElement("b",null,e.Name,r.a.createElement("hr",null)," Mesa: ",e.table))),e.order.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,e.quantity)," x ",e.Name," "))})),"Pendente"===e.status&&r.a.createElement(N,{className:"bt-status",Name:"Pronto",onClick:function(){return v(e,"Pronto","Pendente")}}),"Pronto"===e.status&&r.a.createElement(N,{className:"bt-status",Name:"Entregue",onClick:function(){return v(e,"Entregue","Pronto")}}))})))))};var y=function(){return r.a.createElement(u.a,null,r.a.createElement("header",null,r.a.createElement(O,null)),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/Kitchen"},r.a.createElement(P,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.e9812d32.chunk.js.map