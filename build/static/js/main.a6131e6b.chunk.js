(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(7),c=a.n(s),r=(a(12),a(2)),o=a(3),l=a(5),m=a(4),b=a.p+"static/media/Scr1.fa944727.jpg",u=(a.p,a.p,a.p,a.p,a.p,a(13),a(0)),h=function(e){return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5",children:[Object(u.jsx)("img",{style:{height:200,width:200},alt:"photo",src:b}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"#",className:e.name.length<=20?"smallname":"bigname",children:e.name.slice(0,23)}),Object(u.jsx)("br",{}),Object(u.jsxs)("a",{href:"#",className:e.name.length<=20?"smallname":"bigname",children:[e.name.slice(23,46)," "]}),Object(u.jsx)("br",{}),Object(u.jsxs)("a",{href:"#",className:e.name.length<=20?"smallname":"bigname",children:[e.name.slice(46,69)," "]}),Object(u.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.blogs.map((function(e){return Object(u.jsx)(h,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(u.jsx)("div",{children:t})},d=function(e){e.searchfield;var t=e.searchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search blogs",onChange:t})})},g=[{id:1,topic:"ML",name:"using matlab to measure the diameter of a image using matlab to measure the diameter of a image",username:"Prashu",email:"prashanth@gmail.com"},{id:2,topic:"IOT",name:"Home Automation",username:"sath",email:"sahvik@gmail.com"},{id:3,topic:"WEB",name:"Web development",username:"kou",email:"koushik@gmail.com"},{id:4,topic:"ML",name:"Linear regression",username:"Karianne",email:"pranav@gmail.com"},{id:5,topic:"IOT",name:"internet of things",username:"Kamren",email:"bala@gmail.com"},{id:6,topic:"WEB",name:"Front end dev",username:"Leopoldo_Corkery",email:"aasrith@gmail.com"},{id:7,topic:"ML",name:"Logistic regression",username:"Elwyn.Skiles",email:"nk@gmail.com"},{id:8,topic:"IOT",name:"using matlab to measure the diameter of a image using matlab to measure the diameter of a image",username:"Maxime_Nienow",email:"gopi@gmail.com"},{id:9,topic:"WEB",name:"backend dev",username:"Delphine",email:"abhi@gmail.com"},{id:10,topic:"ML",name:"classification",username:"Moriah.Stanton",email:"bhargav@gmail.com"}],f=(a(15),a.p+"static/media/logo.98083ae5.png"),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"head",children:[Object(u.jsx)("img",{className:"team",src:f}),Object(u.jsx)("h2",{className:"body-text1",children:"Blogs & Articles"})]})}}]),a}(n.Component),p=O,x=(a(16),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={mainBlogs:g,dupBlogs:[],searchfield:""},e.alllShow=function(){var t=e.state.mainBlogs;e.setState({dupBlogs:t})},e.mlShow=function(){var t=e.state.mainBlogs;t=t.filter((function(e){return"ML"===e.topic})),e.setState({dupBlogs:t})},e.iotShow=function(){var t=e.state.mainBlogs;t=t.filter((function(e){return"IOT"===e.topic})),e.setState({dupBlogs:t})},e.webShow=function(){var t=e.state.mainBlogs;t=t.filter((function(e){return"WEB"===e.topic})),e.setState({dupBlogs:t})},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.dupBlogs.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(u.jsx)("div",{children:Object(u.jsxs)("span",{className:"bodymain",children:[Object(u.jsx)("button",{onClick:this.alllShow,className:"button button1",children:"ALL"})," \xa0\xa0",Object(u.jsx)("button",{onClick:this.mlShow,className:"button button2",children:"ML"})," \xa0\xa0",Object(u.jsx)("button",{onClick:this.iotShow,className:"button button3",children:"IOT"})," \xa0\xa0",Object(u.jsx)("button",{onClick:this.webShow,className:"button button4",children:"WEB"})," \xa0\xa0",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(d,{searchChange:this.onSearchChange}),Object(u.jsx)(j,{blogs:t})]})})}}]),a}(i.a.Component)),v=x,S=(a(17),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"whole",children:[Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"#",class:"fa fa-facebook"}),"\xa0\xa0",Object(u.jsx)("a",{href:"#",class:"fa fa-instagram"}),"\xa0\xa0",Object(u.jsx)("a",{href:"#",class:"fa fa-linkedin"}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"ieeesps@vit.ac.in"}),Object(u.jsx)("h3",{children:"\xa92020 by SignalsProcessingSociety"}),Object(u.jsx)("h4",{children:"Proudly Created by SPS team"}),Object(u.jsx)("br",{})]})]})}}]),a}(i.a.Component)),w=S,k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)(p,{}),Object(u.jsx)(v,{}),Object(u.jsx)(w,{})]})}}]),a}(i.a.Component),y=k,C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(18);c.a.render(Object(u.jsx)(y,{}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.a6131e6b.chunk.js.map