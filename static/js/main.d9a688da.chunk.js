(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{31:function(e,n,t){},32:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(22),c=t.n(o),s=(t(31),t(32),t(10)),l=t.n(s),i=t(12),d=t(6);function u(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://magic-poems.herokuapp.com/Login",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:return a=e.sent,console.log("token1:",a.access_token),e.abrupt("return",a.access_token);case 12:return e.abrupt("return",!1);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var p=t(2),j=t(15),m=t(1),x=function(e){var n=e.text;return Object(m.jsx)("div",{className:"label",children:Object(m.jsx)("label",{children:n})})},h=function(e){var n=e.attribute,t=e.handleChange,a=e.param;return Object(m.jsx)("div",{className:"input-container",children:Object(m.jsx)("input",{id:n.id,name:n.name,placeholder:n.placeholder,type:n.type,onChange:function(e){return t(e.target.name,e.target.value)},className:a?"input-error":"regular-style"})})},O=function(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),c=Object(d.a)(o,2),s=c[0],b=c[1],O=Object(a.useState)(!1),g=Object(d.a)(O,2),f=g[0],v=g[1],y=Object(a.useState)(!1),w=Object(d.a)(y,2),k=w[0],N=w[1],E=Object(a.useState)(!1),S=Object(d.a)(E,2),C=S[0],z=S[1];function A(e,n){"usuario"===e?(r(n),z(!1)):n.length<8?(v(!0),z(!1)):(v(!1),b(n),z(!1))}function R(){return(R=Object(i.a)(l.a.mark((function e(n){var t,a,r,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.user.length>0&&n.password.length>0)){e.next=9;break}return t={email:n.user,password:n.password},e.next=4,u(t);case 4:a=e.sent,console.log("tokenY:",a),!1!==a?(r=n.user,o=n.password,c={user:r,password:o},s=JSON.stringify(c),localStorage.setItem("account",s),N(!0)):(N(!1),z(!0)),e.next=10;break;case 9:N(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"login-container",children:k?Object(m.jsx)(p.a,{to:"/Home"}):Object(m.jsxs)("div",{className:"login-content",children:[Object(m.jsx)("h1",{children:"\xa1Bienvenido a Poemas.Net!"}),C&&Object(m.jsx)("label",{className:"label-alert",children:" Su contrase\xf1a o usuario son incorrectos, o no existen en nuestra plataforma"}),Object(m.jsxs)("div",{className:"formulario container-fluid w-75",children:[Object(m.jsx)(x,{text:"Correo Electr\xf3nico"}),Object(m.jsx)(h,{attribute:{id:"usuario",name:"usuario",type:"text",placeholder:"ingrese su correo"},handleChange:A}),Object(m.jsx)(x,{text:"Contrase\xf1a"}),Object(m.jsx)(h,{attribute:{id:"contrase\xf1a",name:"contrase\xf1a",type:"password",placeholder:"ingrese su contrase\xf1a"},handleChange:A,param:f}),f&&Object(m.jsx)("label",{className:"label-alert",children:"( Contrase\xf1a incompleta )"}),Object(m.jsx)("div",{className:"submit-button-container",children:Object(m.jsx)("button",{onClick:function(){var e={user:t,password:s};e&&function(e){R.apply(this,arguments)}(e)},children:"Ingresar"})}),Object(m.jsx)("div",{className:"my-3",children:Object(m.jsxs)("span",{className:"alert-gray",children:["No tienes cuenta? ",Object(m.jsx)(j.b,{to:"/user",children:"Reg\xedstrate"})]})})]})]})})};var g=function(){return Object(m.jsx)("div",{className:"home-container",children:Object(m.jsxs)("div",{className:"home-content",children:[Object(m.jsx)("h1",{children:"\xa1Hola!"}),Object(m.jsx)("label",{children:"Has ingresado como: User 1"})]})})};var f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"This is footer"})})};var v,y,w,k,N,E,S,C,z,A,R,T,Z,$,J,H=function(){return Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{className:"logo"}),Object(m.jsx)("ul",{})]})},P=t(11),_=t(4),B=t(5),I="orange",U="red",F="#1ed12d",L=B.b.form(v||(v=Object(_.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n    @media (max-width: 800px){\n        grid-template-columns: 1fr;\n    }\n"]))),D=B.b.label(y||(y=Object(_.a)(["\n    display: block;\n    font-weight: 700;\n    padding: 10px;\n    min-height: 40px;\n    cursor: pointer;\n\n    ","\n"])),(function(e){return"false"===e.valido&&Object(B.a)(w||(w=Object(_.a)(["\n        color: ",";\n    "])),U)})),G=B.b.div(k||(k=Object(_.a)(["\n    position: relative;\n    z-index: 90;\n"]))),K=B.b.input(N||(N=Object(_.a)(["\n    width: 100%;\n    background: rgba(0, 0, 0, .3);\n    color: cadetblue;\n    border-radius: 3px;\n    height: 45px;\n    line-height: 45px;\n    padding: 0 40px 0 10px;\n    transition: 0.3s ease all;\n    border: 3px solid transparent;\n\n    &:focus{\n        border: 3px solid ",";\n        outline:none;\n        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);\n    }\n\n    ","\n\n    ","\n"])),I,(function(e){return"true"===e.valido&&Object(B.a)(E||(E=Object(_.a)(["\n        border: 3px solid transparent;\n    "])))}),(function(e){return"false"===e.valido&&Object(B.a)(S||(S=Object(_.a)(["\n        border: 3px solid "," !important;\n    "])),U)})),M=B.b.p(C||(C=Object(_.a)(["\n    font-size: 12px;\n    margin-bottom: 0;\n    color: ",";\n    display:none;\n\n    ","\n    ","\n"])),U,(function(e){return"true"===e.valido&&Object(B.a)(z||(z=Object(_.a)(["\n        display: none;\n    "])))}),(function(e){return"false"===e.valido&&Object(B.a)(A||(A=Object(_.a)(["\n        display: block;\n    "])))})),Y=B.b.div(R||(R=Object(_.a)(["\n    grid-column: span 2;\n\n    input{\n        margin-right: 10px;   \n    }\n\n    @media (max-width:800px){\n        grid-column: span 1;\n    }\n"]))),q=B.b.div(T||(T=Object(_.a)(["\n    display: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgrid-column: span 2;\n    \n\t@media (max-width: 800px){\n\t\tgrid-column: span 1;\n\t}\n"]))),Q=B.b.button(Z||(Z=Object(_.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 45px;\n    line-height: 45px;\n    width: 30%;\n    background: #fca311;\n    color:  rgb(68, 68, 68);\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    transition: .1s ease all;\n\n    &:hover{\n        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);\n    }\n"]))),V=B.b.p($||($=Object(_.a)(["\n    font-size: 14px;\n    color: ",";\n    display:none;\n"])),F),W=B.b.div(J||(J=Object(_.a)(["\n    height: 45px;\n    line-height: 45px;\n    background: red;\n    padding: 0px 15px;\n    grid-column: span 2;\n    p{\n        margin: 0;\n    }\n    b{\n        margin-left: 10px;\n    }\n"]))),X=function(e){var n=e.estado,t=e.cambiarEst,a=e.tipo,r=e.label,o=e.placeholder,c=e.name,s=e.leyError,l=e.expRegular,i=e.funcion,d=function(){l&&(l.test(n.campo)?t(Object(P.a)(Object(P.a)({},n),{},{valido:"true"})):t(Object(P.a)(Object(P.a)({},n),{},{valido:"false"}))),i&&i()};return Object(m.jsxs)("div",{children:[Object(m.jsx)(D,{htmlFor:c,valido:n.valido,children:r}),Object(m.jsx)(G,{children:Object(m.jsx)(K,{type:a,placeholder:o,id:c,value:n.campo,onChange:function(e){t(Object(P.a)(Object(P.a)({},n),{},{campo:e.target.value}))},onKeyUp:d,onBlur:d,valido:n.valido})}),Object(m.jsx)(M,{valido:n.valido,children:s})]})};function ee(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(i.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(n),e.next=4,fetch("https://magic-poems.herokuapp.com/singUp",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:if(!(t=e.sent).ok){e.next=14;break}return console.log("Exitoso"),e.next=9,t.json();case 9:return a=e.sent,console.log(a),e.abrupt("return",!0);case 14:return console.log("No se pudo resgistrar"),e.abrupt("return",!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}var te=function(){var e=Object(a.useState)({campo:"",valido:null}),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)({campo:"",valido:null}),c=Object(d.a)(o,2),s=c[0],u=c[1],b=Object(a.useState)({campo:"",valido:null}),j=Object(d.a)(b,2),x=j[0],h=j[1],O=Object(a.useState)({campo:"",valido:null}),g=Object(d.a)(O,2),f=g[0],v=g[1],y=Object(a.useState)({campo:"",valido:null}),w=Object(d.a)(y,2),k=w[0],N=w[1],E=Object(a.useState)({campo:"",valido:null}),S=Object(d.a)(E,2),C=S[0],z=S[1],A=Object(a.useState)(!1),R=Object(d.a)(A,2),T=R[0],Z=R[1],$=Object(a.useState)(null),J=Object(d.a)($,2),H=J[0],_=J[1],B={usuario:/^[a-zA-Z0-9_-]{4,12}$/,nombre:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,telefono:/^\d{7,14}$/};function I(){return(I=Object(i.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),t={name:n.name,lastName:n.lastName,email:n.email,password:n.password},console.log(t),e.next=5,ee(t);case 5:a=e.sent,console.log(a),a&&(_(!0),r({campo:"",valido:null}),u({campo:"",valido:null}),h({campo:"",valido:null}),v({campo:"",valido:"null"}),N({campo:"",valido:null}),z({campo:"",valido:null}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"reg-container",children:Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:"titulo mb-4",children:Object(m.jsx)("h1",{children:Object(m.jsx)("b",{children:"Registro"})})}),Object(m.jsxs)(L,{action:"",onSubmit:function(e){(e.preventDefault(),"true"===t.valido&&"true"===s.valido&&"true"===x.valido&&"true"===f.valido&&"true"===k.valido&&"true"===C.valido&&T)?function(e){I.apply(this,arguments)}({name:t.campo,lastName:s.campo,email:k.campo,password:x.campo}):_(!1)},children:[Object(m.jsx)(X,{estado:t,cambiarEst:r,tipo:"text",label:"Nombre(s)",placeholder:"Carlos German",name:"nomb",leyError:"El nombre solo puede contener letras y espacios.",expRegular:B.nombre}),Object(m.jsx)(X,{estado:s,cambiarEst:u,tipo:"text",label:"Apellido(s)",placeholder:"Hernandez Carbajal",name:"apellido",leyError:"El apellido solo puede contener letras y espacios.",expRegular:B.nombre}),Object(m.jsx)(X,{estado:x,cambiarEst:h,tipo:"password",label:"Contrase\xf1a",name:"password1",leyError:"La contrase\xf1a debe tener una mayuscula, un n\xfamero, un caracter especial y longitud mayor a 8",expRegular:B.password}),Object(m.jsx)(X,{estado:f,cambiarEst:v,tipo:"password",label:"Repetir Contrase\xf1a",name:"password2",leyError:"Ambas contrase\xf1as deben ser iguales.",funcion:function(){x.campo.length>0&&(x.campo!==f.campo?v((function(e){return Object(P.a)(Object(P.a)({},e),{},{valido:"false"})})):v((function(e){return Object(P.a)(Object(P.a)({},e),{},{valido:"true"})})))}}),Object(m.jsx)(X,{estado:k,cambiarEst:N,tipo:"email",label:"Correo Electr\xf3nico",placeholder:"correo@ejemplo.com",name:"correo",leyError:"El correo solo puede contener letras, numeros, puntos y guiones",expRegular:B.correo}),Object(m.jsx)(X,{estado:C,cambiarEst:z,tipo:"text",label:"Telefono",placeholder:"4491234568",name:"telefono",leyError:"El telefono solo puede tener de 7 a 14 digitos",expRegular:B.telefono}),Object(m.jsx)(Y,{className:"mb-5",children:Object(m.jsxs)(D,{children:[Object(m.jsx)("input",{type:"checkbox",name:"terminos",id:"terminos",checked:T,onChange:function(e){Z(e.target.checked)}}),"Acepto los Terminos y Condiciones"]})}),!1===H&&Object(m.jsx)(W,{children:Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Error:"})," Por favor rellena el formulario correctamente."]})}),Object(m.jsxs)(q,{children:[Object(m.jsx)(Q,{type:"submit",children:"Enviar"}),!0===H&&Object(m.jsx)(V,{children:"Formulario enviado exitosamente!"})&&Object(m.jsx)(p.a,{to:"/"})]})]})]})})};var ae=function(){return Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(H,{}),Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{exact:!0,path:"/home",component:g}),Object(m.jsx)(p.b,{exact:!0,path:"/user",component:te}),Object(m.jsx)(p.b,{path:"/",component:O})]}),Object(m.jsx)(f,{})]})})};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ae,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d9a688da.chunk.js.map