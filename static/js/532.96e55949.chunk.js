"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{7532:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,o,c=t(9439),u=t(2791),s=t(168),l=t(6444),d=l.ZP.form(r||(r=(0,s.Z)(["\n  background-color: tomato;\n  max-width: 450px;\n  border-radius: 10px;\n  text-align: center;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=function(n){return n.contacts},f=t(6052),p=t(9434),m=t(184),h=function(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(""),i=(0,c.Z)(a,2),o=i[0],s=i[1],l=(0,p.I0)(),h=(0,p.v9)(x).contacts,j=function(n){var e=n.target;"text"===e.type&&r(e.value),"tel"===e.type&&s(e.value)};return(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault(),function(n,e){var t=h.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),r=h.find((function(n){return n.number===e}));t?alert("".concat(n," is already in contacts")):r?alert("".concat(e," is already in contacts")):l((0,f.uK)({name:n,number:e}))}(t,o),r(""),s("")},autoComplete:"off",children:[(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:t,onChange:j})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,value:o,onChange:j})]}),(0,m.jsx)("br",{}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})},j=l.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  background-color: tomato;\n  border-radius: 10px;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=l.ZP.li(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  width: 100%;\n  text-align: start;\n"]))),g=l.ZP.button(o||(o=(0,s.Z)([""]))),v=t(6895),y=function(){var n=(0,p.I0)(),e=(0,p.v9)(x).contacts;(0,u.useEffect)((function(){n((0,f.yF)())}),[n]);var t=(0,p.v9)(v.zK),r=function(e){n((0,f.GK)(e.currentTarget.id))};return(0,m.jsx)(j,{children:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){return(0,m.jsxs)(b,{children:[(0,m.jsx)("span",{children:n.name}),(0,m.jsx)("span",{children:n.number}),(0,m.jsx)(g,{id:n.id,onClick:r,children:"Delete"})]},n.id)}))})},Z=function(){var n=(0,p.I0)(),e=(0,p.v9)(v.zK);return(0,m.jsxs)("label",{children:[(0,m.jsx)("p",{children:"Find contacts by name"}),(0,m.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,v.Tv)(e.target.value))}})]})},w=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{style:{fontFamily:"Sriracha"},children:"Phonebook"}),(0,m.jsx)(h,{}),(0,m.jsx)("h2",{style:{fontFamily:"Sriracha"},children:"Contacts"}),(0,m.jsx)(Z,{}),(0,m.jsx)(y,{})]})}}}]);
//# sourceMappingURL=532.96e55949.chunk.js.map