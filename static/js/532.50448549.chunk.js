"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{7532:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var a,r,i,o,s,c,u,l=t(9439),d=t(2791),x=t(168),p=t(6444),f=p.ZP.form(a||(a=(0,x.Z)(["\n  background-color: tomato;\n  max-width: 450px;\n  border-radius: 10px;\n  text-align: center;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=p.ZP.button(r||(r=(0,x.Z)(["\n  margin-top: 15px;\n"]))),h=function(n){return n.contacts},b=t(6052),g=t(9434),j=t(184),v=function(){var n=(0,d.useState)(""),e=(0,l.Z)(n,2),t=e[0],a=e[1],r=(0,d.useState)(""),i=(0,l.Z)(r,2),o=i[0],s=i[1],c=(0,g.I0)(),u=(0,g.v9)(h).contacts,x=function(n){var e=n.target;"text"===e.type&&a(e.value),"tel"===e.type&&s(e.value)};return(0,j.jsxs)(f,{onSubmit:function(n){n.preventDefault(),function(n,e){var t=u.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=u.find((function(n){return n.number===e}));t?alert("".concat(n," is already in contacts")):a?alert("".concat(e," is already in contacts")):c((0,b.uK)({name:n,number:e}))}(t,o),a(""),s("")},autoComplete:"off",children:[(0,j.jsxs)("label",{children:[(0,j.jsx)("p",{children:"Name"}),(0,j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:t,onChange:x})]}),(0,j.jsxs)("label",{children:[(0,j.jsx)("p",{children:"Number"}),(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,value:o,onChange:x})]}),(0,j.jsx)("br",{}),(0,j.jsx)(m,{type:"submit",children:"Add contact"})]})},Z=p.ZP.ul(i||(i=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  background-color: tomato;\n  border-radius: 10px;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),y=p.ZP.li(o||(o=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  width: 100%;\n  text-align: start;\n"]))),w=p.ZP.span(s||(s=(0,x.Z)(["\n  font-weight: 600;\n  flex-basis: 100px;\n"]))),C=p.ZP.span(c||(c=(0,x.Z)(["\n  flex-basis: 100px;\n"]))),k=p.ZP.button(u||(u=(0,x.Z)(["\n  padding: 0px 20px;\n  margin: 0px;\n"]))),P=t(6895),z=function(){var n=(0,g.I0)(),e=(0,g.v9)(h).contacts;(0,d.useEffect)((function(){n((0,b.yF)())}),[n]);var t=(0,g.v9)(P.zK),a=function(e){n((0,b.GK)(e.currentTarget.id))};return(0,j.jsx)(Z,{children:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){return(0,j.jsxs)(y,{children:[(0,j.jsx)(w,{children:n.name}),(0,j.jsx)(C,{children:n.number}),(0,j.jsx)(k,{id:n.id,onClick:a,children:"Delete"})]},n.id)}))})},F=function(){var n=(0,g.I0)(),e=(0,g.v9)(P.zK);return(0,j.jsxs)("label",{children:[(0,j.jsx)("p",{children:"Find contacts by name"}),(0,j.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,P.Tv)(e.target.value))}})]})},S=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{style:{fontFamily:"Sriracha"},children:"Phonebook"}),(0,j.jsx)(v,{}),(0,j.jsx)("h2",{style:{fontFamily:"Sriracha"},children:"Contacts"}),(0,j.jsx)(F,{}),(0,j.jsx)(z,{})]})}}}]);
//# sourceMappingURL=532.50448549.chunk.js.map