(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f5a039"],{2532:function(t,e,a){"use strict";var i=a("23e7"),r=a("5a34"),n=a("1d80"),s=a("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(n(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"3c47":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"FA_div"}},[a("h2",[t._v("商品列表")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"商品id"}},[a("span",[t._v(t._s(e.row.id))])]),a("el-form-item",{attrs:{label:"所属分类"}},[a("span",[t._v(t._s(e.row.category))])]),a("el-form-item",{attrs:{label:"商品图片"}},[a("el-image",{attrs:{src:e.row.imgUrl}})],1),a("el-form-item",{attrs:{label:"商品评价"}},[a("span",[t._v(t._s(e.row.rating))])]),a("el-form-item",{attrs:{label:"商品描述"}},[a("span",[t._v(t._s(e.row.goodsDesc))])]),a("el-form-item",{attrs:{label:"商品名称"}},[a("span",[t._v(t._s(e.row.name))])]),a("el-form-item",{attrs:{label:"商品价格"}},[a("span",[t._v(t._s(e.row.price))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[t._v(t._s(e.row.ctime))])]),a("el-form-item",{attrs:{label:"商品销量"}},[a("span",[t._v(t._s(e.row.sellCount))])])],1)]}}])}),a("el-table-column",{attrs:{label:"商品名称",prop:"name"}}),a("el-table-column",{attrs:{label:"所属分类",prop:"category"}}),a("el-table-column",{attrs:{label:"商品价格",prop:"price"}}),a("el-table-column",{attrs:{label:"商品图片",prop:"imgUrl"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{attrs:{src:t.row.imgUrl}})]}}])}),a("el-table-column",{attrs:{label:"商品描述",prop:"goodsDesc"}}),a("el-table-column",{attrs:{label:"操作",prop:"desc"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.deleteRow(e.$index,t.tableData)}}},[t._v(" 删除 ")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,,10,15],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editShow,expression:"editShow"}],attrs:{id:"edit_box"}},[a("el-input",{attrs:{placeholder:"请输入商品名称",clearable:""},model:{value:t.Nname,callback:function(e){t.Nname=e},expression:"Nname"}}),a("el-input",{attrs:{placeholder:"请输入商品所属分类",clearable:""},model:{value:t.Ncategory,callback:function(e){t.Ncategory=e},expression:"Ncategory"}}),a("el-input",{attrs:{placeholder:"请输入商品价格",clearable:""},model:{value:t.Nprice,callback:function(e){t.Nprice=e},expression:"Nprice"}}),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.ITEMS_UP_IMG,"show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.NimgUrl?a("img",{staticClass:"avatar",staticStyle:{width:"180px","margin-left":"115px"},attrs:{src:t.NimgUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},clearable:"",size:"medium"},model:{value:t.NgoodsDesc,callback:function(e){t.NgoodsDesc=e},expression:"NgoodsDesc"}}),a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.editok}},[t._v("确认修改")])],1)],1)},r=[],n=(a("caad"),a("b0c0"),a("2532"),a("b85c")),s=a("fd41"),l=a("aa51"),o={created:function(){this.ITEMS_UP_IMG=s["c"],this.List()},data:function(){return{currentPage:1,total:0,tableData:[],pageSize:5,Nname:"",Ncategory:"",Nprice:0,NimgUrl:"",NgoodsDesc:"",id:"",ITEMS_UP_IMG:"",editShow:!1,loading:!0}},methods:{List:function(){var t=this;this.loading=!0,Object(s["s"])(this.currentPage,this.pageSize).then((function(e){t.total=e.data.total,t.arr=e.data.data;var a,i=Object(n["a"])(t.arr);try{for(i.s();!(a=i.n()).done;){var r=a.value;r.ctime=Object(l["a"])(r.ctime),r.imgUrl.includes(s["a"])||(r.imgUrl=s["a"]+r.imgUrl)}}catch(o){i.e(o)}finally{i.f()}t.tableData=t.arr,t.loading=!1}))},handleSizeChange:function(t){this.pageSize=t,this.List()},handleCurrentChange:function(t){this.currentPage=t,this.List()},handleEdit:function(t){this.id=t.id,this.Nname=t.name,this.Ncategory=t.category,this.Nprice=t.price,this.NimgUrl=t.imgUrl,this.NgoodsDesc=t.goodsDesc,this.editShow=!0},handleAvatarSuccess:function(t){this.NimgUrl=t.imgUrl},editok:function(){var t=this;Object(s["r"])(this.Nname,this.Ncategory,this.Nprice,this.NimgUrl,this.NgoodsDesc,this.id).then((function(e){0==e.data.code&&(t.editShow=!1,t.List())}))},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["m"])(e.tableData[t].id,1).then((function(t){0==t.data.code&&(e.$message({message:t.data.msg,type:"success"}),e.List())}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},c=o,u=(a("9858"),a("2877")),d=Object(u["a"])(c,i,r,!1,null,"042f81e4",null);e["default"]=d.exports},"44e7":function(t,e,a){var i=a("861d"),r=a("c6b6"),n=a("b622"),s=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"452b":function(t,e,a){},"5a34":function(t,e,a){var i=a("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},9858:function(t,e,a){"use strict";var i=a("452b"),r=a.n(i);r.a},ab13:function(t,e,a){var i=a("b622"),r=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(i){}}return!1}},caad:function(t,e,a){"use strict";var i=a("23e7"),r=a("4d64").includes,n=a("44d2"),s=a("ae40"),l=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!l},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);
//# sourceMappingURL=chunk-77f5a039.a6af59ce.js.map