"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{7532:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var a,r,i,o,c,u,s,l,d=t(9439),x=t(2791),p=t(168),f=t(6444),m=f.ZP.form(a||(a=(0,p.Z)(["\n  background-color: tomato;\n  max-width: 450px;\n  border-radius: 10px;\n  text-align: center;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=f.ZP.button(r||(r=(0,p.Z)(["\n  margin-top: 15px;\n"]))),b=f.ZP.input(i||(i=(0,p.Z)(["\n\n"]))),g=function(n){return n.contacts},j=t(6052),Z=t(9434),v=t(184),y=function(){var n=(0,x.useState)(""),e=(0,d.Z)(n,2),t=e[0],a=e[1],r=(0,x.useState)(""),i=(0,d.Z)(r,2),o=i[0],c=i[1],u=(0,Z.I0)(),s=(0,Z.v9)(g).contacts,l=function(n){var e=n.target;"text"===e.type&&a(e.value),"tel"===e.type&&c(e.value)};return(0,v.jsxs)(m,{onSubmit:function(n){n.preventDefault(),function(n,e){var t=s.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=s.find((function(n){return n.number===e}));t?alert("".concat(n," is already in contacts")):a?alert("".concat(e," is already in contacts")):u((0,j.uK)({name:n,number:e}))}(t,o),a(""),c("")},autoComplete:"off",children:[(0,v.jsxs)("label",{children:[(0,v.jsx)("p",{children:"Name"}),(0,v.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:t,onChange:l})]}),(0,v.jsxs)("label",{children:[(0,v.jsx)("p",{children:"Number"}),(0,v.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,value:o,onChange:l})]}),(0,v.jsx)("br",{}),(0,v.jsx)(h,{type:"submit",children:"Add contact"})]})},w=f.ZP.ul(o||(o=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  background-color: tomato;\n  border-radius: 10px;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),C=f.ZP.li(c||(c=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  width: 100%;\n  text-align: start;\n"]))),k=f.ZP.span(u||(u=(0,p.Z)(["\n  font-weight: 600;\n  flex-basis: 100px;\n"]))),P=f.ZP.span(s||(s=(0,p.Z)(["\n  flex-basis: 100px;\n"]))),z=f.ZP.button(l||(l=(0,p.Z)(["\n  padding: 0px 20px;\n  margin: 0px;\n"]))),A=t(6895),K=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(g).contacts;(0,x.useEffect)((function(){n((0,j.yF)())}),[n]);var t=(0,Z.v9)(A.zK),a=function(e){n((0,j.GK)(e.currentTarget.id))};return(0,v.jsx)(w,{children:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){return(0,v.jsxs)(C,{children:[(0,v.jsx)(k,{children:n.name}),(0,v.jsx)(P,{children:n.number}),(0,v.jsx)(z,{id:n.id,onClick:a,children:"Delete"})]},n.id)}))})},L=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(A.zK);return(0,v.jsx)("label",{children:(0,v.jsx)("input",{placeholder:"Find contacts by name",type:"text",value:e,onChange:function(e){n((0,A.Tv)(e.target.value))}})})},_=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(y,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(L,{}),(0,v.jsx)(K,{})]})}}}]);
//# sourceMappingURL=532.c64fa402.chunk.js.map