"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{7532:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,s,u,l,c,d=t(9439),x=t(2791),p=t(168),f=t(6444),h=f.ZP.form(r||(r=(0,p.Z)(["\nborder: tomato solid;\n  max-width: 450px;\n  border-radius: 10px;\n  text-align: center;\n  padding: 25px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=f.ZP.button(a||(a=(0,p.Z)(["\n  margin-top: 15px;\n"]))),b=f.ZP.input(i||(i=(0,p.Z)(["\n\n"]))),g=function(n){return n.contacts},j=t(6052),v=t(9434),Z=t(184),y=function(){var n=(0,x.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,d.Z)(a,2),o=i[0],s=i[1],u=(0,v.I0)(),l=(0,v.v9)(g).contacts,c=function(n){var e=n.target;"text"===e.type&&r(e.value),"tel"===e.type&&s(e.value)};return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault(),function(n,e){var t=l.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),r=l.find((function(n){return n.number===e}));t?alert("".concat(n," is already in contacts")):r?alert("".concat(e," is already in contacts")):u((0,j.uK)({name:n,number:e}))}(t,o),r(""),s("")},autoComplete:"off",children:[(0,Z.jsxs)("label",{children:[(0,Z.jsx)("p",{children:"Name"}),(0,Z.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:t,onChange:c})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)("p",{children:"Number"}),(0,Z.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,value:o,onChange:c})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)(m,{type:"submit",children:"Add contact"})]})},w=f.ZP.ul(o||(o=(0,p.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  width: 450px;\n  border: tomato solid;\n  border-radius: 10px;\n  padding: 23px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),C=f.ZP.li(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n  width: 100%;\n  text-align: start;\n"]))),P=f.ZP.span(u||(u=(0,p.Z)(["\n  font-weight: 600;\n  flex-basis: 200px;\n  font-family: 'La Belle Aurore', cursive;\n"]))),k=f.ZP.span(l||(l=(0,p.Z)(["\n  flex-basis: 150px;\n  font-family: 'La Belle Aurore', cursive;\n"]))),A=f.ZP.button(c||(c=(0,p.Z)(["\n\n  padding: 0px 20px;\n  margin-top: -4px;\n  height: 19px;\n"]))),L=t(6895),z=function(){var n=(0,v.I0)(),e=(0,v.v9)(g).contacts;(0,x.useEffect)((function(){n((0,j.yF)())}),[n]);var t=(0,v.v9)(L.zK),r=function(e){n((0,j.GK)(e.currentTarget.id))};return(0,Z.jsx)(w,{children:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(n){return(0,Z.jsxs)(C,{children:[(0,Z.jsx)(P,{children:n.name}),(0,Z.jsx)(k,{children:n.number}),(0,Z.jsx)(A,{id:n.id,onClick:r,children:"Delete"})]},n.id)}))})},K=function(){var n=(0,v.I0)(),e=(0,v.v9)(L.zK);return(0,Z.jsx)("label",{children:(0,Z.jsx)("input",{placeholder:"Find contacts by name",type:"text",value:e,onChange:function(e){n((0,L.Tv)(e.target.value))}})})},_=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(y,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(K,{}),(0,Z.jsx)(z,{})]})}}}]);
//# sourceMappingURL=532.1a57a1e1.chunk.js.map