"use strict";(self.webpackChunkordspelet=self.webpackChunkordspelet||[]).push([[200],{9200:(Re,ht,m)=>{m.r(ht),m.d(ht,{GameModule:()=>V});var b=m(6895),R=m(6319),mt=m(793),t=m(4650),tt={};!function a(n,e,r,i){var c=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL);function l(){}function x(s){var o=e.exports.Promise,h=void 0!==o?o:n.Promise;return"function"==typeof h?new h(s):(s(l,l),null)}var o,h,s,d,g,it,O=(s=Math.floor(16.666666666666668),d={},g=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(o=function(f){var p=Math.random();return d[p]=requestAnimationFrame(function u(_){g===_||g+s-1<_?(g=_,delete d[p],f()):d[p]=requestAnimationFrame(u)}),p},h=function(f){d[f]&&cancelAnimationFrame(d[f])}):(o=function(f){return setTimeout(f,s)},h=function(f){return clearTimeout(f)}),{frame:o,cancel:h}),N=function(){var s,o,h={};return function(){if(s)return s;if(!r&&c){var g=["var CONFETTI, SIZE = {}, module = {};","("+a.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{s=new Worker(URL.createObjectURL(new Blob([g])))}catch(f){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("\u{1f38a} Could not load worker",f),null}!function d(g){function f(p,u){g.postMessage({options:p||{},callback:u})}g.init=function(u){var _=u.transferControlToOffscreen();g.postMessage({canvas:_},[_])},g.fire=function(u,_,k){if(o)return f(u,null),o;var v=Math.random().toString(36).slice(2);return o=x(function(M){function C(w){w.data.callback===v&&(delete h[v],g.removeEventListener("message",C),o=null,k(),M())}g.addEventListener("message",C),f(u,v),h[v]=C.bind(null,{data:{callback:v}})})},g.reset=function(){for(var u in g.postMessage({reset:!0}),h)h[u](),delete h[u]}}(s)}return s}}(),be={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(s,o,h){return function Ce(s,o){return o?o(s):s}(s&&function Me(s){return null!=s}(s[o])?s[o]:be[o],h)}function xe(s){return s<0?0:Math.floor(s)}function Oe(s,o){return Math.floor(Math.random()*(o-s))+s}function at(s){return parseInt(s,16)}function ke(s){return s.map(De)}function De(s){var o=String(s).replace(/[^0-9a-f]/gi,"");return o.length<6&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),{r:at(o.substring(0,2)),g:at(o.substring(2,4)),b:at(o.substring(4,6))}}function Se(s){s.width=document.documentElement.clientWidth,s.height=document.documentElement.clientHeight}function Ie(s){var o=s.getBoundingClientRect();s.width=o.width,s.height=o.height}function Ge(s){var o=s.angle*(Math.PI/180),h=s.spread*(Math.PI/180);return{x:s.x,y:s.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*s.startVelocity+Math.random()*s.startVelocity,angle2D:-o+(.5*h-Math.random()*h),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:s.color,shape:s.shape,tick:0,totalTicks:s.ticks,decay:s.decay,drift:s.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*s.gravity,ovalScalar:.6,scalar:s.scalar}}function St(s,o){var v,h=!s,d=!!y(o||{},"resize"),g=y(o,"disableForReducedMotion",Boolean),p=c&&y(o||{},"useWorker")?N():null,u=h?Se:Ie,_=!(!s||!p||!s.__confetti_initialized),k="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function M(w,ct,lt){for(var E=y(w,"particleCount",xe),K=y(w,"angle",Number),q=y(w,"spread",Number),I=y(w,"startVelocity",Number),Ue=y(w,"decay",Number),$e=y(w,"gravity",Number),Ae=y(w,"drift",Number),Pt=y(w,"colors",ke),Ze=y(w,"ticks",Number),Lt=y(w,"shapes"),We=y(w,"scalar"),Gt=function Te(s){var o=y(s,"origin",Object);return o.x=y(o,"x",Number),o.y=y(o,"y",Number),o}(w),Et=E,dt=[],Be=s.width*Gt.x,Ne=s.height*Gt.y;Et--;)dt.push(Ge({x:Be,y:Ne,angle:K,spread:q,startVelocity:I,color:Pt[Et%Pt.length],shape:Lt[Oe(0,Lt.length)],ticks:Ze,decay:Ue,gravity:$e,drift:Ae,scalar:We}));return v?v.addFettis(dt):(v=function Fe(s,o,h,d,g){var u,_,f=o.slice(),p=s.getContext("2d"),k=x(function(v){function M(){u=_=null,p.clearRect(0,0,d.width,d.height),g(),v()}u=O.frame(function C(){r&&!(d.width===i.width&&d.height===i.height)&&(d.width=s.width=i.width,d.height=s.height=i.height),!d.width&&!d.height&&(h(s),d.width=s.width,d.height=s.height),p.clearRect(0,0,d.width,d.height),f=f.filter(function(w){return function Ee(s,o){o.x+=Math.cos(o.angle2D)*o.velocity+o.drift,o.y+=Math.sin(o.angle2D)*o.velocity+o.gravity,o.wobble+=o.wobbleSpeed,o.velocity*=o.decay,o.tiltAngle+=.1,o.tiltSin=Math.sin(o.tiltAngle),o.tiltCos=Math.cos(o.tiltAngle),o.random=Math.random()+2,o.wobbleX=o.x+10*o.scalar*Math.cos(o.wobble),o.wobbleY=o.y+10*o.scalar*Math.sin(o.wobble);var h=o.tick++/o.totalTicks,d=o.x+o.random*o.tiltCos,g=o.y+o.random*o.tiltSin,f=o.wobbleX+o.random*o.tiltCos,p=o.wobbleY+o.random*o.tiltSin;if(s.fillStyle="rgba("+o.color.r+", "+o.color.g+", "+o.color.b+", "+(1-h)+")",s.beginPath(),"circle"===o.shape)s.ellipse?s.ellipse(o.x,o.y,Math.abs(f-d)*o.ovalScalar,Math.abs(p-g)*o.ovalScalar,Math.PI/10*o.wobble,0,2*Math.PI):function Le(s,o,h,d,g,f,p,u,_){s.save(),s.translate(o,h),s.rotate(f),s.scale(d,g),s.arc(0,0,1,p,u,_),s.restore()}(s,o.x,o.y,Math.abs(f-d)*o.ovalScalar,Math.abs(p-g)*o.ovalScalar,Math.PI/10*o.wobble,0,2*Math.PI);else if("star"===o.shape)for(var u=Math.PI/2*3,_=4*o.scalar,k=8*o.scalar,v=o.x,M=o.y,C=5,w=Math.PI/C;C--;)v=o.x+Math.cos(u)*k,M=o.y+Math.sin(u)*k,s.lineTo(v,M),u+=w,v=o.x+Math.cos(u)*_,M=o.y+Math.sin(u)*_,s.lineTo(v,M),u+=w;else s.moveTo(Math.floor(o.x),Math.floor(o.y)),s.lineTo(Math.floor(o.wobbleX),Math.floor(g)),s.lineTo(Math.floor(f),Math.floor(p)),s.lineTo(Math.floor(d),Math.floor(o.wobbleY));return s.closePath(),s.fill(),o.tick<o.totalTicks}(p,w)}),f.length?u=O.frame(C):M()}),_=M});return{addFettis:function(v){return f=f.concat(v),k},canvas:s,promise:k,reset:function(){u&&O.cancel(u),_&&_()}}}(s,dt,u,ct,lt)).promise}function C(w){var ct=g||y(w,"disableForReducedMotion",Boolean),lt=y(w,"zIndex",Number);if(ct&&k)return x(function(I){I()});h&&v?s=v.canvas:h&&!s&&(s=function Pe(s){var o=document.createElement("canvas");return o.style.position="fixed",o.style.top="0px",o.style.left="0px",o.style.pointerEvents="none",o.style.zIndex=s,o}(lt),document.body.appendChild(s)),d&&!_&&u(s);var E={width:s.width,height:s.height};function K(){if(p){var I={getBoundingClientRect:function(){if(!h)return s.getBoundingClientRect()}};return u(I),void p.postMessage({resize:{width:I.width,height:I.height}})}E.width=E.height=null}function q(){v=null,d&&n.removeEventListener("resize",K),h&&s&&(document.body.removeChild(s),s=null,_=!1)}return p&&!_&&p.init(s),_=!0,p&&(s.__confetti_initialized=!0),d&&n.addEventListener("resize",K,!1),p?p.fire(w,E,q):M(w,E,q)}return C.reset=function(){p&&p.reset(),v&&v.reset()},C}function It(){return it||(it=St(null,{useWorker:!0,resize:!0})),it}e.exports=function(){return It().apply(this,arguments)},e.exports.reset=function(){It().reset()},e.exports.create=St}(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),tt,!1);const Ft=tt.exports;class S{constructor(){this.fn=Ft,this.defaultOptions={particleCount:100,spread:70,origin:{y:.7}}}getOptions(n){return Object.assign({},this.defaultOptions,n??{})}run(n){const e=this.getOptions(n);return this.fn(e)}runDelay(n=0,e){return setTimeout(()=>this.run(e),n??0)}getOriginByCoord({x:n=0,y:e=0}){return{x:n/window.innerWidth,y:e/window.innerHeight}}static#t=this.\u0275fac=function(e){return new(e||S)};static#e=this.\u0275prov=t.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"})}class F{constructor(n){this.confetti=n,this._options={...this.confetti.defaultOptions}}set options(n){this._options=this.confetti.getOptions(n)}get options(){return this._options}ngOnInit(){clearTimeout(this.timer),this.timer=this.confetti.runDelay(this.options.delay,this.options)}ngOnDestroy(){clearTimeout(this.timer)}static#t=this.\u0275fac=function(e){return new(e||F)(t.Y36(S))};static#e=this.\u0275dir=t.lG2({type:F,selectors:[["","confetti",""]],inputs:{options:["confetti","options"]},exportAs:["confetti"]})}class J{static#t=this.\u0275fac=function(e){return new(e||J)};static#e=this.\u0275mod=t.oAB({type:J});static#n=this.\u0275inj=t.cJS({})}var ft=m(3336);class U{constructor(){this.fill=!1,this.fillColor="var(--color-accent)"}static#t=this.\u0275fac=function(e){return new(e||U)};static#e=this.\u0275cmp=t.Xpm({type:U,selectors:[["app-star"]],inputs:{fill:"fill",fillColor:"fillColor"},decls:2,vars:2,template:function(e,r){1&e&&(t.TgZ(0,"mat-icon"),t._uU(1,"star"),t.qZA()),2&e&&t.Udp("color",r.fill?r.fillColor:"var(--color-fg-op-50)")},dependencies:[ft.Hw],styles:["[_nghost-%COMP%]{display:inline-block}"]})}function Ut(a,n){if(1&a&&(t.TgZ(0,"span",1),t._UZ(1,"app-star",2),t.qZA()),2&a){const e=n.$implicit,r=n.index,i=t.oxw();t.Udp("transform",i.warpedStyles[r]),t.xp6(1),t.Q6J("fill",null!=i.ratio&&i.ratio>=e)}}class ${constructor(){this.ratios=[0,.5,.9],this.warpedStyles=[]}ngOnChanges(){this.calcWarpedStyles()}calcWarpedStyles(){if(!this.warped)return;const n=this.warped,e=this.ratios.length/2,r=Math.ceil(e),i=new Array(r).fill(0).map((c,l)=>n*(l/(r-1)-n/2));i.push(i[i.length-1]),this.warpedStyles=this.ratios.map((c,l)=>`translateY(${-(l<=e?i[l]:i[2*e-l-1])}em)`)}static#t=this.\u0275fac=function(e){return new(e||$)};static#e=this.\u0275cmp=t.Xpm({type:$,selectors:[["app-stars"]],inputs:{ratio:"ratio",ratios:"ratios",warped:"warped"},features:[t.TTD],decls:1,vars:1,consts:[["class","star-wrapper",3,"transform",4,"ngFor","ngForOf"],[1,"star-wrapper"],[3,"fill"]],template:function(e,r){1&e&&t.YNc(0,Ut,2,3,"span",0),2&e&&t.Q6J("ngForOf",r.ratios)},dependencies:[b.sg,U],styles:[".star-wrapper[_ngcontent-%COMP%]{display:inline-block}"]})}class j{static#t=this.\u0275fac=function(e){return new(e||j)};static#e=this.\u0275mod=t.oAB({type:j});static#n=this.\u0275inj=t.cJS({imports:[b.ez,mt.q]})}var gt=m(655),et=m(7579),$t=m(727),Wt=(m(2076),m(515),m(5577),m(2722));const Bt=t.GuJ,Rt=Symbol("__destroy"),wt=Symbol("__decoratorApplied");function _t(a){return"string"==typeof a?Symbol(`__destroy__${a}`):Rt}function yt(a,n){a[n]||(a[n]=new et.x)}function bt(a,n){a[n]&&(a[n].next(),a[n].complete(),a[n]=null)}function Ct(a){a instanceof $t.w0&&a.unsubscribe()}function Mt(a,n){return function(){if(a&&a.call(this),bt(this,_t()),n.arrayName&&function jt(a){Array.isArray(a)&&a.forEach(Ct)}(this[n.arrayName]),n.checkProperties)for(const e in this)n.blackList?.includes(e)||Ct(this[e])}}function xt(a={}){return n=>{!function Nt(a){return!!a[Bt]}(n)?function Qt(a,n){a.prototype.ngOnDestroy=Mt(a.prototype.ngOnDestroy,n)}(n,a):function Yt(a,n){const e=a.\u0275pipe;e.onDestroy=Mt(e.onDestroy,n)}(n,a),function Jt(a){a.prototype[wt]=!0}(n)}}Symbol("CheckerHasBeenSet");var A=(()=>{return(a=A||(A={}))[a.MapLowerToUpper=0]="MapLowerToUpper",a[a.MapUpperToLower=1]="MapUpperToLower",A;var a})(),Z=m(5861),W=m(1135),B=m(4004),nt=m(9841),Kt=m(1884),ot=m(9300),qt=m(1881),te=m(2313);const Tt=window.SpeechRecognition||window.webkitSpeechRecognition;class P{constructor(){this._recognition=new Tt,this._status$=new W.X("detecting"),this.status$=this._status$.asObservable(),this._words$=new W.X([]),this.words$=this._words$.asObservable(),this._stopped$=new et.x}get status(){return this._status$.value}get words(){return this._words$.value}start(n){return this.stop(),this._words$.next([]),this._recognition=new Tt,Object.assign(this._recognition,{continuous:!0,lang:"sv-SE",interimResults:!0,maxAlternatives:5},n||{}),this._recognition.addEventListener("result",r=>{const i=[];for(const c of r.results)for(const l of c)(l.transcript||"").trim().split(" ").forEach(O=>i.push(O));this._words$.next(i)}),this._recognition.addEventListener("error",r=>this._status$.next("not-allowed"===r.error?"not-allowed":"error")),this._recognition.addEventListener("start",()=>this._status$.next("started")),this._recognition.addEventListener("end",()=>this._status$.next("stopped")),this._recognition.start(),{words$:this.words$}}stop(){this._recognition&&"function"==typeof this._recognition.stop?this._recognition.stop():this._status$.next("stopped")}static#t=this.\u0275fac=function(e){return new(e||P)};static#e=this.\u0275prov=t.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"})}class D{constructor(n,e){this.store=n,this.speech=e,this.game$=new W.X(null),this.wordsetId$=this.game$.pipe((0,B.U)(r=>r?.wordsetId)),this.wordset$=(0,nt.a)([this.store.wordSets$,this.wordsetId$]).pipe((0,B.U)(([r,i])=>r.find(c=>c.id===i))),this._subGameIndex$=new W.X(0),this.subGameIndex$=this._subGameIndex$.asObservable(),this.subGame$=(0,nt.a)([this.subGameIndex$,this.game$]).pipe((0,B.U)(([r,i])=>i?.subGames[r])),this.gameInfo$=(0,nt.a)([this.game$,this.wordset$,this.subGameIndex$]).pipe((0,Kt.x)(qt.Q),(0,ot.h)(([r,i])=>!(!r||!i)),(0,B.U)(([r,i,c])=>{const l=(r?.subGames||[]).map((O,N)=>({index:N,...O}));return{...r,wordset:i,subGames:l,subGame:{curr:l[c],prev:l[c-1],next:l[c+1]}}}))}init(n,e){const r=Object.values(A).filter(l=>"number"==typeof l);e||(e=r);const c={wordsetId:n,subGames:e.filter(l=>r.includes(parseInt(l.toString()))).map(l=>({type:l}))};return this.game$.next(c),this._subGameIndex$.next(0),c}setSubGameIndex(n){null==n&&(n=(this.game$.value?.subGames||[]).findIndex(e=>!!e.endedAt)),(n<0||n>=(this.game$.value?.subGames||[]).length)&&(n=0),this._subGameIndex$.next(n)}patchSubGame(n){var e=this;return(0,Z.Z)(function*(){const r=e.game$.value;if(!r||!r.subGames)return;const c={...r.subGames[e._subGameIndex$.value],...n},l={...r,subGames:[...r.subGames]};return l.subGames[e._subGameIndex$.value]=c,e.game$.next(l),l})()}static#t=this.\u0275fac=function(e){return new(e||D)(t.LFG(te.d),t.LFG(P))};static#e=this.\u0275prov=t.Yz7({token:D,factory:D.\u0275fac})}var ee=m(4859);function ne(a,n){1&a&&(t.TgZ(0,"span"),t._uU(1,"Next"),t.qZA())}function oe(a,n){1&a&&(t.TgZ(0,"span"),t._uU(1,"Close"),t.qZA())}const re=function(){return{delay:2e3}};function se(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"header",3)(3,"h1",4),t._uU(4,"Nice job!"),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6),t._UZ(7,"app-stars",7),t.qZA()(),t.TgZ(8,"footer",3)(9,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.close.emit())}),t.YNc(10,ne,2,0,"span",9),t.YNc(11,oe,2,0,"span",9),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("confetti",t.DdM(5,re)),t.xp6(6),t.Q6J("ratio",null==e.currSubGame?null:e.currSubGame.scoreRatio)("warped",.3),t.xp6(3),t.Q6J("ngIf",e.nextSubGame),t.xp6(1),t.Q6J("ngIf",!e.nextSubGame)}}class Q{constructor(){this.close=new t.vpe}get show(){return!(!this.currSubGame?.endedAt||!this.currSubGame.scoreRatio)}static#t=this.\u0275fac=function(e){return new(e||Q)};static#e=this.\u0275cmp=t.Xpm({type:Q,selectors:[["app-game-ended"]],inputs:{currSubGame:"currSubGame",nextSubGame:"nextSubGame"},outputs:{close:"close"},decls:1,vars:1,consts:[["class","modal-wrapper fadeIn",4,"ngIf"],[1,"modal-wrapper","fadeIn"],[1,"modal-box","scaleUp",3,"confetti"],[1,"p-1","text-center"],[1,"m-0","scaleUp"],[1,"px-1","flex-center"],[1,"ts-300p","lh-80"],[1,"d-block",3,"ratio","warped"],["mat-raised-button","","color","primary",3,"click"],[4,"ngIf"]],template:function(e,r){1&e&&t.YNc(0,se,12,6,"div",0),2&e&&t.Q6J("ngIf",r.show)},dependencies:[b.O5,ee.lW,$,F],styles:[".fadeIn[_ngcontent-%COMP%]{opacity:0;animation:.5s _ngcontent-%COMP%_fadeIn forwards}.scaleUp[_ngcontent-%COMP%]{transform:scale(0);animation:.5s _ngcontent-%COMP%_scaleUp cubic-bezier(.5,0,.5,2.2) forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_scaleUp{0%{transform:scale(0)}to{transform:scale(1)}}.modal-box[_ngcontent-%COMP%]{min-width:16em}.modal-box.scaleUp[_ngcontent-%COMP%]{animation-delay:.3s}.modal-box[_ngcontent-%COMP%]   h1.scaleUp[_ngcontent-%COMP%]{animation-delay:.8s}@keyframes _ngcontent-%COMP%_scaleUpSpin{0%{transform:scale(0) rotate(-180deg)}to{transform:scale(1) rotate(0)}}[_nghost-%COMP%]     app-stars .star-wrapper app-star{transform:scale(0) rotate(-180deg);animation:.7s _ngcontent-%COMP%_scaleUpSpin cubic-bezier(.5,0,.5,2.2) forwards}[_nghost-%COMP%]     app-stars .star-wrapper:nth-of-type(1) app-star{animation-delay:1s}[_nghost-%COMP%]     app-stars .star-wrapper:nth-of-type(2) app-star{animation-delay:1.2s}[_nghost-%COMP%]     app-stars .star-wrapper:nth-of-type(3) app-star{animation-delay:1.4s}"]})}const ae=["*"];var T=(()=>{return(a=T||(T={})).Idle="idle",a.Hover="hover",a.Wrong="wrong",a.Correct="correct",T;var a})();class Y{constructor(){this.state=T.Idle}static#t=this.\u0275fac=function(e){return new(e||Y)};static#e=this.\u0275cmp=t.Xpm({type:Y,selectors:[["app-word"]],inputs:{state:"state",bgcolor:"bgcolor",innerStyle:"innerStyle",innerClass:"innerClass"},ngContentSelectors:ae,decls:2,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(e,r){1&e&&(t.F$t(),t.TgZ(0,"span",0),t.Hsn(1),t.qZA()),2&e&&(t.Gre("state-",r.state,""),t.Udp("background-color",r.bgcolor),t.Q6J("ngClass",r.innerClass)("ngStyle",r.innerStyle))},dependencies:[b.mk,b.PC],styles:["[_nghost-%COMP%] > span[_ngcontent-%COMP%]{display:block;position:relative;padding:.5em;color:var(--color-fg);background:var(--color-bg);background:white;border-radius:.5em;box-shadow:.1em .1em .25em var(--color-dark-op-10);border:.1em solid var(--color-fg-op-50);transition:.2s;transition-property:transform,box-shadow,background}[_nghost-%COMP%] > span.state-idle[_ngcontent-%COMP%], [_nghost-%COMP%] > span.state-hover[_ngcontent-%COMP%]{background:lightyellow}[_nghost-%COMP%] > span.state-hover[_ngcontent-%COMP%]{transform:scale(1.15)}[_nghost-%COMP%] > span.state-wrong[_ngcontent-%COMP%]{background:salmon!important;animation:.5s .2s _ngcontent-%COMP%_wrong ease-in-out 1}[_nghost-%COMP%] > span.state-correct[_ngcontent-%COMP%]{background:palegreen!important;animation:1.5s .1s _ngcontent-%COMP%_correct ease-in-out 1 forwards}@keyframes _ngcontent-%COMP%_wrong{0%,to{transform:translate(0)}15%,45%,75%{transform:translate(-.5em)}30%,60%,90%{transform:translate(.5em)}}@keyframes _ngcontent-%COMP%_correct{0%,10%,30%,50%{transform:scale(1)}20%,40%{transform:scale(1.15)}0%,80%{opacity:1}to{opacity:.5}}"]})}class z{constructor(){this.patch=new t.vpe}static#t=this.\u0275fac=function(e){return new(e||z)};static#e=this.\u0275cmp=t.Xpm({type:z,selectors:[["ng-component"]],inputs:{gameInfo:"gameInfo"},outputs:{patch:"patch"},decls:0,vars:0,template:function(e,r){},encapsulation:2})}var rt=m(2340),ie=m(590);const ce=["iconRef"];function le(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"div",2)(2,"span",3,4)(4,"mat-icon"),t._uU(5),t.qZA()()(),t.BQk()),2&a){const e=t.oxw();t.xp6(5),t.Oqu(e.locked?"lock":"mood")}}const de=["*"];let st=class pt{constructor(n,e){this.speech=n,this.confetti=e,this.disabled=!1,this.lockedChanged=new t.vpe,this._locked$=new W.X(!0),this.locked$=this._locked$.asObservable(),this._initted=!1}get locked(){return this._locked$.value}get isListening(){return"started"===this.speech.status}ngOnChanges(n){n.disabled&&(this.disabled&&"started"===this.speech.status&&this.stop(),!this.disabled&&"started"!==this.speech.status&&this._initted&&this.start())}ngOnInit(){this.locked$.pipe(function Vt(a,n){return e=>{const r=_t(n);return"string"==typeof n?function Xt(a,n,e){const r=a[n];yt(a,e),a[n]=function(){r.apply(this,arguments),bt(this,e),a[n]=r}}(a,n,r):yt(a,r),e.pipe((0,Wt.R)(a[r]))}}(this)).subscribe(n=>this.lockedChanged.emit(n)),this.disabled||this.start(),this._initted=!0}ngOnDestroy(){this.stop()}start(){this._locked$.next(!0);const{words$:n}=this.speech.start();n.pipe((0,ot.h)(r=>!(!this.word||!r?.length)),(0,B.U)(r=>r.find(i=>i.toLocaleLowerCase().trim()===this.word.toLocaleLowerCase().trim())),(0,ot.h)(r=>!!r),(0,ie.P)()).subscribe(()=>this.breakLock())}stop(){this.speech.stop(),this._locked$.next(!1)}breakLock(){this._locked$.next(!1),this.speech.stop();const n=this.iconRef?.nativeElement.getBoundingClientRect();if(n){const i=this.confetti.getOriginByCoord({x:n.x+n.width/2,y:n.y+n.height/2});this.confetti.run({origin:i,particleCount:12,spread:70,startVelocity:15})}}static#t=this.\u0275fac=function(e){return new(e||pt)(t.Y36(P),t.Y36(S))};static#e=this.\u0275cmp=t.Xpm({type:pt,selectors:[["app-speech-lock"]],viewQuery:function(e,r){if(1&e&&t.Gf(ce,5),2&e){let i;t.iGM(i=t.CRH())&&(r.iconRef=i.first)}},hostVars:4,hostBindings:function(e,r){2&e&&t.ekj("locked",r.locked)("listening",r.isListening)},inputs:{word:"word",disabled:"disabled"},outputs:{lockedChanged:"lockedChanged"},exportAs:["speechLock"],features:[t.TTD],ngContentSelectors:de,decls:3,vars:1,consts:[[1,"content"],[4,"ngIf"],[1,"box"],[1,"icon"],["iconRef",""]],template:function(e,r){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,le,6,1,"ng-container",1)),2&e&&(t.xp6(2),t.Q6J("ngIf",!r.disabled))},dependencies:[b.O5,ft.Hw],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;padding:1em 1em 1.5em}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;z-index:2}[_nghost-%COMP%]   .box[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;z-index:1;background:white;border-radius:.5em;box-shadow:.1em .1em .25em var(--color-dark-op-10);border:.1em solid var(--color-fg-op-50);animation:.3s _ngcontent-%COMP%_pop ease-in forwards}[_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:white;box-shadow:.1em .1em .25em var(--color-dark-op-10);border:.1em solid var(--color-fg-op-50);width:2em;height:2em;position:absolute;z-index:3;left:50%;bottom:0;transform:translate(-50%,50%);background:var(--color-bg);border-radius:50%}[_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-size:125%}.locked[_nghost-%COMP%]   .box[_ngcontent-%COMP%]{animation:none}.listening[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{animation:1s _ngcontent-%COMP%_listening ease-in-out infinite}@keyframes _ngcontent-%COMP%_pop{0%{transform:scale(1);opacity:1}to{transform:scale(1.5);opacity:0}}@keyframes _ngcontent-%COMP%_listening{0%,to{border-color:var(--color-fg)}50%{border-color:var(--color-warn)}}"]})};function pe(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",4)(1,"app-speech-lock",5,6),t.NdJ("lockedChanged",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.isCurrWordLocked=i)}),t.TgZ(3,"app-word",7),t.NdJ("cdkDragDropped",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.onDragDrop(i))}),t._uU(4),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("word",e.currWord)("disabled",!e.useSpeechLock),t.xp6(2),t.Q6J("cdkDragData",e.currWord)("cdkDragBoundary",e.useSpeechLock&&e.isCurrWordLocked?"app-speech-lock":""),t.xp6(1),t.hij(" ",e.formatWord(e.currWord,!0)," ")}}function ue(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("cdkDropListEntered",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.onDragEnter(i))})("cdkDropListExited",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.resetUI())}),t.TgZ(1,"app-word",9),t._uU(2),t.qZA()()}if(2&a){const e=n.$implicit,r=t.oxw();t.Q6J("cdkDropListDisabled",r.wordsDone.includes(e))("cdkDropListData",e),t.xp6(1),t.Q6J("state",r.wordState(e)),t.xp6(1),t.hij(" ",r.formatWord(e,!1)," ")}}st=(0,gt.gn)([xt()],st);const he=function(){return[]};class H extends z{constructor(n){super(),this.confetti=n,this.useSpeechLock=!0,this.wordsDone=[],this.isCurrWordLocked=!0,this.wrongMoves=[]}ngOnInit(){const n=Date.now();this.patch.emit({startedAt:n}),this.randomWord()}getStats(){const n=this.gameInfo?.wordset.words||[],e=this.wordsDone,r=n.filter(N=>!this.wordsDone.includes(N)),i=this.wordsDone.length,l=this.wrongMoves.length,x=i+l;return{allWords:n,wordsLeft:r,wordsDone:e,done:i,left:r.length,wrong:l,total:x,scoreRatio:x>0?i/x:0}}sendStats(){const{scoreRatio:n,left:e}=this.getStats(),r=e<=0?Date.now():void 0;this.patch.emit({scoreRatio:n,endedAt:r})}randomWord(){var n=this;return(0,Z.Z)(function*(){n.currWord=void 0,yield new Promise(i=>setTimeout(i,100));const{wordsLeft:e}=n.getStats(),r=Math.floor(Math.random()*e.length);n.currWord=e[r]})()}trackByValue(n,e){return e}formatWord(n,e){return n[e&&!this.inversed||this.inversed&&!e?"toLocaleUpperCase":"toLocaleLowerCase"]()}resetUI(){this.hoverWord=void 0,this.wrongWord=void 0}onDragDrop(n){var e=this;return(0,Z.Z)(function*(){const r=n.item.data,i=n.container.data;r===i?(e.wordsDone.push(r),e.randomWord(),e.confettiByEvent(n.event)):(e.resetUI(),i&&!n.container.disabled&&(e.wrongMoves.push({from:r,to:i}),e.wrongWord=i,clearTimeout(e._aniTimer),e._aniTimer=setTimeout(()=>e.resetUI(),1200))),e.sendStats()})()}onDragEnter(n){this.resetUI(),this.hoverWord=n.container.data}wordState(n){return this.wordsDone.includes(n)?T.Correct:this.hoverWord===n?T.Hover:this.wrongWord===n?T.Wrong:T.Idle}confettiByEvent(n){const{clientX:e,clientY:r}=n.changedTouches?.[0]||n,i=this.confetti.getOriginByCoord({x:e,y:r});this.confetti.run({origin:i,particleCount:12,spread:70,startVelocity:15})}static#t=this.\u0275fac=function(e){return new(e||H)(t.Y36(S))};static#e=this.\u0275cmp=t.Xpm({type:H,selectors:[["app-map-lower-upper-words"]],inputs:{inversed:"inversed"},features:[t.qOj],decls:5,vars:4,consts:[["cdkDropListGroup","",1,"wrapper","full-fill","bg-op-5"],["cdkDropList","",1,"flex-center",3,"dblclick"],["class","p-1",4,"ngIf"],["cdkDropList","",3,"cdkDropListDisabled","cdkDropListData","cdkDropListEntered","cdkDropListExited",4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-1"],[3,"word","disabled","lockedChanged"],["lockBox",""],["bgcolor","var(--color-primary-light-2)","innerClass","px-1 ts-120p","cdkDrag","",3,"cdkDragData","cdkDragBoundary","cdkDragDropped"],["cdkDropList","",3,"cdkDropListDisabled","cdkDropListData","cdkDropListEntered","cdkDropListExited"],[3,"state"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"main",1),t.NdJ("dblclick",function(){return r.useSpeechLock=!r.useSpeechLock}),t.YNc(2,pe,5,5,"div",2),t.qZA(),t.TgZ(3,"aside"),t.YNc(4,ue,3,4,"div",3),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",r.currWord),t.xp6(2),t.Q6J("ngForOf",(null==r.gameInfo||null==r.gameInfo.wordset?null:r.gameInfo.wordset.words)||t.DdM(3,he))("ngForTrackBy",r.trackByValue))},dependencies:[b.sg,b.O5,rt.Wj,rt.Fd,rt.Zt,Y,st],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template:auto/auto minmax(10em,30%)}@media (orientation: portrait){.wrapper[_ngcontent-%COMP%]{grid-template:8em auto/auto}}.wrapper[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{display:grid;grid-template:auto/auto;align-items:center;overflow:auto;gap:.5em;padding:1em}@media (orientation: portrait){.wrapper[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{grid-template:auto/repeat(2,calc(50% - .25em))}}.wrapper[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%]{display:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}"]})}function me(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"app-map-lower-upper-words",5),t.NdJ("patch",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.game.patchSubGame(i))}),t.qZA()}if(2&a){const e=t.oxw().ngIf;t.Q6J("gameInfo",e)}}function fe(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"app-map-lower-upper-words",6),t.NdJ("patch",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.game.patchSubGame(i))}),t.qZA()}if(2&a){const e=t.oxw().ngIf;t.Q6J("gameInfo",e)("inversed",!0)}}function ge(a,n){if(1&a){const e=t.EpF();t.ynx(0)(1,1),t.YNc(2,me,1,1,"app-map-lower-upper-words",2),t.YNc(3,fe,1,2,"app-map-lower-upper-words",3),t.BQk(),t.TgZ(4,"app-game-ended",4),t.NdJ("close",function(){const c=t.CHM(e).ngIf,l=t.oxw();return t.KtG(l.setNextOrExit(c.subGame.next))}),t.qZA(),t.BQk()}if(2&a){const e=n.ngIf,r=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.subGame.curr.type),t.xp6(1),t.Q6J("ngSwitchCase",r.SubGameType.MapLowerToUpper),t.xp6(1),t.Q6J("ngSwitchCase",r.SubGameType.MapUpperToLower),t.xp6(1),t.Q6J("currSubGame",e.subGame.curr)("nextSubGame",e.subGame.next)}}let X=class ut{constructor(n,e){this.game=n,this.router=e,this.SubGameType=A}setNextOrExit(n){n?this.game.setSubGameIndex(n.index):this.router.navigate(["/home"])}static#t=this.\u0275fac=function(e){return new(e||ut)(t.Y36(D),t.Y36(R.F0))};static#e=this.\u0275cmp=t.Xpm({type:ut,selectors:[["app-game"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngSwitch"],[3,"gameInfo","patch",4,"ngSwitchCase"],[3,"gameInfo","inversed","patch",4,"ngSwitchCase"],[3,"currSubGame","nextSubGame","close"],[3,"gameInfo","patch"],[3,"gameInfo","inversed","patch"]],template:function(e,r){1&e&&(t.YNc(0,ge,5,5,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,r.game.gameInfo$))},dependencies:[b.O5,b.RF,b.n9,Q,H,b.Ov],encapsulation:2})};X=(0,gt.gn)([xt()],X);var ve=m(6805),we=m(930);class L{constructor(n,e){this.game=n,this.router=e}canActivate(n){var e=this;return(0,Z.Z)(function*(){const r=n.params.wordsetId,i=n.queryParams.subGames?.split(","),c=e.game.init(r,i);return e.router.createUrlTree(["/game",c.wordsetId])})()}static#t=this.\u0275fac=function(e){return new(e||L)(t.LFG(D),t.LFG(R.F0))};static#e=this.\u0275prov=t.Yz7({token:L,factory:L.\u0275fac})}class G{constructor(n,e){this.game=n,this.router=e}canActivate(n){var e=this;return(0,Z.Z)(function*(){const r=n.params.wordsetId,i=yield function _e(a,n){const e="object"==typeof n;return new Promise((r,i)=>{const c=new we.Hp({next:l=>{r(l),c.unsubscribe()},error:i,complete:()=>{e?r(n.defaultValue):i(new ve.K)}});a.subscribe(c)})}(e.game.game$),c=e.router.createUrlTree(["/game",r,"new"]);return!!i||c})()}static#t=this.\u0275fac=function(e){return new(e||G)(t.LFG(D),t.LFG(R.F0))};static#e=this.\u0275prov=t.Yz7({token:G,factory:G.\u0275fac})}const ye=[{path:":wordsetId",component:X,canActivate:[G]},{path:":wordsetId/new",component:X,canActivate:[L]}];class V{static#t=this.\u0275fac=function(e){return new(e||V)};static#e=this.\u0275mod=t.oAB({type:V});static#n=this.\u0275inj=t.cJS({providers:[D,L,G],imports:[b.ez,R.Bz.forChild(ye),mt.q,j,J]})}}}]);