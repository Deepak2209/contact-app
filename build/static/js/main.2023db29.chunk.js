(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},31:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(14),r=t.n(l),m=t(7),o=t(8),s=t(10),i=function(e){var a={fullname:"",mobile:"",email:"",address:""},t=Object(n.useState)(a),l=Object(o.a)(t,2),r=l[0],i=l[1];Object(n.useEffect)((function(){""==e.currentId?i(Object(m.a)({},a)):i(Object(m.a)({},e.contactObject[e.currentId]))}),[e.currentId,e.contactObject]);var u=function(e){var a=e.target,t=a.name,n=a.value;i(Object(m.a)(Object(m.a)({},r),{},Object(s.a)({},t,n)))};return c.a.createElement("form",{autoComplete:"off",onSubmit:function(a){a.preventDefault(),e.addOrEdit(r)}},c.a.createElement("div",{className:" form-group input-group flex-nowrap"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",id:"addon-wrapping"},c.a.createElement("i",{className:"fas fa-user"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"fullname",value:r.fullname,onChange:u})),c.a.createElement("div",{className:"form-row "},c.a.createElement("div",{className:"form-group  input-group col-md-6"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text"},c.a.createElement("i",{className:"fas fa-mobile-alt"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Mobile",name:"mobile",value:r.mobile,onChange:u})),c.a.createElement("div",{className:"form-group input-group col-md-6"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("div",{className:"input-group-text"},c.a.createElement("i",{className:"fas fa-envelope"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email",name:"email",value:r.email,onChange:u}))),c.a.createElement("div",{className:"form-group input-group"},c.a.createElement("textarea",{className:"form-control",placeholder:"Full Address",name:"address",value:r.address,onChange:u})),c.a.createElement("div",{className:"form-group "},c.a.createElement("input",{type:"submit",value:""==e.currentId?"Save":"Update",className:"btn btn-primary btn-block"})))},u=t(15).initializeApp({apiKey:"AIzaSyAxtA-rO_Xjpyx24dWlTb6gCJFPyBNN90o",authDomain:"contact-app-8fb1d.firebaseapp.com",databaseURL:"https://contact-app-8fb1d.firebaseio.com",projectId:"contact-app-8fb1d",storageBucket:"contact-app-8fb1d.appspot.com",messagingSenderId:"415372902520",appId:"1:415372902520:web:d1f989a1bbab5f54bc2d8d"}).database().ref(),d=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),d=s[0],p=s[1];Object(n.useEffect)((function(){u.child("contacts").on("value",(function(e){null!==e.val()?l(Object(m.a)({},e.val())):l({})}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4 text-center"},"Contact Register"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(i,{addOrEdit:function(e){""==d?u.child("contacts").push(e,(function(e){e?console.log(e):p("")})):u.child("contacts/".concat(d)).set(e,(function(e){e?console.log(e):p("")}))},currentId:d,contactObject:t})),c.a.createElement("div",{className:"col-md-7"},c.a.createElement("table",{className:"table table-borderless table-striped"},c.a.createElement("thead",{className:"thead-light"},c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Mobile"),c.a.createElement("td",null,"Email"),c.a.createElement("td",null,"Actions"))),c.a.createElement("tbody",null,Object.keys(t).map((function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,t[e].fullname),c.a.createElement("td",null,t[e].mobile),c.a.createElement("td",null,t[e].email),c.a.createElement("td",null,c.a.createElement("a",{className:"btn text-primary",onClick:function(){p(e)}},c.a.createElement("i",{className:"fas fa-pencil-alt"})),c.a.createElement("a",{className:"btn text-danger",onClick:function(){var a;a=e,window.confirm("Are you sure to delete this record ?")&&u.child("contacts/".concat(a)).remove((function(e){e?console.log(e):p("")}))}},c.a.createElement("i",{className:"fas fa-trash-alt"}))))})))))))};var p=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 offset-md-1"},c.a.createElement(d,null))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2023db29.chunk.js.map