(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create-order"],{"05f1":function(e,t,n){"use strict";n("1472")},"0eaf":function(e,t,n){"use strict";n("b0c0");var r=n("7a23"),c=Object(r["T"])("data-v-2adef164");Object(r["C"])("data-v-2adef164");var a={class:"simple-header van-hairline--bottom"},o={key:1},s={class:"simple-header-name"},d=Object(r["j"])("i",{class:"nbicon nbmore"},null,-1),u=Object(r["j"])("div",{class:"block"},null,-1);Object(r["A"])();var i=c((function(e,t,n,c,i,b){return Object(r["z"])(),Object(r["f"])(r["a"],null,[Object(r["j"])("header",a,[c.isback?(Object(r["z"])(),Object(r["f"])("i",o,"      ")):(Object(r["z"])(),Object(r["f"])("i",{key:0,class:"nbicon nbfanhui",onClick:t[1]||(t[1]=function(){return c.goBack.apply(c,arguments)})})),Object(r["j"])("div",s,Object(r["L"])(n.name),1),d]),u],64)})),b=n("6c02"),l={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup:function(e,t){var n=Object(r["E"])(e.noback),c=Object(b["d"])(),a=function(){e.back?c.push({path:e.back}):c.go(-1),t.emit("callback")};return{goBack:a,isback:n}}},j=(n("122a"),n("d959")),f=n.n(j);const O=f()(l,[["render",i],["__scopeId","data-v-2adef164"]]);t["a"]=O},"122a":function(e,t,n){"use strict";n("b9cf")},1472:function(e,t,n){},"3f49":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return u}));var r=n("a27e");function c(e){return r["a"].post("/address",e)}function a(e){return r["a"].put("/address",e)}function o(e){return r["a"].delete("/address/".concat(e))}function s(){return r["a"].get("/address/default")}function d(){return r["a"].get("/address",{pageNumber:1,pageSize:1e3})}function u(e){return r["a"].get("/address/".concat(e))}},"4fa1":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["T"])("data-v-dd95502e");Object(r["C"])("data-v-dd95502e");var a={class:"create-order"},o={class:"address-wrap"},s={class:"address"},d={class:"good"},u={class:"good-img"},i={class:"good-desc"},b={class:"good-title"},l={class:"good-btn"},j={class:"price"},f={class:"pay-wrap"},O={class:"price"},p=Object(r["j"])("span",null,"商品金额",-1),m=Object(r["i"])("生成订单"),v={style:{width:"90%",margin:"0 auto",padding:"50px 0"}},g=Object(r["i"])("支付宝支付"),h=Object(r["i"])("微信支付");Object(r["A"])();var k=c((function(e,t,n,k,y,I){var w=Object(r["H"])("s-header"),C=Object(r["H"])("van-icon"),L=Object(r["H"])("van-button"),x=Object(r["H"])("van-popup");return Object(r["z"])(),Object(r["f"])("div",a,[Object(r["j"])(w,{name:"生成订单",onCallback:k.deleteLocal},null,8,["onCallback"]),Object(r["j"])("div",o,[Object(r["j"])("div",{class:"name",onClick:t[1]||(t[1]=function(){return k.goTo.apply(k,arguments)})},[Object(r["j"])("span",null,Object(r["L"])(e.address.userName),1),Object(r["j"])("span",null,Object(r["L"])(e.address.userPhone),1)]),Object(r["j"])("div",s,Object(r["L"])(e.address.provinceName)+" "+Object(r["L"])(e.address.cityName)+" "+Object(r["L"])(e.address.regionName)+" "+Object(r["L"])(e.address.detailAddress),1),Object(r["j"])(C,{class:"arrow",name:"arrow"})]),Object(r["j"])("div",d,[(Object(r["z"])(!0),Object(r["f"])(r["a"],null,Object(r["F"])(e.cartList,(function(t,n){return Object(r["z"])(),Object(r["f"])("div",{class:"good-item",key:n},[Object(r["j"])("div",u,[Object(r["j"])("img",{src:e.$filters.prefix(t.goodsCoverImg),alt:""},null,8,["src"])]),Object(r["j"])("div",i,[Object(r["j"])("div",b,[Object(r["j"])("span",null,Object(r["L"])(t.goodsName),1),Object(r["j"])("span",null,"x"+Object(r["L"])(t.goodsCount),1)]),Object(r["j"])("div",l,[Object(r["j"])("div",j,"¥"+Object(r["L"])(t.sellingPrice),1)])])])})),128))]),Object(r["j"])("div",f,[Object(r["j"])("div",O,[p,Object(r["j"])("span",null,"¥"+Object(r["L"])(k.total),1)]),Object(r["j"])(L,{onClick:k.handleCreateOrder,class:"pay-btn",color:"#1baeae",type:"primary",block:""},{default:c((function(){return[m]})),_:1},8,["onClick"])]),Object(r["j"])(x,{closeable:"","close-on-click-overlay":!1,show:e.showPay,"onUpdate:show":t[4]||(t[4]=function(t){return e.showPay=t}),position:"bottom",style:{height:"30%"},onClose:k.close},{default:c((function(){return[Object(r["j"])("div",v,[Object(r["j"])(L,{style:{marginBottom:"10px"},color:"#1989fa",block:"",onClick:t[2]||(t[2]=function(e){return k.handlePayOrder(1)})},{default:c((function(){return[g]})),_:1}),Object(r["j"])(L,{color:"#4fc08d",block:"",onClick:t[3]||(t[3]=function(e){return k.handlePayOrder(2)})},{default:c((function(){return[h]})),_:1})])]})),_:1},8,["show","onClose"])])})),y=(n("4160"),n("a15b"),n("d81d"),n("159b"),n("5530")),I=(n("e7e5"),n("d399")),w=(n("96cf"),n("1da1")),C=n("0eaf"),L=n("8ee6"),x=n("3f49"),N=n("99c5"),P=n("495f"),S=n("6c02"),_={components:{sHeader:C["a"]},setup:function(){var e=Object(S["d"])(),t=Object(S["c"])(),n=Object(r["D"])({cartList:[],address:{},showPay:!1,orderNo:"",cartItemIds:[]});Object(r["w"])((function(){c()}));var c=function(){var r=Object(w["a"])(regeneratorRuntime.mark((function r(){var c,a,o,s,d,u,i,b;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return I["a"].loading({message:"加载中...",forbidClick:!0}),c=t.query,a=c.addressId,o=c.cartItemIds,s=o?JSON.parse(o):JSON.parse(Object(P["a"])("cartItemIds")),console.log("cartItemIds",o),Object(P["c"])("cartItemIds",JSON.stringify(s)),r.next=7,Object(L["c"])({cartItemIds:s.join(",")});case 7:if(d=r.sent,u=d.data,!a){r.next=15;break}return r.next=12,Object(x["d"])(a);case 12:r.t0=r.sent,r.next=18;break;case 15:return r.next=17,Object(x["f"])();case 17:r.t0=r.sent;case 18:if(i=r.t0,b=i.data,b){r.next=23;break}return e.push({path:"/address"}),r.abrupt("return");case 23:n.cartList=u,n.address=b,I["a"].clear();case 26:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),a=function(){e.push({path:"/address",query:{cartItemIds:JSON.stringify(n.cartItemIds),from:"create-order"}})},o=function(){Object(P["c"])("cartItemIds","")},s=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={addressId:n.address.addressId,cartItemIds:n.cartList.map((function(e){return e.cartItemId}))},e.next=3,Object(N["c"])(t);case 3:r=e.sent,c=r.data,Object(P["c"])("cartItemIds",""),n.orderNo=c,n.showPay=!0;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){e.push({path:"/order"})},u=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(N["f"])({orderNo:n.orderNo,payType:r});case 2:I["a"].success("支付成功"),setTimeout((function(){e.push({path:"/order"})}),2e3);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=Object(r["d"])((function(){var e=0;return n.cartList.forEach((function(t){e+=t.goodsCount*t.sellingPrice})),e}));return Object(y["a"])(Object(y["a"])({},Object(r["M"])(n)),{},{goTo:a,deleteLocal:o,handleCreateOrder:s,close:d,handlePayOrder:u,total:i})}},z=(n("05f1"),n("d959")),J=n.n(z);const R=J()(_,[["render",k],["__scopeId","data-v-dd95502e"]]);t["default"]=R},"99c5":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return u}));var r=n("a27e");function c(e){return r["a"].post("/saveOrder",e)}function a(e){return r["a"].get("/order",{params:e})}function o(e){return r["a"].get("/order/".concat(e))}function s(e){return r["a"].put("/order/".concat(e,"/cancel"))}function d(e){return r["a"].put("/order/".concat(e,"/finish"))}function u(e){return r["a"].get("/paySuccess",{params:e})}},a15b:function(e,t,n){"use strict";var r=n("23e7"),c=n("44ad"),a=n("fc6a"),o=n("a640"),s=[].join,d=c!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:d||!u},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},b9cf:function(e,t,n){},d81d:function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").map,a=n("1dde"),o=n("ae40"),s=a("map"),d=o("map");r({target:"Array",proto:!0,forced:!s||!d},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=create-order.bc337e7a.js.map