(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe6bcee"],{"0c55":function(e,t,i){e.exports=i.p+"img/bac_xiu.db97ab96.jpg"},"163c":function(e,t,i){},"36a7":function(e,t,i){},4641:function(e,t,i){e.exports=i.p+"img/cafe_den.c1367042.jpg"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(e){return function(t){var i=String(s(t));return 1&e&&(i=i.replace(r,"")),2&e&&(i=i.replace(o,"")),i}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5bed":function(e,t,i){e.exports=i.p+"img/banh_mi_bo.2f99a577.jpg"},"5e5a":function(e,t,i){e.exports=i.p+"img/banner_bakery.4999ceb8.jpg"},6045:function(e,t,i){e.exports=i.p+"img/bmy_tc.5f7414a4.jpg"},"69e4":function(e,t,i){e.exports=i.p+"img/nc_dua.a2fef626.jpg"},"6b53":function(e,t,i){"use strict";i("36a7");var s=i("24b2"),a=i("58df");t["a"]=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},7156:function(e,t,i){var s=i("861d"),a=i("d2bb");e.exports=function(e,t,i){var n,r;return a&&"function"==typeof(n=t.constructor)&&n!==i&&s(r=n.prototype)&&r!==i.prototype&&a(e,r),e}},"78d7":function(e,t,i){"use strict";var s=i("6b53");t["a"]=s["a"]},"7de9":function(e,t,i){e.exports=i.p+"img/banh_chao.ffed7807.jpg"},"828e":function(e,t,i){e.exports=i.p+"img/VT_Garden.1bada062.png"},"86b8":function(e,t,i){e.exports=i.p+"img/menu.19c05b42.png"},"8adc":function(e,t,i){},"8efc":function(e,t,i){},"90a2":function(e,t,i){"use strict";function s(e,t){const i=t.modifiers||{},s=t.value,{handler:n,options:r}="object"===typeof s?s:{handler:s,options:{}},o=new IntersectionObserver((t=[],s)=>{if(e._observe){if(n&&(!i.quiet||e._observe.init)){const e=Boolean(t.find(e=>e.isIntersecting));n(t,s,e)}e._observe.init&&i.once?a(e):e._observe.init=!0}},r);e._observe={init:!1,observer:o},o.observe(e)}function a(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}const n={inserted:s,unbind:a};t["a"]=n},"9d26":function(e,t,i){"use strict";var s=i("132d");t["a"]=s["a"]},"9f0b":function(e,t,i){e.exports=i.p+"img/nc_cam.baaeb6a6.jpg"},a0e7:function(e,t,i){e.exports=i.p+"img/carousel(3).b3ef95dc.jpg"},a9e3:function(e,t,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),r=i("6eeb"),o=i("5135"),c=i("c6b6"),l=i("7156"),h=i("c04e"),p=i("d039"),d=i("7c73"),u=i("241c").f,g=i("06cf").f,f=i("9bf2").f,b=i("58a8").trim,m="Number",v=a[m],_=v.prototype,y=c(d(_))==m,S=function(e){var t,i,s,a,n,r,o,c,l=h(e,!1);if("string"==typeof l&&l.length>2)if(l=b(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),r=n.length,o=0;o<r;o++)if(c=n.charCodeAt(o),c<48||c>a)return NaN;return parseInt(n,s)}return+l};if(n(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var j,x=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof x&&(y?p((function(){_.valueOf.call(i)})):c(i)!=m)?l(new v(S(t)),i,x):S(t)},C=s?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)o(v,j=C[k])&&!o(x,j)&&f(x,j,g(v,j));x.prototype=_,_.constructor=x,r(a,m,x)}},adda:function(e,t,i){"use strict";i("8efc");var s=i("90a2"),a=i("78d7"),n=i("d9bd");const r="undefined"!==typeof window&&"IntersectionObserver"in window;t["a"]=a["a"].extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];const e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push(`linear-gradient(${this.gradient})`),t&&e.push(`url("${t}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(e,t,i){if(!r||i||this.eager){if(this.normalisedSrc.lazySrc){const e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError(){Object(n["b"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const e=new Image;this.image=e,e.onload=()=>{e.decode?e.decode().catch(e=>{Object(n["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),this)}).then(this.onLoad):this.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize(e,t=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=e;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):null!=t&&setTimeout(i,t)};i()},genContent(){const e=a["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:this.naturalWidth+"px"}}),e},__genPlaceholder(){if(this.$slots.placeholder){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(e){const t=a["a"].options.render.call(this,e);return t.data.staticClass+=" v-image",r&&(t.data.directives=[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]),t.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,t.data,t.children)}})},aee7:function(e,t,i){e.exports=i.p+"img/carousel(2).231490c5.jpg"},aefc:function(e,t,i){"use strict";var s=i("163c"),a=i.n(s);a.a},b262:function(e,t,i){e.exports=i.p+"img/138dbebbec7a4f5ef6052c17a3092ebe.f03eb2e6.jpg"},b7e9:function(e,t,i){e.exports=i.p+"img/carousel(1).c67e73a1.jpg"},cc20:function(e,t,i){"use strict";i("8adc");var s=i("58df"),a=i("0789"),n=i("9d26"),r=i("a9ad"),o=i("4e82"),c=i("7560"),l=i("f2e7"),h=i("1c87"),p=i("af2b"),d=i("d9bd");t["a"]=Object(s["a"])(r["a"],p["a"],h["a"],c["a"],Object(o["a"])("chipGroup"),Object(l["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(d["a"])(e,t,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],e)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return e(i,this.setTextColor(a,s),t)}})},d138:function(e,t,i){var s={"./bac_xiu.jpg":"0c55","./bakery/101-background-hinh-anh-banh-mi-full-hd-15-800x450-1-800x450.jpg":"f7ba","./bakery/138dbebbec7a4f5ef6052c17a3092ebe.jpg":"b262","./bakery/VT_Garden.png":"828e","./bakery/banner.jpg":"f995","./bakery/banner_bakery.jpg":"5e5a","./bakery/carousel(1).jpg":"b7e9","./bakery/carousel(2).jpg":"aee7","./bakery/carousel(3).jpg":"a0e7","./bakery/images.jpg":"e939","./banh_chao.jpg":"7de9","./banh_ga.jpg":"eb3e","./banh_heo.jpg":"efd5","./banh_mi_bo.jpg":"5bed","./banh_y.jpg":"f9ab","./bmy_tc.jpg":"6045","./cafe_den.jpg":"4641","./cafe_sua.jpg":"f3a3","./menu.png":"86b8","./nc_cam.jpg":"9f0b","./nc_dua.jpg":"69e4","./nc_suoi.jpg":"d3fe","./pepsi.png":"f9b5"};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="d138"},d3fe:function(e,t,i){e.exports=i.p+"img/nc_suoi.8af444bc.jpg"},e939:function(e,t,i){e.exports=i.p+"img/images.19f0b6b1.jpg"},eb3a:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-col",{attrs:{cols:"12",md:2===e.size?6:3===e.size?4:void 0,sm:2===e.size?6:3===e.size?4:void 0}},[s("base-card",{attrs:{height:e.value.prominent?550:350,color:"grey lighten-1",dark:"",href:"#!"}},[s("v-img",{attrs:{src:i("d138")("./"+e.value.hero),height:"100%",gradient:"rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"}},[s("v-row",{staticClass:"fill-height text-right ma-0"},[s("v-col",{attrs:{cols:"12"}},[s("v-chip",{staticClass:"mx-0 mb-2 text-uppercase",attrs:{label:"",color:"grey darken-3","text-color":"white",small:""},on:{click:function(e){e.stopPropagation()}}},[e._v(" "+e._s(e.value.category)+" ")]),s("h3",{staticClass:"title font-weight-bold mb-2"},[e._v(" "+e._s(e.value.title)+" ")]),s("div",{staticClass:"caption"},[e._v(" "+e._s(e.value.author)),s("br")])],1),s("v-col",{attrs:{"align-self":"end"}},[s("v-chip",{staticClass:"text-uppercase ma-0",attrs:{color:"primary",label:"",small:""},on:{click:function(e){e.stopPropagation()}}},[e._v(" "+e._s(e.value.gia)+" ")])],1)],1)],1)],1)],1)},a=[],n=(i("a9e3"),{name:"FeedCard",props:{size:{type:Number,required:!0},value:{type:Object,default:function(){return{}}}}}),r=n,o=(i("aefc"),i("2877")),c=i("6544"),l=i.n(c),h=i("cc20"),p=i("62ad"),d=i("adda"),u=i("0fd9"),g=Object(o["a"])(r,s,a,!1,null,null,null);t["default"]=g.exports;l()(g,{VChip:h["a"],VCol:p["a"],VImg:d["a"],VRow:u["a"]})},eb3e:function(e,t,i){e.exports=i.p+"img/banh_ga.25403d33.jpg"},efd5:function(e,t,i){e.exports=i.p+"img/banh_heo.16da71b7.jpg"},f3a3:function(e,t,i){e.exports=i.p+"img/cafe_sua.2a934910.jpg"},f7ba:function(e,t,i){e.exports=i.p+"img/101-background-hinh-anh-banh-mi-full-hd-15-800x450-1-800x450.c4351640.jpg"},f995:function(e,t,i){e.exports=i.p+"img/banner.16e3b41b.jpg"},f9ab:function(e,t,i){e.exports=i.p+"img/banh_y.a336102a.jpg"},f9b5:function(e,t,i){e.exports=i.p+"img/pepsi.7d9a091c.png"}}]);
//# sourceMappingURL=chunk-6fe6bcee.f775de04.js.map