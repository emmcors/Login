(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(22),s=a.n(r),c=(a(31),a(32),a(2)),l=a.n(c),i=a(4),j=a(3);function b(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,fetch("https://magic-poems.herokuapp.com/Login",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=13;break}return e.next=8,a.json();case 8:return n=e.sent,console.log("token1:",n.access_token),e.abrupt("return",n.access_token);case 13:return e.abrupt("return",!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(l.a.mark((function e(t){var a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="JWT "+t,e.prev=1,e.next=4,fetch("https://magic-poems.herokuapp.com/isAdmin",{method:"GET",cache:"default",headers:{"Content-Type":"application/json",Authorization:a}});case 4:if(!(n=e.sent).ok){e.next=13;break}return e.next=8,n.json();case 8:return o=e.sent,console.log("jsond.isAdmin",o.isAdmin),e.abrupt("return",o.isAdmin);case 13:return e.abrupt("return",!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(l.a.mark((function e(t,a){var n,o,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n="JWT "+a,console.log(n),o=(o="https://magic-poems.herokuapp.com/new-poem")+"/"+t.keyword+"/"+t.author,e.prev=5,e.next=8,fetch(o,{method:"GET",cache:"default",headers:{"Content-Type":"application/json",Authorization:n}});case 8:if(!(r=e.sent).ok){e.next=17;break}return e.next=12,r.json();case 12:return s=e.sent,console.log("poema generado:",s.poem),e.abrupt("return",s.poem);case 17:return console.log(r),e.abrupt("return",!1);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[5,21]])})))).apply(this,arguments)}function h(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(l.a.mark((function e(t){var a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="JWT "+t,"https://magic-poems.herokuapp.com/getName",e.prev=2,e.next=5,fetch("https://magic-poems.herokuapp.com/getName",{method:"GET",cache:"default",headers:{"Content-Type":"application/json",Authorization:a}});case 5:if(!(n=e.sent).ok){e.next=14;break}return e.next=9,n.json();case 9:return o=e.sent,console.log("poema generado:",o.name),e.abrupt("return",o.name);case 14:return console.log(n),e.abrupt("return",!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}function g(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(l.a.mark((function e(t){var a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="JWT "+t,"https://magic-poems.herokuapp.com/list-poem",e.prev=2,e.next=5,fetch("https://magic-poems.herokuapp.com/list-poem",{method:"GET",cache:"default",headers:{"Content-Type":"application/json",Authorization:a}});case 5:if(!(n=e.sent).ok){e.next=14;break}return e.next=9,n.json();case 9:return o=e.sent,console.log("poema generado:",o.data),e.abrupt("return",o.data);case 14:return console.log(n),e.abrupt("return",!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(l.a.mark((function e(t,a){var n,o,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="JWT "+a,console.log(n),o=(o="https://magic-poems.herokuapp.com/get-poem")+"/"+t.id,e.prev=4,e.next=7,fetch(o,{method:"GET",cache:"default",headers:{"Content-Type":"application/json",Authorization:n}});case 7:if(!(r=e.sent).ok){e.next=16;break}return e.next=11,r.json();case 11:return s=e.sent,console.log("poema recuperado:",s.poem),e.abrupt("return",s.poem);case 16:return console.log(r),e.abrupt("return",!1);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})))).apply(this,arguments)}function k(e,t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(l.a.mark((function e(t,a){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="JWT "+a,e.prev=1,console.log("S\xed llegue",t),e.next=5,fetch("https://magic-poems.herokuapp.com/save-poem",{method:"POST",cache:"default",headers:{"Content-Type":"application/json",Authorization:n},body:JSON.stringify(t)});case 5:if(!(o=e.sent).ok){e.next=13;break}return e.next=9,o.json();case 9:return e.sent,e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}var S=a(5),N=a(7),E=a(0),C=function(e){var t=e.text;return Object(E.jsx)("div",{className:"label",children:Object(E.jsx)("label",{children:t})})},I=function(e){var t=e.attribute,a=e.handleChange,n=e.param;return Object(E.jsx)("div",{className:"input-container",children:Object(E.jsx)("input",{id:t.id,name:t.name,placeholder:t.placeholder,type:t.type,onChange:function(e){return a(e.target.name,e.target.value)},className:n?"input-error":"regular-style"})})},T=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),c=s[0],u=s[1],p=Object(n.useState)(!1),m=Object(j.a)(p,2),x=m[0],h=m[1],O=Object(n.useState)(localStorage.getItem("token")),g=Object(j.a)(O,2),f=g[0],v=g[1],y=Object(n.useState)(!1),k=Object(j.a)(y,2),w=k[0],T=k[1],z=Object(n.useState)(null),A=Object(j.a)(z,2),P=A[0],q=A[1];console.log("token login",f);var B="false"!==f;function J(e,t){"usuario"===e?(o(t),T(!1)):t.length<8?(h(!0),T(!1)):(h(!1),u(t),T(!1))}function D(){return(D=Object(i.a)(l.a.mark((function e(t){var a,n,o,r,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.user.length>0&&t.password.length>0)){e.next=11;break}return a={email:t.user,password:t.password},e.next=4,b(a);case 4:return n=e.sent,e.next=7,d(n);case 7:o=e.sent,!1!==n?(o?(console.log("Es Administrador"),q(!0),localStorage.setItem("admin",o)):(console.log("No es administrador"),q(!1),localStorage.setItem("admin",o)),r=t.user,s=t.password,c={user:r,password:s},i=JSON.stringify(c),localStorage.setItem("account",i),localStorage.setItem("token",n),v(!0)):(v(!1),T(!0)),e.next=12;break;case 11:v(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(B),Object(E.jsxs)("div",{className:"login-container",children:[console.log("ADMINISTRADOR1:",P),B?Object(E.jsx)("div",{children:P?Object(E.jsx)(S.a,{to:"/adm"}):Object(E.jsx)(S.a,{to:"/Home"})}):Object(E.jsxs)("div",{className:"login-content",children:[Object(E.jsx)("h1",{children:"\xa1Bienvenido a Poemas.Net!"}),w&&Object(E.jsx)("label",{className:"label-alert",children:" Su contrase\xf1a o usuario son incorrectos, o no existen en nuestra plataforma"}),Object(E.jsxs)("div",{className:"formulario container-fluid w-75",children:[Object(E.jsx)(C,{text:"Correo Electr\xf3nico"}),Object(E.jsx)(I,{attribute:{id:"usuario",name:"usuario",type:"text",placeholder:"ingrese su correo"},handleChange:J}),Object(E.jsx)(C,{text:"Contrase\xf1a"}),Object(E.jsx)(I,{attribute:{id:"contrase\xf1a",name:"contrase\xf1a",type:"password",placeholder:"ingrese su contrase\xf1a"},handleChange:J,param:x}),x&&Object(E.jsx)("label",{className:"label-alert",children:"( Contrase\xf1a incompleta )"}),Object(E.jsx)("div",{className:"submit-button-container",children:Object(E.jsx)("button",{onClick:function(){var e={user:a,password:c};console.log(e),e&&function(e){D.apply(this,arguments)}(e)},children:"Ingresar"})}),Object(E.jsx)("div",{className:"my-3",children:Object(E.jsxs)("span",{className:"alert-gray",children:["No tienes cuenta? ",Object(E.jsx)(N.b,{className:"click-cont",to:"/user",children:"Reg\xedstrate"})]})})]})]})]})};var z=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(j.a)(e,2),a=t[0],o=(t[1],Object(n.useState)(localStorage.getItem("admin"))),r=Object(j.a)(o,2),s=r[0],c=(r[1],Object(n.useState)("defaul_user")),b=Object(j.a)(c,2),u=b[0],d=b[1];console.log("token home",a),console.log("Es administrador?",s);var p="false"!=a,m="false"!=s;console.log(p);var x="";function O(){return(O=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(a);case 2:x=e.sent,d(x);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){O.apply(this,arguments)}(),Object(E.jsxs)("div",{children:[console.log("ADMINISTRADOR2:",m),p?Object(E.jsx)("div",{children:m?Object(E.jsx)(S.a,{to:"/adm"}):Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"Poemas.Net"}),Object(E.jsxs)("div",{className:"box-div",children:[Object(E.jsx)("h2",{children:"Bienvenido"}),Object(E.jsx)("h2",{children:u}),Object(E.jsx)(N.b,{className:"espbutton",to:"/lpo",children:"Generar nuevo poema"}),Object(E.jsx)(N.b,{className:"espbutton",to:"/view",children:"Ver poemas guardados"})]})]})}):Object(E.jsx)(S.a,{to:"/Login"})]})};var A,P,q,B,J,D,R,M,L,G,H,Z,$,W,_,U=function(){return Object(E.jsxs)("nav",{children:[Object(E.jsx)("div",{className:"logo"}),Object(E.jsxs)("ul",{children:[Object(E.jsxs)("li",{children:[" ",Object(E.jsx)("a",{onClick:function(){localStorage.setItem("token","false")},children:Object(E.jsx)(N.b,{to:"/Login",children:"Salir"})})," "]}),Object(E.jsxs)("li",{children:[" ",Object(E.jsx)("a",{children:Object(E.jsx)(N.b,{to:"/Home",children:"Home"})})," "]})]})]})},Y=a(13),F=a(8),K=a(9),Q="orange",V="red",X="#1ed12d",ee=K.b.form(A||(A=Object(F.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n    @media (max-width: 800px){\n        grid-template-columns: 1fr;\n    }\n"]))),te=K.b.label(P||(P=Object(F.a)(["\n    display: block;\n    font-weight: 700;\n    padding: 10px;\n    min-height: 40px;\n    cursor: pointer;\n\n    ","\n"])),(function(e){return"false"===e.valido&&Object(K.a)(q||(q=Object(F.a)(["\n        color: ",";\n    "])),V)})),ae=K.b.div(B||(B=Object(F.a)(["\n    position: relative;\n    z-index: 90;\n"]))),ne=K.b.input(J||(J=Object(F.a)(["\n    font-size:20px;\n    width: 100%;\n    background: rgba(72, 78, 97, 0.6);\n    color: whitesmoke;\n    border-radius: 3px;\n    height: 35px;\n    line-height: 35px;\n    padding: 10px 350px 10px 10px;\n    transition: 0.3s ease all;\n    border: 3px solid transparent;\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.8);\n    background: rgba(72, 78, 97, 0.6);\n\n    &:focus{\n        border: 3px solid ",";\n        outline:none;\n        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);\n    }\n\n    ","\n\n    ","\n"])),Q,(function(e){return"true"===e.valido&&Object(K.a)(D||(D=Object(F.a)(["\n        border: 3px solid transparent;\n    "])))}),(function(e){return"false"===e.valido&&Object(K.a)(R||(R=Object(F.a)(["\n        border: 3px solid "," !important;\n    "])),V)})),oe=K.b.p(M||(M=Object(F.a)(["\n    font-size: 18px;\n    margin-bottom: 0;\n    color: ",";\n    display:none;\n\n    ","\n    ","\n"])),V,(function(e){return"true"===e.valido&&Object(K.a)(L||(L=Object(F.a)(["\n        display: none;\n    "])))}),(function(e){return"false"===e.valido&&Object(K.a)(G||(G=Object(F.a)(["\n        display: block;\n    "])))})),re=K.b.div(H||(H=Object(F.a)(["\n    grid-column: span 2;\n\n    input{\n        margin-right: 10px;   \n    }\n\n    @media (max-width:800px){\n        grid-column: span 1;\n    }\n"]))),se=K.b.div(Z||(Z=Object(F.a)(["\n    display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgrid-column: span 2;\n    \n\t@media (max-width: 800px){\n\t\tgrid-column: span 1;\n\t}\n"]))),ce=K.b.button($||($=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 45px;\n    line-height: 45px;\n    width: 100%;\n    background: rgba(72, 78, 97, 0.6);\n    color:  white;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    transition: .1s ease all;\n\n    &:hover{\n        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);\n    }\n"]))),le=K.b.p(W||(W=Object(F.a)(["\n    font-size: 14px;\n    color: ",";\n    display:none;\n"])),X),ie=K.b.div(_||(_=Object(F.a)(["\n    height: 45px;\n    line-height: 45px;\n    background: red;\n    padding: 0px 15px;\n    grid-column: span 2;\n    p{\n        margin: 0;\n    }\n    b{\n        margin-left: 10px;\n    }\n"]))),je=function(e){var t=e.estado,a=e.cambiarEst,n=e.tipo,o=e.label,r=e.placeholder,s=e.name,c=e.leyError,l=e.expRegular,i=e.funcion,j=function(){l&&(l.test(t.campo)?a(Object(Y.a)(Object(Y.a)({},t),{},{valido:"true"})):a(Object(Y.a)(Object(Y.a)({},t),{},{valido:"false"}))),i&&i()};return Object(E.jsxs)("div",{children:[Object(E.jsx)(te,{htmlFor:s,valido:t.valido,children:o}),Object(E.jsx)(ae,{children:Object(E.jsx)(ne,{type:n,placeholder:r,id:s,value:t.campo,onChange:function(e){a(Object(Y.a)(Object(Y.a)({},t),{},{campo:e.target.value}))},onKeyUp:j,onBlur:j,valido:t.valido})}),Object(E.jsx)(oe,{valido:t.valido,children:c})]})};function be(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,fetch("https://magic-poems.herokuapp.com/singUp",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=14;break}return console.log("Exitoso"),e.next=9,a.json();case 9:return n=e.sent,console.log(n),e.abrupt("return",!0);case 14:return console.log("No se pudo resgistrar"),e.abrupt("return",!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}var de=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(j.a)(e,2),a=t[0];t[1];console.log("token home",a);var o="false"!=a;console.log(o);var r=Object(n.useState)({campo:"",valido:null}),s=Object(j.a)(r,2),c=s[0],b=s[1],u=Object(n.useState)({campo:"",valido:null}),d=Object(j.a)(u,2),p=d[0],m=d[1],x=Object(n.useState)({campo:"",valido:null}),h=Object(j.a)(x,2),O=h[0],g=h[1],f=Object(n.useState)({campo:"",valido:null}),v=Object(j.a)(f,2),y=v[0],k=v[1],w=Object(n.useState)({campo:"",valido:null}),N=Object(j.a)(w,2),C=N[0],I=N[1],T=Object(n.useState)({campo:"",valido:null}),z=Object(j.a)(T,2),A=z[0],P=z[1],q=Object(n.useState)(!1),B=Object(j.a)(q,2),J=B[0],D=B[1],R=Object(n.useState)(null),M=Object(j.a)(R,2),L=M[0],G=M[1],H=Object(n.useState)(null),Z=Object(j.a)(H,2),$=Z[0],W=Z[1],_={usuario:/^[a-zA-Z0-9_-]{4,12}$/,nombre:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,telefono:/^\d{7,14}$/};function U(){return(U=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a={name:t.name,lastName:t.lastName,email:t.email,password:t.password},console.log(a),e.next=5,be(a);case 5:n=e.sent,console.log(n),n?(G(!0),W(!0),b({campo:"",valido:null}),m({campo:"",valido:null}),g({campo:"",valido:null}),k({campo:"",valido:"null"}),I({campo:"",valido:null}),P({campo:"",valido:null})):W(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(E.jsx)("div",{className:"reg-container",children:o?Object(E.jsx)(S.a,{to:"/Home"}):Object(E.jsx)("main",{children:Object(E.jsxs)("div",{className:"form-container",children:[Object(E.jsx)("div",{className:"titulo mb-4",children:Object(E.jsx)("h1",{children:Object(E.jsx)("b",{children:"Registro"})})}),Object(E.jsxs)(ee,{action:"",onSubmit:function(e){(e.preventDefault(),"true"===c.valido&&"true"===p.valido&&"true"===O.valido&&"true"===y.valido&&"true"===C.valido&&"true"===A.valido&&J)?function(e){U.apply(this,arguments)}({name:c.campo,lastName:p.campo,email:C.campo,password:O.campo}):G(!1)},children:[Object(E.jsx)(je,{estado:c,cambiarEst:b,tipo:"text",label:"Nombre(s)",placeholder:"Carlos German",name:"nomb",leyError:"El nombre solo puede contener letras y espacios.",expRegular:_.nombre}),Object(E.jsx)(je,{estado:p,cambiarEst:m,tipo:"text",label:"Apellido(s)",placeholder:"Hernandez Carbajal",name:"apellido",leyError:"El apellido solo puede contener letras y espacios.",expRegular:_.nombre}),Object(E.jsx)(je,{estado:O,cambiarEst:g,tipo:"password",label:"Contrase\xf1a",placeholder:"* * * * * * * *",name:"password1",leyError:"La contrase\xf1a debe tener una mayuscula, un n\xfamero y un caracter especial",expRegular:_.password}),Object(E.jsx)(je,{estado:y,cambiarEst:k,tipo:"password",label:"Repetir Contrase\xf1a",placeholder:"* * * * * * * *",name:"password2",leyError:"Ambas contrase\xf1as deben ser iguales.",funcion:function(){O.campo.length>0&&(O.campo!==y.campo?k((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{valido:"false"})})):k((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{valido:"true"})})))}}),Object(E.jsx)(je,{estado:C,cambiarEst:I,tipo:"email",label:"Correo Electr\xf3nico",placeholder:"correo@ejemplo.com",name:"correo",leyError:"El correo solo puede contener letras, numeros, puntos y guiones",expRegular:_.correo}),Object(E.jsx)(je,{estado:A,cambiarEst:P,tipo:"text",label:"Telefono",placeholder:"4491234568",name:"telefono",leyError:"El telefono solo puede tener de 7 a 14 digitos",expRegular:_.telefono}),Object(E.jsx)(re,{className:"mb-5",children:Object(E.jsxs)(te,{children:[Object(E.jsx)("input",{type:"checkbox",name:"terminos",id:"terminos",checked:J,onChange:function(e){D(e.target.checked)}}),"Acepto los Terminos y Condiciones"]})}),!1===L&&Object(E.jsx)(ie,{children:Object(E.jsxs)("p",{children:[Object(E.jsx)("b",{children:"Error:"})," Por favor rellena el formulario correctamente."]})}),!1===$&&Object(E.jsx)(ie,{children:Object(E.jsxs)("p",{children:[Object(E.jsx)("b",{children:"Error:"})," Correo ya registrado, por favor registre otro usuario."]})}),Object(E.jsxs)(se,{children:[Object(E.jsx)(ce,{type:"submit",children:"Enviar"}),!0===L&&Object(E.jsx)(le,{children:"Formulario enviado exitosamente!"})&&Object(E.jsx)(S.a,{to:"/"})]})]})]})})})};var pe=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(j.a)(e,2),a=t[0];t[1],console.log("token home",a);var o="false"!=a;console.log(o);var r="",s="",c=[],b=Object(n.useState)("No hay poema generado"),u=Object(j.a)(b,2),d=u[0],p=u[1];function x(){return(x=Object(i.a)(l.a.mark((function e(t,n){var o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={keyword:t,author:n},e.next=3,m(o,a);case 3:for(r=e.sent,console.log(r),i=0;i<r.length;i++)s+=r[i]+"\n",c.push(r[i]);p(s),console.log(s),console.log("resultado",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(i.a)(l.a.mark((function e(t){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={tittle:t.tit,keyword:t.key,poem:t.tts},e.next=4,k(n,a);case 4:o=e.sent,console.log("tokenY:",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(E.jsx)("div",{children:o?Object(E.jsx)("div",{children:Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"Poemas"}),Object(E.jsxs)("div",{className:"inputs",children:[Object(E.jsx)("h2",{children:"Generar un poema"}),Object(E.jsxs)("form",{action:"",children:[Object(E.jsx)("input",{type:"text",name:"keyword",id:"keyw"}),Object(E.jsxs)("select",{name:"autor",id:"autor",children:[Object(E.jsx)("option",{value:"OctavioPaz",children:"Octavio Paz"}),Object(E.jsx)("option",{value:"PabloNeruda",children:"Pablo Neruda"}),Object(E.jsx)("option",{value:"JoseLuisBorges",children:"Jos\xe9 Luis Borges"})]})]}),Object(E.jsx)("button",{onClick:function(){console.log("Solitando nuevo poema");var e=document.getElementById("keyw").value,t=document.getElementById("autor").value;console.log(e,t),function(e,t){x.apply(this,arguments)}(e,t)},children:"Generar Poema"})]}),Object(E.jsxs)("div",{className:"box-div",children:[Object(E.jsx)("input",{className:"ttitle",type:"text",name:"titlepoem",id:"tp",placeholder:"Titulo de su poema"}),Object(E.jsx)("button",{className:"saveButton",onClick:function(){var e=document.getElementById("tp").value,t=document.getElementById("keyw").value,a=d.split("\n");a.pop(),console.log("antes",d);var n={tit:e,key:t,tts:a};console.log(a),n&&function(e){h.apply(this,arguments)}(n)},children:"Save"}),Object(E.jsx)("p",{children:d}),Object(E.jsx)("h2",{children:"Pablo Neruda (Ejemplo)"}),Object(E.jsxs)("p",{children:["Me gustas cuando callas porque est\xe1s como ausente,",Object(E.jsx)("br",{}),"y me oyes desde lejos, y mi voz no te toca.",Object(E.jsx)("br",{}),"Parece que los ojos se te hubieran volado",Object(E.jsx)("br",{}),"y parece que un beso te cerrara la boca.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Como todas las cosas est\xe1n llenas de mi alma",Object(E.jsx)("br",{}),"emerges de las cosas, llena del alma m\xeda.",Object(E.jsx)("br",{}),"Mariposa de sue\xf1o, te pareces a mi alma,",Object(E.jsx)("br",{}),"y te pareces a la palabra melancol\xeda.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Me gustas cuando callas y est\xe1s como distante.",Object(E.jsx)("br",{}),"Y est\xe1s como quej\xe1ndote, mariposa en arrullo.",Object(E.jsx)("br",{}),"Y me oyes desde lejos, y mi voz no te alcanza:",Object(E.jsx)("br",{}),"d\xe9jame que me calle con el silencio tuyo.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["D\xe9jame que te hable tambi\xe9n con tu silencio",Object(E.jsx)("br",{}),"claro como una l\xe1mpara, simple como un anillo.",Object(E.jsx)("br",{}),"Eres como la noche, callada y constelada.",Object(E.jsx)("br",{}),"Tu silencio es de estrella, tan lejano y sencillo.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Me gustas cuando callas porque est\xe1s como ausente.",Object(E.jsx)("br",{}),"Distante y dolorosa como si hubieras muerto.",Object(E.jsx)("br",{}),"Una palabra entonces, una sonrisa bastan.",Object(E.jsx)("br",{}),"Y estoy alegre, alegre de que no sea cierto.   ",Object(E.jsx)("br",{})]}),Object(E.jsx)("h2",{children:"Octavio Paz"}),Object(E.jsxs)("p",{children:["Salta la palabra",Object(E.jsx)("br",{}),"adelante del pensamiento",Object(E.jsx)("br",{}),"adelante del sonido",Object(E.jsx)("br",{}),"la palabra salta como un caballo",Object(E.jsx)("br",{}),"adelante del viento",Object(E.jsx)("br",{}),"como un novillo de azufre",Object(E.jsx)("br",{}),"adelante de la noche",Object(E.jsx)("br",{}),"se pierde por las calles de mi cr\xe1neo",Object(E.jsx)("br",{}),"en todas partes las huellas de la fiera",Object(E.jsx)("br",{}),"en la cara del \xe1rbol el tatuaje escarlata",Object(E.jsx)("br",{}),"en la frente del torre\xf3n el tatuaje de hielo",Object(E.jsx)("br",{}),"en el sexo de la iglesia el tatuaje el\xe9ctrico",Object(E.jsx)("br",{}),"sus u\xf1as en tu cuello",Object(E.jsx)("br",{}),"sus patas en tu vientre",Object(E.jsx)("br",{}),"la se\xf1al violeta",Object(E.jsx)("br",{}),"el tornasol que gira hasta el blanco",Object(E.jsx)("br",{}),"hasta el grito hasta el basta",Object(E.jsx)("br",{}),"el girasol que gira como un ay desollado",Object(E.jsx)("br",{}),"la firma del sin nombre a lo largo de tu piel",Object(E.jsx)("br",{}),"en todas partes el grito que ciega",Object(E.jsx)("br",{}),"la oleada negra que cubre el pensamiento",Object(E.jsx)("br",{}),"la campana furiosa que ta\xf1e en mi frente",Object(E.jsx)("br",{}),"la campana de sangre en mi pecho",Object(E.jsx)("br",{}),"la imagen que r\xede en lo alto de la torre",Object(E.jsx)("br",{}),"la palabra que revienta las palabras",Object(E.jsx)("br",{}),"la imagen que incendia todos los puentes",Object(E.jsx)("br",{}),"la desaparecida en mitad del abrazo",Object(E.jsx)("br",{}),"la vagabunda que asesina a los ni\xf1os",Object(E.jsx)("br",{}),"la idiota la mentirosa la incestuosa",Object(E.jsx)("br",{}),"la corza perseguida",Object(E.jsx)("br",{}),"la mendiga prof\xe9tica",Object(E.jsx)("br",{}),"la muchacha que en mitad de la vida",Object(E.jsx)("br",{}),"me despierta y me dice acu\xe9rdate",Object(E.jsx)("br",{})]}),Object(E.jsx)("h2",{children:"Jos\xe9 Luis Borges"}),Object(E.jsxs)("p",{children:["En su grave rinc\xf3n, los jugadores",Object(E.jsx)("br",{}),"rigen las lentas piezas. El tablero",Object(E.jsx)("br",{}),"los demora hasta el alba en su severo",Object(E.jsx)("br",{}),"\xe1mbito en que se odian dos colores.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Adentro irradian m\xe1gicos rigores",Object(E.jsx)("br",{}),"las formas: torre hom\xe9rica, ligero",Object(E.jsx)("br",{}),"caballo, armada reina, rey postrero,",Object(E.jsx)("br",{}),"oblicuo alfil y peones agresores.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Cuando los jugadores se hayan ido,",Object(E.jsx)("br",{}),"cuando el tiempo los haya consumido,",Object(E.jsx)("br",{}),"ciertamente no habr\xe1 cesado el rito.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["En el Oriente se encendi\xf3 esta guerra",Object(E.jsx)("br",{}),"cuyo anfiteatro es hoy toda la tierra.",Object(E.jsx)("br",{}),"Como el otro, este juego es infinito.",Object(E.jsx)("br",{})]}),Object(E.jsx)("p",{children:"II"}),Object(E.jsxs)("p",{children:["Tenue rey, sesgo alfil, encarnizada",Object(E.jsx)("br",{}),"reina, torre directa y pe\xf3n ladino",Object(E.jsx)("br",{}),"sobre lo negro y blanco del camino",Object(E.jsx)("br",{}),"buscan y libran su batalla armada.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["No saben que la mano se\xf1alada",Object(E.jsx)("br",{}),"del jugador gobierna su destino,",Object(E.jsx)("br",{}),"no saben que un rigor adamantino",Object(E.jsx)("br",{}),"sujeta su albedr\xedo y su jornada.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Tambi\xe9n el jugador es prisionero",Object(E.jsx)("br",{}),"(la sentencia es de Omar) de otro tablero",Object(E.jsx)("br",{}),"de negras noches y blancos d\xedas.",Object(E.jsx)("br",{})]}),Object(E.jsxs)("p",{children:["Dios mueve al jugador, y \xe9ste, la pieza.",Object(E.jsx)("br",{}),"\xbfQu\xe9 Dios detr\xe1s de Dios la trama empieza",Object(E.jsx)("br",{}),"de polvo y tiempo y sue\xf1o y agon\xedas?",Object(E.jsx)("br",{})]})]})]})}):Object(E.jsx)(S.a,{to:"/Login"})})};var me=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(j.a)(e,2),a=t[0];t[1],console.log("token home",a);var o="false"!=a;console.log(o);var r="",s="",c=Object(n.useState)("No hay poema recuperado"),b=Object(j.a)(c,2),u=b[0],d=b[1],p=Object(n.useState)("No hay titulo recuperado"),m=Object(j.a)(p,2),x=m[0],h=m[1];function O(){return(O=Object(i.a)(l.a.mark((function e(){var t,n,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a);case 2:for(t=e.sent,console.log("cunisss",t[0].id),n=document.getElementById("IDPOEM");n.options.length>0;)n.remove(0);for(o=0;o<t.length;o++)(r=document.createElement("option")).innerHTML=t[o].title,r.value=t[o].id,n.appendChild(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(i.a)(l.a.mark((function e(t){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={id:t},e.next=4,v(n,a);case 4:for(r=e.sent,console.log(r),o=0;o<r.length;o++)s+=r[o]+"\n";d(s),h(document.getElementById("IDPOEM").innerText),console.log(s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(E.jsx)("div",{children:o?Object(E.jsx)("div",{children:Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"Poemas"}),Object(E.jsxs)("div",{className:"inputs",children:[Object(E.jsx)("h2",{children:"Elija un poema"}),Object(E.jsx)("form",{action:"",children:Object(E.jsx)("select",{name:"autor",id:"IDPOEM"})}),Object(E.jsx)("button",{onClick:function(){!function(e){f.apply(this,arguments)}(document.getElementById("IDPOEM").value)},children:"Recuperar poema"}),Object(E.jsx)("button",{onClick:function(){!function(){O.apply(this,arguments)}()},children:"Cargar lista poemas"})]}),Object(E.jsxs)("div",{className:"box-div",children:[Object(E.jsx)("h2",{children:x}),Object(E.jsx)("p",{children:u})]})]})}):Object(E.jsx)(S.a,{to:"/Login"})})},xe=function(){var e=Object(n.useState)(localStorage.getItem("token")),t=Object(j.a)(e,2),a=t[0],o=(t[1],Object(n.useState)(localStorage.getItem("admin"))),r=Object(j.a)(o,2),s=r[0],c=(r[1],Object(n.useState)("defaul_user")),b=Object(j.a)(c,2),u=b[0],d=b[1],p="false"!=a,m="false"!=s,x="";function O(){return(O=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(a);case 2:x=e.sent,d(x);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){O.apply(this,arguments)}(),Object(E.jsx)("div",{children:p?Object(E.jsx)("div",{children:m?Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"Poemas.Net"}),Object(E.jsxs)("div",{className:"box-div",children:[Object(E.jsx)("h2",{children:"Administrador"}),Object(E.jsx)("h2",{children:u}),Object(E.jsx)(N.b,{className:"espbutton",to:"/users",children:"Usuarios"}),Object(E.jsx)(N.b,{className:"espbutton",to:"/poems",children:"Poemas"})]})]}):Object(E.jsx)(S.a,{to:"/Home"})}):Object(E.jsx)(S.a,{to:"/Login"})})};var he=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Poemas"})})};var Oe=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Usuarios"})})};var ge=function(){return Object(E.jsx)(N.a,{children:Object(E.jsxs)("div",{children:[Object(E.jsx)(U,{}),Object(E.jsxs)(S.d,{children:[Object(E.jsx)(S.b,{exact:!0,path:"/lpo",component:pe}),Object(E.jsx)(S.b,{exact:!0,path:"/view",component:me}),Object(E.jsx)(S.b,{exact:!0,path:"/home",component:z}),Object(E.jsx)(S.b,{exact:!0,path:"/user",component:de}),Object(E.jsx)(S.b,{exact:!0,path:"/adm",component:xe}),Object(E.jsx)(S.b,{exact:!0,path:"/poems",component:he}),Object(E.jsx)(S.b,{exact:!0,path:"/users",component:Oe}),Object(E.jsx)(S.b,{path:"/",component:T})]})]})})};s.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(ge,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.aa07ef1b.chunk.js.map