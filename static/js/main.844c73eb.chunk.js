(this["webpackJsonpstaff-directory"]=this["webpackJsonpstaff-directory"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(5),s=a.n(n),i=a(3),r=a(0),o={img:{height:"8vh"},pg:{margin:0,padding:0}},l=function(e){return e.employees.map((function(e,t){var a=e.id,c=e.name,n=e.image,s=e.phone,i=e.email,l=e.dob;return Object(r.jsxs)("div",{className:"row py-2",style:{background:(t+1)%2===0?"#fff":"#f6f5f5"},children:[Object(r.jsx)("div",{className:"col-2 d-flex",children:Object(r.jsx)("img",{className:"img-fluid rounded mx-auto",style:o.img,src:n,alt:c})}),Object(r.jsx)("div",{className:"col-3 d-flex align-items-center justify-content-center",children:Object(r.jsx)("p",{className:"text-center",style:o.pg,children:c})}),Object(r.jsx)("div",{className:"col-2 d-flex align-items-center justify-content-center",children:Object(r.jsx)("p",{className:"text-center",style:o.pg,children:s})}),Object(r.jsx)("div",{className:"col-3 d-flex align-items-center justify-content-center",children:Object(r.jsx)("a",{className:"text-center",href:"#",children:i})}),Object(r.jsx)("div",{className:"col-2 d-flex align-items-center justify-content-center",children:Object(r.jsx)("p",{className:"text-center",style:o.pg,children:l})})]},a)}))},m={header:{background:"#0f3460",color:"#fff",height:"10vh"},redBar:{background:"#e94560",height:"5px"}};var d=function(){return Object(r.jsxs)("header",{className:"row",children:[Object(r.jsxs)("div",{className:"col-12 p-2",style:m.header,children:[Object(r.jsx)("h1",{className:"text-center",children:"Staff Directory"}),Object(r.jsx)("p",{className:"text-center",children:"Click on carrots to filter by heading or use the search box to narrow your results"})]}),Object(r.jsx)("div",{className:"col-12",style:m.redBar})]})};var j=function(e){return Object(r.jsx)("div",{className:"row justify-content-center mb-5",children:Object(r.jsx)("div",{className:"col-12 input-group w-25 p-3",children:Object(r.jsx)("input",{className:"form-control mx-auto text-center",type:"text",placeholder:"Search by name",value:e.search,onChange:function(t){return e.searchEmployees(t)}})})})};a(11);var h=function(e){return Object(r.jsxs)("div",{className:"row pt-2 mt-5 border",children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("h6",{className:"text-center",children:"Image"})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsxs)("h6",{className:"text-center sort",onClick:function(t){return t.preventDefault(),e.sort,e.setSort("asc"),void("asc"===e.sort&&e.setSort("desc"))},children:["Name ",Object(r.jsx)("span",{children:e.carrot})]})}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("h6",{className:"text-center",children:"Phone"})}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)("h6",{className:"text-center",children:"Email"})}),Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)("h6",{className:"text-center",children:"DOB"})})]})},b=a(2);var x=function(){var e=Object(c.useState)(b),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),m=o[0],x=o[1],p=Object(c.useState)(""),g=Object(i.a)(p,2),u=g[0],f=g[1],O=Object(c.useState)(""),v=Object(i.a)(O,2),N=v[0],y=v[1];return Object(c.useEffect)((function(){if(""!==m){for(var e=[],t=0;t<b.length;t++)b[t].name.toLowerCase().includes(m.toLowerCase())&&e.push(b[t]);n(e)}else n(b)}),[m]),Object(c.useEffect)((function(){""===u&&y("\u25ba"),"asc"===u&&a.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?(y("\u25bc"),-1):0})),"desc"===u&&a.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?(y("\u25b2"),-1):0}))}),[u,a]),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(j,{searchEmployees:function(e){x(e.target.value)}}),Object(r.jsx)(h,{carrot:N,sort:u,setSort:f}),Object(r.jsx)(l,{employees:a})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":1,"name":"Franklin D. Roosevelt","image":"/img/fdr.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":2,"name":"Ulysses S. Grant","image":"/img/grant.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":3,"name":"Dwight D. Eisenhower","image":"/img/ike.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":4,"name":"Thomas Jefferson","image":"/img/jefferson.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":5,"name":"John F. Kennedy","image":"/img/jfk.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":6,"name":"Lyndon B. Johnson","image":"/img/lbj.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":7,"name":"Abraham Lincoln","image":"/img/lincoln.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":8,"name":"Barack Obama","image":"/img/obama.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":9,"name":"Theodore Roosevelt","image":"/img/teddy.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":10,"name":"Harry S. Truman","image":"/img/truman.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":11,"name":"George Washington","image":"/img/washington.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"},{"id":12,"name":"Woodrow Wilson","image":"/img/wilson.jpg","phone":"(555) 123-4567","email":"example@email.com","dob":"05/08/1978"}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.844c73eb.chunk.js.map