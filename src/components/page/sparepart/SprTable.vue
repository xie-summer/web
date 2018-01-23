<template>
    <div class="tableNew">

        <el-table
            :data="tableDatas"
            border
            style="width: 100%;"
            ref="multipleTable"
            size="mini"
            :border="zreo"
            :strip="zreo"
            :stripe="ys"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(173,216,230, 0.2)"
            >
           <el-table-column type="index" width="95" :label="title"align="center"></el-table-column>
            <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label" align="center"  :show-overflow-tooltip=true >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        props: ['childTable','tableData','numName'],
        data() {
        return {
            ys:true,
            zreo:true,
            item:[],
            zro:true,
            tableDatas:[],
            title:'2222',
            loading:true,
            empty:"00000000000"
        }
    },
    methods:{
        getData(data,name,title,loading){
            this.loading=loading==undefined?true:loading;
            this.tableDatas=data;
            this.item = name;
            this.title = title;

        }
    },
    mounted(){
        this.getData(this.tableData,this.childTable,this.numName)
    }

    }
</script>

<style >
  .tableNew .el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }
  /* .table .el-table thead{color: #00A8EC}*/

</style>
