(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o=t(1),s=t.n(o),l=t(24),d=t.n(l),u=t(0),p=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{children:"Logotipas"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Pagrindinis"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#about",children:"Apie mus"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#contacts",children:"Kontaktai"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#logIn-signUp",children:"Prisijungti"})})]})})]})},b=function(){return Object(u.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Visos teis\u0117s saugomos."]})},j=t(4),x=t(5),f=Object(x.a)(a||(a=Object(j.a)(["\n\nhtml,body{\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n\n  text-align: center;\n  text-transform: uppercase;\n  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif; */\n     /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace; */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n}\n\n\n*,*::after,*::before{\n    margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  transition: 1000ms;\n}\n\n\n\n\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: rgb(255, 255, 255);\n  background-color: #ff7700;\n  background-color: #ff9d00;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n#root {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  /* min-height: calc(100vh - 35px); */\n  min-height: 100vh;\n  padding-bottom: 35px;\n}\n\n/*! Navigation */\nheader {\n  border-radius: 0 0 50px 50px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  height: 30px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);\n\n}\nheader div {\n  background: rgba(128, 128, 128, 0.8);\n  min-width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader div img {\n  width: 20%;\n  height: 30px;\n  object-fit: cover;\n  object-position: 0% 100%;\n}\n\nnav {\n  width: calc(100% - 250px);\n}\nul {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  list-style-type: none;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n  background-color: rgba(51, 51, 51, 0.4);\n}\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 5px 26px;\n  text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\nli a:hover {\n  background-color: rgba(17, 17, 17, 0.8);\n}\n/*! Navigation Ended */\n\n/*! Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(10px);\n  background-color: rgba(51, 51, 51, 0.4);\n  width: 100%;\n  padding: 5px 16px;\n  border-radius: 50px 50px 0 0;\n  left: 50%;\n  transform: translate(-50%);\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);\n\n}\n\n\nbutton, input[type=submit] {\n  border-radius: 10px;\n  width: 100px;\n  height: 30px;\n  background: #ffffff2c;\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    border:1px solid #fb8d17;\n  \n  margin: 0 auto;\n}\n\nbutton:hover, input[type=submit]:hover {\n  \n}\n\nbutton:active, input[type=submit]:active {\n  \n}\nform{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\ninput:not([type=\"submit\"]) {\n          padding: 10px;\n          font-size: 1rem;\n          background: rgba(255, 255, 255, 0.4);\n          border-radius: 10px;\n          border: 1px solid white;\n          color: rgb(61, 60, 71);\n        }\n}\n\n.container {\n  display: grid;\n\n  \n\n  @media (min-width:786px){\n    grid-template-columns: repeat(2, 1fr); \n  \n  }\n\n  @media (min-width: 1024px){\n    grid-template-columns: repeat(3,1fr);\n\n    \n  }\n}\n"]))),g=t(28),h=t(3),m=t(7),O=t(6),y=t.n(O),v=x.b.div(r||(r=Object(j.a)(["\n  padding: 10px;\n  background: rgba(128, 128, 128, 0.5);\n  p,\n  input {\n    padding: 5px;\n  }\n  input {\n    width: 80%;\n    margin: 1px auto;\n    background: rgba(255, 255, 255, 0.3);\n    border: 1px solid white;\n    border-radius: 10px;\n  }\n  button {\n    margin: 10px;\n  }\n"]))),w=function(e){var n=e.id,t=e.name,a=e.age,r=e.email,i=e.password,c=Object(o.useRef)(),s=Object(o.useState)(!1),l=Object(h.a)(s,2),d=l[0],p=l[1],b=Object(o.useState)(t),j=Object(h.a)(b,2),x=j[0],f=j[1],g=Object(o.useState)(a),m=Object(h.a)(g,2),O=m[0],w=m[1],k=Object(o.useState)(r),C=Object(h.a)(k,2),E=C[0],S=C[1],R=Object(o.useState)(i),U=Object(h.a)(R,2),A=U[0],F=U[1];return Object(u.jsxs)(v,{ref:c,children:[!1===d?Object(u.jsx)("p",{children:x}):Object(u.jsx)("input",{value:x,onChange:function(e){return f(e.target.value)},type:"text"}),!1===d?Object(u.jsx)("p",{children:O}):Object(u.jsx)("input",{value:O,onChange:function(e){return w(e.target.value)},type:"text"}),!1===d?Object(u.jsx)("p",{children:E}):Object(u.jsx)("input",{value:E,onChange:function(e){return S(e.target.value)},type:"text"}),!1===d?Object(u.jsx)("p",{children:A}):Object(u.jsx)("input",{value:A,onChange:function(e){return F(e.target.value)},type:"text"}),!1===d?Object(u.jsx)("button",{onClick:function(){return p(!0)},children:"Atnaujinti"}):Object(u.jsx)("button",{onClick:function(){return function(){var e={name:x,age:O,email:E,password:A};y.a.put("http://localhost:5000/api/users/".concat(n),e).then((function(e){return 200===e.status?p(!1):console.log("ERROR: ",e.status)}))}()},children:"I\u0161si\u0173sti"}),Object(u.jsx)("button",{onClick:function(){y.a.delete("http://localhost:5000/api/users/".concat(n)).then((function(e){return 200===e.status?c.current.style.display="none":console.log("ERROR: ",e.status)}))},children:"I\u0161trinti"})]})},k=function(e){var n=e.id,t=e.text,a=e.disabled,r=e.type,i=(e.stateName,Object(o.useContext)(U).formDispatch),c=Object(o.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:n,children:"submit"===r?"":t}),Object(u.jsx)("input",{type:r,id:n,ref:c,value:"submit"===r?t:void 0,disabled:a,onChange:function(){i({type:"UPDATE",payload:{key:n,data:c.current.value}})}})]})},C=function(e){var n=e.data;return Object(u.jsx)(u.Fragment,{children:n.map((function(e){return Object(u.jsx)(k,{id:e.id,text:e.text,disabled:e.disabled,type:e.type,stateName:e.stateName},e.id)}))})},E=x.b.form(i||(i=Object(j.a)(["\n  width: 800px;\n  margin: 0 auto;\n  background-color: #80808060;\n  padding: 10px;\n  display: grid;\n  grid-column: 1fr 1fr;\n  gap: 10px;\n"]))),S={name:"",age:"",email:"",password:""},R=function(e,n){switch(n.type){case"UPDATE":var t="name"===n.payload.key?{name:n.payload.data}:"age"===n.payload.key?{age:n.payload.data}:"email"===n.payload.key?{email:n.payload.data}:"password"===n.payload.key?{password:n.payload.data}:e;return Object(m.a)(Object(m.a)({},e),t);case"RESET":return{name:"",age:"",email:"",password:""};default:return e}},U=Object(o.createContext)(),A=function(){var e=Object(o.useContext)(I),n=(e.allUsersStateUpdate,e.allUsersDispatch),t=Object(o.useState)(""),a=Object(h.a)(t,2),r=a[0],i=a[1],c=Object(o.useRef)(),s=Object(o.useReducer)(R,S),l=Object(h.a)(s,2),d=l[0],p=l[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(U.Provider,{value:{formState:d,formDispatch:p},children:[Object(u.jsx)("h3",{children:"Registracija"}),r?Object(u.jsx)("p",{style:{color:"red",padding:"10px",background:"white"},children:r}):Object(u.jsx)("p",{}),Object(u.jsx)(E,{onSubmit:function(e){e.preventDefault(),d.name.length>0&&d.age>0&&d.email.length>0&&d.password.length>0?(i(""),y.a.post("http://localhost:5000/api/users",d).then((function(e){200===e.status?(i(""),c.current.reset(),p({type:"RESET"}),n({type:"UPDATEUSERARRAY"})):i("Response Status Error:",e.status)}))):i("Patikrinkite duomenys!")},ref:c,children:Object(u.jsx)(C,{data:[{id:"name",text:"Vardas ir Pavard\u0117",type:"text"},{id:"age",type:"number",text:"Am\u017eius"},{id:"email",type:"email",text:"El. pa\u0161to adresas"},{id:"password",text:"Slapta\u017eodis",type:"password"},{id:"submit",text:"Si\u0173sti",type:"submit"}]})})]})})},F=x.b.div(c||(c=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n"]))),D=function(e){var n=e.allUsers;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Vartotojai:"}),Object(u.jsx)(F,{children:n.map((function(e){return Object(u.jsx)(w,{name:e.name,age:e.age,email:e.email,password:e.password,id:e._id},e._id)}))})]})},P={update:!1},N=function(e,n){return"UPDATEUSERARRAY"===n.type?Object(m.a)(Object(m.a)({},e),{},{update:!0}):e},I=Object(o.createContext)(),B=function(){var e=Object(o.useReducer)(N,P),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)([]),i=Object(h.a)(r,2),c=i[0],s=i[1];return Object(o.useEffect)((function(){y.a.get("http://localhost:5000/api/users").then((function(e){return s(Object(g.a)(e.data))}))}),[t]),Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Pagrindinis"}),Object(u.jsx)(I.Provider,{value:{allUsersStateUpdate:t,allUsersDispatch:a},children:Object(u.jsx)(A,{})}),c.length>0?Object(u.jsx)(D,{allUsers:c}):Object(u.jsx)("p",{children:"Loading"})]})};var M=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(p,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"Administratoriaus puslapis"}),Object(u.jsx)(B,{})]}),Object(u.jsx)(b,{})]})};d.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.fa3cc7f2.chunk.js.map