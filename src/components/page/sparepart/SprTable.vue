<template>
    <div class="table">

        <el-table :data="tableDatas" border style="width: 100%;" ref="multipleTable"size="mini" :border="zreo" :strip="zreo"height="405">
           <el-table-column type="index" width="95" :label="title"align="center"></el-table-column>
            <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label" align="center" sortable>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        props: ['childTable','tableData','numName'],
        data() {
        return {
            zreo:true,
            item:[],
            zro:true,
            tableDatas:[],
            title:'2222'
        }
    },
    methods:{
        getData(data,name,title){
          /*  console.log(data)
            console.log(name)
            console.log(title)*/
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
  /* .table .el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }*/
   .table .el-table thead{color: #00A8EC}
    .el-table td{height: 36px}
</style>
