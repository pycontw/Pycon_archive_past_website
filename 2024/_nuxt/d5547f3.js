(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{526:function(t,o,e){var r=e(51),n=e(26),l=/"/g;t.exports=function(t,o,e,d){var c=n(r(t)),m="<"+o;return""!==e&&(m+=" "+e+'="'+n(d).replace(l,"&quot;")+'"'),m+">"+c+"</"+o+">"}},527:function(t,o,e){var r=e(9);t.exports=function(t){return r((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},528:function(t,o,e){"use strict";var r=e(7),n=e(526);r({target:"String",proto:!0,forced:e(527)("small")},{small:function(){return n(this,"small","","")}})},564:function(t,o,e){var content=e(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("4e50b5ab",content,!0,{sourceMap:!1})},598:function(t,o,e){t.exports=e.p+"img/sponsor-logo-diamond.7a9f1e2.svg"},599:function(t,o,e){"use strict";e(564)},600:function(t,o,e){var r=e(19)((function(i){return i[1]}));r.push([t.i,".sponsorCard[data-v-2c80be7d]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;background-color:#f7f6fe}.sponsorCard>.dummy[data-v-2c80be7d]{margin-top:100%}.sponsorCard>img[data-v-2c80be7d]{position:absolute;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px)}.sponsorCard.-small[data-v-2c80be7d]{height:4rem;width:4rem}@media (min-width: 768px){.sponsorCard.-small[data-v-2c80be7d]{height:6rem}.sponsorCard.-small[data-v-2c80be7d]{width:6rem}}.sponsorCard__tag[data-v-2c80be7d]{position:absolute;display:flex;height:1.25rem;width:100%;align-items:center;justify-content:center;font-size:12px;font-weight:600;bottom:13px;background-color:#bd7fa7;color:#fff}@media (max-width:768px){.sponsorCard__tag[data-v-2c80be7d]{display:none!important}}img.diamond[data-v-2c80be7d]{margin-right:0.25rem}",""]),r.locals={},t.exports=r},641:function(t,o,e){"use strict";e.r(o);e(528);var r={name:"SponsorCard",props:{sponsorName:{type:String,default:""},logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},n=(e(599),e(8)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[r("div",{staticClass:"dummy"}),t._v(" "),r("img",{attrs:{src:t.logoUrl,alt:t.sponsorName}}),t._v(" "),t.tag?r("div",{staticClass:"sponsorCard__tag"},[r("img",{staticClass:"diamond",attrs:{src:e(598),alt:"sponsor-logo-diamond"}}),t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"2c80be7d",null);o.default=component.exports}}]);