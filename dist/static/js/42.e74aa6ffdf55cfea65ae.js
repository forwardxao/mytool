webpackJsonp([42],{fjuI:function(e,t){},hclF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),l=a.n(n),i=a("Mdfv"),s=a("xT6B"),r={pageNum:1,pageSize:5,name:null,type:null,endTime:null},o=[{label:"PC首页轮播",value:0},{label:"APP首页轮播",value:1}],c={name:"homeAdvertiseList",data:function(){return{listQuery:l()({},r),typeOptions:l()({},o),list:null,total:null,listLoading:!1,multipleSelection:[],operates:[{label:"删除",value:0}],operateType:null}},created:function(){this.getList()},filters:{formatType:function(e){return 1===e?"APP首页轮播":"PC首页轮播"},formatTime:function(e){if(null==e||""===e)return"N/A";var t=new Date(e);return Object(s.a)(t,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch:function(){this.listQuery=l()({},r)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleUpdateStatus:function(e,t){var a=this;this.$confirm("是否要修改上线/下线状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.f)(t.id,{status:t.status}).then(function(e){a.getList(),a.$message({type:"success",message:"修改成功!"})})}).catch(function(){a.$message({type:"success",message:"已取消操作!"}),a.getList()})},handleDelete:function(e,t){this.deleteHomeAdvertise(t.id)},handleBatchOperate:function(){if(this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{for(var e=[],t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].id);0===this.operateType?this.deleteHomeAdvertise(e):this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3})}},handleAdd:function(){this.$router.push({path:"/sms/addAdvertise"})},handleUpdate:function(e,t){this.$router.push({path:"/sms/updateAdvertise",query:{id:t.id}})},getList:function(){var e=this;this.listLoading=!0,Object(i.c)(this.listQuery).then(function(t){e.listLoading=!1,e.list=t.data.list,e.total=t.data.total})},deleteHomeAdvertise:function(e){var t=this;this.$confirm("是否要删除该广告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=new URLSearchParams;a.append("ids",e),Object(i.b)(a).then(function(e){t.getList(),t.$message({type:"success",message:"删除成功!"})})})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),e._v(" "),a("span",[e._v("筛选搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.handleSearchList()}}},[e._v("\n        查询搜索\n      ")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(t){e.handleResetSearch()}}},[e._v("\n        重置\n      ")])],1),e._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:e.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"广告名称："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"广告名称"},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"广告位置："}},[a("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.typeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"到期时间："}},[a("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.endTime,callback:function(t){e.$set(e.listQuery,"endTime",t)},expression:"listQuery.endTime"}})],1)],1)],1)]),e._v(" "),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),e._v(" "),a("span",[e._v("数据列表")]),e._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(t){e.handleAdd()}}},[e._v("添加广告")])],1),e._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"homeAdvertiseTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"编号",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告位置",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatType")(t.row.type)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"广告图片",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{height:"80px"},attrs:{src:e.row.pic}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"时间",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("开始时间："+e._s(e._f("formatTime")(t.row.startTime)))]),e._v(" "),a("p",[e._v("到期时间："+e._s(e._f("formatTime")(t.row.endTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"上线/下线",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){e.handleUpdateStatus(t.$index,t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"点击次数",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.clickCount))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"生成订单",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.orderCount))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.handleUpdate(t.$index,t.row)}}},[e._v("编辑\n          ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n          ")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"batch-operate-container"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:e.operateType,callback:function(t){e.operateType=t},expression:"operateType"}},e._l(e.operates,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.handleBatchOperate()}}},[e._v("\n      确定\n    ")])],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":e.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":e.listQuery.pageNum,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"pageNum",t)}}})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("fjuI")},"data-v-2ef16592",null);t.default=d.exports}});