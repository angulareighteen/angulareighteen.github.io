import {q as qe,e as ee,t as te,_ as _e,l as le}from'./chunk-b_0CUpWM.js';import {E as Et,S as St,i as it}from'./chunk-DDUXkZPy.js';import {w,A as Ae$1,D as Du,c as cP,x as As,a as $e,N as Nc,M as Mc,z as wE,B as Bv,C as qn$1,W as Wr,Y as Yr,H as Hr,Z as Zo,r as rE,b as oc,P as Pf,g as gE,p as pI,h as hy,t as tp,d as vE,y as yE,l as lc,e as hI,f as ir,o as oe,U as Uv,F as ul,G as Gu,I as ai,J as W,K as ih,R as Rg,Q as _f,S as xI,T as Nf,X as uE,a0 as Uf,a1 as kI,a2 as OI,a3 as Te,a4 as Jy,a5 as ku,a6 as Lo,a7 as ke,a8 as sr,a9 as Xn$1,aa as sh,ab as $r,ac as lI,ad as IE,ae as uI,af as zf,ag as Qf,ah as Wf,ai as uP,O as Of,aj as GI,ak as sE,al as Jn$1,am as S,an as pg,ao as fP,ap as Sf,aq as zn$1,ar as AI,q as NI,as as Gv,at as Ji,au as ee$1,av as kp,aw as pP,ax as fI,E as EI,m as Bf,n as Pl,L as Ll,k as kf,ay as np,az as ze$1,aA as dp,aB as Ei,aC as jf,aD as fE,aE as PI,aF as dE,aG as Xo,aH as Op,aI as Wc,aJ as Gp,aK as zc,aL as rh,aM as De,aN as zi,aO as Fn$1,$,aP as ec,aQ as ve}from'./main-YS4WI2CN.js';import {g as gr,_ as _r,o as on$1,t as tn$1,k as kt,a as kr,q as qt$1,B as B$1,b as qe$1,D as Dn$1,W as Wo,s as st,Q as Qt$1,H as He$1,O as On$1,M as Mn$1}from'./chunk-Cc02ckWq.js';function Gt(n){return n!=null}function cn(n){return ec(n)?ve(n):n}function $t(n){let r={};return n.forEach(e=>{r=e!=null?$($({},r),e):r;}),Object.keys(r).length===0?null:r}function qt(n,r){return r.map(e=>e(n))}function dn(n){return !n.validate}function Wt(n){return n.map(r=>dn(r)?r:e=>r.validate(e))}function un(n){if(!n)return null;let r=n.filter(Gt);return r.length==0?null:function(e){return $t(qt(e,r))}}function pn(n){return n!=null?un(Wt(n)):null}function hn(n){if(!n)return null;let r=n.filter(Gt);return r.length==0?null:function(e){let t=qt(e,r).map(cn);return Gp(t).pipe($e($t))}}function mn(n){return n!=null?hn(Wt(n)):null}var Le=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=pn(this._rawValidators);}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=mn(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[];}reset(r=void 0){this.control?.reset(r);}hasError(r,e){return this.control?this.control.hasError(r,e):false}getError(r,e){return this.control?this.control.getError(r,e):null}},Ee=class extends Le{name;get formDirective(){return null}get path(){return null}};var gn=["*"];function _n(n,r){n&1&&AI(0);}var ze=(()=>{class n{_elementRef=w(Xn$1);focus(){this._elementRef.nativeElement.focus();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Gv({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Be=(()=>{class n{template=w(zn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Gv({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var B={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},vn=new S("STEPPER_GLOBAL_OPTIONS"),Ie=(()=>{class n{_stepperOptions;_stepper=w(xe);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e);}_interacted=As(false);interactedStream=new ke;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e);}_state=As(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e);}_editable=As(true);optional=false;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e);}_completedOverride=As(null);index=As(-1);isSelected=wE(()=>this._stepper.selectedIndex===this.index());indicatorType=wE(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??B.NUMBER,o=this._editable();return this._showError()&&this.hasError&&!e?B.ERROR:this._displayDefaultIndicatorType?!t||e?B.NUMBER:o?B.EDIT:B.DONE:t&&!e?B.DONE:t&&e?i:o&&e?B.EDIT:i});isNavigable=wE(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e);}_customError=As(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=w(vn,{optional:true});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==false;}select(){this._stepper.selected=this;}reset(){this._interacted.set(false),this._completedOverride()!=null&&this._completedOverride.set(false),this._customError()!=null&&this._customError.set(false),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset());}ngOnChanges(){this._stepper._stateChanged();}_markAsInteracted(){this._interacted()||(this._interacted.set(true),this.interactedStream.emit(this));}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Bv({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,o){if(t&1&&Uf(o,Be,5)(o,Ee,5),t&2){let s;kI(s=OI())&&(i.stepLabel=s.first),kI(s=OI())&&(i._childForms=s);}},viewQuery:function(t,i){if(t&1&&Wf(zn$1,7),t&2){let o;kI(o=OI())&&(i.content=o.first);}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",fP],optional:[2,"optional","optional",fP],completed:[2,"completed","completed",fP],hasError:[2,"hasError","hasError",fP]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[pg],ngContentSelectors:gn,decls:1,vars:0,template:function(t,i){t&1&&(xI(),Sf(0,_n,1,0,"ng-template"));},encapsulation:2})}return n})(),xe=(()=>{class n{_dir=w(Ji,{optional:true});_changeDetectorRef=w(uP);_elementRef=w(Xn$1);_destroyed=new ee$1;_keyManager;_steps;steps=new Lo;_stepHeader;_sortedHeaders=new Lo;get linear(){return this._linear()}set linear(e){this._linear.set(e);}_linear=As(false);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e);}_selectedIndex=As(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1;}selectionChange=new ke;selectedIndexChange=new ke;_groupId=w(st).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical");}_orientation="horizontal";ngAfterContentInit(){this._steps.changes.pipe(ih(this._steps),sh(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges();});}ngAfterViewInit(){if(this._stepHeader.changes.pipe(ih(this._stepHeader),sh(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges();}),this._keyManager=new Qt$1(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:kp()).pipe(ih(this._layoutDirection()),sh(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0));}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted();}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete();}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1);}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0);}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged();}_getStepLabelId(e){return `${this._groupId}-label-${e}`}_getStepContentId(e){return `${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck();}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged();}_onKeydown(e){let t=He$1(e),i=e.keyCode,o=this._keyManager;o?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=o.activeItemIndex,e.preventDefault()):o?.setFocusOrigin("keyboard").onKeydown(e);}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return (i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):false}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=On$1();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Gv({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,o){if(t&1&&Uf(o,Ie,5)(o,ze,5),t&2){let s;kI(s=OI())&&(i._steps=s),kI(s=OI())&&(i._stepHeader=s);}},inputs:{linear:[2,"linear","linear",fP],selectedIndex:[2,"selectedIndex","selectedIndex",pP],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})();var Qt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Uv({type:n});static \u0275inj=ul({imports:[Gu]})}return n})();function Yt(n){return Error(`Unable to find icon with the name "${n}"`)}function yn(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Zt(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Kt(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var E=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t;}},Jt=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=i;}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new E(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let s=this._sanitizer.sanitize(Xo.HTML,i);if(!s)throw Kt(i);let p=Mn$1(s);return this._addSvgIconConfig(e,t,new E("",p,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new E(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(Xo.HTML,t);if(!o)throw Kt(t);let s=Mn$1(o);return this._addSvgIconSetConfig(e,new E("",s,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Xo.RESOURCE_URL,e);if(!t)throw Zt(e);let i=this._cachedIconsByUrl.get(t);return i?kp(Ae(i)):this._loadSvgIconFromConfig(new E(e,null)).pipe(Nc(o=>this._cachedIconsByUrl.set(t,o)),$e(o=>Ae(o)))}getNamedSvgIcon(e,t=""){let i=Xt(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):Op(Yt(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear();}_getSvgFromConfig(e){return e.svgText?kp(Ae(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe($e(t=>Ae(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return kp(i);let o=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Wc(p=>{let U=`Loading icon set URL: ${this._sanitizer.sanitize(Xo.RESOURCE_URL,s.url)} failed: ${p.message}`;return this._errorHandler.handleError(new Error(U)),kp(null)})));return Gp(o).pipe($e(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw Yt(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),p=this._extractSvgIconFromSet(s,e,o.options);if(p)return p}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Nc(t=>e.svgText=t),$e(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?kp(null):this._fetchIcon(e).pipe(Nc(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let s=o.cloneNode(true);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let p=this._svgElementFromString(Mn$1("<svg></svg>"));return p.appendChild(s),this._setSvgAttributes(p,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(Mn$1("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:s,value:p}=i[o];s!=="id"&&t.setAttribute(s,p);}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(true));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??false;if(!this._httpClient)throw yn();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(Xo.RESOURCE_URL,t);if(!s)throw Zt(t);let p=this._inProgressUrlFetches.get(s);if(p)return p;let H=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe($e(U=>Mn$1(U)),zc(()=>this._inProgressUrlFetches.delete(s)),rh());return this._inProgressUrlFetches.set(s,H),H}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Xt(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t;}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return Cn(o)?new E(o.url,null,o.options):new E(o,null)}}static \u0275fac=function(t){return new(t||n)(De(ir,8),De(zi),De(Fn$1,8),De(ze$1))};static \u0275prov=oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ae(n){return n.cloneNode(true)}function Xt(n,r){return n+":"+r}function Cn(n){return !!(n.url&&n.options)}var bn=["*"],Dn=new S("MAT_ICON_DEFAULT_OPTIONS"),Mn=new S("mat-icon-location",{providedIn:"root",factory:()=>{let n=w(Fn$1),r=n?n.location:null;return {getPathname:()=>r?r.pathname+r.search:""}}}),en=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Sn=en.map(n=>`[${n}]`).join(", "),Vn=/^url\(['"]?#(.*?)['"]?\)$/,tn=(()=>{class n{_elementRef=w(Xn$1);_iconRegistry=w(Jt);_location=w(Mn);_errorHandler=w(ze$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;inline=false;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e);}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses());}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses());}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=W.EMPTY;constructor(){let e=w(new dp("aria-hidden"),{optional:true}),t=w(Dn,{optional:true});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true");}_splitIconName(e){if(!e)return ["",""];let t=e.split(":");switch(t.length){case 1:return ["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses();}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t));}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();}_usingFontIcon(){return !this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e);}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove();}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon);}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`);});});}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Sn),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)en.forEach(s=>{let p=t[o],H=p.getAttribute(s),U=H?H.match(Vn):null;if(U){let me=i.get(p);me||(me=[],i.set(p,me)),me.push({name:s,value:U[1]});}});}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(Ei(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s));});}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Bv({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(kf("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),GI(i.color?"mat-"+i.color:""),Qf("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"));},inputs:{color:"color",inline:[2,"inline","inline",fP],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:bn,decls:1,vars:0,template:function(t,i){t&1&&(xI(),AI(0));},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})(),nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Uv({type:n});static \u0275inj=ul({imports:[Gu]})}return n})();var we=(()=>{class n{isErrorState(e,t){return !!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Jn$1({token:n,factory:n.\u0275fac})}return n})();var En=(n,r,e)=>({index:n,active:r,optional:e});function In(n,r){if(n&1&&jf(0,2),n&2){let e=NI();Of("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",fE(2,En,e.index,e.active,e.optional));}}function xn(n,r){if(n&1&&(Zo(0,"span",7),rE(1),oc()),n&2){let e=NI(2);hy(),tp(e._getDefaultTextForState(e.state));}}function An(n,r){if(n&1&&(Zo(0,"span",8),rE(1),oc()),n&2){let e=NI(3);hy(),tp(e._intl.completedLabel);}}function wn(n,r){if(n&1&&(Zo(0,"span",8),rE(1),oc()),n&2){let e=NI(3);hy(),tp(e._intl.editableLabel);}}function Fn(n,r){if(n&1&&(lI(0,An,2,1,"span",8)(1,wn,2,1,"span",8),Zo(2,"mat-icon",7),rE(3),oc()),n&2){let e=NI(2);uI(e.state==="done"?0:e.state==="edit"?1:-1),hy(3),tp(e._getDefaultTextForState(e.state));}}function Nn(n,r){if(n&1&&lI(0,xn,2,1,"span",7)(1,Fn,4,2),n&2){let t=NI();uI((t.state)==="number"?0:1);}}function On(n,r){n&1&&(Zo(0,"div",4),jf(1,9),oc()),n&2&&(hy(),Of("ngTemplateOutlet",r.template));}function Rn(n,r){if(n&1&&(Zo(0,"div",4),rE(1),oc()),n&2){let e=NI();hy(),tp(e.label);}}function Tn(n,r){if(n&1&&(Zo(0,"div",5),rE(1),oc()),n&2){let e=NI();hy(),tp(e._intl.optionalLabel);}}function kn(n,r){if(n&1&&(Zo(0,"div",6),rE(1),oc()),n&2){let e=NI();hy(),tp(e.errorMessage);}}var rn=["*"];function Pn(n,r){}function Ln(n,r){if(n&1&&(AI(0),Nf(1,Pn,0,0,"ng-template",0)),n&2){let e=NI();hy(),Of("cdkPortalOutlet",e._portal);}}var zn=["animatedContainer"],on=n=>({steps:n}),sn=n=>({step:n});function Bn(n,r){n&1&&AI(0);}function jn(n,r){if(n&1&&(Zo(0,"div",5),jf(1,9)(2,6),oc()),n&2){let e=NI(2),t=PI(6);hy(),Of("ngTemplateOutlet",e.headerPrefix()),hy(),Of("ngTemplateOutlet",t)("ngTemplateOutletContext",dE(3,on,e.steps));}}function Hn(n,r){if(n&1&&jf(0,6),n&2){let e=NI(2),t=PI(6);Of("ngTemplateOutlet",t)("ngTemplateOutletContext",dE(2,on,e.steps));}}function Un(n,r){if(n&1&&(Zo(0,"div",10,2),jf(2,9),oc()),n&2){let e=r.$implicit,t=r.$index,i=NI(2);GI("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),Of("id",i._getStepContentId(t)),kf("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),hy(2),Of("ngTemplateOutlet",e.content);}}function Gn(n,r){if(n&1&&(Zo(0,"div",3),lI(1,jn,3,5,"div",5)(2,Hn,1,4,"ng-container",6),Zo(3,"div",7),pI(4,Un,3,6,"div",8,fI),oc()()),n&2){let e=NI();hy(),uI(e.headerPrefix()?1:2),hy(3),hI(e.steps);}}function $n(n,r){if(n&1&&jf(0,9),n&2){let e=NI(2);Of("ngTemplateOutlet",e.headerPrefix());}}function qn(n,r){if(n&1&&(Zo(0,"div",11),jf(1,6),Zo(2,"div",12,2)(4,"div",13)(5,"div",14),jf(6,9),oc()()()()),n&2){let e=r.$implicit,t=r.$index,i=r.$index,o=r.$count,s=NI(2),p=PI(4);hy(),Of("ngTemplateOutlet",p)("ngTemplateOutletContext",dE(11,sn,e)),hy(),Qf("mat-stepper-vertical-line",i!==o-1)("mat-vertical-content-container-active",s.selectedIndex===t),kf("inert",s.selectedIndex===t?null:"")("aria-label",s.ariaLabel),hy(2),Of("id",s._getStepContentId(t)),kf("aria-labelledby",s._getStepLabelId(t)),hy(2),Of("ngTemplateOutlet",e.content);}}function Wn(n,r){if(n&1&&(Zo(0,"div",4),lI(1,$n,1,1,"ng-container",9),pI(2,qn,7,13,"div",11,fI),oc()),n&2){let e=NI();hy(),uI(e.headerPrefix()?1:-1),hy(),hI(e.steps);}}function Qn(n,r){if(n&1){let e=EI();Zo(0,"mat-step-header",15),Bf("click",function(){let i=Pl(e).step;return Ll(i.select())})("keydown",function(i){Pl(e);let o=NI();return Ll(o._onKeydown(i))}),oc();}if(n&2){let e=r.step,t=NI();Qf("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),Of("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),kf("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:true);}}function Yn(n,r){n&1&&Pf(0,"div",17);}function Zn(n,r){if(n&1&&(jf(0,6),lI(1,Yn,1,0,"div",17)),n&2){let e=r.$implicit,t=r.$index,i=r.$count;NI(2);let o=PI(4);Of("ngTemplateOutlet",o)("ngTemplateOutletContext",dE(3,sn,e)),hy(),uI(t!==i-1?1:-1);}}function Kn(n,r){if(n&1&&(Zo(0,"div",16),pI(1,Zn,2,5,null,null,fI),oc()),n&2){let e=r.steps,t=NI();kf("aria-label",t.ariaLabel),hy(),hI(e);}}var je=(()=>{class n extends Be{static \u0275fac=(()=>{let e;return function(i){return (e||(e=Rg(n)))(i||n)}})();static \u0275dir=Gv({type:n,selectors:[["","matStepLabel",""]],features:[_f]})}return n})(),Xn=(()=>{class n{changes=new ee$1;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=Jn$1({token:n,factory:n.\u0275fac})}return n})(),He=(()=>{class n extends ze{_intl=w(Xn);_focusMonitor=w(qt$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=false;active=false;optional=false;disableRipple=false;color;constructor(){super();let e=w(B$1);e.load(qe$1),e.load(Dn$1);let t=w(uP);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck());}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true);}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef);}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t);}_stringLabel(){return this.label instanceof je?null:this.label}_templateLabel(){return this.label instanceof je?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return !this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Bv({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(GI("mat-"+(i.color||"primary")),Qf("mat-step-header-empty-label",i._hasEmptyLabel()));},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[_f],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(Pf(0,"div",0),Zo(1,"div")(2,"div",1),lI(3,In,1,6,"ng-container",2)(4,Nn,2,1),oc()(),Zo(5,"div",3),lI(6,On,2,1,"div",4)(7,Rn,2,1,"div",4),lI(8,Tn,2,1,"div",5),lI(9,kn,2,1,"div",6),oc()),t&2){let o;Of("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),hy(),GI(sE("mat-step-icon-state-",i.state," mat-step-icon")),Qf("mat-step-icon-selected",i.selected),hy(2),uI(i.iconOverrides&&i.iconOverrides[i.state]?3:4),hy(2),Qf("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),hy(),uI((o=i._templateLabel())?6:i._stringLabel()?7:-1,o),hy(2),uI(i._hasOptionalLabel()?8:-1),hy(),uI(i._hasErrorLabel()?9:-1);}},dependencies:[Wo,$r,tn],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2})}return n})(),Jn=(()=>{class n{templateRef=w(zn$1);name;static \u0275fac=function(t){return new(t||n)};static \u0275dir=Gv({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),ei=(()=>{class n{_template=w(zn$1);static \u0275fac=function(t){return new(t||n)};static \u0275dir=Gv({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),Ue=(()=>{class n extends Ie{_errorStateMatcher=w(we,{skipSelf:true});_viewContainerRef=w(ai);_isSelected=W.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Mc(()=>this._stepper.selectionChange.pipe($e(e=>e.selectedStep===this),ih(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new kt(this._lazyContent._template,this._viewContainerRef));});}ngOnDestroy(){this._isSelected.unsubscribe();}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),o=!!(e&&e.invalid&&this.interacted);return i||o}static \u0275fac=(()=>{let e;return function(i){return (e||(e=Rg(n)))(i||n)}})();static \u0275cmp=Bv({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,o){if(t&1&&Uf(o,je,5)(o,ei,5),t&2){let s;kI(s=OI())&&(i.stepLabel=s.first),kI(s=OI())&&(i._lazyContent=s.first);}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[uE([{provide:we,useExisting:n},{provide:Ie,useExisting:n}]),_f],ngContentSelectors:rn,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(xI(),Nf(0,Ln,2,1,"ng-template"));},dependencies:[kr],encapsulation:2})}return n})(),Ge=(()=>{class n extends xe{_ngZone=w(Te);_renderer=w(Jy);_animationsDisabled=ku();_cleanupTransition;_isAnimating=As(false);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Lo;_icons;animationDone=new ke;disableRipple=false;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=cP(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+"ms":/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration="";}_animationDuration="";_isServer=!w(sr).isBrowser;constructor(){super();let t=w(Xn$1).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal";}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(sh(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(sh(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(true);}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend);},200);});}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=false;this._animatedContainers.changes.pipe(ih(null),sh(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=true,this.animationDone.emit()),this._stateChanged();}));}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.();}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),o=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||o)&&this._animatedContainers.find(p=>p.nativeElement===t)&&this._onAnimationDone();};_onAnimationDone(){this._isAnimating.set(false),this.animationDone.emit();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Bv({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,o){if(t&1&&Uf(o,Ue,5)(o,Jn,5),t&2){let s;kI(s=OI())&&(i._steps=s),kI(s=OI())&&(i._icons=s);}},viewQuery:function(t,i){if(t&1&&Wf(He,5)(zn,5),t&2){let o;kI(o=OI())&&(i._stepHeader=o),kI(o=OI())&&(i._animatedContainers=o);}},hostVars:14,hostBindings:function(t,i){t&2&&(zf("--mat-stepper-animation-duration",i._getAnimationDuration()),Qf("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()));},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[uE([{provide:xe,useExisting:n}]),_f],ngContentSelectors:rn,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(xI(),lI(0,Bn,1,0),lI(1,Gn,6,1,"div",3)(2,Wn,4,1,"div",4),Nf(3,Qn,1,27,"ng-template",null,0,IE)(5,Kn,3,1,"ng-template",null,1,IE)),t&2){let o;uI(i._isServer?0:-1),hy(),uI((o=i.orientation)==="horizontal"?1:o==="vertical"?2:-1);}},dependencies:[$r,He],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return n})();var an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Uv({type:n});static \u0275inj=ul({providers:[we],imports:[on$1,Qt,nn,tn$1,Ge,He,Gu]})}return n})();var Fe=class n{http=w(ir);endpoint="https://honeynutcheerios.2w7sp317.workers.dev/";createReal(r,e,t,i){let o={ipinfo:i,mydata:r};return {ipaddress:i.ip,country:i.country,currentUrl:e??"",referringUrl:t??"",data:o}}submit(r,e,t){let i=localStorage.getItem("ipInformation");if(!i)return;let o=JSON.parse(i),s=this.createReal(r,e,t,o);this.http.post(this.endpoint,s).subscribe({error:p=>console.error("Telemetry submission failed",p)});}static \u0275fac=function(e){return new(e||n)};static \u0275prov=oe({token:n,factory:n.\u0275fac,providedIn:"root"})};var he=class n{http=w(ir);baseUrl="/assets/quiz";static placeholder(){return {title:"Loading...",description:"This is the placeholder quiz",questions:[{id:1,question:"Select the smallest number from the list",options:[{label:"A",text:"1732",correct:true},{label:"B",text:"1987",correct:false},{label:"C",text:"1776",correct:false},{label:"D",text:"2020",correct:false}]}]}}getQuiz(r="us-history",e=this.baseUrl){return this.http.get(`${e}/${r}.json`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=oe({token:n,factory:n.\u0275fac,providedIn:"root"})};var ni=(n,r)=>r.id,ii=(n,r)=>r.label;function ri(n,r){if(n&1){let e=EI();Zo(0,"div",3)(1,"button",4),Bf("click",function(){let i=Pl(e).$implicit,o=NI().$implicit,s=NI();return Ll(s.onClick(o.id,i))}),rE(2),oc()();}if(n&2){let e=r.$implicit;hy(2),np(" ",e.label,". ",e.text," ");}}function oi(n,r){if(n&1&&(Zo(0,"mat-step")(1,"h2"),rE(2),oc(),pI(3,ri,3,2,"div",3,ii),oc()),n&2){let e=r.$implicit;hy(2),tp(e.question),hy(),hI(e.options);}}var ln=class n{api=w(he);telemetry=w(Fe);snackBar=w(qe);router=w(Ae$1);titleService=w(Du);title=cP();answers=As(new Map);startTime=As(new Date);quiz=ee(te(this.title).pipe($e(r=>r??"us-history"),Nc(()=>{this.answers.set(new Map),this.startTime.set(new Date);}),Mc(r=>this.api.getQuiz(r).pipe(Nc(e=>{this.titleService.setTitle(e.title),this.title()&&this.telemetry.submit(`arrived at page ${r}`,this.router.url,document.referrer??"");})))),{initialValue:he.placeholder()});scorePercentage=wE(()=>{let r=this.quiz().questions.length||1,e=0;for(let t of this.answers().values())t&&(e+=1);return e/r*100});onClick(r,e){this.answers.update(t=>{let i=new Map(t);return i.set(r,e.correct),i}),e.correct?this.openSnackBar(`Your answer is correct! ${e.more??""}`,"Dandy!"):this.openSnackBar(`You picked ${e.text}. That is not correct. ${e.more??""}`,"Try again?"),this.scorePercentage()===100&&this.openSnackBar(this.completionMessage(),"Swell!");}completionMessage(){let r=Math.ceil(Math.abs(Date.now()-this.startTime().getTime())/1e3);return r===1?`Congratulations, you've completed the test in under ${r} second.`:r<61?`Congratulations, you've completed the test in under ${r} seconds.`:r<3601?`Congratulations, you've completed the test in under ${r/60} minutes.`:`Congratulations, you've completed the test in under ${r/3600} hours.`}openSnackBar(r,e){this.snackBar.open(r,e,{duration:void 0});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=Bv({type:n,selectors:[["app-quiz"]],inputs:{title:[1,"title"]},decls:20,vars:12,consts:[["color","primary"],["routerLink","/"],["orientation","vertical"],[1,"button-container"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){e&1&&(Zo(0,"mat-toolbar",0)(1,"a",1),rE(2,"Home"),oc(),Pf(3,"app-menu"),Zo(4,"caption"),rE(5),gE(6,"date"),oc()(),Zo(7,"mat-card")(8,"article")(9,"h1"),rE(10),gE(11,"uppercase"),oc(),Zo(12,"p"),rE(13),oc(),Zo(14,"p"),rE(15),gE(16,"number"),oc(),Zo(17,"mat-stepper",2),pI(18,oi,5,1,"mat-step",null,ni),oc()()()),e&2&&(hy(5),tp(vE(6,4,t.startTime(),"mediumTime")),hy(5),tp(yE(11,7,t.quiz().title)),hy(3),tp(t.quiz().description),hy(2),lc("Your score so far: ",vE(16,9,t.scorePercentage(),"1.0-0")," out of 100."),hy(3),hI(t.quiz().questions));},dependencies:[qn$1,gr,_r,_e,le,an,Ue,Ge,Et,St,it,Wr,Yr,Hr],styles:[".button-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:20px;grid-auto-rows:minmax(100px,auto)}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:.5rem;white-space:pre-wrap}mat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:unset;padding:0 1rem}caption[_ngcontent-%COMP%]{font-size:.8rem}"]})};
export{ln as QuizComponent};