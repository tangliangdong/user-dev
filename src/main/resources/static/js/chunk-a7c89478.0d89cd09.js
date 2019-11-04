(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7c89478"],{"0796":function(e,t,a){},3234:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pd20"},[a("div",{staticClass:"navigate-bar"},[a("router-link",{attrs:{to:"/examination"}},[e._v("供应商审核")]),a("i",{staticClass:"el-icon-arrow-right"}),a("span",[e._v("供应商详情")])],1),a("el-form",{staticClass:"table-search-form",attrs:{size:"medium",model:e.searchForm,inline:!0}},[a("el-form-item",{attrs:{label:"审核状态 ："}},[a("el-radio-group",{on:{change:e.reloadTable},model:{value:e.searchForm.approved,callback:function(t){e.$set(e.searchForm,"approved",t)},expression:"searchForm.approved"}},[a("el-radio-button",{attrs:{label:""}},[e._v("全部")]),a("el-radio-button",{attrs:{label:"0"}},[e._v("待审核")]),a("el-radio-button",{attrs:{label:"1"}},[e._v("审核通过")]),a("el-radio-button",{attrs:{label:"-1"}},[e._v("审核失败")])],1)],1)],1),a("gh-table",{ref:"ghTable",attrs:{url:"/log/list",searchForm:e.searchForm}},[a("el-table-column",{attrs:{prop:"name",label:"供应商企业名称"}}),a("el-table-column",{attrs:{prop:"creditCode",label:"统一社会信用代码",width:"180"}}),a("el-table-column",{attrs:{prop:"contactType",label:"对接类型"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[2==t.row.contactType?a("span",{attrs:{type:"success"}},[e._v("系统对接")]):e._e(),3==t.row.contactType?a("span",{attrs:{type:"danger"}},[e._v("软硬件适配")]):e._e()])}}])}),a("el-table-column",{attrs:{prop:"username",label:"用户名"}}),a("el-table-column",{attrs:{prop:"password",label:"密码"}}),a("el-table-column",{attrs:{prop:"businessContact",label:"业务联系人"}}),a("el-table-column",{attrs:{prop:"businessContactPhone",label:"业务联系人电话"}}),a("el-table-column",{attrs:{prop:"ctime",label:"发布日期"}}),a("el-table-column",{attrs:{prop:"approved",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[0==t.row.approved?a("el-tag",{attrs:{type:"warning"}},[e._v("待审核")]):e._e(),1==t.row.approved?a("el-tag",{attrs:{type:"success"}},[e._v("审核通过")]):e._e(),-1==t.row.approved?a("el-tag",{attrs:{type:"danger"}},[e._v("审核失败")]):e._e()],1)}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作",width:"280",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"table-cell-ctrl"},[a("router-link",{attrs:{to:{path:"/examDetail",query:{uuid:t.row.uuid}}}},[e._v("详情")]),a("router-link",{attrs:{to:{path:"/examLog",query:{uuid:t.row.uuid}}}},[e._v("日志")]),1!==+t.row.approved?a("a",{on:{click:function(a){e.examCompany(t.row.uuid,t.row.name,1)}}},[e._v("通过")]):e._e(),-1!==+t.row.approved?a("a",{on:{click:function(a){e.examCompany(t.row.uuid,t.row.name,-1)}}},[e._v("拒绝")]):e._e(),a("a",{on:{click:function(a){e.delCompany(t.row.uuid,t.row.name)}}},[e._v("删除")])],1)}}])})],1),a("el-dialog",{attrs:{title:1==e.dialog.approved?"审核通过":"审核拒绝",center:"","append-to-body":"",visible:e.dialog.show,width:"500px"},on:{"update:visible":function(t){e.$set(e.dialog,"show",t)}}},[a("div",{staticClass:"dialog-tip"},[e._v("确定"+e._s(1==e.dialog.approved?"通过":"拒绝")),a("span",{staticClass:"dialog-tip-name"},[e._v(e._s(e.dialog.companyName))]),e._v("的审核？")]),a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"50px",model:e.dialog.form}},[1!==e.dialog.approved?a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.dialog.form.note,callback:function(t){e.$set(e.dialog.form,"note",t)},expression:"dialog.form.note"}})],1):e._e()],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialog.show=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.examSubmit}},[e._v("确 定")])],1)],1)],1)},l=[],r=(a("f751"),a("1ea4")),s={components:{ghTable:r["a"]},data:function(){return{searchForm:{approved:""},dialog:{show:!1,companyUuid:"",companyName:"test",approved:1,form:{account:"",secretKey:"",note:""}}}},methods:{reloadTable:function(){var e=this;console.log(this.searchForm),this.$nextTick(function(){e.$refs.ghTable.reloadTableList()})},examCompany:function(e,t,a){Object.assign(this.dialog.form,{account:"",secretKey:"",note:""}),Object.assign(this.dialog,{companyName:t,companyUuid:e,approved:a,show:!0})},examSubmit:function(){var e=this,t="/company/checkCompany",a=this.dialog,o=a.companyUuid,l=a.approved;this.$ajax.post(t,Object.assign({},this.dialog.form,{uuid:o,approved:l})).then(function(){e.$refs.ghTable.reloadTableList(),e.$message.success("提交成功"),e.dialog.show=!1}).catch(function(t){e.$message.error(t.msg||"服务器繁忙,提交失败!")})},delCompany:function(e,t){var a=this;this.$confirm("确认删除".concat(t,"？")).then(function(t){console.log(t),a.$ajax.post("/company/deleteByUuid",{uuid:e})}).then(function(){a.$refs.ghTable.reloadTableList(),a.$message.success("删除成功")}).catch(function(e){"cancel"!=e&&a.$message.error(e.msg||"服务器繁忙,删除失败!")})}}},n=s,i=(a("b94f"),a("2877")),c=Object(i["a"])(n,o,l,!1,null,null,null);c.options.__file="examLog.vue";t["default"]=c.exports},b94f:function(e,t,a){"use strict";var o=a("0796"),l=a.n(o);l.a}}]);
//# sourceMappingURL=chunk-a7c89478.0d89cd09.js.map