(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);n(65),n(90);var a=n(0),o=n.n(a),l=n(31),r=n.n(l),i=n(32),c=n.n(i),s=n(55),u=n(56),h=n(62),m=n(57),p=n(63),f=n(7),d=n(1),v=(n(114),n(58)),g=n.n(v),E=(n(115),n(59)),b=n.n(E),w=(n(116),n(60)),k=n.n(w),y=n(61),S=n.n(y),P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).checkInternet=function(){var e=n.state.status;e=window.navigator.onLine?"online":"offline",n.setState({status:e}),"offline"===e?n.setState({activePanel:"off",activeStory:"off"}):"online"===e&&"off"===n.state.activePanel&&n.setState({activePanel:"main",activeStory:"main"})},n.state={activeStory:"main",answer:"",top_list:"",joke:""},n.onStoryChange=n.onStoryChange.bind(Object(f.a)(Object(f.a)(n))),n.handleChangeAnswer=n.handleChangeAnswer.bind(Object(f.a)(Object(f.a)(n))),n.handleChangeAnswerButton=n.handleChangeAnswerButton.bind(Object(f.a)(Object(f.a)(n))),n.closePopout=n.closePopout.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"handleChangeAnswer",value:function(e){var t=e.target.value;this.setState({answer:t})}},{key:"handleChangeAnswerButton",value:function(e){var t=this;e.target.value;this.setState({answer:""}),fetch("https://zakupi.club/telegram_bot/bot_rusik/question.check/index.php?hash="+this.state.Hash+"&answer="+this.state.answer).then(function(e){return e.json()}).then(function(e){"OK"==e?t.setState({popout:o.a.createElement(d.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:t.closePopout},o.a.createElement("h2",null,"\u041a\u0440\u0443\u0442\u043e, \u0412\u044b \u043f\u0440\u0430\u0432\u044b!"),e.answer_full)}):t.setState({popout:o.a.createElement(d.Alert,{actions:[{title:"OK",autoclose:!0}],onClose:t.closePopout},o.a.createElement("h2",null,"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 : ",e),e.answer_full)})}),fetch("https://zakupi.club/telegram_bot/bot_rusik/score.get/index.php").then(function(e){return e.json()}).then(function(e){t.setState({Score:e})}),fetch("https://zakupi.club/telegram_bot/bot_rusik/question.get/index.php").then(function(e){return e.json()}).then(function(e){t.setState({Question:e.question}),t.setState({Hash:e.hash})})}},{key:"onStoryChange",value:function(e){"top"===e.currentTarget.dataset.story&&(window.scroll(0,0),this.gettop()),this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"gettop",value:function(){var e=this,t={action:"get_top",vkid:this.state.vkid},n=new FormData;n.append("json",JSON.stringify(t)),fetch("https://zakupi.club/telegram_bot/bot_rusik/question.check/index.php?action=get_top",{method:"POST",body:n}).then(function(t){200===t.status&&t.json().then(function(t){console.log("toplist_array_aj",t.top.vk),"Y"==t.success&&e.setState({top_list:t.top.vk})})})}},{key:"getJoke",value:function(){var e=this;fetch("https://zakupi.club/telegram_bot/bot_rusik/score.get/index.php").then(function(e){return e.json()}).then(function(t){e.setState({Score:t})})}},{key:"Scrol",value:function(){document.getElementById("answer").focus()}},{key:"componentDidMount",value:function(){window.setInterval(this.checkInternet,500);var e=this;fetch("https://zakupi.club/telegram_bot/bot_rusik/question.get/index.php").then(function(e){return e.json()}).then(function(t){e.setState({Question:t.question}),e.setState({Hash:t.hash})}),fetch("https://zakupi.club/telegram_bot/bot_rusik/score.get/index.php").then(function(e){return e.json()}).then(function(t){e.setState({Score:t})})}},{key:"render",value:function(){var e=Array.from(this.state.top_list);return o.a.createElement(d.Epic,{activeStory:this.state.activeStory,tabbar:o.a.createElement(d.Div,{className:"Persik"},o.a.createElement(d.Tabbar,null,o.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"main"===this.state.activeStory,"data-story":"main",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},o.a.createElement(g.a,null)),o.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"game"===this.state.activeStory,"data-story":"game",text:"\u0418\u0433\u0440\u0430"},o.a.createElement(S.a,null)),o.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"top"===this.state.activeStory,"data-story":"top",text:"\u0422\u043e\u043f"},o.a.createElement(b.a,null))))},o.a.createElement(d.View,{id:"off",activePanel:this.state.activePanel,popout:this.state.popout},o.a.createElement(d.Panel,{id:"off"},o.a.createElement(d.PanelHeader,null,"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"),o.a.createElement(d.Group,null,o.a.createElement(d.Div,{align:"center"},"Ooops... \u041f\u0440\u043e\u043f\u0430\u043b\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435.",o.a.createElement("br",null),"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u043c\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u043c \u0412\u0430\u0441 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.")))),o.a.createElement(d.View,{id:"main",activePanel:"main"},o.a.createElement(d.Panel,{id:"main"},o.a.createElement(d.Group,{title:""},o.a.createElement(d.Div,null,o.a.createElement(d.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement("b",null,"\u0420\u0443\u0441\u0438\u043a - \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441"))),o.a.createElement(d.Group,{title:"\u041c\u0438\u0441\u0441\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u0430"},o.a.createElement(d.Div,null,o.a.createElement(d.InfoRow,{title:""},'\u0418\u0433\u0440\u043e\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 "\u0420\u0443\u0441\u0438\u043a" - \u044d\u0442\u043e \u043f\u0440\u0435\u0432\u043e\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u0432 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0435. \u041d\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u044c. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u043c\u0438\u043d\u0443\u0442\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0435\u0451 \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0439 \u0434\u043b\u044f \u0441\u0435\u0431\u044f.'))),o.a.createElement(d.Group,{title:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b"},o.a.createElement(d.Div,null,o.a.createElement(d.InfoRow,{title:""},"\u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0430\u043c \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0441\u043b\u043e\u0432\u043e \u0441\u043e \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439 \u0432\u043d\u0443\u0442\u0440\u0438. \u0412\u0430\u043c \u043d\u0430\u0434\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0431\u0443\u043a\u0432\u0443. \u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u043e\u0442\u0432\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c-\u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043e 20 \u0431\u0430\u043b\u043b\u043e\u0432. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430- \u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430."))),o.a.createElement(d.Group,null,o.a.createElement(d.Div,null,o.a.createElement(d.Button,{size:"xl",level:"2",onClick:this.onStoryChange,selected:"game"===this.state.activeStory,"data-story":"game"},"\u041f\u043e\u0433\u043d\u0430\u043b\u0438 \u0438\u0433\u0440\u0430\u0442\u044c!"))))),o.a.createElement(d.View,{id:"top",activePanel:"top",popout:this.state.popout},o.a.createElement(d.Panel,{id:"top"},o.a.createElement(d.PanelHeader,null,"\u0422\u041e\u041f"),o.a.createElement(d.Group,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"},e.length>0&&o.a.createElement(d.List,null,e.map(function(e,t){return o.a.createElement(d.Cell,{before:o.a.createElement(d.Avatar,{src:e.UF_PHOTO_200},""==e.UF_PHOTO_200?o.a.createElement(k.a,null):""," "),indicator:o.a.createElement(d.Counter,{type:"primary"},e.TOP)}," ",e.fname," ",e.lname," ")}))))),o.a.createElement(d.View,{id:"profile",activePanel:"profile"},o.a.createElement(d.Panel,{id:"profile"},o.a.createElement(d.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))),o.a.createElement(d.View,{id:"game",activePanel:"game",popout:this.state.popout},o.a.createElement(d.Panel,{id:"game"},o.a.createElement(d.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement(d.Group,null,o.a.createElement(d.Div,{className:"app"},o.a.createElement(d.Div,{align:"center",className:"title2"},o.a.createElement("br",null),o.a.createElement("a",null,"\u0412\u0430\u0448 \u0441\u0447\u0451\u0442",o.a.createElement("br",null),this.state.Score)),o.a.createElement(d.Div,{className:"title",align:"center"},o.a.createElement("h2",null,this.state.Question,o.a.createElement("br",null))),o.a.createElement(d.Div,null,o.a.createElement(d.Input,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442",id:"answer",name:"answer",value:this.state.answer,onChange:this.handleChangeAnswer,onFocus:this.Scrol}),o.a.createElement("br",null)),o.a.createElement(d.Button,{onClick:this.handleChangeAnswerButton,size:"xl"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null)))))}}]),t}(o.a.Component);function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");_?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}(),r.a.render(o.a.createElement(P,null),document.getElementById("root"))},64:function(e,t,n){e.exports=n(117)}},[[64,1,2]]]);
//# sourceMappingURL=main.2f25955c.chunk.js.map