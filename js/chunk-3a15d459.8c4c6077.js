(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a15d459"],{"0b7a":function(t,e,n){"use strict";var s=n("44ae"),a=n.n(s);a.a},"3b08":function(t,e,n){},"44ae":function(t,e,n){},"539d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-text"},[n("p",[t._v("\n    "+t._s(t.question)+"\n    "),n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.linkText))])])])},a=[],i={props:{link:{type:String,default:""},linkText:{type:String,default:""},question:{type:String,default:""}},data:function(){return{}}},o=i,c=(n("cf2f"),n("2877")),r=Object(c["a"])(o,s,a,!1,null,"dd4083a8",null);r.options.__file="InterfaceBottomText.vue";var l=r.exports;n.d(e,"a",function(){return l})},"5db1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"generate-info"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"send-form"},[n("div",{staticClass:"form-block amount-to-address"},[n("ul",{staticClass:"type-amount"},[n("li",{staticClass:"type"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.sendTxType")))])]),n("currency-picker",{attrs:{currency:t.tokens,token:!0,page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),n("li",{staticClass:"amount"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))])]),n("div",{staticClass:"the-form amount-number"},[n("input",{attrs:{placeholder:t.$t("interface.depAmount"),type:"string",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),n("div",{staticClass:"to-address"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.sendTxToAddr"))+"  ")]),n("blockie",{directives:[{name:"show",rawName:"v-show",value:""!==t.address&&t.validAddress,expression:"address !== '' && validAddress"}],staticClass:"blockie-image-icon",attrs:{address:t.address,width:"32px",height:"32px"}}),n("button",{staticClass:"title-button copy-button prevent-user-select",on:{click:t.copyToAddress}},[t._v("\n              "+t._s(t.$t("common.copy"))+"\n            ")])],1),n("div",{staticClass:"the-form address-block"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"toaddress",attrs:{name:"name",placeholder:"Please Enter The Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),n("i",{class:[t.validAddress?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[t._v(t._s(t.$t("common.data")))])])])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:"ETH"!==t.selectedCoinType.symbol,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),n("div",{staticClass:"good-button-container"},[n("i",{class:[""!==t.toData?"good-button":"not-good","fa fa-check-circle"],attrs:{"aria-hidden":"true"}})])])]),n("tx-speed-input",{staticClass:"tx-speed-input",attrs:{nonce:t.nonce,data:t.toData,value:t.toAmt,"to-address":t.address,"gas-limit":t.gasLimit,"highest-gas":t.highestGas},on:{nonceUpdate:t.nonceUpdated,gasLimitUpdate:t.gasLimitUpdated}}),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[t._v(t._s(t.$t("common.gasLimit")))]),n("popover",{attrs:{popcontent:t.$t("popover.gasLimit")}})],1)])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localGas,expression:"localGas"}],attrs:{placeholder:t.$t("common.gasLimit"),type:"number"},domProps:{value:t.localGas},on:{input:function(e){e.target.composing||(t.localGas=e.target.value)}}}),t._m(0)])]),n("div",{staticClass:"submit-button-container"},[n("div",{class:[t.toData.length>=2&&t.address.length>0&&t.validAddress&&t.toAmt>=0?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v("\n        "+t._s(t.$t("interface.generateTx"))+"\n      ")]),n("interface-bottom-text",{attrs:{link:"https://kb.myetherwallet.com",question:"Have issues?","link-text":"Help Center"}})],1)],1),n("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw,"path-update":t.pathUpdate}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-button-container"},[n("i",{staticClass:"fa fa-check-circle good-button not-good",attrs:{"aria-hidden":"true"}})])}],i=n("f499"),o=n.n(i),c=(n("96cf"),n("3b8d")),r=(n("7f7f"),n("cebc")),l=(n("c5f6"),n("539d")),d=n("f83b"),u=n("d7a2"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("interface.signedTx"),"hide-footer":""}},[n("div",{staticClass:"d-block"},[n("div",{staticClass:"title-block"},[n("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.signedTx")))])]),n("div",{staticClass:"signed-tx-container"},[n("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),n("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:t.signedTx}})]),n("div",{staticClass:"scan-download-container"},[n("h4",{staticClass:"block-title"},[t._v("Scan QR code")]),""!==t.signedTx?n("div",{staticClass:"scan-download-items"},[n("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200}}}),t._v("or "),n("a",{attrs:{href:t.jsonFile,download:t.jsonFileName}},[t._v("Download JSON")])],1):t._e()]),n("div",{staticClass:"raw"},[n("div",{staticClass:"title-block"},[n("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.raw")))]),n("div",{staticClass:"sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),n("span",{staticClass:"slider round"})])])]),t.showRaw?n("div",{staticClass:"raw-tx-container"},[n("code",[t._v(t._s(t.rawTx))])]):t._e()])]),n("div",{staticClass:"button-container"},[n("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("interface.copyAndCont")))])],1)])},h=[],m=n("7618"),f={name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e="object"===Object(m["a"])(t)?o()(t):t,n=new Blob([e],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(n)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.pathUpdate()}}},v=f,g=(n("f762"),n("2877")),b=Object(g["a"])(v,p,h,!1,null,null,null);b.options.__file="SignedTxModal.vue";var w=b.exports,y=n("c8e5"),C=n("901e"),k=n.n(C),_=n("70c1"),x=n("2f62"),T=n("b7d3"),$=n("ce96"),N=n("1131"),A=n.n(N),S={components:{"interface-bottom-text":l["a"],"tx-speed-input":d["a"],blockie:y["a"],"signed-tx-modal":w,"currency-picker":u["a"]},props:{gasLimit:{type:Number,default:0},nonce:{type:Number,default:0},tokens:{type:Array,default:function(){return[]}},highestGas:{type:Number,default:0}},data:function(){return{toAmt:"0",address:"",toData:"0x",localGas:this.gasLimit,selectedCoinType:{},raw:{},signed:"{}",locNonce:this.nonce}},computed:Object(r["a"])({},Object(x["b"])({wallet:"wallet",network:"network",web3:"web3",gasPrice:"gasPrice"}),{validAddress:function(){return Object(T["a"])(this.address)}}),watch:{toData:function(t){$["d"].validateHexString(t)?this.toData=t:this.toData="0x"},gasLimit:function(t){this.localGas=t},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)}},methods:{debouncedAmount:A.a._.debounce(function(t){var e=this.selectedCoinType.symbol===this.network.type.name?18:this.selectedCoinType.decimals;this.toAmt=new k.a(t.target.value).decimalPlaces(e).toFixed(),t.target.value=this.toAmt},300),createDataHex:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n,s){var a,i,o,c,r,l,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=null!==e?e:this.toAmt,i=null!==n?n:this.address,o=null!==s?s:this.selectedCoinType,c=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],o.symbol===this.network.type.name||""===i){t.next=11;break}return r=""===a||null===a?"0":a,l=new this.web3.eth.Contract(c,o.address),d=new k.a(r).exponentiatedBy(o.decimals),t.next=10,l.methods.transfer(i,d.toFixed()).encodeABI();case 10:this.toData=t.sent;case 11:case"end":return t.stop()}},t,this)}));function e(e,n,s){return t.apply(this,arguments)}return e}(),copyToAddress:function(){var t=this.$refs.toaddress;t.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},generateTx:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={from:this.wallet.getAddressString(),gas:this.localGas,value:this.selectedCoinType.symbol!==this.network.type.name?0:_["toWei"](this.toAmt,"ether"),data:this.toData,nonce:this.locNonce,gasPrice:_["toWei"](this.gasPrice,"gwei"),to:this.selectedCoinType.symbol!==this.network.type.name?this.selectedCoinType.address:this.address,chainId:this.network.type.chainID,generateOnly:!0},this.raw=e,t.next=4,this.wallet.signTransaction(this.raw);case 4:n=t.sent,this.signed=o()(n),this.$emit("createdRawTx",this.signed),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),gasLimitUpdated:function(t){this.$emit("gasLimitUpdate",t)},nonceUpdated:function(t){this.locNonce=t,this.$emit("nonceUpdate",t)},pathUpdate:function(){this.$emit("pathUpdate","Offline Send Transaction")},setSelectedCurrency:function(t){this.selectedCoinType=t}}},j=S,G=(n("a65d"),Object(g["a"])(j,s,a,!1,null,"80143838",null));G.options.__file="GenerateTx.vue";var D=G.exports;n.d(e,"default",function(){return D})},"6f70":function(t,e,n){"use strict";var s=n("ff60"),a=n.n(s);a.a},"772e":function(t,e,n){},a65d:function(t,e,n){"use strict";var s=n("3b08"),a=n.n(s);a.a},cf2f:function(t,e,n){"use strict";var s=n("e32f"),a=n.n(s);a.a},d7a2:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[t.open?"open":"","dropdown-container",t.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:t.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}]},[t._v("\n        "+t._s(t.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[t._v("- "+t._s(t.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.token,expression:"!token"}]},[t._v(t._s(t.selectedCurrency.name))]),n("i",{class:["fa",t.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[t.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},t._l(t.localCurrency,function(e,s){return n("div",{key:t.token?e.name+s+e.symbol+t.page:e.name+t.page+s,class:[t.token?t.selectedCurrency.symbol===e.symbol?"selected":"":t.selectedCurrency.name===e.name?"selected":"","item"],on:{click:function(n){t.selectCurrency(e)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}]},[t._v("\n            "+t._s(e.symbol)),n("span",{staticClass:"subname"},[t._v(" - "+t._s(e.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.token,expression:"!token"}]},[t._v(t._s(e.name))])])}),0)])])])},a=[],i=(n("6762"),n("2fdb"),n("ac6a"),n("7f7f"),n("cebc")),o=n("2f62"),c={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{localCurrency:[],selectedCurrency:[],open:!1,search:"",abi:"",address:""}},computed:Object(i["a"])({},Object(o["b"])({network:"network"}),{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(t){this.$emit("selectedCurrency",t)},currency:function(t){var e=this;this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item"}],t.forEach(function(t){return e.localCurrency.push(t)})},search:function(t){var e=this;""!==t?this.localCurrency=this.localCurrency.filter(function(e){if(e.name.toLowerCase().includes(t.toLowerCase()))return e}):(this.token?this.localCurrency=[this.networkToken]:this.localCurrency=[{name:"Select an item",abi:"",address:""}],this.currency.forEach(function(t){return e.localCurrency.push(t)}))}},mounted:function(){var t=this;this.localCurrency=!0===this.token?[this.networkToken]:[{name:"Select an item",abi:"",address:""}],this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""},this.currency&&this.currency.forEach(function(e){return t.localCurrency.push(e)})},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(t){this.openDropdown(),this.selectedCurrency=t}}},r=c,l=(n("0b7a"),n("2877")),d=Object(l["a"])(r,s,a,!1,null,"61401cd8",null);d.options.__file="CurrencyPicker.vue";var u=d.exports;n.d(e,"a",function(){return u})},e32f:function(t,e,n){},f762:function(t,e,n){"use strict";var s=n("772e"),a=n.n(s);a.a},f83b:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[t._v(t._s(t.$t("common.speedTx")))]),n("popover",{attrs:{popcontent:t.$t("popover.txSpeed")}})],1)]),n("div",{staticClass:"buttons"},[n("div",{class:[t.gasPrice===t.locHighestGas/2?"active":"","small-circle-button-green-border"],on:{click:function(e){t.setSpeed(t.locHighestGas/2)}}},[t._v("\n          "+t._s(t.$t("common.economy"))+"\n        ")]),n("div",{class:[t.gasPrice===t.locHighestGas?"active":"","small-circle-button-green-border"],on:{click:function(e){t.setSpeed(t.locHighestGas)}}},[t._v("\n          "+t._s(t.$t("common.regular"))+"\n        ")]),n("div",{class:[t.gasPrice===1.25*t.locHighestGas?"active":"","small-circle-button-green-border"],on:{click:function(e){t.setSpeed(1.25*t.locHighestGas)}}},[t._v("\n          "+t._s(t.$t("common.fast"))+"\n        ")])])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{attrs:{placeholder:t.$t("common.gasPrice"),type:"number",name:""},domProps:{value:t.gasPrice},on:{change:t.setSpeed}}),t._m(0)])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-helper"},[n("h4",[t._v("Nonce")]),n("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),n("div",{staticClass:"the-form gas-amount"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.locNonce,expression:"locNonce"}],attrs:{type:"number",placeholder:"Nonce"},domProps:{value:t.locNonce},on:{input:function(e){e.target.composing||(t.locNonce=e.target.value)}}}),t._m(1)])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-button-container"},[n("p",[t._v("Gwei")]),n("i",{staticClass:"fa fa-check-circle good-button not-good",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-button-container"},[n("i",{staticClass:"fa fa-check-circle good-button not-good",attrs:{"aria-hidden":"true"}})])}],i=n("cebc"),o=(n("c5f6"),n("2f62")),c={props:{nonce:{type:Number,default:0},highestGas:{type:Number,default:10}},data:function(){return{locNonce:this.nonce,locHighestGas:this.highestGas}},computed:Object(i["a"])({},Object(o["b"])({gasPrice:"gasPrice"})),watch:{locNonce:function(t){this.$emit("nonceUpdate",Number(t))},nonce:function(t){this.locNonce=t}},mounted:function(){0===this.highestGas?this.locHighestGas=10:this.locHighestGas=this.highestGas},methods:{setSpeed:function(t){void 0!==t.target?this.$store.dispatch("setGasPrice",Number(t.target.value)):this.$store.dispatch("setGasPrice",Number(t))}}},r=c,l=(n("6f70"),n("2877")),d=Object(l["a"])(r,s,a,!1,null,"4263c2dc",null);d.options.__file="TxSpeedInput.vue";var u=d.exports;n.d(e,"a",function(){return u})},ff60:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3a15d459.8c4c6077.js.map