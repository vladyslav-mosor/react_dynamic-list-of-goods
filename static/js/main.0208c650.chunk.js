(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),o=n(12),r=n(6),s=n(8),i=n.n(s),d=(n(23),n(16)),u=(n(26),n(0)),l=n.n(u),j=(n(27),n(1)),b=l.a.memo((function(t){var e=t.goods;return Object(j.jsx)("ul",{className:"cards-box",children:e.map((function(t){var e=t.name,n=t.id,a=t.color;return Object(j.jsx)("li",{className:"card","data-cy":"good",style:{color:a},children:Object(j.jsx)("div",{className:"card__name",children:e})},n)}))})})),f=n(17);function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}var x=function(t){var e=t.text,n=t.dataCy,a=t.handleClick;return Object(j.jsx)("button",{className:"button is-link",type:"button","data-cy":n,onClick:a,children:e})},m=[{text:"Load all goods",loadFunction:h,dataCy:"all-button"},{text:"Load 5 first goods",loadFunction:function(){return h().then((function(t){return Object(f.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},dataCy:"first-five-button"},{text:"Load red goods",loadFunction:function(){return h().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},dataCy:"red-button"}],O=function(){var t=Object(u.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],c=Object(u.useState)(!1),s=Object(r.a)(c,2),l=s[0],f=s[1],h=Object(u.useState)(!1),O=Object(r.a)(h,2),v=O[0],p=O[1],y=Object(u.useCallback)(function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),p(!1),t.prev=2,t.next=5,e();case 5:n=t.sent,a(n),f(!1),p(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),p(!0),f(!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"box has-text-centered",children:[Object(j.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(j.jsx)("div",{className:"buttons-box",children:m.map((function(t){var e=t.text,n=t.dataCy,a=t.loadFunction;return Object(j.jsx)(x,{text:e,dataCy:n,handleClick:function(){return y(a)}},e)}))})]}),v&&Object(j.jsx)("div",{className:"notification is-danger",children:"An error occured when loading data!"}),l?Object(j.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(j.jsx)(d.a,{width:70})}):Object(j.jsx)(b,{goods:n})]})})};c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0208c650.chunk.js.map