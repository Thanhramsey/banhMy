(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e1ccae"],{"132d":function(t,e,i){"use strict";i("4804");var s,n=i("7e2b"),r=i("a9ad"),a=i("af2b"),o=i("7560"),c=i("80d2"),l=i("2b0e"),h=i("58df");function u(t){return["fas","far","fal","fab","fad"].some(e=>t.includes(e))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));const p=Object(h["a"])(n["a"],r["a"],a["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["r"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["o"])(t).find(e=>t[e]);return e&&s[e]||Object(c["f"])(this.size)},getDefaultData(){const t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$};return t},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const i=[],s=this.getDefaultData();let n="material-icons";const r=t.indexOf("-"),a=r<=-1;a?i.push(t):(n=t.slice(0,r),u(n)&&(n="")),s.class[n]=!0,s.class[t]=!a;const o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon(t,e){const i=this.getSize(),s={...this.getDefaultData(),style:i?{fontSize:i,height:i,width:i}:void 0};s.class["v-icon--svg"]=!0,this.applyColors(s);const n={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",s,[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const i=this.getDefaultData();i.class["v-icon--is-component"]=!0;const s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);const n=t.component;return i.props=t.props,i.nativeOn=i.on,e(n,i)}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:i}){let s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,s?[s]:i)}})},"159b":function(t,e,i){var s=i("da84"),n=i("fdbc"),r=i("17c2"),a=i("9112");for(var o in n){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{a(l,"forEach",r)}catch(h){l.forEach=r}}},"17c2":function(t,e,i){"use strict";var s=i("b727").forEach,n=i("a640"),r=i("ae40"),a=n("forEach"),o=r("forEach");t.exports=a&&o?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},3855:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-0"},[i("base-subheading",[t._v("Tags")]),t._l(t.categories,(function(e,s){return i("v-chip",{key:s,staticClass:"mr-2",attrs:{color:"secondary",label:"",small:"",tag:"","text-color":"white"}},[t._v(" "+t._s(e.text)+" ")])}))],2)},n=[],r=i("5530"),a=i("2f62"),o={name:"Tags",computed:Object(r["a"])({},Object(a["b"])(["categories"]))},c=o,l=i("2877"),h=i("6544"),u=i.n(h),d=i("cc20"),p=i("a523"),f=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=f.exports;u()(f,{VChip:d["a"],VContainer:p["a"]})},4160:function(t,e,i){"use strict";var s=i("23e7"),n=i("17c2");s({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},4804:function(t,e,i){},"4de4":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").filter,r=i("1dde"),a=i("ae40"),o=r("filter"),c=a("filter");s({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"8adc":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,i){var s=i("23e7"),n=i("7b0b"),r=i("df75"),a=i("d039"),o=a((function(){r(1)}));s({target:"Object",stat:!0,forced:o},{keys:function(t){return r(n(t))}})},cc20:function(t,e,i){"use strict";i("8adc");var s=i("58df"),n=i("0789"),r=i("9d26"),a=i("a9ad"),o=i("4e82"),c=i("7560"),l=i("f2e7"),h=i("1c87"),u=i("af2b"),d=i("d9bd");e["a"]=Object(s["a"])(a["a"],u["a"],h["a"],c["a"],Object(o["a"])("chipGroup"),Object(l["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],t)},genClose(){return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const n=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(n,s),e)}})},dbb4:function(t,e,i){var s=i("23e7"),n=i("83ab"),r=i("56ef"),a=i("fc6a"),o=i("06cf"),c=i("8418");s({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,i,s=a(t),n=o.f,l=r(s),h={},u=0;while(l.length>u)i=n(s,e=l[u++]),void 0!==i&&c(h,e,i);return h}})},e439:function(t,e,i){var s=i("23e7"),n=i("d039"),r=i("fc6a"),a=i("06cf").f,o=i("83ab"),c=n((function(){a(1)})),l=!o||c;s({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(r(t),e)}})}}]);
//# sourceMappingURL=chunk-08e1ccae.bf5415e3.js.map