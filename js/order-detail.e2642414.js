(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-detail"],{"0eaf":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),a=Object(c["T"])("data-v-2adef164");Object(c["C"])("data-v-2adef164");var r={class:"simple-header van-hairline--bottom"},o={key:1},i={class:"simple-header-name"},u=Object(c["j"])("i",{class:"nbicon nbmore"},null,-1),l=Object(c["j"])("div",{class:"block"},null,-1);Object(c["A"])();var b=a((function(e,t,n,a,b,d){return Object(c["z"])(),Object(c["f"])(c["a"],null,[Object(c["j"])("header",r,[a.isback?(Object(c["z"])(),Object(c["f"])("i",o,"      ")):(Object(c["z"])(),Object(c["f"])("i",{key:0,class:"nbicon nbfanhui",onClick:t[1]||(t[1]=function(){return a.goBack.apply(a,arguments)})})),Object(c["j"])("div",i,Object(c["L"])(n.name),1),u]),l],64)})),d=n("6c02"),s={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup:function(e,t){var n=Object(c["E"])(e.noback),a=Object(d["d"])(),r=function(){e.back?a.push({path:e.back}):a.go(-1),t.emit("callback")};return{goBack:r,isback:n}}},j=(n("122a"),n("d959")),f=n.n(j);const O=f()(s,[["render",b],["__scopeId","data-v-2adef164"]]);t["a"]=O},"122a":function(e,t,n){"use strict";n("b9cf")},"71cb":function(e,t,n){"use strict";n("a788")},"99c5":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return l}));var c=n("a27e");function a(e){return c["a"].post("/saveOrder",e)}function r(e){return c["a"].get("/order",{params:e})}function o(e){return c["a"].get("/order/".concat(e))}function i(e){return c["a"].put("/order/".concat(e,"/cancel"))}function u(e){return c["a"].put("/order/".concat(e,"/finish"))}function l(e){return c["a"].get("/paySuccess",{params:e})}},a788:function(e,t,n){},b9cf:function(e,t,n){},d3bb:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["T"])("data-v-4a79ced6");Object(c["C"])("data-v-4a79ced6");var r={class:"order-detail-box"},o={class:"order-status"},i={class:"status-item"},u=Object(c["j"])("label",null,"订单状态：",-1),l={class:"status-item"},b=Object(c["j"])("label",null,"订单编号：",-1),d={class:"status-item"},s=Object(c["j"])("label",null,"下单时间：",-1),j=Object(c["i"])("确认收货"),f=Object(c["i"])("去支付"),O=Object(c["i"])("取消订单"),p={class:"order-price"},m={class:"price-item"},h=Object(c["j"])("label",null,"商品金额：",-1),v=Object(c["j"])("div",{class:"price-item"},[Object(c["j"])("label",null,"配送方式："),Object(c["j"])("span",null,"普通快递")],-1),k={style:{width:"90%",margin:"0 auto",padding:"20px 0"}},g=Object(c["i"])("支付宝支付"),y=Object(c["i"])("微信支付");Object(c["A"])();var w=a((function(e,t,n,w,C,P){var x=Object(c["H"])("s-header"),S=Object(c["H"])("van-button"),_=Object(c["H"])("van-card"),z=Object(c["H"])("van-popup");return Object(c["z"])(),Object(c["f"])("div",r,[Object(c["j"])(x,{name:"订单详情",onCallback:w.close},null,8,["onCallback"]),Object(c["j"])("div",o,[Object(c["j"])("div",i,[u,Object(c["j"])("span",null,Object(c["L"])(e.detail.orderStatusString),1)]),Object(c["j"])("div",l,[b,Object(c["j"])("span",null,Object(c["L"])(e.detail.orderNo),1)]),Object(c["j"])("div",d,[s,Object(c["j"])("span",null,Object(c["L"])(e.detail.createTime),1)]),3==e.detail.orderStatus?(Object(c["z"])(),Object(c["f"])(S,{key:0,style:{"margin-bottom":"10px"},color:"#1baeae",block:"",onClick:t[1]||(t[1]=function(t){return w.handleConfirmOrder(e.detail.orderNo)})},{default:a((function(){return[j]})),_:1})):Object(c["g"])("",!0),0==e.detail.orderStatus?(Object(c["z"])(),Object(c["f"])(S,{key:1,style:{"margin-bottom":"10px"},color:"#1baeae",block:"",onClick:w.showPayFn},{default:a((function(){return[f]})),_:1},8,["onClick"])):Object(c["g"])("",!0),e.detail.orderStatus<0||4==e.detail.orderStatus?Object(c["g"])("",!0):(Object(c["z"])(),Object(c["f"])(S,{key:2,block:"",onClick:t[2]||(t[2]=function(t){return w.handleCancelOrder(e.detail.orderNo)})},{default:a((function(){return[O]})),_:1}))]),Object(c["j"])("div",p,[Object(c["j"])("div",m,[h,Object(c["j"])("span",null,"¥ "+Object(c["L"])(e.detail.totalPrice),1)]),v]),(Object(c["z"])(!0),Object(c["f"])(c["a"],null,Object(c["F"])(e.detail.newBeeMallOrderItemVOS,(function(t){return Object(c["z"])(),Object(c["f"])(_,{key:t.goodsId,style:{background:"#fff"},num:t.goodsCount,price:t.sellingPrice,desc:"全场包邮",title:t.goodsName,thumb:e.$filters.prefix(t.goodsCoverImg)},null,8,["num","price","title","thumb"])})),128)),Object(c["j"])(z,{show:e.showPay,"onUpdate:show":t[5]||(t[5]=function(t){return e.showPay=t}),position:"bottom",style:{height:"24%"}},{default:a((function(){return[Object(c["j"])("div",k,[Object(c["j"])(S,{style:{marginBottom:"10px"},color:"#1989fa",block:"",onClick:t[3]||(t[3]=function(t){return w.handlePayOrder(e.detail.orderNo,1)})},{default:a((function(){return[g]})),_:1}),Object(c["j"])(S,{color:"#4fc08d",block:"",onClick:t[4]||(t[4]=function(t){return w.handlePayOrder(e.detail.orderNo,2)})},{default:a((function(){return[y]})),_:1})])]})),_:1},8,["show"])])})),C=n("5530"),P=(n("e17f"),n("2241")),x=(n("e7e5"),n("d399")),S=(n("96cf"),n("1da1")),_=n("0eaf"),z=n("99c5"),N=n("6c02"),B={name:"OrderDetail",components:{sHeader:_["a"]},setup:function(){var e=Object(N["c"])(),t=Object(c["D"])({detail:{},showPay:!1});Object(c["w"])((function(){n()}));var n=function(){var n=Object(S["a"])(regeneratorRuntime.mark((function n(){var c,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return x["a"].loading({message:"加载中...",forbidClick:!0}),c=e.query.id,n.next=4,Object(z["d"])(c);case 4:a=n.sent,r=a.data,t.detail=r,x["a"].clear();case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(e){P["a"].confirm({title:"确认取消订单？"}).then((function(){Object(z["a"])(e).then((function(e){200==e.resultCode&&(Object(x["a"])("删除成功"),n())}))})).catch((function(){}))},r=function(e){P["a"].confirm({title:"是否确认订单？"}).then((function(){Object(z["b"])(e).then((function(e){200==e.resultCode&&(Object(x["a"])("确认成功"),n())}))})).catch((function(){}))},o=function(){t.showPay=!0},i=function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(c,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return x["a"].loading,e.next=3,Object(z["f"])({orderNo:c,payType:a});case 3:t.showPay=!1,n();case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){P["a"].close()};return Object(C["a"])(Object(C["a"])({},Object(c["M"])(t)),{},{handleCancelOrder:a,handleConfirmOrder:r,showPayFn:o,handlePayOrder:i,close:u})}},H=(n("71cb"),n("d959")),I=n.n(H);const L=I()(B,[["render",w],["__scopeId","data-v-4a79ced6"]]);t["default"]=L}}]);
//# sourceMappingURL=order-detail.e2642414.js.map