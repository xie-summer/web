<template>
    <div class="table">

        <el-table :data="tableData" border style="width: 100%;" ref="multipleTable"size="mini" :border="zreo" :strip="zreo"height="405">
            <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label"  >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        props: ['childTable'],
        data() {
        return {
            zreo:true,
            item:this.childTable,
            zro:true,
            tableData:[]
        }
    },

    }
</script>

<style >
    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }
    .el-table td{height: 36px}
</style>
