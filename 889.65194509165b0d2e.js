"use strict";(self.webpackChunkordspelet=self.webpackChunkordspelet||[]).push([[889],{7889:(Q,E,s)=>{s.r(E),s.d(E,{HomeModule:()=>b});var l=s(6895),d=s(4006),g=s(5072),O=s(4463),t=s(4650);class u{constructor(){this.longPress=new t.vpe,this.longPressEnd=new t.vpe,this.time=1e3,this._didSend=!1}onStart(n){clearTimeout(this._timer),this._timer=setTimeout(()=>{this.longPress.emit(n),this._didSend=!0},this.time)}onAbort(n){clearTimeout(this._timer),this._didSend&&this.longPressEnd.emit(n),this._didSend=!1}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275dir=t.lG2({type:u,selectors:[["","longpress",""]],hostBindings:function(e,o){1&e&&t.NdJ("touchstart",function(r){return o.onStart(r)})("mousedown",function(r){return o.onStart(r)})("touchend",function(r){return o.onAbort(r)},!1,t.Jf7)("mouseup",function(r){return o.onAbort(r)},!1,t.Jf7)},inputs:{time:["longpressTime","time"]},outputs:{longPress:"longpress",longPressEnd:"longpressEnd"}})}class C{static#t=this.\u0275fac=function(e){return new(e||C)};static#e=this.\u0275mod=t.oAB({type:C});static#n=this.\u0275inj=t.cJS({})}var y=s(793),S=s(5861),M=s(9245),m=s(4004),A=s(9841),P=s(2313),F=s(2289);class h{constructor(n){this.breakpointObserver=n,this.orientationChanged$=this.breakpointObserver.observe(["(orientation: portrait)","(orientation: landscape)"]),this.isPortrait$=this.orientationChanged$.pipe((0,m.U)(()=>this.isPortrait())),this.isLandscape$=this.orientationChanged$.pipe((0,m.U)(()=>this.isLandscape()))}isPortrait(){return this.breakpointObserver.isMatched("(orientation: portrait)")}isLandscape(){return!this.isPortrait()}static#t=this.\u0275fac=function(e){return new(e||h)(t.LFG(F.Yg))};static#e=this.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}var H=s(3238),k=s(7392);function I(c,n){if(1&c){const e=t.EpF();t.TgZ(0,"li")(1,"button",2),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.change.emit(r.id))}),t._UZ(2,"img",3),t.qZA()()}if(2&c){const e=n.$implicit,o=t.oxw();t.ekj("current",e.id===o.current),t.xp6(1),t.uIk("aria-label",e.text)("title",e.text),t.xp6(1),t.MGl("src","https://flagicons.lipis.dev/flags/4x3/",e.flag,".svg",t.LSH),t.Q6J("alt",e.text)}}class v{constructor(){this.change=new t.vpe,this.languages=[{id:"sv",flag:"se",text:"Svenska"},{id:"en",flag:"gb",text:"English"}]}static#t=this.\u0275fac=function(e){return new(e||v)};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-language-selector"]],inputs:{current:"current"},outputs:{change:"change"},decls:2,vars:1,consts:[[1,"language-selector"],[3,"current",4,"ngFor","ngForOf"],[3,"click"],[3,"src","alt"]],template:function(e,o){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,I,3,6,"li",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.languages))},dependencies:[l.sg],styles:["ul.language-selector[_ngcontent-%COMP%], ul.language-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}ul.language-selector[_ngcontent-%COMP%]{padding:.25em}ul.language-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{opacity:.5}ul.language-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{opacity:.75}ul.language-selector[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]{opacity:1}ul.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1em;padding:.25em;margin:0;border:0;background:transparent;border:2px solid transparent;cursor:pointer}ul.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2em;height:1.5em}"]})}function W(c,n){if(1&c){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw().ngIf,p=t.oxw();return t.KtG(p.gotoLink(["/game",r.id,"new"],a.isEditMode))})("longpress",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.setEditMode(!0))})("longpressEnd",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.enableClick())}),t.TgZ(2,"b"),t._uU(3),t.qZA()(),t.TgZ(4,"a",9),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw().ngIf,p=t.oxw();return t.KtG(p.gotoLink(["edit",r.id],!a.isEditMode))}),t.TgZ(5,"mat-icon"),t._uU(6,"edit"),t.qZA()()()}if(2&c){const e=n.$implicit,o=n.index,i=t.oxw().ngIf;t.xp6(1),t.Udp("animation-delay",-o%4*.2+"s"),t.Q6J("matRippleDisabled",i.isEditMode),t.xp6(2),t.Oqu(e.title),t.xp6(1),t.ekj("show",i.isEditMode)}}function J(c,n){if(1&c){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.NdJ("click",function(){const r=t.CHM(e).ngIf,a=t.oxw();return t.KtG(r.isEditMode&&a.setEditMode(!1))}),t.TgZ(2,"div",2),t.NdJ("cdkDropListDropped",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.onBoxSortDrop(i))}),t.TgZ(3,"div",3)(4,"div",4),t.NdJ("click",function(){const r=t.CHM(e).ngIf,a=t.oxw();return t.KtG(a.gotoLink("new",r.isEditMode))}),t.TgZ(5,"b"),t._uU(6,"+"),t.qZA()()(),t.YNc(7,W,7,6,"div",5),t.qZA()(),t.TgZ(8,"app-language-selector",6),t.NdJ("change",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.store.patch({language:i}))}),t.qZA(),t.BQk()}if(2&c){const e=n.ngIf,o=t.oxw();t.xp6(1),t.ekj("edit-mode",e.isEditMode)("disable-click",o.clickDisabled),t.xp6(1),t.Q6J("cdkDropListDisabled",!e.isEditMode)("cdkDropListData",e.wordSets)("cdkDropListOrientation",e.isPortrait?"vertical":"horizontal"),t.xp6(2),t.Q6J("matRippleDisabled",e.isEditMode),t.xp6(3),t.Q6J("ngForOf",e.wordSets),t.xp6(1),t.Q6J("current",e.language)}}class x{constructor(n,e,o,i,r){this.store=n,this.router=e,this.route=o,this.location=i,this.layout=r,this.wordsetsSorted$=this.store.wordSets$.pipe((0,m.U)(a=>[...a].reverse())),this.isEditMode$=this.route.queryParams.pipe((0,m.U)(a=>!!a.edit)),this.$$=(0,A.a)([this.wordsetsSorted$,this.store.language$,this.isEditMode$,this.layout.isPortrait$]).pipe((0,m.U)(([a,p,_,T])=>({wordSets:a,language:p,isEditMode:_,isPortrait:T}))),this.clickDisabled=!1}gotoLink(n,e){var o=this;return(0,S.Z)(function*(){e||("string"==typeof n&&(n=[n]),o.router.navigate(n,{relativeTo:o.route}))})()}setEditMode(n){n?this.router.navigate([],{queryParams:{edit:1}}):this.location.back(),this.clickDisabled=n}enableClick(){clearTimeout(this._enableClickTimer),this._enableClickTimer=setTimeout(()=>{this.clickDisabled=!1},100)}onBoxSortDrop(n){const e=[...n.container.data];(0,M.bA)(e,n.previousIndex,n.currentIndex),this.store.patch({wordSets:e.reverse()})}static#t=this.\u0275fac=function(e){return new(e||x)(t.Y36(P.d),t.Y36(g.F0),t.Y36(g.gz),t.Y36(l.Ye),t.Y36(h))};static#e=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-home"]],decls:3,vars:3,consts:[[4,"ngIf"],[1,"wrapper","full-fill","overflow-auto","bg-op-5",3,"click"],["cdkDropList","",1,"box-list",3,"cdkDropListDisabled","cdkDropListData","cdkDropListOrientation","cdkDropListDropped"],[1,"box-wrapper"],["matRipple","",1,"box","new",3,"matRippleDisabled","click"],["class","box-wrapper","cdkDrag","",4,"ngFor","ngForOf"],[1,"ts-50p",3,"current","change"],["cdkDrag","",1,"box-wrapper"],["matRipple","",1,"box",3,"matRippleDisabled","click","longpress","longpressEnd"],[1,"edit","link",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,J,9,10,"ng-container",0),t.ALo(1,"async"),t._UZ(2,"router-outlet")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.$$))},dependencies:[l.sg,l.O5,g.lC,M.Wj,M.Zt,H.wG,k.Hw,u,v,l.Ov],styles:[".wrapper[_ngcontent-%COMP%]{background:rgba(0,0,0,.1)}.wrapper.disable-click[_ngcontent-%COMP%]{pointer-events:none}.box-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;min-width:100%;padding:1em;position:absolute;top:50%;left:0;transform:translateY(-50%)}@media (orientation: portrait){.box-list[_ngcontent-%COMP%]{flex-direction:column;height:-moz-fit-content;height:fit-content;min-height:100%;top:0;left:50%;transform:translate(-50%)}}.box-wrapper[_ngcontent-%COMP%]{position:relative;width:min-content}.box-wrapper[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{position:absolute;bottom:.25em;left:.25em;height:1.5em;width:1.5em;display:flex;justify-content:center;align-items:center;border-radius:.25em;background:var(--color-fg);color:var(--color-bg);transform:scale(0);transition:transform .2s}.box-wrapper[_ngcontent-%COMP%]   .edit.show[_ngcontent-%COMP%]{transform:scale(1);cursor:pointer}.box[_ngcontent-%COMP%]{width:calc(25% - 2em);min-width:7em;background:white;border-radius:.5em;box-shadow:.1em .1em .25em var(--color-dark-op-10);border:.1em solid var(--color-fg-op-50);height:4em;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;margin:.5em;padding:.5em;text-decoration:none;transition:.2s;transition-property:transform,box-shadow;font-size:130%}@media (orientation: portrait){.box[_ngcontent-%COMP%]{font-size:110%}}.box[_ngcontent-%COMP%]:hover{background:white;border-radius:.5em;box-shadow:.1em .1em 1em var(--color-dark-op-25);border:.1em solid var(--color-fg);transform:scale(1.05) translateY(-.1em)}.box.new[_ngcontent-%COMP%]{background:var(--color-primary);color:var(--color-primary-contrast)}.box.new[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:300%}.edit-mode[_ngcontent-%COMP%]   .box.new[_ngcontent-%COMP%]{pointer-events:none}.wrapper.edit-mode[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_wobble .3s infinite linear;cursor:move}.wrapper.edit-mode[_ngcontent-%COMP%]   .box.new[_ngcontent-%COMP%]{animation:none}@keyframes _ngcontent-%COMP%_wobble{0%,50%,to{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}.cdk-drag-preview[_ngcontent-%COMP%]{transition:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}app-language-selector[_ngcontent-%COMP%]{position:absolute;top:0;left:0}"]})}var D=s(9521),L=s(9300),R=s(3900),$=s(1881),N=s(4859),Z=s(7676),U=s(4144),w=s(7331),B=s(6709);const Y=function(c){return{word:c}};function G(c,n){if(1&c){const e=t.EpF();t.TgZ(0,"mat-chip-row",19),t.NdJ("removed",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.removeWord(r))}),t._uU(1),t.TgZ(2,"button",20),t.ALo(3,"translate"),t.TgZ(4,"mat-icon"),t._uU(5,"cancel"),t.qZA()()()}if(2&c){const e=n.$implicit;t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.uIk("aria-label",t.xi3(3,2,"WORDSETFORM.LABELS.REMOVEWORD",t.VKq(5,Y,e)))}}function K(c,n){1&c&&(t.TgZ(0,"mat-checkbox",21),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&c&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"WORDSETFORM.LABELS.DELETEWORDSET")," "))}class f{constructor(n,e,o,i,r){this.fb=n,this.store=e,this.route=o,this.router=i,this.location=r,this.minWords=2,this.separatorKeysCodes=[D.K5,D.OC],this.form=this.fb.group({id:[""],title:["",d.kI.required],words:[[],j(this.minWords)],delete:[!1]}),this.trackEditIndex()}get isEditing(){const{id:n}=this.form.value||{};return!!n}trackEditIndex(){this.route.params.pipe((0,m.U)(n=>n?.id),(0,L.h)(n=>!!n),(0,R.w)(n=>this.store.wordSets$.pipe((0,m.U)(e=>e.find(o=>o.id==n)))),(0,L.h)(n=>!!n)).subscribe(n=>{this.form.patchValue(n)})}addWord(n){const e=n.value?.trim()?.toLocaleLowerCase();if(e){const o=[...this.form.value.words||[]];o.push(e),this.form.patchValue({words:o}),n.chipInput.clear()}}removeWord(n){const e=(this.form.value.words||[]).filter(o=>o!==n);this.form.patchValue({words:e})}onSubmit(){const{id:n,title:e,words:o,delete:i}=this.form.value||{};if(!(e&&o&&o.length>=this.minWords))return;const a=[...this.store.data.wordSets],p={title:e,words:o,id:(0,$.B)()},_=a.findIndex(T=>T.id===n);this.isEditing&&n&&_>=0?i?a.splice(_,1):a[_]=p:a.push(p),this.store.patch({wordSets:a}),this.router.navigate(["../"])}static#t=this.\u0275fac=function(e){return new(e||f)(t.Y36(d.qu),t.Y36(P.d),t.Y36(g.gz),t.Y36(g.F0),t.Y36(l.Ye))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-wordset-form"]],decls:29,vars:21,consts:[[1,"modal-wrapper"],[1,"modal-box","w-100",3,"formGroup","ngSubmit"],[1,"px-1","py-05"],["translate","",1,"ts-150p","flex-center","m-0"],[1,"modal-body","p-1"],["appearance","outline",1,"w-100","ts-120p"],["translate",""],["matInput","","formControlName","title","autofocus",""],["aria-label","WORDSETFORM.LABELS.ADDWORD"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],[1,"word-input",3,"placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formControlName","delete","color","warn","class","ts-80p",4,"ngIf"],[1,"px-1","pb-05"],[1,"mt-0"],[1,"flex-center"],["type","submit","mat-raised-button","",1,"",3,"color","disabled"],[1,"text-upper"],[1,"modal-close",3,"click"],[3,"removed"],["matChipRemove",""],["formControlName","delete","color","warn",1,"ts-80p"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4)(6,"mat-form-field",5)(7,"mat-label",6),t._uU(8,"WORDSETFORM.LABELS.TITLE"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"mat-form-field",5)(11,"mat-label"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"mat-chip-grid",8,9),t.YNc(16,G,6,7,"mat-chip-row",10),t.TgZ(17,"input",11),t.NdJ("matChipInputTokenEnd",function(r){return o.addWord(r)}),t.ALo(18,"translate"),t.qZA()()(),t.YNc(19,K,3,3,"mat-checkbox",12),t.qZA(),t.TgZ(20,"footer",13),t._UZ(21,"hr",14),t.TgZ(22,"div",15)(23,"button",16)(24,"strong",17),t._uU(25),t.ALo(26,"translate"),t.qZA()()()(),t.TgZ(27,"a",18),t.NdJ("click",function(){return o.location.back()}),t.ALo(28,"translate"),t.qZA()()()),2&e){const i=t.MAs(15);t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(3),t.hij(" ","WORDSETFORM.HEADLINE."+(o.isEditing?"EDIT":"NEW")," "),t.xp6(8),t.hij(" ",t.lcZ(13,13,"WORDSETFORM.LABELS.WORDSTOLEARN"),"* "),t.xp6(4),t.Q6J("ngForOf",o.form.value.words),t.xp6(1),t.Q6J("placeholder",t.lcZ(18,15,"WORDSETFORM.LABELS.ADDWORD"))("matChipInputFor",i)("matChipInputSeparatorKeyCodes",o.separatorKeysCodes)("matChipInputAddOnBlur",!0),t.xp6(2),t.Q6J("ngIf",o.isEditing),t.xp6(4),t.Q6J("color",o.form.value.delete?"warn":"primary")("disabled",o.form.invalid),t.xp6(2),t.hij(" ",t.lcZ(26,17,"WORDSETFORM.BUTTON."+(o.form.value.delete?"DELETE":o.isEditing?"EDIT":"NEW"))," "),t.xp6(2),t.uIk("aria-label",t.lcZ(28,19,"COMMON.CLOSE"))}},dependencies:[l.sg,l.O5,N.lW,Z.KE,Z.hX,U.Nt,w.RA,w.oH,w.qH,w.z3,k.Hw,B.oG,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,O.Pi,O.X$],styles:["input.word-input[_ngcontent-%COMP%]{text-transform:lowercase}input.word-input[_ngcontent-%COMP%]::placeholder{text-transform:none}"]})}const j=c=>n=>n.value.length>=c?null:{MinLengthArray:!0},z=[{path:"",component:x,children:[{path:"new",component:f},{path:"edit/:id",component:f}]}];class b{static#t=this.\u0275fac=function(e){return new(e||b)};static#e=this.\u0275mod=t.oAB({type:b});static#n=this.\u0275inj=t.cJS({imports:[l.ez,g.Bz.forChild(z),y.q,d.UX,C,O.aw.forChild()]})}}}]);