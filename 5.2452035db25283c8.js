"use strict";(self.webpackChunkordspelet=self.webpackChunkordspelet||[]).push([[5],{2005:(j,M,s)=>{s.r(M),s.d(M,{HomeModule:()=>b});var l=s(6895),c=s(4006),h=s(6319),t=s(4650);class u{constructor(){this.longPress=new t.vpe,this.longPressEnd=new t.vpe,this.time=1e3,this._didSend=!1}onStart(o){clearTimeout(this._timer),this._timer=setTimeout(()=>{this.longPress.emit(o),this._didSend=!0},this.time)}onAbort(o){clearTimeout(this._timer),this._didSend&&this.longPressEnd.emit(o),this._didSend=!1}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275dir=t.lG2({type:u,selectors:[["","longpress",""]],hostBindings:function(e,n){1&e&&t.NdJ("touchstart",function(r){return n.onStart(r)})("mousedown",function(r){return n.onStart(r)})("touchend",function(r){return n.onAbort(r)},!1,t.Jf7)("mouseup",function(r){return n.onAbort(r)},!1,t.Jf7)},inputs:{time:["longpressTime","time"]},outputs:{longPress:"longpress",longPressEnd:"longpressEnd"}})}class w{static#t=this.\u0275fac=function(e){return new(e||w)};static#e=this.\u0275mod=t.oAB({type:w});static#o=this.\u0275inj=t.cJS({})}var Z=s(1929),D=s(5861),x=s(2340),m=s(4004),E=s(9841),k=s(8801),H=s(2289);class f{constructor(o){this.breakpointObserver=o,this.orientationChanged$=this.breakpointObserver.observe(["(orientation: portrait)","(orientation: landscape)"]),this.isPortrait$=this.orientationChanged$.pipe((0,m.U)(()=>this.isPortrait())),this.isLandscape$=this.orientationChanged$.pipe((0,m.U)(()=>this.isLandscape()))}isPortrait(){return this.breakpointObserver.isMatched("(orientation: portrait)")}isLandscape(){return!this.isPortrait()}static#t=this.\u0275fac=function(e){return new(e||f)(t.LFG(H.Yg))};static#e=this.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})}var I=s(3238),T=s(3336);function S(d,o){if(1&d){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw().ngIf,p=t.oxw();return t.KtG(p.gotoLink(["/game",r.id],a.isEditMode))})("longpress",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.setEditMode(!0))})("longpressEnd",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.enableClick())}),t.TgZ(2,"b"),t._uU(3),t.qZA()(),t.TgZ(4,"a",8),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw().ngIf,p=t.oxw();return t.KtG(p.gotoLink(["edit",r.id],!a.isEditMode))}),t.TgZ(5,"mat-icon"),t._uU(6,"edit"),t.qZA()()()}if(2&d){const e=o.$implicit,n=o.index,i=t.oxw().ngIf;t.xp6(1),t.Udp("animation-delay",-n%4*.2+"s"),t.Q6J("matRippleDisabled",i.isEditMode),t.xp6(2),t.Oqu(e.title),t.xp6(1),t.ekj("show",i.isEditMode)}}function A(d,o){if(1&d){const e=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(){const r=t.CHM(e).ngIf,a=t.oxw();return t.KtG(r.isEditMode&&a.setEditMode(!1))}),t.TgZ(1,"div",2),t.NdJ("cdkDropListDropped",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.onBoxSortDrop(i))}),t.TgZ(2,"div",3)(3,"div",4),t.NdJ("click",function(){const r=t.CHM(e).ngIf,a=t.oxw();return t.KtG(a.gotoLink("new",r.isEditMode))}),t.TgZ(4,"b"),t._uU(5,"+"),t.qZA()()(),t.YNc(6,S,7,6,"div",5),t.qZA()()}if(2&d){const e=o.ngIf,n=t.oxw();t.ekj("edit-mode",e.isEditMode)("disable-click",n.clickDisabled),t.xp6(1),t.Q6J("cdkDropListDisabled",!e.isEditMode)("cdkDropListData",e.wordSets)("cdkDropListOrientation",e.isPortrait?"vertical":"horizontal"),t.xp6(2),t.Q6J("matRippleDisabled",e.isEditMode),t.xp6(3),t.Q6J("ngForOf",e.wordSets)}}class C{constructor(o,e,n,i,r){this.store=o,this.router=e,this.route=n,this.location=i,this.layout=r,this.wordsetsSorted$=this.store.wordSets$.pipe((0,m.U)(a=>[...a].reverse())),this.isEditMode$=this.route.queryParams.pipe((0,m.U)(a=>!!a.edit)),this.$$=(0,E.a)([this.wordsetsSorted$,this.isEditMode$,this.layout.isPortrait$]).pipe((0,m.U)(([a,p,v])=>({wordSets:a,isEditMode:p,isPortrait:v}))),this.clickDisabled=!1}gotoLink(o,e){var n=this;return(0,D.Z)(function*(){e||("string"==typeof o&&(o=[o]),n.router.navigate(o,{relativeTo:n.route}))})()}setEditMode(o){o?this.router.navigate([],{queryParams:{edit:1}}):this.location.back(),this.clickDisabled=o}enableClick(){clearTimeout(this._enableClickTimer),this._enableClickTimer=setTimeout(()=>{this.clickDisabled=!1},100)}onBoxSortDrop(o){const e=[...o.container.data];(0,x.bA)(e,o.previousIndex,o.currentIndex),this.store.patch({wordSets:e.reverse()})}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(k.d),t.Y36(h.F0),t.Y36(h.gz),t.Y36(l.Ye),t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-home"]],decls:3,vars:3,consts:[["class","wrapper full-fill overflow-auto bg-op-5",3,"edit-mode","disable-click","click",4,"ngIf"],[1,"wrapper","full-fill","overflow-auto","bg-op-5",3,"click"],["cdkDropList","",1,"box-list",3,"cdkDropListDisabled","cdkDropListData","cdkDropListOrientation","cdkDropListDropped"],[1,"box-wrapper"],["matRipple","",1,"box","new",3,"matRippleDisabled","click"],["class","box-wrapper","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"box-wrapper"],["matRipple","",1,"box",3,"matRippleDisabled","click","longpress","longpressEnd"],[1,"edit","link",3,"click"]],template:function(e,n){1&e&&(t.YNc(0,A,7,9,"div",0),t.ALo(1,"async"),t._UZ(2,"router-outlet")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.$$))},dependencies:[l.sg,l.O5,h.lC,x.Wj,x.Zt,I.wG,T.Hw,u,l.Ov],styles:[".wrapper[_ngcontent-%COMP%]{background:rgba(0,0,0,.1)}.wrapper.disable-click[_ngcontent-%COMP%]{pointer-events:none}.box-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;width:-moz-fit-content;width:fit-content;min-width:100%;padding:1em;position:absolute;top:50%;left:0;transform:translateY(-50%)}@media (orientation: portrait){.box-list[_ngcontent-%COMP%]{flex-direction:column;height:-moz-fit-content;height:fit-content;min-height:100%;top:0;left:50%;transform:translate(-50%)}}.box-wrapper[_ngcontent-%COMP%]{position:relative;width:min-content}.box-wrapper[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{position:absolute;bottom:.25em;left:.25em;height:1.5em;width:1.5em;display:flex;justify-content:center;align-items:center;border-radius:.25em;background:var(--color-fg);color:var(--color-bg);transform:scale(0);transition:transform .2s}.box-wrapper[_ngcontent-%COMP%]   .edit.show[_ngcontent-%COMP%]{transform:scale(1);cursor:pointer}.box[_ngcontent-%COMP%]{width:calc(25% - 2em);min-width:7em;background:white;border-radius:.5em;box-shadow:.1em .1em .25em var(--color-dark-op-10);border:.1em solid var(--color-fg-op-50);height:4em;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;margin:.5em;padding:.5em;text-decoration:none;transition:.2s;transition-property:transform,box-shadow;font-size:130%}@media (orientation: portrait){.box[_ngcontent-%COMP%]{font-size:110%}}.box[_ngcontent-%COMP%]:hover{background:white;border-radius:.5em;box-shadow:.1em .1em 1em var(--color-dark-op-25);border:.1em solid var(--color-fg);transform:scale(1.05) translateY(-.1em)}.box.new[_ngcontent-%COMP%]{background:var(--color-primary);color:var(--color-primary-contrast)}.box.new[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-size:300%}.edit-mode[_ngcontent-%COMP%]   .box.new[_ngcontent-%COMP%]{pointer-events:none}.wrapper.edit-mode[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_wobble .3s infinite linear;cursor:move}.wrapper.edit-mode[_ngcontent-%COMP%]   .box.new[_ngcontent-%COMP%]{animation:none}@keyframes _ngcontent-%COMP%_wobble{0%,50%,to{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}.cdk-drag-preview[_ngcontent-%COMP%]{transition:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]})}var P=s(9521),O=s(9300),F=s(3900),$=s(4859),y=s(7676),L=s(4144),_=s(7331),U=s(6709);function Y(d,o){if(1&d){const e=t.EpF();t.TgZ(0,"mat-chip-row",18),t.NdJ("removed",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.removeWord(r))}),t._uU(1),t.TgZ(2,"button",19)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&d){const e=o.$implicit;t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.uIk("aria-label","remove "+e)}}function W(d,o){1&d&&(t.TgZ(0,"mat-checkbox",20),t._uU(1," Delete this word set (can't be undone) "),t.qZA())}class g{constructor(o,e,n,i,r){this.fb=o,this.store=e,this.route=n,this.router=i,this.location=r,this.minWords=2,this.separatorKeysCodes=[P.K5,P.OC],this.form=this.fb.group({id:[""],title:["",c.kI.required],words:[[],N(this.minWords)],delete:[!1]}),this.trackEditIndex()}get isEditing(){const{id:o}=this.form.value||{};return!!o}trackEditIndex(){this.route.params.pipe((0,m.U)(o=>o?.id),(0,O.h)(o=>!!o),(0,F.w)(o=>this.store.wordSets$.pipe((0,m.U)(e=>e.find(n=>n.id==o)))),(0,O.h)(o=>!!o)).subscribe(o=>{this.form.patchValue(o)})}addWord(o){const e=o.value?.trim()?.toLocaleLowerCase();if(e){const n=[...this.form.value.words||[]];n.push(e),this.form.patchValue({words:n}),o.chipInput.clear()}}removeWord(o){const e=(this.form.value.words||[]).filter(n=>n!==o);this.form.patchValue({words:e})}onSubmit(){const{id:o,title:e,words:n,delete:i}=this.form.value||{};if(!(e&&n&&n.length>=this.minWords))return;const a=[...this.store.data.wordSets],p={title:e,words:n,id:window.btoa(Date.now()-Math.round(Math.random()*Date.now()*.7)+"")},v=a.findIndex(K=>K.id===o);this.isEditing&&o&&v>=0?i?a.splice(v,1):a[v]=p:a.push(p),this.store.patch({wordSets:a}),this.router.navigate(["../"])}static#t=this.\u0275fac=function(e){return new(e||g)(t.Y36(c.qu),t.Y36(k.d),t.Y36(h.gz),t.Y36(h.F0),t.Y36(l.Ye))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-wordset-form"]],decls:27,vars:10,consts:[[1,"wrapper","full-fill","flex-fill","flex-center","bg-dark-op-50"],[1,"border-box-150","py-1",3,"formGroup","ngSubmit"],[1,"px-1","py-05"],[1,"ts-150p","flex-center","m-0"],[1,"content-wrapper","p-1"],["appearance","outline",1,"w-100","ts-120p"],["matInput","","formControlName","title","autofocus",""],["aria-label","Enter words"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","Add word...",1,"word-input",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["formControlName","delete","color","warn","class","ts-80p",4,"ngIf"],[1,"px-1"],[1,"mt-0"],[1,"flex-center"],["type","submit","mat-raised-button","",1,"",3,"color","disabled"],[1,"text-upper"],[1,"close","ts-125p",3,"click"],[3,"removed"],["matChipRemove",""],["formControlName","delete","color","warn",1,"ts-80p"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"mat-form-field",5)(11,"mat-label"),t._uU(12,"Words to learn"),t.qZA(),t.TgZ(13,"mat-chip-grid",7,8),t.YNc(15,Y,5,2,"mat-chip-row",9),t.TgZ(16,"input",10),t.NdJ("matChipInputTokenEnd",function(r){return n.addWord(r)}),t.qZA()()(),t.YNc(17,W,2,0,"mat-checkbox",11),t.qZA(),t.TgZ(18,"footer",12),t._UZ(19,"hr",13),t.TgZ(20,"div",14)(21,"button",15)(22,"strong",16),t._uU(23),t.qZA()()()(),t.TgZ(24,"a",17),t.NdJ("click",function(){return n.location.back()}),t.TgZ(25,"mat-icon"),t._uU(26,"close"),t.qZA()()()()),2&e){const i=t.MAs(14);t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(3),t.hij(" ",n.isEditing?"Edit word set":"Create new word set"," "),t.xp6(11),t.Q6J("ngForOf",n.form.value.words),t.xp6(1),t.Q6J("matChipInputFor",i)("matChipInputSeparatorKeyCodes",n.separatorKeysCodes)("matChipInputAddOnBlur",!0),t.xp6(1),t.Q6J("ngIf",n.isEditing),t.xp6(4),t.Q6J("color",n.form.value.delete?"warn":"primary")("disabled",n.form.invalid),t.xp6(2),t.hij(" ",n.form.value.delete?"Delete":n.isEditing?"Save":"Create"," ")}},dependencies:[l.sg,l.O5,$.lW,y.KE,y.hX,L.Nt,_.RA,_.oH,_.qH,_.z3,T.Hw,U.oG,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:["form[_ngcontent-%COMP%]{width:30em;max-width:90%;max-height:90vh;position:relative;border-color:var(--color-fg-op-75);display:flex;flex-direction:column}form[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{max-height:90vh;overflow:auto}a.close[_ngcontent-%COMP%]{position:absolute;top:-.5em;right:-.5em;height:1.25em;width:1.25em;display:flex;justify-content:center;align-items:center;border-radius:.25em;background:var(--color-fg);color:var(--color-bg)}input.word-input[_ngcontent-%COMP%]{text-transform:lowercase}input.word-input[_ngcontent-%COMP%]::placeholder{text-transform:none}"]})}const N=d=>o=>o.value.length>=d?null:{MinLengthArray:!0},G=[{path:"",component:C,children:[{path:"new",component:g},{path:"edit/:id",component:g}]}];class b{static#t=this.\u0275fac=function(e){return new(e||b)};static#e=this.\u0275mod=t.oAB({type:b});static#o=this.\u0275inj=t.cJS({imports:[l.ez,h.Bz.forChild(G),Z.q,c.UX,w]})}}}]);