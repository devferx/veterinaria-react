(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=(t(11),t(3)),i=t(1),m=t(2);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var s=function(e){var a=e.crearCita,t={mascota:"",propietario:"",fecha:"",hora:"",sintomas:""},l=Object(n.useState)(t),c=Object(i.a)(l,2),o=c[0],s=c[1],p=function(e){s(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(t,!0).forEach((function(a){Object(m.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},o,Object(m.a)({},e.target.name,e.target.value)))};return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Crear Cita"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o),s(t)}},r.a.createElement("label",null,"Nombre Mascota"),r.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:p,value:o.mascota}),r.a.createElement("label",null,"Nombre del Propietario"),r.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre del Propietario de la Mascota",onChange:p,value:o.propietario}),r.a.createElement("label",null,"Fecha"),r.a.createElement("input",{type:"date",className:"u-full-width",name:"fecha",onChange:p,value:o.fecha}),r.a.createElement("label",null,"Hora"),r.a.createElement("input",{type:"time",className:"u-full-width",name:"hora",onChange:p,value:o.hora}),r.a.createElement("label",null,"Sintomas"),r.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:p,value:o.sintomas}),r.a.createElement("button",{type:"submit",className:"button-primary u-full-width"},"Agregar")))},p=function(e){var a=e.cita,t=e.index,n=e.eliminarCita;return r.a.createElement("div",{className:"cita"},r.a.createElement("p",null,"Mascota: ",r.a.createElement("span",null,a.mascota)),r.a.createElement("p",null,"Due\xf1o: ",r.a.createElement("span",null,a.propietario)),r.a.createElement("p",null,"Fecha: ",r.a.createElement("span",null,a.fecha)),r.a.createElement("p",null,"Hora: ",r.a.createElement("span",null,a.hora)),r.a.createElement("p",null,"Sintomas: ",r.a.createElement("span",null,a.sintomas)),r.a.createElement("button",{type:"button",onClick:function(){return n(t)},className:"button eliminar u-full-width"},"Eliminar X"))},h=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(e){var a=Object(o.a)(t);a.splice(e,1),l(a)},m=0===Object.keys(t).length?"No hay Citas":"Administrar las citas";return r.a.createElement("div",null,r.a.createElement("h1",null,"Administrador de pacientes"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement(s,{crearCita:function(e){var a=[].concat(Object(o.a)(t),[e]);l(a)}})),r.a.createElement("div",{className:"one-half column"},r.a.createElement("h2",null,m),t.map((function(e,a){return r.a.createElement(p,{key:a,index:a,cita:e,eliminarCita:c})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){e.exports=t(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.ab937464.chunk.js.map