(this["webpackJsonpclass-app"]=this["webpackJsonpclass-app"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(21),r=a.n(s),i=(a(28),a(29),a(6)),o=a(2),l=(a(30),a.p+"static/media/Web Dev Resume.eac0911a.pdf"),j=a(0);var b=function(){var e=Object(o.e)().pathname;return Object(j.jsx)("div",{className:"nav",children:Object(j.jsxs)("div",{className:"navContainer",children:[Object(j.jsx)(i.b,{className:"/"===e?"active":"",to:"/",children:"Home"}),Object(j.jsx)(i.b,{className:"/about"===e?"active":"",to:"/about",children:"About"}),Object(j.jsx)(i.b,{className:"/mywork"===e?"active":"",to:"/mywork",children:"My Work"}),Object(j.jsx)(i.b,{className:"/contact"===e?"active":"",to:"/contact",children:"Contact"}),Object(j.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"Resume"})]})})},m=(a(32),a.p+"static/media/blob.a20d0ca2.svg");var d=function(){return Object(j.jsx)("div",{className:"bg",style:{backgroundImage:"url(".concat(m,")"),backgroundRepeat:"no-repeat",backgroundPosition:"top -10px center"},children:Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{children:"Hello and welcome"}),Object(j.jsx)("h4",{children:"to my portfolio page"}),Object(j.jsx)(i.b,{to:"/mywork",children:Object(j.jsx)("button",{children:"See My Work!"})})]})})},h=a(23),u=a(7),p=a.n(u),x=a(12),O=a(5),g=(a(34),a.p+"static/media/blob.6a63517d.svg"),f=a(22),v=a.n(f);var k=function(){var e="https://submit-form.com/".concat("9oEYMWJB"),t=Object(c.useState)({name:"",email:"",message:""}),a=Object(O.a)(t,2),n=a[0],s=a[1],r=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(!0),e.next=4,i();case 4:d(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var t=Object(x.a)(p.a.mark((function t(){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:n.name,email:n.email,message:n.message},t.prev=1,t.next=4,v.a.post(e,a);case 4:c=t.sent,console.log(c),N({text:"Thanks for the message!",color:"red"}),s({name:"",email:"",message:""}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),N({text:"Something went wrong. Please try again.",color:"green"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.id,c=t.value,r=a,i=Object(h.a)({},n);i[r]=c,s(i)},l=Object(c.useState)(!1),b=Object(O.a)(l,2),m=b[0],d=b[1],u=Object(c.useState)({text:"",color:""}),f=Object(O.a)(u,2),k=f[0],N=f[1];return Object(j.jsxs)("div",{className:"contact",style:{backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100vh"},children:[Object(j.jsx)("form",{className:"formContainer",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"form",onSubmit:r,children:[Object(j.jsx)("h4",{children:"Hit me up!"}),k&&Object(j.jsx)("div",{className:"message ".concat(k.color),children:k.text}),Object(j.jsxs)("div",{className:"singles",children:[Object(j.jsxs)("div",{className:"singleInput",children:[Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{id:"email",type:"email",value:n.email,onChange:o})]}),Object(j.jsxs)("div",{className:"singleInput",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{id:"name",type:"text",value:n.name,onChange:o})]})]}),Object(j.jsxs)("div",{className:"multi",children:[Object(j.jsx)("label",{children:"Message"}),Object(j.jsx)("textarea",{id:"message",type:"text",value:n.message,onChange:o}),Object(j.jsx)("div",{className:"buttonContainer",children:Object(j.jsx)("button",{disabled:m||""===n.message||""===n.name||""===n.email,onClick:r,children:m?"Submitting...":"Submit"})})]})]})})}),Object(j.jsx)("div",{className:"linkContainer",children:Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("h4",{children:"Contact"}),Object(j.jsxs)("div",{className:"linksList",children:[Object(j.jsx)("a",{href:"mailto:parkers205@gmail.com",children:"Email"}),Object(j.jsx)("a",{href:"https://github.com/parkersatterfield",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/parker-satterfield-22313b160/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]})]})})]})};a(53),a(54);var N=function(e){return Object(j.jsx)("div",{className:"project",children:Object(j.jsxs)("a",{href:e.projectLink,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("img",{id:"example",src:e.projectImage,alt:e.projectName}),Object(j.jsx)("figcaption",{children:e.projectName})]})})},y=a.p+"static/media/CMS.8ed01e8e.png",w=a.p+"static/media/Reloc8.524821a8.png",C=a.p+"static/media/Weather.fcf4b1ea.png";var I=function(){return Object(j.jsxs)("div",{className:"projectContainer",children:[Object(j.jsx)(N,{className:"projects sub1",projectLink:"https://parkersatterfield.github.io/Project-1/",projectImage:w,projectName:"Reloc8"}),Object(j.jsx)(N,{className:"projects main",projectLink:"https://parkersatterfield.github.io/Weather-Dashboard/",projectImage:C,projectName:"Weather App"}),Object(j.jsx)(N,{className:"projects sub2",projectLink:"https://github.com/parkersatterfield/Employee-Tracker-CMS",projectImage:y,projectName:"Employee Tracker CMS"})]})},S=(a(55),a.p+"static/media/headshot.3138cb27.jpg");var M=function(){return Object(j.jsxs)("div",{className:"bio",children:[Object(j.jsx)("h4",{children:"About Me"}),Object(j.jsxs)("div",{className:"bioContainer",children:[Object(j.jsx)("img",{src:S,alt:"Headshot"}),Object(j.jsx)("p",{children:"Hi, I'm Parker. I graduated from Auburn University in 2019 with a degree in biological systems engineering and a minor in business. After a short stent as an engineering consultant at a firm in Atlanta, I left to start my own company, Dibs. Dibs is a social media and seed funding platform for early stage startup companies to share their experiences, network, and raise money. Working on Dibs is where I was first exposed to web development."})]})]})};var L=function(){return Object(j.jsx)(i.a,{basename:"/",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(b,{className:"nav"})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/about",element:Object(j.jsx)(M,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/mywork",element:Object(j.jsx)(I,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/contact",element:Object(j.jsx)(k,{})})]})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.cd796638.chunk.js.map