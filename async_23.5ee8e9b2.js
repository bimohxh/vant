(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{131:function(t,o,n){"use strict";var s=n(65);n.n(s).a},132:function(t,o,n){(t.exports=n(10)(!1)).push([t.i,".demo-notify .van-button {\n  margin-left: 15px;\n}\n",""])},202:function(t,o,n){"use strict";n.r(o);var s={i18n:{"zh-CN":{content:"通知内容",customConfig:"自定义配置",showNotify:"显示消息通知",showCustomNotify:"显示自定义消息通知"},"en-US":{content:"Notify Message",customConfig:"Custom Config",showNotify:"Show Notify",showCustomNotify:"Show Custom Notify"}},methods:{showNotify:function(){this.$notify(this.$t("content"))},showCustomNotify:function(){this.$notify({message:this.$t("content"),duration:1e3,background:"#1989fa"})}}},i=(n(131),n(0)),e=Object(i.a)(s,function(){var t=this.$createElement,o=this._self._c||t;return o("demo-section",[o("demo-block",{attrs:{title:this.$t("basicUsage")}},[o("van-button",{attrs:{text:this.$t("showNotify")},on:{click:this.showNotify}})],1),o("demo-block",{attrs:{title:this.$t("customConfig")}},[o("van-button",{attrs:{text:this.$t("showCustomNotify")},on:{click:this.showCustomNotify}})],1)],1)},[],!1,null,null,null);e.options.__file="index.vue";o.default=e.exports},65:function(t,o,n){var s=n(132);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(11)(s,i);s.locals&&(t.exports=s.locals)}}]);