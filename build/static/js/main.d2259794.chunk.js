(this.webpackJsonppsatt=this.webpackJsonppsatt||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(42),s=a.n(n),r=(a(50),a(51),a(16)),o=a(4),l=a(88),j=(a(52),a.p+"static/media/Web Dev Resume.eac0911a.pdf"),d=a(87),b=a(2);var m=function(){var e=Object(o.e)().pathname;return Object(b.jsx)(d.a.div,{className:"nav",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:Object(b.jsxs)("div",{className:"navContainer",children:[Object(b.jsx)(r.b,{className:"/"===e?"active":"",to:"/",children:"Home"}),Object(b.jsx)(r.b,{className:"/about"===e?"active":"",to:"/about",children:"About"}),Object(b.jsx)(r.b,{className:"/mywork"===e?"active":"",to:"/mywork",children:"My Work"}),Object(b.jsx)(r.b,{className:"/contact"===e?"active":"",to:"/contact",children:"Contact"}),Object(b.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:"Resume"})]})})},p=(a(54),a.p+"static/media/blob.a20d0ca2.svg");var u=function(){return document.body.style="\n        background-image: url(".concat(p,"); \n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 120vh;\n    "),Object(b.jsx)(d.a.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},className:"bg",children:Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("h1",{children:"Hello and welcome"}),Object(b.jsx)("h4",{children:"to my portfolio page"}),Object(b.jsx)(r.b,{to:"/mywork",children:Object(b.jsx)(d.a.button,{className:"myWorkButton",whileHover:{scale:1.06},whileTap:{scale:.95},children:"See My Work \ud83d\udc49\ud83c\udffb"})})]})})},h=a(3),g=a(26),x=a.n(g),O=a(32),v=a(8),f=(a(56),a.p+"static/media/blob.6a63517d.svg"),y=a(43),k=a.n(y);var N=function(){document.body.style="\n        background-image: url(".concat(f,"); \n        background-repeat: no-repeat;\n        background-position: top 120% left -250px;\n        background-size: 160vh;\n    ");var e="https://submit-form.com/".concat("9oEYMWJB"),t=Object(i.useState)({name:"",email:"",message:""}),a=Object(v.a)(t,2),c=a[0],n=a[1],s=function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,r();case 4:p(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var t=Object(O.a)(x.a.mark((function t(){var a,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:c.name,email:c.email,message:c.message},t.prev=1,t.next=4,k.a.post(e,a);case 4:i=t.sent,console.log(i),N({text:"Thanks for the message!",color:"red"}),n({name:"",email:"",message:""}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),N({text:"Something went wrong. Please try again.",color:"green"});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),o=function(e){var t=e.target,a=t.id,i=t.value,s=a,r=Object(h.a)({},c);r[s]=i,n(r)},l=Object(i.useState)(!1),j=Object(v.a)(l,2),m=j[0],p=j[1],u=Object(i.useState)({text:"",color:""}),g=Object(v.a)(u,2),y=g[0],N=g[1];return Object(b.jsx)(d.a.div,{className:"contact",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:Object(b.jsx)("form",{className:"formContainer",children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"form",onSubmit:s,children:[Object(b.jsx)("h4",{children:"Hit me up!"}),Object(b.jsx)("div",{className:"linkContainer",children:Object(b.jsx)("div",{className:"links",children:Object(b.jsxs)("div",{className:"linksList",children:[Object(b.jsx)("a",{class:"fa fa-github",href:"https://github.com/parkersatterfield",target:"_blank",rel:"noreferrer",children:" "}),Object(b.jsx)("a",{class:"fa fa-linkedin",href:"https://www.linkedin.com/in/parker-satterfield-22313b160/",target:"_blank",rel:"noreferrer",children:" "}),Object(b.jsx)("a",{class:"fa fa-instagram",href:"https://www.instagram.com/parker_satterfield/",target:"_blank",rel:"noreferrer",children:" "})]})})}),y&&Object(b.jsx)("div",{className:"message ".concat(y.color),children:y.text}),Object(b.jsxs)("div",{className:"singles",children:[Object(b.jsxs)("div",{className:"singleInput",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{id:"email",type:"email",value:c.email,onChange:o})]}),Object(b.jsxs)("div",{className:"singleInput",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{id:"name",type:"text",value:c.name,onChange:o})]})]}),Object(b.jsxs)("div",{className:"multi",children:[Object(b.jsx)("label",{children:"Message"}),Object(b.jsx)("textarea",{id:"message",type:"text",value:c.message,onChange:o}),Object(b.jsx)("div",{className:"buttonContainer",children:Object(b.jsx)("button",{className:"submitButton",disabled:m||""===c.message||""===c.name||""===c.email,onClick:s,children:m?"Submitting...":"Submit"})})]})]})})})})};a(74),a(75);var w=function(e){return Object(b.jsx)("div",{className:"project",children:Object(b.jsxs)("a",{href:e.projectLink,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{id:"example",src:e.projectImage,alt:e.projectName}),Object(b.jsx)("figcaption",{children:e.projectName})]})})},C=a.p+"static/media/CMS.8ed01e8e.png",S=a.p+"static/media/Reloc8.06c093ed.png",I=a.p+"static/media/Weather.fcf4b1ea.png",M=a.p+"static/media/Dibs.bc36eb14.png",W=a.p+"static/media/blob.a20d0ca2.svg";var D=function(){return document.body.style="\n    background-image: url(".concat(W,"); \n    background-repeat: no-repeat;\n    background-position: top 90% left -300px;\n    background-size: 160vh;\n    "),Object(b.jsxs)(d.a.div,{className:"portfolioSection",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:[Object(b.jsx)("h1",{children:"My Work"}),Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"projectContainer",children:[Object(b.jsx)(w,{projectLink:"https://parkersatterfield.github.io/Project-1/",projectImage:S,projectName:"Reloc8"}),Object(b.jsx)(w,{projectLink:"https://dibsfunding.com/",projectImage:M,projectName:"Dibs"}),Object(b.jsx)(w,{projectLink:"https://parkersatterfield.github.io/Weather-Dashboard/",projectImage:I,projectName:"Weather App"}),Object(b.jsx)(w,{projectLink:"https://github.com/parkersatterfield/Employee-Tracker-CMS",projectImage:C,projectName:"Employee Tracker CMS"})]})})]})},L=(a(76),a(82),a.p+"static/media/blob.360e372f.svg"),E=a.p+"static/media/headshot.3138cb27.jpg",T=a(44),A=a(45),B=(a(81),a.p+"static/media/image1.ac3a6326.jpg"),H=a.p+"static/media/image2.b32949d6.jpg",P=a.p+"static/media/image3.7c83cf12.jpg",_=a.p+"static/media/image4.3354d47b.jpg",z=a.p+"static/media/image5.a6e93325.JPG",F=a.p+"static/media/image6.a7bcf188.jpg";var J=function(){var e={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return Object(b.jsx)(d.a.div,{variants:{hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.7,staggerChildren:.3}}},className:"container",initial:"hidden",animate:"visible",exit:"exit",transition:{duration:1,ease:[.43,.13,.23,.96]},children:Object(b.jsx)("div",{className:"flexContainer",children:Object(b.jsxs)("div",{className:"galleryContainer",children:[Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:H,alt:""}),Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:B,alt:""}),Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:P,alt:""}),Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:_,alt:""}),Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:z,alt:""}),Object(b.jsx)(d.a.img,{variants:e,className:"gallery",src:F,alt:""})]})})})};var R=function(){document.body.style="\n        background-image: url(".concat(L,"); \n        background-repeat: no-repeat;\n        background-position: left -250px  top 150%;\n        background-size: 120vh;\n    ");var e=Object(i.useState)(0),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(i.useEffect)((function(){window.scrollTo(0,2e3)}),[a]),Object(b.jsxs)(d.a.div,{className:"bio",exit:{opacity:0},variants:{hidden:{y:"-100vh",opacity:0},visible:{y:"0"},exit:{y:"-100vh",opacity:0}},initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:[.43,.13,.23,.96]},children:[Object(b.jsx)("h4",{children:"About Me"}),Object(b.jsxs)("div",{className:"bioContainer",children:[Object(b.jsx)("img",{src:E,alt:"Headshot"}),Object(b.jsx)("p",{children:"Hi, I'm Parker. I graduated from Auburn University in 2019 with a degree in biological systems engineering and a minor in business. After a short stent as an engineering consultant at a firm in Atlanta, I left to start my own company, Dibs. Dibs is a social media and seed funding platform for early stage startup companies to share their experiences, network, and raise money. Working on Dibs is where I was first exposed to web development, and I've been learning ever since."})]}),Object(b.jsxs)("div",{className:"seemore",onClick:c,children:[Object(b.jsx)("p",{children:"See More!"}),Object(b.jsx)(T.a,{icon:A.a,size:"2x",className:"arrow"})]}),Object(b.jsx)(J,{})]})};var G=function(){return Object(b.jsx)(r.a,{basename:"/",children:Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{initial:!0,exitBeforeEnter:!0,children:[Object(b.jsx)(d.a.div,{className:"main",exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:Object(b.jsx)(m,{className:"nav"})}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",element:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/about",element:Object(b.jsx)(R,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/mywork",element:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/contact",element:Object(b.jsx)(N,{})})]})]})})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),U()}},[[83,1,2]]]);
//# sourceMappingURL=main.d2259794.chunk.js.map