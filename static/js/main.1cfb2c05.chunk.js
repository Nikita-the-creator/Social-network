(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Nav_nav__2CofN",nav__item:"Nav_nav__item__gMr6Y",active:"Nav_active__1_mZJ",friends:"Nav_friends__quApM"}},105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(36),i=n.n(c),o=(n(76),n(21)),u=n(22),l=n(24),d=n(23),j=(n(77),n(10)),b=n.n(j),p=n(8),f=function(){return Object(a.jsxs)("nav",{className:b.a.nav,children:[Object(a.jsx)("div",{className:b.a.nav__item,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/profile",children:"Profile"})}),Object(a.jsx)("div",{className:"".concat(b.a.nav__item," ").concat(b.a.active),children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/dialogs",children:"Messages"})}),Object(a.jsx)("div",{className:b.a.nav__item,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/news",children:"News"})}),Object(a.jsx)("div",{className:b.a.nav__item,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/music",children:"Music"})}),Object(a.jsx)("div",{className:b.a.nav__item,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/users",children:"Users"})}),Object(a.jsx)("div",{className:b.a.nav__item,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/settings",children:"Settings"})}),Object(a.jsx)("div",{className:b.a.friends,children:Object(a.jsx)(p.b,{activeClassName:b.a.active,to:"/friends",children:"Friends"})})]})},h=function(){return Object(a.jsx)("div",{children:"News"})},O=function(){return Object(a.jsx)("div",{children:"Music"})},v=n(60),m=n.n(v),x=function(){return Object(a.jsx)("div",{className:m.a.settings,children:"Settings"})},g=n(61),S=n.n(g),w=function(){return Object(a.jsx)("div",{className:S.a.friends,children:"Friends"})},N=n(6),y=n(30),A=n(2),C="ADD-MESSAGE",k={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Hey"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogsData:[{id:1,name:"Andrey"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Vasya"},{id:5,name:"Petya"},{id:6,name:"Kolya"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var n={id:5,message:t.newMessageBody};return Object(A.a)(Object(A.a)({},e),{},{messagesData:[].concat(Object(y.a)(e.messagesData),[n]),newMessageText:""});default:return e}},U=n(19),I=n.n(U),M=function(e){var t="/dialogs/"+e.id;return Object(a.jsx)("div",{className:I.a.dialogs+" "+I.a.active,children:Object(a.jsx)(p.b,{to:t,children:e.name})})},E=function(e){var t=e.message;return Object(a.jsx)("div",{className:I.a.dialog,children:t})},R=n(3),F=function(e){var t=e.dialogsPage,n=e.addMessage,r=t.dialogsData.map((function(e){return Object(a.jsx)(M,{name:e.name,id:e.id},e.id)})),s=t.messagesData.map((function(e){return Object(a.jsx)(E,{message:e.message,id:e.id},e.id)}));return Object(a.jsx)("div",{children:Object(a.jsx)(R.d,{initialValues:{newMessageBody:""},onSubmit:function(e){var t;t=e.newMessageBody,n(t)},children:function(e){return Object(a.jsxs)(R.c,{className:I.a.dialogs,children:[Object(a.jsx)("div",{className:I.a.dialogsItems,children:r}),Object(a.jsx)("div",{className:I.a.messages,children:s}),Object(a.jsx)("div",{className:I.a.messages,children:s}),Object(a.jsxs)("div",{className:I.a.addMessage,children:[Object(a.jsx)(R.b,{name:"newMessageBody",cols:"20",rows:"5"}),Object(a.jsx)("button",{type:"submit",className:I.a.button,children:"add message"})]})]})}})})},D=n(11),_=n(37),T=n(15),L=Object(T.compose)(Object(D.b)((function(e){return{dialogsPage:e.dialogPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:C,newMessageBody:e}}(t))}}})),_.a)(F),K=n(32),J=n(48),G=n.n(J),q=n(38),B=n(27),H=function(e){var t=Object(r.useState)(!1),n=Object(K.a)(t,2),s=n[0],c=n[1],i=Object(r.useState)(e.status),o=Object(K.a)(i,2),u=o[0],l=o[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(a.jsxs)("div",{children:[!s&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Status"}),": ",Object(a.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"No status"})]}),s&&Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatus(u)},autoFocus:!0,value:u})})]})},Y=n(42),z=n.n(Y),V=function(e){var t=e.profile,n=e.onSubmit;return Object(a.jsx)("div",{children:Object(a.jsx)(R.d,{initialValues:{fullName:t.fullName,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,aboutMe:t.aboutMe,contacts:t.contacts},validate:function(e){var t={};return e.contacts||(t.contacts="Required"),e.fullName||(t.fullName="Required"),t},onSubmit:function(e){n(e)},children:Object(a.jsxs)(R.c,{children:[Object(a.jsx)("button",{type:"submit",children:"Save"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name : "}),Object(a.jsx)(R.b,{name:"fullName"}),Object(a.jsx)(R.a,{name:"fullName",component:"div"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job : "})," ",Object(a.jsx)(R.b,{type:"checkbox",name:"lookingForAJob"})]}),Object(a.jsxs)("div",{children:["Contacts : ",Object.keys(t.contacts).map((function(e){return Object(a.jsxs)("div",{className:z.a.contacts,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:e}),": ",Object(a.jsx)("div",{children:Object(a.jsx)(R.b,{name:"contacts."+e})})]}),Object(a.jsx)(R.a,{name:"contacts",component:"div"})]},e)})),Object(a.jsx)(R.a,{name:"contacts",component:"div"})]}),Object(a.jsx)(R.a,{name:"contacts",component:"div"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills : "}),Object(a.jsx)(R.b,{name:"lookingForAJobDescription"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me : "}),Object(a.jsx)(R.b,{name:"aboutMe"})]})]})})})},Q=function(e){var t=e.contactTitle,n=e.contactValue;return Object(a.jsx)("div",{className:z.a.contacts,children:Object(a.jsxs)("b",{children:[t,": ",n]})})},Z=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:n&&Object(a.jsx)("button",{onClick:r,children:"Edit"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Full name"})," : ",t.fullName," "]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Looking for a job"})," : ",t.lookingForAJob?" Yes":"No"," "]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e){return Object(a.jsx)(Q,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),t.lookingForAJob&&Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"My professional skills : "}),t.lookingForAJobDescription]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"About me : "}),t.aboutMe]})]})},X=function(e){var t=e.profile,n=e.updateStatus,s=e.status,c=e.isOwner,i=e.savePhoto,o=e.saveProfile,u=Object(r.useState)(!1),l=Object(K.a)(u,2),d=l[0],j=l[1];if(!t)return Object(a.jsx)(q.a,{});return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:G.a.description,children:[Object(a.jsxs)("div",{className:G.a.profileInfo,children:[Object(a.jsx)("img",{src:null!=t.photos.large?t.photos.large:B.a,alt:""}),Object(a.jsx)("div",{children:c&&Object(a.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})}),d?Object(a.jsx)(V,{onSubmit:function(e){o(e).then((function(){j(!1)}))},profile:t,saveProfile:o}):Object(a.jsx)(Z,{isOwner:c,goToEditMode:function(){j(!0)},profile:t})]}),Object(a.jsx)(H,{updateStatus:n,status:s})]})})},W=n(5),$=n.n(W),ee=n(12),te=n(9),ne="ADD-POST",ae="SET_USER_PROFILE",re="SET_STATUS",se="DELETE_POST",ce="SAVE_PHOTO_SUCCESS",ie="SAVE_PROFILE_SUCCESS",oe={postData:[{id:1,message:"Hi",likeCount:12},{id:2,message:"Hey",likeCount:20},{id:3,message:"How many likes do you have?",likeCount:30},{id:4,message:"Its my first post",likeCount:43}],profile:null,status:""},ue=function(e){return{type:re,status:e}},le=function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.c.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:ae,user:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:var n={id:5,message:t.newPostText,likeCount:0};return Object(A.a)(Object(A.a)({},e),{},{postData:[].concat(Object(y.a)(e.postData),[n]),newPostText:""});case ae:return Object(A.a)(Object(A.a)({},e),{},{profile:t.user});case re:return Object(A.a)(Object(A.a)({},e),{},{status:t.status});case se:return Object(A.a)(Object(A.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case ce:return Object(A.a)(Object(A.a)({},e),{},{profile:Object(A.a)(Object(A.a)({},e.profile),{},{photos:t.photos})});case ie:return Object(A.a)(Object(A.a)({},e),{},{profile:Object(A.a)(Object(A.a)({},e.profile),{},{profile:t.profile})});default:return e}},je=n(49),be=n.n(je),pe=n(50),fe=n.n(pe),he=function(e){return Object(a.jsxs)("div",{className:fe.a.item,children:[Object(a.jsx)("img",{className:fe.a.avatar,src:B.a,alt:""}),e.message,Object(a.jsxs)("div",{children:[" like ",e.likeCount," "]})]})},Oe=function(e){var t=e.profilePage.postData.map((function(e){return Object(a.jsx)(he,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(a.jsx)("div",{className:be.a.postsBlock,children:Object(a.jsx)(R.d,{initialValues:{newPost:""},validate:function(e){var t={};return e.newPost||(t.newPost="Field is required"),t},onSubmit:function(t){var n;n=t.newPost,e.addPost(n)},children:function(e){return Object(a.jsxs)(R.c,{children:[Object(a.jsx)("h3",{children:"My posts"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(R.b,{name:"newPost"}),Object(a.jsx)(R.a,{name:"newPost",component:"div"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"Add post"})}),Object(a.jsx)("div",{className:be.a.posts,children:t})]})}})})},ve=Object(D.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:ne,newPostText:e}}(t))}}}))(Oe),me=function(e){var t=e.status,n=e.profile,r=e.updateStatus,s=e.isOwner,c=e.savePhoto,i=e.saveProfile;return Object(a.jsxs)("div",{children:[Object(a.jsx)(X,{savePhoto:c,isOwner:s,status:t,profile:n,updateStatus:r,saveProfile:i}),Object(a.jsx)(ve,{})]})},xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getProfileThunkCreator(e),this.props.getStatusThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(me,Object(A.a)(Object(A.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusThunkCreator,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),n}(s.a.Component),ge=Object(T.compose)(Object(D.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,authMe:e.auth.isAuth}}),{getProfileThunkCreator:le,getStatusThunkCreator:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.b.getStatus(e);case 2:a=t.sent,n(ue(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunkCreator:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(ue(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:ce,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n,a){var r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,te.b.saveProfile(e);case 3:0===t.sent.data.resultCode&&n(le(r));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),N.f,_.a)(xe),Se=n(31),we=n.n(Se),Ne=function(e){var t=e.logout,n=e.login,r=e.isAuth;e.profile;return Object(a.jsxs)("header",{className:we.a.header,children:[Object(a.jsx)("img",{className:we.a.header,src:"https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png",alt:""}),Object(a.jsx)("div",{className:we.a.loginBlock,children:r?Object(a.jsxs)("div",{className:we.a.loginElem,children:[Object(a.jsx)("img",{className:we.a.headerPhoto,src:B.a,alt:""}),Object(a.jsxs)("span",{children:[n," - ",Object(a.jsx)("button",{onClick:t,children:"Log out"})]})]}):Object(a.jsx)(p.b,{to:"/login",children:"Login"})})]})},ye="SET_USER_DATA",Ae="GET_CAPTCHA_URL_SUCCESS",Ce={userId:null,email:null,login:null,isAuth:!1,defaultAvatar:{defaultAvatar:B.a},captcha:null},ke=function(e,t,n,a){return{type:ye,data:{userId:e,email:t,login:n,isAuth:a}}},Pe=function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){var n,a,r,s,c;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.c.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.email,c=a.login,a.captcha,t(ke(r,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(A.a)(Object(A.a)({},e),t.data);case Ae:return Object(A.a)(Object(A.a)({},e),t.payload);default:return e}},Ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(Ne,Object(A.a)(Object(A.a)({},this.props),{},{profile:this.props.profile}))}}]),n}(s.a.Component),Me=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile}}),{logout:function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.logout();case 2:0===e.sent.data.resultCode&&t(ke(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ie),Ee=n(34),Re=n.n(Ee),Fe=function(e){var t=e.authMeThunkCreator,n=e.captchaUrl,r=e.getCaptchaUrl;return Object(a.jsx)("div",{children:Object(a.jsx)(R.d,{initialValues:{email:"",password:"",rememberMe:!1,captcha:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password||(t.password="Required"),t},onSubmit:function(e,n){te.a.login(e.email,e.password,e.rememberMe,e.captcha).then((function(e){0===e.data.resultCode?t():1===e.data.resultCode?(n.setFieldError("email","Invalid email"),n.setFieldError("password","Invalid password")):10===e.data.resultCode&&(r(),n.setFieldError("captcha","Invalid anti-bot symbol"))}))},children:function(e){return Object(a.jsxs)(R.c,{className:Re.a.loginForm,children:[Object(a.jsx)("h3",{children:"Email"}),Object(a.jsx)(R.b,{autoComplete:"username",type:"email",name:"email"}),Object(a.jsx)(R.a,{className:Re.a.error,name:"email",component:"div"}),Object(a.jsx)("h3",{children:"Password"}),Object(a.jsx)(R.b,{autoComplete:"current-password",type:"password",name:"password"}),Object(a.jsx)(R.a,{className:Re.a.error,name:"password",component:"div"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(R.b,{type:"checkbox",name:"rememberMe"}),"remember me"]}),Object(a.jsx)("div",{children:n&&Object(a.jsx)("img",{src:n})}),Object(a.jsx)("div",{children:n&&Object(a.jsx)(R.b,{name:"captcha"})}),Object(a.jsx)(R.a,{className:Re.a.error,name:"captcha",component:"div"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",disabled:!1,children:"Sign up"})})]})}})})},De=n(68),_e=n.n(De),Te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(N.a,{to:"/profile"}):Object(a.jsxs)("div",{className:_e.a.loginContainer,children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(Fe,{captchaUrl:this.props.captchaUrl,authMeThunkCreator:this.props.authMeThunkCreator,getCaptchaUrl:this.props.getCaptchaUrl})]})}}]),n}(s.a.Component),Le=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captcha}}),{authMeThunkCreator:Pe,getCaptchaUrl:function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){var n,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.a.captchaUrl();case 2:n=e.sent,a=n.data.url,t({type:Ae,payload:{captcha:a}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Te),Ke="SET_INITIALIZE",Je={initialized:!1},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ke:return Object(A.a)(Object(A.a)({},e),{},{initialized:!0});default:return e}},qe=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,108))})),Be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsx)("div",{className:"main",children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(Me,{}),Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"app-wrapper-content",children:[Object(a.jsx)(N.b,{path:"/",exact:!0,children:Object(a.jsx)(N.a,{to:"/profile"})}),Object(a.jsx)(N.b,{path:"/dialogs",render:function(){return Object(a.jsx)(L,{})}}),Object(a.jsx)(N.b,{path:"/profile/:userId?",render:function(){return Object(a.jsx)(ge,{})}}),Object(a.jsx)(N.b,{path:"/news",component:h}),Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)("div",{children:"...loading"}),children:Object(a.jsx)(N.b,{path:"/users",render:function(){return Object(a.jsx)(qe,{})}})}),Object(a.jsx)(N.b,{path:"/music",component:O}),Object(a.jsx)(N.b,{path:"/settings",component:x}),Object(a.jsx)(N.b,{path:"/friends",component:w}),Object(a.jsx)(N.b,{path:"/login",render:function(){return Object(a.jsx)(Le,{})}})]})]})}):Object(a.jsx)(q.a,{})}}]),n}(s.a.Component),He=Object(T.compose)(Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Pe());Promise.all([t]).then((function(){e({type:Ke})}))}}}))(Be),Ye={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return e},Ve=n(59),Qe=n(69),Ze=n(70),Xe=Object(T.combineReducers)({profilePage:de,dialogPage:P,sidebar:ze,usersPage:Ve.a,auth:Ue,app:Ge}),We=Object(T.createStore)(Xe,Object(Ze.composeWithDevTools)(Object(T.applyMiddleware)(Qe.a)));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(D.a,{store:We,children:Object(a.jsx)(He,{})})})}),document.getElementById("root"))},19:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2Eitc",dialogsItems:"Dialogs_dialogsItems__31LRN",addMessage:"Dialogs_addMessage__2mIv-",button:"Dialogs_button__ivoL8",active:"Dialogs_active__a_bFp",messages:"Dialogs_messages__f1tPu"}},27:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},31:function(e,t,n){e.exports={header:"Header_header__2gJAk",loginBlock:"Header_loginBlock__3CypZ",headerPhoto:"Header_headerPhoto__282TC",loginHeader:"Header_loginHeader__sFzzJ",loginElem:"Header_loginElem__3qn-L"}},34:function(e,t,n){e.exports={error:"LoginForm_error__3UVHc"}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(2),r=n(0),s=n(21),c=n(22),i=n(24),o=n(23),u=n(1),l=n.n(u),d=n(6),j=n(11),b=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return!1===this.props.isAuth?Object(r.jsx)(d.a,{to:"/login"}):Object(r.jsx)(e,Object(a.a)({},this.props))}}]),u}(l.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},38:function(e,t,n){"use strict";var a=n(0),r=n(66),s=n.n(r);n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:s.a.ldsSpinner,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}},42:function(e,t,n){e.exports={contacts:"contacts_contacts__xSREA"}},48:function(e,t,n){e.exports={description:"ProfileInfo_description__3fXNL",profileInfo:"ProfileInfo_profileInfo__15QJ9"}},49:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1HQ1U"}},50:function(e,t,n){e.exports={avatar:"Post_avatar__3IjN1"}},59:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"d",(function(){return S})),n.d(t,"b",(function(){return N})),n.d(t,"g",(function(){return y}));var a=n(5),r=n.n(a),s=n(12),c=n(30),i=n(2),o=n(9),u="FOLLOW",l="UNFOLLOW",d="SET_USERS",j="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",p="TOGGLE_IS_FETCHING",f="FOLLOWING_IN_PROGRESS",h={userData:[],pageSize:6,totalUsersCount:30,currentPage:1,isFetching:!1,followed:!0,followingInProcess:[]},O=function(e){return{type:u,userId:e}},v=function(e){return{type:l,userId:e}},m=function(e){return{type:j,currentPage:e}},x=function(e){return{type:p,isFetching:e}},g=function(e,t){return{type:f,isFetching:e,userId:t}},S=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),a(m(e)),n.next=4,o.c.getUsers(e,t);case 4:s=n.sent,a(x(!1)),a((c=s.items,{type:d,users:c})),a((r=s.totalCount,{type:b,count:r}));case 8:case"end":return n.stop()}var r,c}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(s(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,o.c.postUsers.bind(o.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,o.c.deleteUsers.bind(o.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{userData:e.userData.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case l:return Object(i.a)(Object(i.a)({},e),{},{userData:e.userData.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{userData:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case f:return Object(i.a)(Object(i.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(c.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!==t.userId}))});default:return e}}},60:function(e,t,n){},61:function(e,t,n){},66:function(e,t,n){e.exports={ldsSpinner:"Preloader_ldsSpinner__NoDl5","lds-spinner":"Preloader_lds-spinner__1cP1t"}},68:function(e,t,n){e.exports={loginContainer:"LoginContainer_loginContainer__3JIEl"}},76:function(e,t,n){},77:function(e,t,n){},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(67),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0c7d80e1-aebc-4629-9fc1-998afb681929"}}),s={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},deleteUsers:function(e){return r.delete("follow/".concat(e),{}).then((function(e){return e.data}))},postUsers:function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))},authMe:function(){return r.get("auth/me",{}).then((function(e){return e}))},getProfile:function(e){return console.log("Obsolete method. Use profileAPI"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e}))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={login:function(e,t,n,a){return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("/auth/login")},captchaUrl:function(){return r.get("security/get-captcha-url")}}}},[[105,1,2]]]);
//# sourceMappingURL=main.1cfb2c05.chunk.js.map