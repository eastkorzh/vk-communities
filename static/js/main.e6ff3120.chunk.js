(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(62)},48:function(e,t,n){},49:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),s=n.n(c),o=n(19),i=n(29),l=n(38),u=n(35),m=n(15),p=n(36),d=n(9),f=n(10),h=n(12),v=n(11),E=n(13),g=n(20),b="LOGIN_REQUEST",k="LOGIN_SUCCESS",O="LOGIN_FAIL",j="USER_GET_REQUEST",w="USER_GET_SUCCESS",y="USER_GET_FAIL",x={type:b},_={type:k},S={type:O},N={type:j},C={type:w},G=function(e){return{type:y,error:e}},R=n(6),F="COMMUNITIES_GET_REQUEST",L="COMMUNITIES_GET_SUCCESS",T="COMMUNITIES_GET_FAIL",I="WALL_GET_REQUEST",q="WALL_GET_SUCCESS",M="WALL_GET_FAIL",U="GET_COMMENTS_REQUEST",P="GET_COMMENTS_SUCCESS",z="GET_COMMENTS_FAIL",A={type:F},D=function(e){return{type:L,response:e}},Q=function(e){return{type:T,errors:e}},W=function(e){return{type:I,pickedGroup:Object(R.a)({},e)}},B=function(e){return{type:q,response:e}},J=function(e){return{type:M,errors:e}},K=function(e,t){return{type:U,owner_id:e,post_id:t}},V=function(e){return{type:P,response:e}},H=function(e){return{type:z,errors:e}},X=function(e){var t=e.onLogin;return a.a.createElement("button",{onClick:t,className:"login-button"},"true"===localStorage.isLoggedIn?"Log out":"Log in")},Y=(n(48),function(e){var t=e.state;return a.a.createElement("div",{className:"profile-card"},a.a.createElement("p",null,t.first_name),a.a.createElement("a",{href:"https://vk.com/id".concat(localStorage.id)},a.a.createElement("img",{src:t.photo,alt:"Profile"})))}),Z=(n(49),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"renderCommunities",value:function(){var e=this.props,t=e.wallGetRequest,n=e.state;return n.communities.map(function(e){return a.a.createElement("div",{key:e.id,className:"group-card",style:{opacity:n.isFetching?.5:1}},a.a.createElement("div",{onClick:function(){return t(e)}},a.a.createElement(m.b,{to:"/".concat(e.screen_name,"/wall")},a.a.createElement("img",{src:e.photo_100,alt:"".concat(e.name)}))),a.a.createElement("div",{className:"info"},a.a.createElement(m.b,{to:"/".concat(e.screen_name,"/wall"),className:"group-name"},a.a.createElement("div",null,e.name)),a.a.createElement("div",null,e.activity),a.a.createElement("div",null,e.members_count," \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a")))})}},{key:"render",value:function(){var e=this.props.state;return a.a.createElement(a.a.Fragment,null,e.communities[0]&&this.renderCommunities())}}]),t}(a.a.Component)),$=(n(55),n(56),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={style:{gridRowEnd:"span 2"}},n.wallPost=a.a.createRef(),n.postRef=a.a.createRef(),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"resizeComponent",value:function(){var e=this.wallPost.current.getBoundingClientRect().height,t=Math.ceil((e+5)/5)+1;this.setState({style:{gridRowEnd:"span ".concat(t)}})}},{key:"componentDidMount",value:function(){this.resizeComponent()}},{key:"takePhoto",value:function(e,t){if(e.attachments){var n=[],r=!0,c=!1,s=void 0;try{for(var o,i=e.attachments[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value;"photo"===l.type&&n.push(l.photo)}}catch(m){c=!0,s=m}finally{try{r||null==i.return||i.return()}finally{if(c)throw s}}if(n.length){var u=n.map(function(e){var n={};if(e.sizes[t])n=e.sizes[t];else for(var r=t;r>0;r--)if(e.sizes[r])return e.sizes[r];return n});return a.a.createElement("img",{src:u[0].url,alt:"",className:"attached-img"})}}}},{key:"takeDate",value:function(e){return new Date(e).toLocaleString()}},{key:"render",value:function(){var e=this,t=this.props,n=t.item,r=t.getCommentsRequest;return a.a.createElement(m.b,{to:"comments",key:n.id+"link",style:this.state.style,className:"item",ref:this.postRef},a.a.createElement("div",{ref:this.wallPost,onClick:function(){n.comments.count&&(sessionStorage.owner_id=n.owner_id,sessionStorage.item_id=n.id,r(sessionStorage.owner_id,sessionStorage.item_id))},className:"wall-post ".concat(n.id)},a.a.createElement("div",{className:"post-date"},this.takeDate(1e3*n.date)),a.a.createElement("div",{className:"post-text"},n.text),a.a.createElement("div",{className:"post-img-div",onLoad:function(){return e.resizeComponent()}},this.takePhoto(n,4)),a.a.createElement("div",{className:"post-info"},a.a.createElement("div",null,a.a.createElement("div",{className:"like-svg"}),a.a.createElement("div",null,n.likes.count)),n.comments&&a.a.createElement("div",null,a.a.createElement("div",{className:"comments-svg"}),a.a.createElement("div",null,n.comments.count)),a.a.createElement("div",null,a.a.createElement("div",{className:"reposts-svg"}),a.a.createElement("div",null,n.reposts.count)),n.views&&a.a.createElement("div",{className:"views"},a.a.createElement("div",{className:"view-svg"}),a.a.createElement("div",null,n.views.count)))))}}]),t}(r.Component)),ee=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.state,n=e.props,r=e.wallGetRequest;t.pickedGroup.screen_name||!t.communities[0]||t.isFetching||r(function(e){for(var n=t.communities,r=0;n.length>r;r++)if(n[r].screen_name===e)return n[r]}(n.match.params.id))}},{key:"renderPosts",value:function(){var e=this.props,t=e.state,n=e.getCommentsRequest;if(!t.isFatching&&t.posts[0])return t.posts.map(function(e){return a.a.createElement($,{item:e,getCommentsRequest:n,key:e.id})})}},{key:"render",value:function(){var e=this.props.state;return a.a.createElement("div",{className:"wall-grid",style:{opacity:e.isFetching?.5:1}},this.renderPosts())}}]),t}(a.a.Component),te=(n(57),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,n=e.match;return a.a.createElement("div",{className:"back"},a.a.createElement(g.a,{path:"/:id/wall",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.b,{to:"/"},a.a.createElement("div",{className:"back-svg"})),a.a.createElement("div",{className:"back-img"},t.pickedGroup&&a.a.createElement("img",{src:t.pickedGroup.photo_50,alt:""})),a.a.createElement("div",{className:"back-h1"},t.pickedGroup&&a.a.createElement("h1",null,t.pickedGroup.name.slice(0,26))))}}),a.a.createElement(g.a,{path:"/:id/comments",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.b,{to:"/".concat(n.params.id,"/wall")},a.a.createElement("div",{className:"back-svg"})),a.a.createElement("div",{className:"back-img"},t.pickedGroup&&a.a.createElement("img",{src:t.pickedGroup.photo_50,alt:""})),a.a.createElement("div",{className:"back-h1"},t.pickedGroup&&a.a.createElement("h1",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")))}}))}}]),t}(a.a.Component)),ne=(n(58),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(v.a)(t).call(this,e))).takeProfile=function(e){var t=n.props.state,r=t.comments.profiles,a=t.comments.groups;if("".concat(e).includes("-")){for(var c=0;c<a.length;c++)if("-".concat(a[c].id)==="".concat(e))return a[c]}else for(var s=0;s<r.length;s++)if(r[s].id===e)return r[s]},n.takePhoto=function(e,t){if(e.attachments){var n=[],r=!0,c=!1,s=void 0;try{for(var o,i=e.attachments[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var l=o.value;"photo"===l.type&&n.push(l.photo)}}catch(m){c=!0,s=m}finally{try{r||null==i.return||i.return()}finally{if(c)throw s}}if(n.length){var u=n.map(function(e){var n={};if(e.sizes[t])n=e.sizes[t];else for(var r=t;r>0;r--)if(e.sizes[r])return e.sizes[r];return n});return a.a.createElement("img",{src:u[0].url,alt:"",className:"attached-img"})}}},n.handleText=function(e){if(!e||"["!==e.slice(0,1))return e;var t=e.indexOf("["),n=e.indexOf("]"),r=e.indexOf("|"),c=e.slice(r+1,n),s=e.slice(t+1,r);return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://vk.com/".concat(s)},c),a.a.createElement(a.a.Fragment,null,e.slice(n+1)))},n.state={hiresImg:""},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.item;if(this.handleText(e.text),e.deleted)return a.a.createElement("div",{className:"delited-comment"},"Comment delited");var t=this.takeProfile(e.from_id);return a.a.createElement(a.a.Fragment,null,t.type?a.a.createElement("div",{className:"comment-card"},a.a.createElement("a",{href:t&&"https://vk.com/club"+t.id},a.a.createElement("img",{src:t&&t.photo_50,alt:""})),a.a.createElement("div",{className:"comment"},a.a.createElement("a",{href:t&&"https://vk.com/club"+t.id},t&&t.name),a.a.createElement("div",{className:"handled-text"},this.handleText(e.text)),a.a.createElement("div",null,this.takePhoto(e,2)),a.a.createElement("div",{className:"comment-like"},a.a.createElement("div",{className:"like"}),a.a.createElement("div",null,e.likes&&e.likes.count)))):a.a.createElement("div",{className:"comment-card"},a.a.createElement("a",{href:t&&"https://vk.com/id"+t.id},a.a.createElement("img",{src:t&&t.photo_50,alt:""})),a.a.createElement("div",{className:"comment"},a.a.createElement("a",{href:t&&"https://vk.com/id"+t.id},t&&t.first_name+" "+t.last_name),a.a.createElement("div",{className:"handled-text"},this.handleText(e.text)),a.a.createElement("div",null,this.takePhoto(e,2)),a.a.createElement("div",{className:"comment-like"},a.a.createElement("div",{className:"like"}),a.a.createElement("div",null,e.likes&&e.likes.count)))))}}]),t}(a.a.Component)),re=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.state,n=e.getCommentsRequest,r=e.props,a=e.wallGetRequest;t.pickedGroup.screen_name||!t.communities[0]||t.isFetching||a(function(e){for(var n=t.communities,r=0;n.length>r;r++)if(n[r].screen_name===e)return n[r]}(r.match.params.id));t.comments.count||t.isFetching||n(sessionStorage.owner_id,sessionStorage.item_id)}},{key:"renderComments",value:function(){var e=this.props.state;return e.comments.items.map(function(t){return a.a.createElement("div",{key:t.id,className:"wrapper"},a.a.createElement(ne,{item:t,state:e}),a.a.createElement("div",{className:"thread"},0!==t.thread.count&&t.thread.items.map(function(t){return a.a.createElement(ne,{key:t.id,item:t,state:e})})))})}},{key:"render",value:function(){var e=this.props.state;return a.a.createElement("div",{className:"comments-grid",style:{opacity:e.isFetching?.2:1}},e.comments.items&&e.comments.profiles&&this.renderComments())}}]),t}(a.a.Component),ae=(n(59),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={isSorted:!1,originalSort:{}},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"sortCommentsFunction",value:function(e){var t=this.props.sortComments;if(this.state.isSorted)t(this.state.originalSort);else{this.setState({originalSort:e});var n=e.items.filter(function(e){return!e.deleted}),r=Object(R.a)({},e,{items:n}),a=r.items.sort(function(e,t){return t.likes.count-e.likes.count});t(Object(R.a)({},r,{items:a}))}this.setState({isSorted:!this.state.isSorted})}},{key:"render",value:function(){var e=this,t=this.props.state;return a.a.createElement("div",null,a.a.createElement(g.a,{path:"/:id/comments",render:function(){return a.a.createElement(a.a.Fragment,null,0!==t.comments.length&&a.a.createElement("button",{className:"sort-button",onClick:function(){return e.sortCommentsFunction(t.comments)}},e.state.isSorted?"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435":"\u041b\u0443\u0447\u0448\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"))}}))}}]),t}(a.a.Component)),ce=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.communitiesGetRequest,n=e.state;"true"!==localStorage.isLoggedIn||n.communities.length||t()}},{key:"render",value:function(){var e=this.props,t=e.state,n=Object(p.a)(e,["state"]);return a.a.createElement("div",{className:"app-grid"},a.a.createElement("div",{className:"logged-user"},"true"===localStorage.isLoggedIn&&a.a.createElement(Y,{state:localStorage}),a.a.createElement(X,{state:t,onLogin:n.onLogin})),a.a.createElement(g.a,{exact:!0,path:"/",render:function(){return a.a.createElement("h1",{className:"groups-h1"},"\u0413\u0440\u0443\u043f\u043f\u044b")}}),a.a.createElement("div",{className:"groups-grid"},"true"===localStorage.isLoggedIn&&a.a.createElement(g.a,{exact:!0,path:"/",render:function(){return a.a.createElement(Z,{state:t,wallGetRequest:n.wallGetRequest})}})),a.a.createElement(g.a,{path:"/:id/",render:function(e){return a.a.createElement("div",{className:"top-pannel"},a.a.createElement(te,{state:t,match:e.match}),a.a.createElement(ae,{state:t,sortComments:n.sortComments}))}}),a.a.createElement(g.a,{path:"/:id/wall",render:function(e){return a.a.createElement(ee,{state:t,wallGetRequest:n.wallGetRequest,getCommentsRequest:n.getCommentsRequest,props:e})}}),a.a.createElement(g.a,{path:"/:id/comments",render:function(e){return a.a.createElement(re,{state:t,wallGetRequest:n.wallGetRequest,getCommentsRequest:n.getCommentsRequest,props:e})}}))}}]),t}(a.a.Component),se=Object(i.b)(function(e){return{state:e}},function(e){return{onLogin:function(){return e(x)},communitiesGetRequest:function(){return e(A)},wallGetRequest:function(t){return e(W(t))},getCommentsRequest:function(t,n){return e(K(t,n))},sortComments:function(t){return e(function(e){return{type:"SORT_COMMENTS",result:e}}(t))}}})(ce),oe=n(23);var ie=n(5),le=n.n(ie),ue=n(7),me=function(e){var t=e.method,n=e.params;return new Promise(function(e,r){VK.Api.call(t,Object(R.a)({v:"5.95"},n),function(t){return e(t)})}).then(function(e){return e})},pe=le.a.mark(Ee),de=le.a.mark(ge),fe=le.a.mark(be),he=le.a.mark(ke),ve=le.a.mark(Oe);function Ee(){var e,t;return le.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=function(){return new Promise(function(e,t){VK.Auth.login(function(n){n.session?e(n):t(n)},270336)}).then(function(e){return e})},n.prev=1,t="","false"!==localStorage.isLoggedIn&&localStorage.isLoggedIn){n.next=9;break}return n.next=6,e();case 6:t=n.sent,n.next=10;break;case 9:localStorage.isLoggedIn="false";case 10:if(!t.session){n.next=17;break}return localStorage.isLoggedIn="true",localStorage.id=t.session.user.id,n.next=15,Object(ue.b)(_);case 15:n.next=18;break;case 17:throw new Error(t.error);case 18:n.next=24;break;case 20:return n.prev=20,n.t0=n.catch(1),n.next=24,Object(ue.b)(S);case 24:case"end":return n.stop()}},pe,null,[[1,20]])}function ge(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)(x.type,Ee);case 2:case"end":return e.stop()}},de)}function be(){var e;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ue.b)(N);case 3:return t.next=5,me({method:"users.get",params:{user_ids:localStorage.id,fields:"photo_200",v:"5.95"}});case 5:if(!(e=t.sent).response){t.next=16;break}return localStorage.photo=e.response[0].photo_200,localStorage.first_name=e.response[0].first_name,localStorage.last_name=e.response[0].last_name,t.next=12,Object(ue.b)(C);case 12:return t.next=14,Object(ue.b)(A);case 14:t.next=17;break;case 16:throw new Error(e.error);case 17:t.next=23;break;case 19:return t.prev=19,t.t0=t.catch(0),t.next=23,Object(ue.b)(G(t.t0));case 23:case"end":return t.stop()}},fe,null,[[0,19]])}function ke(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)(_.type,be);case 2:case"end":return e.stop()}},he)}function Oe(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.a)([ge(),ke()]);case 2:case"end":return e.stop()}},ve)}var je=le.a.mark(Ce),we=le.a.mark(Ge),ye=le.a.mark(Re),xe=le.a.mark(Fe),_e=le.a.mark(Le),Se=le.a.mark(Te),Ne=le.a.mark(Ie);function Ce(){var e;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,me({method:"groups.get",params:{extended:1,count:999,fields:"activity,members_count"}});case 3:if((e=t.sent).error){t.next=9;break}return t.next=7,Object(ue.b)(D(e.response));case 7:t.next=10;break;case 9:throw new Error(e.error.error_msg);case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(ue.b)(Q(t.t0));case 16:return t.next=18,localStorage.isLoggedIn="false";case 18:case"end":return t.stop()}},je,null,[[0,12]])}function Ge(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)(A.type,Ce);case 2:case"end":return e.stop()}},we)}function Re(e){var t;return le.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,me({method:"wall.get",params:{domain:e.pickedGroup.screen_name,count:30,extended:1}});case 3:if((t=n.sent).error){n.next=9;break}return n.next=7,Object(ue.b)(B(t.response));case 7:n.next=10;break;case 9:throw new Error(t.error.error_msg);case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(ue.b)(J(n.t0));case 16:case"end":return n.stop()}},ye,null,[[0,12]])}function Fe(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)(W().type,Re);case 2:case"end":return e.stop()}},xe)}function Le(e){var t;return le.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,me({method:"wall.getComments",params:{owner_id:e.owner_id,post_id:e.post_id,need_likes:1,count:100,thread_items_count:10,extended:1}});case 3:if((t=n.sent).error){n.next=9;break}return n.next=7,Object(ue.b)(V(t.response));case 7:n.next=10;break;case 9:throw new Error(t.error.error_msg);case 10:n.next=17;break;case 12:return n.prev=12,n.t0=n.catch(0),console.log("onGetCommentsRequest: ",n.t0),n.next=17,Object(ue.b)(H(n.t0));case 17:case"end":return n.stop()}},_e,null,[[0,12]])}function Te(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.c)(K().type,Le);case 2:case"end":return e.stop()}},Se)}function Ie(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.a)([Ge(),Fe(),Te()]);case 2:case"end":return e.stop()}},Ne)}var qe=le.a.mark(Me);function Me(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ue.a)([Oe(),Ie()]);case 2:case"end":return e.stop()}},qe)}n(61);var Ue=Object(l.a)(),Pe=Object(u.createLogger)(),ze=Object(o.d)(function(){var e,t,n,r,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,errors:[],communities:[],pickedGroup:"",posts:[],comments:[]},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case b:return Object(R.a)({},a,{isFetching:!0});case k:case O:return Object(R.a)({},a,{isFetching:!1});case j:return Object(R.a)({},a,{isFetching:!0});case w:return Object(R.a)({},a,{isFetching:!1});case y:return Object(R.a)({},a,{isFetching:!1,errors:(e=a.errors).concat.apply(e,Object(oe.a)(a.errors).concat([c.error]))});case F:return Object(R.a)({},a,{isFetching:!0});case L:return Object(R.a)({},a,{isFetching:!1,communities:c.response.items});case T:return Object(R.a)({},a,{isFetching:!1,errors:(t=a.errors).concat.apply(t,Object(oe.a)(a.errors).concat([c.error]))});case I:return Object(R.a)({},a,{isFetching:!0,pickedGroup:c.pickedGroup,comments:[]});case q:return Object(R.a)({},a,{isFetching:!1,posts:c.response.items});case M:return Object(R.a)({},a,{isFetching:!1,errors:(n=a.errors).concat.apply(n,Object(oe.a)(a.errors).concat([c.error]))});case U:return Object(R.a)({},a,{isFetching:!0});case P:return Object(R.a)({},a,{isFetching:!1,comments:c.response});case z:return Object(R.a)({},a,{isFetching:!1,errors:(r=a.errors).concat.apply(r,Object(oe.a)(a.errors).concat([c.error]))});case"SORT_COMMENTS":return Object(R.a)({},a,{comments:c.result});default:return a}},Object(o.a)(Ue,Pe));Ue.run(Me),s.a.render(a.a.createElement(m.a,null,a.a.createElement(i.a,{store:ze},a.a.createElement(se,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e6ff3120.chunk.js.map