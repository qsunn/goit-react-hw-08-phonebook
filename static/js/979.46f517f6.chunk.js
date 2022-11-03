"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[979],{7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(2791),r=t(9434),s=t(6351),l=t(3634),c=t(5950),i=t(7322),o=t(184),u=function(e){var n=e.contact,t=(0,r.I0)(),a=n.name,s=n.number,c=n.id;return(0,o.jsxs)("li",{className:"flex justify-between",children:[(0,o.jsxs)("p",{children:[a,": ",s]}),(0,o.jsx)("button",{type:"button",onClick:function(){return t((0,l.GK)(c))},children:(0,o.jsx)(i.FU5,{className:"text-md text-lime-400"})})]})},d=function(){var e=(0,r.v9)(s.AD),n=(0,r.v9)(s.Af).items,t=function(e,n){if(e)return n?e.filter((function(e){return(e.name+e.number).toLowerCase().includes(n.toLowerCase())})):e}(n,e);return 0===n.length?(0,o.jsx)("p",{className:"text-center",children:"No contacts yet"}):0===t.length?(0,o.jsx)("p",{className:"text-center",children:"There are no coincidences"}):(0,o.jsx)("ul",{className:c.W.flexCol,children:t.map((function(e){return(0,o.jsx)(u,{contact:e},e.id)}))})},m=t(885),h=function(){var e=(0,a.useState)(""),n=(0,m.Z)(e,2),t=n[0],s=n[1],i=(0,a.useState)(""),u=(0,m.Z)(i,2),d=u[0],h=u[1],f=(0,r.I0)(),p=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":s(a);break;case"number":h(a);break;default:throw new Error("Invalid field: ".concat(t))}};return(0,o.jsxs)("form",{className:c.W.flexCol,onSubmit:function(e){e.preventDefault();var n={name:t,number:d};f((0,l.uK)(n)),s(""),h("")},children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("span",{children:"Name:"}),(0,o.jsx)("input",{onChange:p,value:t,placeholder:"Enter contact name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:c.W.formInput})]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("span",{children:"Number:"}),(0,o.jsx)("input",{onChange:p,value:d,placeholder:"Enter contact number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:c.W.formInput})]}),(0,o.jsx)("button",{type:"submit",className:"".concat(c.W.button," mt-6 mb-4"),children:"Add contact"})]})},f=t(1273),p=function(){var e=(0,r.v9)(s.AD),n=(0,r.I0)();return(0,o.jsx)("div",{children:(0,o.jsx)("input",{onChange:function(e){return n((0,f.W)(e.target.value))},value:e,type:"text",placeholder:"Search",name:"filter",className:c.W.formInput})})},x=t(643),j=function(){return(0,o.jsx)("div",{className:"flex align-center justify-center min-w-full min-h-full",children:(0,o.jsx)(x.W0,{height:100,width:100,radius:5,color:"#bef264",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})},b=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.Af),t=n.isLoading,i=n.error,u={pending:t,rejected:i&&!t,fulfilled:!t&&!i};return(0,a.useEffect)((function(){e((0,l.yF)())}),[e]),(0,o.jsxs)("div",{className:"".concat(c.W.flexCol," mx-auto md:w-80"),children:[(0,o.jsx)("h1",{className:c.W.title,children:"Phonebook"}),(0,o.jsx)(h,{}),(0,o.jsx)("h2",{className:c.W.title,children:"Contacts"}),(0,o.jsx)(p,{}),u.pending&&(0,o.jsx)(j,{}),u.rejected&&(0,o.jsx)("p",{children:i}),u.fulfilled&&(0,o.jsx)(d,{})]})}}}]);
//# sourceMappingURL=979.46f517f6.chunk.js.map