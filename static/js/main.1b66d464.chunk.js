(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{40:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(21),s=c.n(a),o=c(4),i=c(5),l=c(2),d=c(19),j="https://mernecommercebackend.herokuapp.com/api",u=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},b=c(0),m=function(e){var t=e.component,c=Object(d.a)(e,["component"]);return Object(b.jsx)(i.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return u()&&1===u().user.role?Object(b.jsx)(t,Object(l.a)({},e)):Object(b.jsx)(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},h=function(e){var t=e.component,c=Object(d.a)(e,["component"]);return Object(b.jsx)(i.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return u()?Object(b.jsx)(t,Object(l.a)({},e)):Object(b.jsx)(i.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},O=c(3),p=c(27),f=c.n(p),x=function(e){return fetch("".concat(j,"/products?sortBy=").concat(e,"&order=desc&limit=6"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},g=function(){return fetch("".concat(j,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},N=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={limit:t,skip:e,filters:c};return console.log("data",n),fetch("".concat(j,"/products/by/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},v=function(e){var t=e.item,c=e.url;return Object(b.jsx)("div",{className:"product-img",children:Object(b.jsx)("img",{src:"".concat(j,"/").concat(c,"/photo/").concat(t._id),alt:t.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}})})},y=c(18),S=c.n(y),w=function(e){var t,c,r=e.product,a=e.showViewProductButton,s=void 0===a||a,d=e.showAddToCartButton,j=void 0===d||d,u=e.cardToUpdate,m=void 0!==u&&u,h=e.showRemoveProductButton,p=void 0!==h&&h,f=e.setRun,x=void 0===f?function(e){return e}:f,g=e.run,N=void 0===g?void 0:g,y=Object(n.useState)(""),w=Object(O.a)(y,2),k=w[0],C=w[1],T=Object(n.useState)(r.count),A=Object(O.a)(T,2),P=A[0],_=A[1],I=function(e){return function(t){x(!N),_(t.target.value<1?1:t.target.value),t.target.value>=1&&function(e,t){var c=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.map((function(n,r){n._id===e&&(c[r].count=t)})),localStorage.setItem("cart",JSON.stringify(c)))}(e,t.target.value)}};return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header name",children:r.name}),Object(b.jsxs)("div",{className:"card-body",children:[function(e){return e&&Object(b.jsx)(i.a,{to:"/cart"})}(k),Object(b.jsx)(v,{item:r,url:"product"}),Object(b.jsxs)("p",{children:[r.description.substring(0,100),".."]}),Object(b.jsxs)("p",{className:"black-8",children:["Rs",r.price]}),Object(b.jsxs)("p",{className:"black-9",children:["Category: ",r.category&&r.category.name]}),Object(b.jsxs)("p",{className:"black-10",children:["Added on ",S()(r.createdAt).fromNow()]}),(c=r.quantity,c>0?Object(b.jsx)("span",{className:"badge badge-primary badge-pill",children:"In Stock"}):Object(b.jsx)("span",{})),Object(b.jsx)("br",{}),s&&Object(b.jsx)(o.b,{to:"/product/".concat(r._id),children:Object(b.jsx)("button",{className:"btn btn-outline-primary mt-2 mb-2 mr-2",children:"View Product"})}),j&&Object(b.jsx)("button",{onClick:function(){!function(e,t){var c=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.push(Object(l.a)(Object(l.a)({},e),{},{count:1})),c=Array.from(new Set(c.map((function(e){return e._id})))).map((function(e){return c.find((function(t){return t._id==e}))})),localStorage.setItem("cart",JSON.stringify(c)),t())}(r,(function(){C(!0)}))},className:"btn btn-outline-warning mt-2 mb-2",children:"Add to Cart"}),function(e){return e&&Object(b.jsx)("button",{onClick:function(){!function(e){var t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(c,n){c._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(r._id),x(!N)},className:"btn btn-outline-danger mt-2 mb-2",children:"Remove Product"})}(p),(t=m,t&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"input-group mb-3",children:[Object(b.jsx)("div",{className:"input-group-prepend",children:Object(b.jsx)("span",{className:"input-group-text",children:"Adjust Quantity"})}),Object(b.jsx)("input",{type:"number",className:"form-control",onChange:I(r._id),value:P})]})}))]})]})},k=c(10),C=function(){var e=Object(n.useState)({categories:[],category:"",search:"",results:[],searched:!1}),t=Object(O.a)(e,2),c=t[0],r=t[1],a=c.categories,s=c.category,o=c.search,i=c.results,d=c.searched;Object(n.useEffect)((function(){g().then((function(e){e.error?console.log(e.error):r(Object(l.a)(Object(l.a)({},c),{},{categories:e}))}))}),[]);var u=function(e,t){return e&&t.length>0?"Found ".concat(t.length," products"):e&&t.length<1?"No products found":void 0},m=function(){console.log(o,s),o&&function(e){var t=f.a.stringify(e);return console.log(t),fetch("".concat(j,"/products/search?").concat(t),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({search:o||void 0,category:s}).then((function(e){e.error?console.log(e.error):r(Object(l.a)(Object(l.a)({},c),{},{results:e,searched:!0}))}))},h=function(e){e.preventDefault(),m()},p=function(e){return function(t){var n;r(Object(l.a)(Object(l.a)({},c),{},(n={},Object(k.a)(n,e,t.target.value),Object(k.a)(n,"searched",!1),n)))}};return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"container mb-3",children:Object(b.jsx)("form",{onSubmit:h,children:Object(b.jsxs)("span",{className:"input-group-text",children:[Object(b.jsxs)("div",{className:"input-group input-group-lg",children:[Object(b.jsx)("div",{className:"input-group-prepend",children:Object(b.jsxs)("select",{className:"btn mr-2",onChange:p("category"),children:[Object(b.jsx)("option",{value:"All",children:"Pick Category"}),a.map((function(e,t){return Object(b.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(b.jsx)("input",{type:"search",className:"form-control",onChange:p("search"),placeholder:"search by name"})]}),Object(b.jsx)("div",{className:"btn input-group-append",style:{border:"none"},children:Object(b.jsx)("button",{className:"input-group-text",children:"Search"})})]})})}),Object(b.jsx)("div",{className:"container mb-3",children:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:u(d,e)}),Object(b.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(b.jsx)(w,{product:e},t)}))})]})}(i)})]})},T=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"#ffffff"}},A=Object(i.g)((function(e){var t=e.history;return Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:"nav nav-tabs bg-primary",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/"),to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/shop"),to:"/shop",children:"shop"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",style:T(t,"/cart"),to:"/cart",children:["Cart ",Object(b.jsx)("sup",{children:Object(b.jsx)("small",{className:"cart-badge",children:"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0})})]})}),u()&&0===u().user.role&&Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/user/dashboard"),to:"/user/dashboard",children:"Dashboard"})}),u()&&1===u().user.role&&Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/admin/dashboard"),to:"/admin/dashboard",children:"Dashboard"})}),!u()&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/signin"),to:"/signin",children:"Signin"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",style:T(t,"/signup"),to:"/signup",children:"Signup"})})]}),u()&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){!function(e){if(void 0!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(j,"/signout"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))},children:"Signout"})})})]})})})),P=(c(40),function(e){var t=e.title,c=void 0===t?"Title":t,n=e.description,r=void 0===n?"Description":n,a=e.className,s=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)(A,{}),Object(b.jsxs)("div",{className:"jumbotron",children:[Object(b.jsx)("h2",{children:c}),Object(b.jsx)("p",{className:"lead",children:r})]}),Object(b.jsx)("div",{className:a,children:s})]})}),_=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),o=s[0],i=s[1],l=Object(n.useState)(!1),d=Object(O.a)(l,2),j=(d[0],d[1]);return Object(n.useEffect)((function(){x("createdAt").then((function(e){e.error?j(e.error):i(e)})),x("sold").then((function(e){e.error?j(e.error):r(e)}))}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)(P,{title:"Home Page",description:"Node React E-commerce App",className:"container-fluid",children:[Object(b.jsx)(C,{}),Object(b.jsx)("h2",{className:"mb-4",children:"Best Sellers"}),Object(b.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(b.jsx)("div",{className:"col-md-4 mb-3 col-12",children:Object(b.jsx)(w,{product:e},t)})}))}),Object(b.jsx)("h2",{className:"mb-4",children:"New Arrivals"}),Object(b.jsx)("div",{className:"row",children:o.map((function(e,t){return Object(b.jsx)("div",{className:"col-md-4 mb-3 col-12",children:Object(b.jsx)(w,{product:e},t)})}))})]})})},I=function(){var e=Object(n.useState)({email:"admin@gmail.com",password:"Admin@123",error:"",loading:!1,redirectToReferrer:!1}),t=Object(O.a)(e,2),c=t[0],r=t[1],a=c.email,s=c.password,o=c.error,d=c.loading,m=c.redirectToReferrer,h=u().user,p=function(e){return function(t){r(Object(l.a)(Object(l.a)({},c),{},Object(k.a)({error:!1},e,t.target.value)))}},f=function(e){e.preventDefault(),r(Object(l.a)(Object(l.a)({},c),{},{error:!1,loading:!0})),function(e){return fetch("".concat(j,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:a,password:s}).then((function(e){e.error?r(Object(l.a)(Object(l.a)({},c),{},{error:e.error,loading:!1})):function(e,t){void 0!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(l.a)(Object(l.a)({},c),{},{redirectToReferrer:!0}))}))}))};return Object(b.jsx)("div",{children:Object(b.jsxs)(P,{title:"Signin",description:"Node React E-commerce App",className:"container col-md-8 offset-md-2",children:[Object(b.jsx)("div",{className:"alert alert-danger",style:{display:o?"":"none"},children:o}),d&&Object(b.jsx)("div",{className:"alert alert-info",children:Object(b.jsx)("h2",{children:"Loading..."})}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"email"}),Object(b.jsx)("input",{onChange:p("email"),type:"email",className:"form-control",value:a})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"password"}),Object(b.jsx)("input",{onChange:p("password"),type:"password",className:"form-control",value:s})]}),Object(b.jsx)("button",{onClick:f,type:"submit",className:"btn btn-primary",children:"Submit"})]}),m?1===h.role?Object(b.jsx)(i.a,{to:"/admin/dashboard"}):Object(b.jsx)(i.a,{to:"/user/dashboard"}):u()?Object(b.jsx)(i.a,{to:"/"}):void 0]})})},E=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(O.a)(e,2),c=t[0],r=t[1],a=c.name,s=c.email,i=c.password,d=c.error,u=c.success,m=function(e){return function(t){r(Object(l.a)(Object(l.a)({},c),{},Object(k.a)({error:!1},e,t.target.value)))}},h=function(e){var t;e.preventDefault(),r(Object(l.a)(Object(l.a)({},c),{},{error:!1})),(t={name:a,email:s,password:i},fetch("".concat(j,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){console.log(e),e.error?r(Object(l.a)(Object(l.a)({},c),{},{error:e.error,success:!1})):r(Object(l.a)(Object(l.a)({},c),{},{name:"",email:"",password:"",error:"",success:!0}))}))};return Object(b.jsx)("div",{children:Object(b.jsxs)(P,{title:"Signup",description:"Node React E-commerce App",className:"container col-md-8 offset-md-2",children:[Object(b.jsx)("div",{className:"alert alert-danger",style:{display:d?"":"none"},children:d}),Object(b.jsxs)("div",{className:"alert alert-info",style:{display:u?"":"none"},children:["New account is created. Please ",Object(b.jsx)(o.b,{to:"/signin",children:"Signin"})]}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Name"}),Object(b.jsx)("input",{onChange:m("name"),type:"text",className:"form-control",value:a})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"email"}),Object(b.jsx)("input",{onChange:m("email"),type:"email",className:"form-control",value:s})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"password"}),Object(b.jsx)("input",{onChange:m("password"),type:"password",className:"form-control",value:i})]}),Object(b.jsx)("button",{onClick:h,type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})},D=function(){var e=u().user,t=(e._id,e.name),c=e.email,n=e.role;return Object(b.jsx)(P,{title:"Dashboard",description:"User Dashboard",className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h4",{className:"card-header",children:"User Links"}),Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/cart",children:"My Cart"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/profile/update",children:"jd"})})]})]})}),Object(b.jsxs)("div",{className:"col-md-9",children:[Object(b.jsxs)("div",{className:"card mb-5",children:[Object(b.jsx)("h3",{className:"card-header",children:"Usere Information"}),Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:t}),Object(b.jsx)("li",{className:"list-group-item",children:c}),Object(b.jsx)("li",{className:"list-group-item",children:1===n?"Admin":"Registered User"})]})]}),Object(b.jsxs)("div",{className:"card mb-5",children:[Object(b.jsx)("h3",{className:"card-header",children:"Purchase history"}),Object(b.jsx)("ul",{className:"list-group",children:Object(b.jsx)("li",{className:"list-group-item",children:"history"})})]})]})]})})},B=function(){var e=u().user,t=(e._id,e.name),c=e.email,n=e.role;return Object(b.jsx)(P,{title:"Dashboard",description:"User Dashboard",className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h4",{className:"card-header",children:"Admin Links"}),Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/create/category",children:"Create Category"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/create/product",children:"Create Product"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/admin/orders",children:"View Orders"})})]})]})}),Object(b.jsx)("div",{className:"col-md-9",children:Object(b.jsxs)("div",{className:"card mb-5",children:[Object(b.jsx)("h3",{className:"card-header",children:"Usere Information"}),Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:t}),Object(b.jsx)("li",{className:"list-group-item",children:c}),Object(b.jsx)("li",{className:"list-group-item",children:1===n?"Admin":"Registered User"})]})]})})]})})},J=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(O.a)(a,2),i=s[0],l=s[1],d=Object(n.useState)(!1),m=Object(O.a)(d,2),h=m[0],p=m[1],f=u(),x=f.user,g=f.token,N=function(e){l(""),r(e.target.value)},v=function(e){e.preventDefault(),l(""),p(!1),function(e,t,c){return fetch("".concat(j,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(x._id,g,{name:c}).then((function(e){if(e.error)return l(e.error);l(""),p(!0)}))};return Object(b.jsx)(P,{title:"Add a new category",description:"G'day ".concat(x.name,", ready to add a new category"),className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(i)return Object(b.jsx)("h3",{className:"text-danger",children:"Category is should be unique"})}(),function(){if(h)return Object(b.jsxs)("h3",{className:"text-success",children:[c," is created"]})}(),Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",onChange:N,autoFocus:!0,value:c,required:!0})]}),Object(b.jsx)("button",{className:"btn btn-outline-primary",children:"Create Category"})]}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsx)(o.b,{to:"/admin/dashboard",className:"text-warning",children:"Back to Dashboard"})})]})})})},R=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createProduct:"",redirectToProfile:!1,formData:""}),t=Object(O.a)(e,2),c=t[0],r=t[1],a=c.name,s=c.description,i=c.price,d=c.categories,m=(c.category,c.quantity),h=(c.shipping,c.loading),p=c.error,f=c.createProduct,x=(c.redirectToProfile,c.formData),g=u(),N=g.user,v=g.token,y=function(){fetch("".concat(j,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?r(Object(l.a)(Object(l.a)({},c),{},{error:e.error})):r(Object(l.a)(Object(l.a)({},c),{},{categories:e,formData:new FormData}))}))};Object(n.useEffect)((function(){y()}),[]);var S=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;x.set(e,n),r(Object(l.a)(Object(l.a)({},c),{},Object(k.a)({},e,n)))}},w=function(e){e.preventDefault(),r(Object(l.a)(Object(l.a)({},c),{},{error:"",loading:!0})),function(e,t,c){return fetch("".concat(j,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:c}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(N._id,v,x).then((function(e){e.error?r(Object(l.a)(Object(l.a)({},c),{},{error:e.error})):r(Object(l.a)(Object(l.a)({},c),{},{name:"",description:"",photo:"",price:"",quantity:"",error:"",loading:!1,createProduct:e.name}))}))};return Object(b.jsx)(P,{title:"Add a new product",description:"G'day ".concat(N.name,", ready to add a new product"),className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(b.jsx)("div",{className:"alert alert-danger",style:{display:p?"":"none"},children:p}),h&&Object(b.jsx)("div",{className:"alert alert-success",children:Object(b.jsx)("h2",{children:"loading..."})}),Object(b.jsx)("div",{className:"alert alert-info",style:{display:f?"":"none"},children:Object(b.jsxs)("h2",{children:["".concat(f)," is created!"]})}),Object(b.jsxs)("form",{className:"mb-3",onSubmit:w,children:[Object(b.jsx)("h4",{children:"Post Photo"}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("label",{className:"btn btn-secondary",children:Object(b.jsx)("input",{onChange:S("photo"),type:"file",name:"photo",accept:"image/*"})})}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Name"}),Object(b.jsx)("input",{onChange:S("name"),type:"text",className:"form-control",value:a})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Description"}),Object(b.jsx)("textarea",{onChange:S("description"),type:"text",className:"form-control",value:s})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Price"}),Object(b.jsx)("input",{onChange:S("price"),type:"number",className:"form-control",value:i})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Category"}),Object(b.jsxs)("select",{onChange:S("category"),className:"form-control",children:[Object(b.jsx)("option",{children:"Please select"}),d&&d.map((function(e,t){return Object(b.jsx)("option",{value:e._id,children:e.name},t)}))]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Shipping"}),Object(b.jsxs)("select",{onChange:S("shipping"),className:"form-control",children:[Object(b.jsx)("option",{value:"0",children:"No"}),Object(b.jsx)("option",{value:"1",children:"Yes"})]})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"text-muted",children:"Quantity"}),Object(b.jsx)("input",{onChange:S("quantity"),type:"number",className:"form-control",value:m})]}),Object(b.jsx)("button",{className:"btn btn-outline-primary",children:"Create Product"})]}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsx)(o.b,{to:"/admin/dashboard",className:"text-warning",children:"Back to Dashboard"})})]})})})},G=c(14),z=function(e){var t=e.categories,c=e.handleFilters,r=Object(n.useState)([]),a=Object(O.a)(r,2),s=a[0],o=a[1],i=function(e){return function(){var t=s.indexOf(e),n=Object(G.a)(s);-1===t?n.push(e):n.splice(t,1),o(n),c(n)}};return t.map((function(e,t){return Object(b.jsxs)("li",{className:"list-unstyled",children:[Object(b.jsx)("input",{onChange:i(e._id),value:s.indexOf(-1===e.id),type:"checkbox",className:"form-check-input"}),Object(b.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))},F=function(e){var t=e.prices,c=e.handleFilters,r=Object(n.useState)(0),a=Object(O.a)(r,2),s=(a[0],a[1]),o=function(e){c(e.target.value),s(e.target.value)};return t.map((function(e,t){return Object(b.jsxs)("div",{children:[console.log(e),Object(b.jsx)("input",{onChange:o,type:"radio",name:e,value:"".concat(e._id),className:"mr-2 ml-4"}),Object(b.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))},U=[{_id:0,name:"Any",array:[]},{_id:1,name:"0 to 1000",array:[0,1e3]},{_id:2,name:"1000 to 10000",array:[1e3,1e4]},{_id:3,name:"10000 to 50000",array:[1e4,5e4]},{_id:4,name:"More than 50000",array:[5e4,1e5]}],q=function(){var e=Object(n.useState)({filters:{category:[],price:[]}}),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),o=s[0],i=s[1],d=Object(n.useState)(!1),j=Object(O.a)(d,2),u=(j[0],j[1]),m=Object(n.useState)(6),h=Object(O.a)(m,2),p=h[0],f=(h[1],Object(n.useState)(0)),x=Object(O.a)(f,2),v=x[0],y=x[1],S=Object(n.useState)(0),k=Object(O.a)(S,2),C=k[0],T=k[1],A=Object(n.useState)([]),_=Object(O.a)(A,2),I=_[0],E=_[1],D=function(e){N(0,p,e).then((function(e){e.error?u(e.error):(E(e.data),T(e.size),y(0))}))},B=function(){var e=v+p;N(e,p,c.filters).then((function(t){t.error?u(t.error):(E([].concat(Object(G.a)(I),Object(G.a)(t.data))),T(t.size),y(e))}))};Object(n.useEffect)((function(){g().then((function(e){e.error?u(e.error):i(e)})),D(c.filters)}),[]);var J=function(e,t){var n=Object(l.a)({},c);if(n.filters[t]=e,"price"===t){var a=R(e);n.filters[t]=a}D(n.filters),r(n)},R=function(e){var t=U,c=[];for(var n in t)t[n]._id===parseInt(e)&&(c=t[n].array);return c};return Object(b.jsx)("div",{children:Object(b.jsx)(P,{title:"Shop Page",description:"Node React E-commerce App",className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h4",{children:"Filter by categories"}),Object(b.jsx)("ul",{children:Object(b.jsx)(z,{categories:o,handleFilters:function(e){return J(e,"category")}})}),Object(b.jsx)("h4",{children:"Filter by Price range"}),Object(b.jsx)("ul",{style:{paddingLeft:0},children:Object(b.jsx)(F,{prices:U,handleFilters:function(e){return J(e,"price")}})})]}),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h2",{className:"mb-4",children:"Products"}),Object(b.jsx)("div",{className:"row",children:I.map((function(e,t){return Object(b.jsx)("div",{className:"col-md-4 mb-3 col-12",children:Object(b.jsx)(w,{product:e},t)})}))}),Object(b.jsx)("hr",{}),C>0&&C>=p&&Object(b.jsx)("button",{className:"btn btn-warning mb-5",onClick:B,children:"Load More"})]})]})})})},M=function(e){var t=Object(n.useState)({}),c=Object(O.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),o=Object(O.a)(s,2),i=(o[0],o[1]),l=Object(n.useState)([]),d=Object(O.a)(l,2),u=d[0],m=d[1],h=function(e){(function(e){return fetch("".concat(j,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?i(e.error):(a(e),function(e){return fetch("".concat(j,"/products/related/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(e._id).then((function(e){e.error?i(e.error):m(e)})))}))};return Object(n.useEffect)((function(){var t=e.match.params.productId;h(t)}),[e]),Object(b.jsxs)(P,{title:r&&r.name,description:r&&r.description&&r.description.substring(0,100),className:"container-fluid",children:[Object(b.jsx)("h2",{className:"mb-4",children:"Single Product"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-8",children:r&&r.description&&Object(b.jsx)(w,{product:r,showViewProductButton:!1})}),Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)("h4",{children:"Related Products"}),u.map((function(e,t){return Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)(w,{product:e},t)})}))]})]})]})},L=(c(41),c(28)),V=c.n(L),Y=function(e){var t=e.products,c=e.setRun,r=e.run,a=Object(n.useState)({success:!1,clientToken:null,error:"",instance:{},address:""}),s=Object(O.a)(a,2),i=s[0],d=s[1],m=u()&&u().user._id,h=u()&&u().token,p=function(e,t){(function(e,t){return fetch("".concat(j,"/braintree/getToken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){e.error?d(Object(l.a)(Object(l.a)({},i),{},{error:e.error})):d(Object(l.a)(Object(l.a)({},i),{},{clientToken:e.clientToken}))}))},f=i.address,x=function(){var e;i.instance.requestPaymentMethod().then((function(n){console.log(n),e=n.nonce,console.log("send nonce and total to process:",e,y(t));var a={paymentMethodNonce:e,amount:y(t)};(function(e,t,c){return fetch("".concat(j,"/braintree/payment/").concat(e),{method:"post",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(m,h,a).then((function(e){d(Object(l.a)(Object(l.a)({},n),{},{success:e.success}));var a={products:t,transaction_id:e.transaction.id,amount:e.transaction.amount,address:f};(function(e,t,c){return fetch("".concat(j,"/order/create/").concat(e),{method:"post",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:c})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(m,h,a).then((function(e){var t;t=function(){c(!r),console.log("payment success")},"undefined"!==typeof window&&(localStorage.removeItem("cart"),t())}))})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log("dropin error: ",e),d(Object(l.a)(Object(l.a)({},i),{},{error:e.message}))}))},g=function(e){d(Object(l.a)(Object(l.a)({},i),{},{address:e.target.value}))};Object(n.useEffect)((function(){p(m,h)}),[]);var N,v,y=function(){return t.reduce((function(e,t){return e+t.count*t.price}),0)};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Total: Rs ",y()]}),(v=i.success,Object(b.jsx)("div",{className:"alert alert-info",style:{display:v?"":"none"},children:"Thanks! Your payment was successful!"})),(N=i.error,Object(b.jsx)("div",{className:"alert alert-danger",style:{display:N?"":"none"},children:N})),u()?Object(b.jsx)("div",{children:Object(b.jsx)("div",{onBlur:function(e){return d(Object(l.a)(Object(l.a)({},i),{},{error:""}))},children:null!==i.clientToken&&t.length>0?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"gorm-group mb-3",children:[Object(b.jsx)("label",{className:"text-muted",children:"Delivery address:"}),Object(b.jsx)("textarea",{onChange:g,className:"form-control",value:i.address,placeholder:"Type your delivery address here..."})]}),Object(b.jsx)(V.a,{options:{authorization:i.clientToken,paypal:{flow:"vault"}},onInstance:function(e){return i.instance=e}}),Object(b.jsx)("button",{className:"btn btn-success btn-block",onClick:x,children:"Pay"})]}):null})}):Object(b.jsx)(o.b,{to:"/signin",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Sign/Signup"})})]})},H=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(O.a)(a,2),i=s[0],l=s[1];Object(n.useEffect)((function(){r("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])}),[i]);return Object(b.jsx)(P,{title:"Shopping Cart",description:"Manage your cart items. Add remove checkout or continue shopping.",className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6",children:c.length>0?function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Your cart has ","".concat(e.length)," items"]}),Object(b.jsx)("hr",{}),e.map((function(e,t){return Object(b.jsx)(w,{product:e,showAddToCartButton:!1,cardToUpdate:!0,showRemoveProductButton:!0,setRun:l,run:i},t)}))]})}(c):void o.b}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsx)("h2",{className:"mb-4",children:"Your cart summary"}),Object(b.jsx)("hr",{}),Object(b.jsx)(Y,{setRun:l,run:i,products:c})]})]})})},Q=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(O.a)(a,2),o=s[0],i=s[1],l=u(),d=l.user,m=l.token,h=function(){(function(e,t){return fetch("".concat(j,"/order/list/").concat(e),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(d._id,m).then((function(e){e.error||r(e)}))},p=function(){(function(e,t){return fetch("".concat(j,"/order/status-values/").concat(e),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(d._id,m).then((function(e){e.error||i(e)}))};Object(n.useEffect)((function(){h(),p()}),[]);var f=function(e,t){(function(e,t,c,n){return fetch("".concat(j,"/order/").concat(c,"/status/").concat(e),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({status:n,orderId:c})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(d._id,m,t,e.target.value).then((function(e){e.error?console.log("Status update failed"):h()}))},x=function(e){return Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsxs)("h3",{className:"mark mb-4",children:["Status: ",e.status]}),Object(b.jsxs)("select",{className:"form-control",onChange:function(t){return f(t,e._id)},children:[Object(b.jsx)("option",{children:"Update Status"}),o.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]})]})},g=function(e,t){return Object(b.jsxs)("div",{className:"input-group mb-2 mr-sm-2",children:[Object(b.jsx)("div",{className:"input-group-prepend",children:Object(b.jsx)("div",{className:"input-group-text",children:e})}),Object(b.jsx)("input",{type:"text",value:t,className:"form-control",readOnly:!0})]})};return Object(b.jsx)(P,{title:"Orders",description:"G'day ".concat(d.name,", you can manage all the orders here"),className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-8 offset-md-2",children:[c.length>0?Object(b.jsxs)("h1",{className:"text-danger display-2",children:["Total orders: ",c.length]}):Object(b.jsx)("h1",{className:"text-danger",children:"No orders"}),function(e){return e.length<1?Object(b.jsx)("h4",{children:"No orders"}):null}(c),c.map((function(e,t){return Object(b.jsxs)("div",{className:"mt-5",style:{borderBottom:"5px solid indigo"},children:[Object(b.jsx)("h2",{className:"mb-5",children:Object(b.jsxs)("span",{className:"bg-primary",children:["Order ID: ",e._id]})}),Object(b.jsxs)("ul",{className:"list-group mb-2",children:[Object(b.jsx)("li",{className:"list-group-item",children:x(e)}),Object(b.jsx)("li",{className:"list-group-item",children:e.transaction_id}),Object(b.jsx)("li",{className:"list-group-item",children:e.amount}),Object(b.jsxs)("li",{className:"list-group-item",children:["Order by: ",e.user.name]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Ordered on:",S()(e.createdAt).fromNow()]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Delivery address: ",e.address]})]}),Object(b.jsxs)("h3",{className:"mt-4 mb-4 font-italic",children:["Total products in the order: ",e.products.length]}),e.products.map((function(e,t){return Object(b.jsxs)("div",{className:"mb-4",style:{padding:"20px",border:"1px solid indigo"},children:[g("Product name",e.name),g("Product price",e.price),g("Product total",e.count),g("Product Id",e._id)]},t)}))]},t)}))]})})})},W=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",exact:!0,component:_}),Object(b.jsx)(i.b,{path:"/shop",exact:!0,component:q}),Object(b.jsx)(i.b,{path:"/product/:productId",exact:!0,component:M}),Object(b.jsx)(i.b,{path:"/cart",exact:!0,component:H}),Object(b.jsx)(i.b,{path:"/signin",exact:!0,component:I}),Object(b.jsx)(i.b,{path:"/signup",exact:!0,component:E}),Object(b.jsx)(h,{path:"/user/dashboard",exact:!0,component:D}),Object(b.jsx)(m,{path:"/admin/dashboard",exact:!0,component:B}),Object(b.jsx)(m,{path:"/create/category",exact:!0,component:J}),Object(b.jsx)(m,{path:"/create/product",exact:!0,component:R}),Object(b.jsx)(m,{path:"/admin/orders",exact:!0,component:Q})]})})};c(58);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.1b66d464.chunk.js.map