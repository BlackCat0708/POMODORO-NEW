(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function o(t){return a.p+"js/"+({chart:"chart",list:"list",notfound:"notfound",setting:"setting"}[t]||t)+"."+{chart:"a8440d17",list:"5c02785c",notfound:"980ae547",setting:"88b89584"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=o(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"028a":function(t,e,n){var i={"./alarm.mp3":"fd01","./yay.mp3":"ee2b"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="028a"},3653:function(t,e,n){t.exports=n.p+"img/chart.69c75db1.svg"},"466e":function(t,e,n){t.exports=n.p+"img/ring.59e04858.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var i=n("2b0e"),s=n("5f5b"),r=n("b1e0");n("ab8b"),n("2dd8");i["default"].use(s["a"]),i["default"].use(r["a"]);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():i("router-view"),i("div",{staticClass:"menu"},[i("b-link",{attrs:{to:"/list",active:""}},[i("img",{attrs:{src:n("d0a8")}})]),i("b-link",{attrs:{to:"/chart"}},[i("img",{attrs:{src:n("3653")}})]),i("b-link",{attrs:{to:"/settings"}},[i("img",{attrs:{src:n("466e")}})])],1)],1)},a=[],c=n("2877"),u={},l=Object(c["a"])(u,o,a,!1,null,null,null),d=l.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var m=n("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("div",{staticClass:"sidebar"},[i("P",[t._v("2022CHALLENGE.THEF2E.COM")]),i("p",[t._v("POMODORO")])],1),i("div",{staticClass:"home-container"},[i("b-row",[i("b-col",{attrs:{cols:"6"}},[i("div",{staticClass:"workTitle"},[i("img",{staticClass:"arrow",style:{filter:t.arrowFilter},attrs:{src:n("7ad9")}}),i("h1",{style:{color:t.color}},[t._v(t._s(t.currentText))]),i("div",{staticClass:"water"},[i("img",{style:{filter:t.waterFilter},attrs:{src:n("f4c3")}}),i("img",{style:{filter:t.waterFilter},attrs:{src:n("f4c3")}})])]),i("div",{staticClass:"list"},[i("b-form-group",{attrs:{"label-for":"newinput","invalid-feedback":"字數太少"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"newinput",placeholder:"add a new mission...",state:t.newinputstate},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newinput,callback:function(e){t.newinput=e},expression:"newinput"}}),i("b-input-group-append",[i("b-button",{attrs:{variant:"light"},on:{click:t.additem}},[i("b-icon",{attrs:{icon:"plus"}})],1)],1)],1)],1),i("div",{staticClass:"tableScroll"},[i("b-table",{attrs:{items:t.items,fields:t.fields,"show-empty":"",hover:"",fixed:""},scopedSlots:t._u([{key:"empty",fn:function(){return[i("p",{staticClass:"text-center"},[t._v("nothing to do .")])]},proxy:!0},{key:"cell(check)",fn:function(e){return[i("b-form-checkbox",{key:e.item.id,on:{input:function(n){return t.finishWork(e.item.id)}},model:{value:e.item.finished,callback:function(n){t.$set(e.item,"finished",n)},expression:"data.item.finished"}})]}},{key:"cell(name)",fn:function(e){return[e.item.edit?i("b-form-input",{attrs:{state:e.item.state},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.submitedit(e.index)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.canceledit(e.index)}]},model:{value:e.item.model,callback:function(n){t.$set(e.item,"model",n)},expression:"data.item.model"}}):i("span",[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?i("span",[i("b-btn",{staticClass:"mx-1",attrs:{variant:"success"}},[i("b-icon",{attrs:{icon:"check"},on:{click:function(n){return t.submitedit(e.index)}}})],1),i("b-btn",{staticClass:"mx-1",attrs:{variant:"secondary"}},[i("b-icon",{attrs:{icon:"arrow-counterclockwise"},on:{click:function(n){return t.canceledit(e.index)}}})],1)],1):i("span",[i("b-btn",{staticClass:"mx-1",attrs:{variant:"success"}},[i("b-icon",{attrs:{icon:"pencil"},on:{click:function(n){return t.edititem(e.index)}}})],1),i("b-btn",{staticClass:"mx-1",attrs:{variant:"danger"}},[i("b-icon",{attrs:{icon:"trash"},on:{click:function(n){return t.delitem(e.index)}}})],1)],1)]}}])})],1)],1)]),i("b-col",{attrs:{cols:"6"}},[i("div",{staticClass:"pomodoro"},[i("div",{staticClass:"circle",style:{border:t.border}}),i("div",{ref:"progress",staticClass:"progress"},[i("div",{staticClass:"progress-circle",style:{background:t.background}})]),i("h2",[t._v(t._s(t.timeText))])]),i("div",{staticClass:"tool-button"},[1!==t.status?i("b-btn",{staticClass:"mx-2",attrs:{variant:"light"},on:{click:t.start}},[i("b-icon",{attrs:{icon:"play-fill"}})],1):i("b-btn",{staticClass:"mx-2",attrs:{variant:"light"},on:{click:t.pause}},[i("b-icon",{attrs:{icon:"pause-fill"}})],1),t.current.length>0?i("b-btn",{staticClass:"mx-2",attrs:{variant:"light"},on:{click:function(e){return t.finish(!0)}}},[i("b-icon",{attrs:{icon:"skip-end-fill"}})],1):t._e()],1)])],1)],1)])},h=[],b=(n("d81d"),n("4d90"),n("25f0"),n("99af"),{data:function(){return{status:0,timer:0,newinput:"",fields:[{key:"check",label:"完成"},{key:"name",label:"名稱"},{key:"action",label:"操作"}]}},computed:{current:function(){return this.$store.state.current},items:function(){return this.$store.state.items.map((function(t){return t.state=t.model.length>2,t}))},currentText:function(){return this.current.length>0?this.current:this.items.length>0?"Click to start":"Please add a new mission ."},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)},newinputstate:function(){return this.newinput.length>2||0===this.newinput.length&&null},finished:function(){return this.$store.state.finished},border:function(){return 2===this.status?"65px solid #dbdbdb":!1===this.$store.state.break&&1===this.status?"65px solid #fdb9b9":0===this.status?"65px solid #ffeded":"65px solid #9aeaf0"},background:function(){return 2===this.status?"#e2bb8f":!1===this.$store.state.break&&1===this.status?"#9aeaf0":0===this.status?"white":"#fdb9b9"},color:function(){return 2===this.status?"#e2bb8f":!1===this.$store.state.break&&1===this.status?"#ff8d8d":0===this.status?"#707070":"#9aeaf0"},arrowFilter:function(){return 2===this.status||0===this.status?"invert(86%) sepia(4%) saturate(10%) hue-rotate(6deg) brightness(80%) contrast(79%)":" invert(83%) sepia(45%) saturate(274%) hue-rotate(132deg) brightness(97%) contrast(94%)"},waterFilter:function(){return 2===this.status||0===this.status?"invert(86%) sepia(4%) saturate(10%) hue-rotate(6deg) brightness(80%) contrast(79%)":" invert(59%) sepia(18%) saturate(1022%) hue-rotate(314deg) brightness(107%) contrast(103%)"}},methods:{start:function(){var t=this;0===this.status&&this.items.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),!1===t.$store.state.break?t.$refs.progress.style.transform="rotate(".concat(-t.timeleft%360+60,"deg)"):!0===t.$store.state.break&&(t.$refs.progress.style.transform="rotate(".concat(-t.timeleft%360+300,"deg)")),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;0===this.items.length||!0===this.$store.state.break?e.src=n("028a")("./"+this.$store.state.sounds.work):e.src=n("028a")("./"+this.$store.state.sounds.break),e.play(),e.volume=this.$store.state.sounds.volume}this.items.length>0&&this.start()},additem:function(){this.newinput.length>=2&&(this.$store.commit("additem",this.newinput),this.newinput="")},edititem:function(t){this.$store.commit("edititem",t)},delitem:function(t){this.$store.commit("delitem",t)},submitedit:function(t){this.items[t].state&&this.$store.commit("submitedit",t)},canceledit:function(t){this.$store.commit("canceledit",t)},finishWork:function(t){this.$store.commit("finishWork",t)}}}),v=b,g=Object(c["a"])(v,p,h,!1,null,null,null),k=g.exports;i["default"].use(m["a"]);var y=[{path:"/",name:"Home",component:k,meta:{title:"POMODORO",keepAlive:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("setting").then(n.bind(null,"26d3"))},meta:{title:"POMODORO | RINGTONES"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"POMODORO | TO DO LIST"}},{path:"/chart",name:"Chart",component:function(){return n.e("chart").then(n.bind(null,"5178"))},meta:{title:"POMODORO | ANALYTICS"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"POMODORO | 404"}},{path:"*",redirect:"/404"}],w=new m["a"]({routes:y});w.afterEach((function(t){document.title=t.meta.title}));var O=w,x=(n("a434"),n("b0c0"),n("c740"),n("2f62")),C=n("0e44");i["default"].use(x["a"]);var $=parseInt("1500"),_=parseInt("300"),S=new x["a"].Store({state:{sounds:{work:"alarm.mp3",break:"alarm.mp3",volume:.5},items:[],current:"",finished:[],timeleft:$,break:!1,id:0},mutations:{selectWorkSound:function(t,e){t.sounds.work=e},selectBreakSound:function(t,e){t.sounds.break=e},setSoundVolume:function(t,e){t.sounds.volume=e},additem:function(t,e){t.items.push({name:e,edit:!1,model:e,finished:!1,id:t.id}),t.id++},edititem:function(t,e){t.items[e].edit=!0},delitem:function(t,e){t.items.splice(e,1)},submitedit:function(t,e){t.items[e].name=t.items[e].model,t.items[e].edit=!1},canceledit:function(t,e){t.items[e].model=t.items[e].name,t.items[e].edit=!1},start:function(t){t.current=t.break?"take a break":t.items.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push({name:t.current,finished:!0}),t.current="",t.items.length>0&&(t.break=!t.break),t.timeleft=t.break?_:$},delfinish:function(t,e){t.finished.splice(e,1)},finishWork:function(t,e){var n=t.items.findIndex((function(t){return t.id===e}));t.finished.push({name:t.items[n].name,finished:!0}),t.items.splice(n,1)}},actions:{},modules:{},plugins:[Object(C["a"])({key:"pomodoro"})]});n("5903");i["default"].config.productionTip=!1,new i["default"]({router:O,store:S,render:function(t){return t(d)}}).$mount("#app")},5903:function(t,e,n){},"7ad9":function(t,e,n){t.exports=n.p+"img/skip.7d75b2f9.svg"},d0a8:function(t,e,n){t.exports=n.p+"img/th-list-solid.b39fb484.svg"},ee2b:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},f4c3:function(t,e,n){t.exports=n.p+"img/water.078ac596.svg"},fd01:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"}});
//# sourceMappingURL=app.e871e6c5.js.map