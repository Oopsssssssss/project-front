(this["webpackJsonpreact-auth-template"]=this["webpackJsonpreact-auth-template"]||[]).push([[0],{255:function(e,t,a){},256:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Texting 1.3fe4b4d3.png"},285:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Texting 3.5359350f.jpeg"},286:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Texting 4.a0885984.jpeg"},287:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Texting 6.a32ec01f.webp"},288:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Texting 5.013fae61.jpeg"},289:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Message4.ad0083c7.png"},290:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Message2.a5df28fa.png"},291:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Message3.b8224785.png"},292:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Message6.7db2bf97.png"},293:function(e,t,a){},298:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(55),r=a.n(c),n=(a(255),a(84)),i=a(5),o=a(8),l=a(470),u=(a(256),a(468)),j=a(1);var d=function(e){var t=e.variant,a=e.heading,c=e.message,r=Object(s.useState)(!0),n=Object(i.a)(r,2),o=n[0],l=n[1],d=Object(s.useState)(null),b=Object(i.a)(d,2),m=b[0],h=b[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return h(e),function(){clearTimeout(m)}}),[]),Object(j.jsx)(u.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:c})]})})},b=a(248),m=a(99),h=a(14),O=function(e){var t=e.user;return t.profile?Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(h.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(h.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(j.jsx)(h.c,{to:"/chat",className:"nav-link",children:"ChatRoom"}),Object(j.jsx)(h.c,{to:"profiles/".concat(t.profile._id),className:"nav-link",children:"My Profile"})]}):Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(h.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(j.jsx)(h.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(j.jsx)(h.c,{to:"/profiles/create",className:"nav-link",children:"Create Profile"})]})},p=Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(h.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(h.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),x=Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(h.c,{to:"/",className:"nav-link",children:"Home"}),Object(j.jsx)(h.c,{to:"/rules",className:"nav-link",children:"Rules"})]}),f=function(e){var t=e.user;return Object(j.jsxs)(m.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(j.jsx)(m.a.Brand,{children:Object(j.jsx)(h.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"SocketToMe"})}),Object(j.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ml-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),x,t?O({user:t}):p]})})]})},g=a(31),v=a(17),N=a.n(v),w="https://thawing-meadow-43090.herokuapp.com",S="http://localhost:4741",y="localhost"===window.location.hostname?S:w,k=a(57),C=a.n(k),P=function(e,t,a){return C()({method:"POST",url:y+"/sign-up/",data:{credentials:{email:e,password:t,password_confirmation:a}}})},A=function(e,t){return C()({url:y+"/sign-in/",method:"POST",data:{credentials:{email:e,password:t}}})},T=function(e){return C()({url:y+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})},F=function(e,t,a){return C()({url:y+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(a.token)},data:{passwords:{old:e,new:t}}})},E=a(6),q=a(29),I=function(e){var t=e.setUser,a=e.msgAlert,c=Object(s.useState)(""),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)(!1),v=Object(i.a)(f,2),w=v[0],S=v[1],y=function(){var e=Object(g.a)(N.a.mark((function e(s){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,P(n,b,p);case 4:return e.next=6,A(n,b);case 6:c=e.sent,t(c.data.user),a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),S(!0),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(1),a({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"}),console.error(e.t0),l(""),m(""),x("");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return w?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(E.a,{onSubmit:y,children:[Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"passwordConfirmation",children:[Object(j.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(E.a.Control,{required:!0,value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)(q.a,{className:"button-52",role:"button",children:"Submit"})]})]})})},D=(a(282),function(e){var t=e.setUser,a=e.msgAlert,c=Object(s.useState)(""),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=function(){var e=Object(g.a)(N.a.mark((function e(s){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,A(n,b);case 4:c=e.sent,t(c.data.user),console.log(c.data.user),a({heading:"Sign In Success!",message:"Welcome!",variant:"success"}),x(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),a({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"}),console.error(e.t0),l(""),m("");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(E.a,{onSubmit:f,children:[Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Email address"}),Object(j.jsx)(E.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"Password"}),Object(j.jsx)(E.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(q.a,{className:"button-52",role:"button",children:"Submit"})]})]})})}),M=function(e){var t=e.user,a=e.clearUser,c=e.msgAlert,r=Object(s.useState)(!1),n=Object(i.a)(r,2),l=n[0],u=n[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:c({heading:"Sign Out Success",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),!t||l?Object(j.jsx)(o.a,{to:"/"}):""},U=function(e){var t=e.user,a=e.msgAlert,c=Object(s.useState)(""),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,F(n,b,t);case 4:a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"}),console.error(e.t0),l(""),m("");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(E.a,{onSubmit:f,children:[Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"email",children:[Object(j.jsx)(E.a.Label,{children:"Old Password"}),Object(j.jsx)(E.a.Control,{type:"password",placeholder:"Old Password",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"password",children:[Object(j.jsx)(E.a.Label,{children:"New Password"}),Object(j.jsx)(E.a.Control,{required:!0,value:b,type:"password",placeholder:"New Password",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(e,t){return C.a.get("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},L=function(e,t,a){return C.a.post("".concat(y,"/profiles/"),{profile:{name:t,about:a}},{headers:{Authorization:"Bearer ".concat(e.token)}})},B=function(e,t,a,s){return C.a.patch("".concat(y,"/profiles/").concat(t),{profile:{name:a,about:s}},{headers:{Authorization:"Bearer ".concat(e.token)}})},W=function(e,t){return C.a.delete("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},z=a(469),R=function(e){var t=e.user,a=e.msgAlert,c=Object(s.useState)(null),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(!1),d=Object(i.a)(u,2),b=d[0],m=d[1],O=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});Object(s.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t,O).then((function(e){return l(e.data.profile)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),a({heading:"Finding Profile failed with error: ",message:"Uh oh. We couldn't find the profile you were looking for",variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t,O).then(delete t.profile,m(!0),a({heading:"Profile Deleted Successfully",message:"Profile successfully deleted. Sad to see you go!",variant:"success"}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),a({heading:"Delete Profile failed with error: ",message:e.t0.message,variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return b?Object(j.jsx)(o.a,{to:"/"}):null===n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:"Fetching Profile"}),Object(j.jsx)(z.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(j.jsx)(q.a,{onClick:function(){return m(!0)},variant:"primary",type:"button",children:"Return Home"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:n.name}),Object(j.jsx)("h4",{children:"About Me:"}),Object(j.jsx)("p",{children:n.about}),Object(j.jsx)(q.a,{onClick:p,variant:"danger",type:"button",children:"Delete Profile"}),Object(j.jsx)(h.b,{to:"/profiles/".concat(O,"/edit"),children:Object(j.jsx)(q.a,{variant:"primary",type:"submit",children:"Edit Profile"})})]})},H=function(e){var t=e.user,a=(e.setUser,e.msgAlert),c=Object(s.useState)(""),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1];if(!t)return Object(j.jsx)(o.a,{to:"/"});var f=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,L(t,n,b).then((function(e){t.profile=e.data.profile}));case 4:a({heading:"Profile Creation Success",message:"Profile created successfully! Get busy chatting!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Profile Creation failed with error: "+e.t0.message,message:"Failed to create a profile. Please check your inputs and try again.",variant:"danger"}),l(""),m("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Your Profile"}),Object(j.jsxs)(E.a,{onSubmit:f,children:[Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"name",children:[Object(j.jsx)(E.a.Label,{children:"Name"}),Object(j.jsx)(E.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(j.jsx)(E.a.Label,{children:"About Me"}),Object(j.jsx)(E.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},Y=function(e){var t=e.user,a=e.msgAlert,c=Object(s.useState)(""),r=Object(i.a)(c,2),n=r[0],l=r[1],u=Object(s.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],h=Object(s.useState)(!1),O=Object(i.a)(h,2),p=O[0],x=O[1],f=Object(o.h)().id;if(!t)return Object(j.jsx)(o.a,{to:"/"});var v=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,B(t,f,n,b);case 4:a({heading:"Profile Edit Success",message:"Profile successfully updated! Get busy chatting!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),a({heading:"Profile Edit failed with error: "+e.t0.message,message:"Failed to update your profile. Please check inputs and try again.",variant:"danger"}),l(""),m("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(j.jsx)(o.a,{to:"/profiles/".concat(f)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Edit Your Profile"}),Object(j.jsxs)(E.a,{onSubmit:v,children:[Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"name",children:[Object(j.jsx)(E.a.Label,{children:"Name"}),Object(j.jsx)(E.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)(E.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(j.jsx)(E.a.Label,{children:"About Me"}),Object(j.jsx)(E.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},J=(a(283),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"Socket to Me"})}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("h2",{children:"Revolutionary  idea"}),Object(j.jsx)("h2",{children:"Unique + texting + different"}),Object(j.jsx)("h2",{children:"And"}),Object(j.jsx)("h2",{children:"Socket"})]}),Object(j.jsx)("div",{className:"idea1",children:Object(j.jsx)("img",{className:"Picture1",src:a(284).default})}),Object(j.jsxs)("div",{className:"img-description",children:[Object(j.jsx)("h3",{className:"Title",children:"Unique Socket Experience"}),Object(j.jsxs)("p",{className:"TitleDescription",children:["With Socket Message you will discover a unique Experience,",Object(j.jsx)("br",{})," that is design to enjoy and fulfill the user interaction."]})]}),Object(j.jsx)("div",{className:"idea2",children:Object(j.jsx)("img",{className:"Picture2",src:a(285).default})}),Object(j.jsxs)("div",{className:"img2-description",children:[Object(j.jsx)("h3",{className:"Title",children:"Texting Socket "}),Object(j.jsxs)("p",{className:"TitleDescription",children:["With Unique texting Experience,",Object(j.jsx)("br",{})," like never before, meet people and make friend in the way."]})]}),Object(j.jsx)("div",{className:"idea3",children:Object(j.jsx)("img",{className:"Picture3",src:a(286).default})}),Object(j.jsxs)("div",{className:"img3-description",children:[Object(j.jsx)("h3",{className:"Title",children:"Different From Competition"}),Object(j.jsxs)("p",{className:"TitleDescription",children:["Thats correct, different from competition,",Object(j.jsx)("br",{})," unique socket, unique user, unique you."]})]}),Object(j.jsx)("div",{className:"idea4",children:Object(j.jsx)("img",{className:"Picture4",src:a(287).default})}),Object(j.jsxs)("div",{className:"img4-description",children:[Object(j.jsx)("h3",{className:"Title",children:"iPhone Support"}),Object(j.jsxs)("p",{className:"TitleDescription",children:["Support to the most popular line up, that is correct",Object(j.jsx)("br",{})," iphone will support Socket app, so not need to worry just",Object(j.jsx)("br",{})," sit down and socket. "]})]}),Object(j.jsx)("div",{className:"idea5",children:Object(j.jsx)("img",{className:"Picture5",src:a(288).default})}),Object(j.jsxs)("div",{className:"img5-description",children:[Object(j.jsx)("h3",{className:"Title",children:"Android Support"}),Object(j.jsxs)("p",{className:"TitleDescription",children:["And Why not?, We also decide ",Object(j.jsx)("br",{})," to bring Android support, because we love you."]})]}),Object(j.jsx)("div",{className:"idea6",children:Object(j.jsx)("img",{className:"Cool1",src:a(289).default})}),Object(j.jsx)("div",{className:"idea7",children:Object(j.jsx)("img",{className:"Cool2",src:a(290).default})}),Object(j.jsx)("div",{className:"idea8",children:Object(j.jsx)("img",{className:"Cool3",src:a(291).default})}),Object(j.jsx)("div",{className:"idea9",children:Object(j.jsx)("img",{className:"Cool4",src:a(292).default})})]})}),_=(a(293),a.p+"static/media/gif.6bda8c01.gif"),K=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"rulesSock",children:[Object(j.jsx)("h1",{className:"rules",children:"please be nice"}),Object(j.jsx)("img",{className:"socket",src:_,alt:"new"})]})})},Q=a(12),V=a(2),X=a(247),Z=(a(298),a(246)),$=Object(X.a)(y,{withCredentials:!0}),ee=function(e){var t=e.user;if(!t||!t.profile)return Object(j.jsx)(o.a,{to:"/"});var a=Object(s.useState)([]),c=Object(i.a)(a,2),r=c[0],l=c[1],u=Object(s.useState)({message:"",name:t.profile.name}),d=Object(i.a)(u,2),b=d[0],m=d[1];Object(s.useEffect)((function(){return $.on("message",(function(e){var t=e.name,a=e.message;l([].concat(Object(n.a)(r),[{name:t,message:a}]))})),function(){$.off("message")}}));return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("ul",{className:"chatBox",children:Object(j.jsx)(Z.a,{className:"chatBox",children:r.map((function(e,t){var a=e.name,s=e.message;return Object(j.jsx)("div",{children:Object(j.jsxs)("h3",{children:[a,": ",Object(j.jsx)("span",{children:s})]})},t)}))})}),Object(j.jsx)("div",{})]}),Object(j.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var t=b.name,a=b.message;$.emit("message",{name:t,message:a}),m({message:"",name:t})},children:[Object(j.jsxs)(E.a.Group,{controlId:"message",children:[Object(j.jsx)(E.a.Label,{children:"Message"}),Object(j.jsx)(E.a.Control,{required:!0,type:"text",name:"message",value:b.message,placeholder:"Enter message",onChange:function(e){return t=e,m(Object(V.a)(Object(V.a)({},b),{},Object(Q.a)({},t.target.name,t.target.value))),void console.log("name ",t.target.name,"  val ",t.target.value);var t}})]}),Object(j.jsx)(q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},te=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)([]),u=Object(i.a)(r,2),b=u[0],m=u[1];console.log(m);var h=function(e){var t=e.heading,a=e.message,s=e.variant,c=Object(l.a)();console.log(c),m((function(e){return[].concat(Object(n.a)(e),[{heading:t,message:a,variant:s,id:c}])}))};return Object(j.jsxs)(j.Fragment,{children:[b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message},e.id)})),Object(j.jsx)(f,{user:a}),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",element:Object(j.jsx)(J,{})}),Object(j.jsx)(o.b,{path:"/rules",element:Object(j.jsx)(K,{})}),Object(j.jsx)(o.b,{path:"/sign-up",element:Object(j.jsx)(I,{setUser:c,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/sign-in",element:Object(j.jsx)(D,{setUser:c,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/change-password",element:Object(j.jsx)(U,{user:a,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/sign-out/",element:Object(j.jsx)(M,{user:a,clearUser:function(){return c(null)},msgAlert:h})}),Object(j.jsx)(o.b,{path:"/profiles/:id",element:Object(j.jsx)(R,{user:a,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/profiles/:id/edit",element:Object(j.jsx)(Y,{user:a,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/profiles/create",element:Object(j.jsx)(H,{user:a,setUser:c,msgAlert:h})}),Object(j.jsx)(o.b,{path:"/chat",element:Object(j.jsx)(ee,{user:a})})]})})]})},ae=Object(j.jsxs)(h.a,{basename:"/project-front",children:[Object(j.jsx)("script",{src:"/socket.io/socket.io.js"}),Object(j.jsx)("script",{children:"var socket = io();"}),Object(j.jsx)(te,{})]});r.a.render(ae,document.getElementById("root"))}},[[465,1,2]]]);
//# sourceMappingURL=main.fd1051c0.chunk.js.map