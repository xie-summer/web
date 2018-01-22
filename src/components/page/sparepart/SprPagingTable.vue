<template>
    <div class="table">
        <el-table
            class="putTable"
            :data="tableData"
            ref="mulTable"
            border
            style="width: 100%;"
            height=286
            stripe
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(173,216,230, 0.2)"
            >
            <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label" align="center" :show-overflow-tooltip=true>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="total, prev, pager, next"
                :total="totalCount"
                :page-size="pagesize"
                :current-page="currentPage"
                >
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["pagingData","nameData","type"],
        data(){
            return{
                tableData:[],
                pagesize:5,
                currentPage:1,
                totalCount:0,
                item:[],
                types:"",
                loading:true,
                emptyTitle:""

            }
    },
    methods:{
        handleCurrentChange(val){
            this.cur_page=val;
            this.$emit('handleCurrentChange', {page: this.cur_page, pageSize: this.pagesize,type:this.types});
        },
        setData(data,total,list,type,loading){
            this.loading=loading==undefined?true:loading
            this.tableData=data;
            this.totalCount=total;
            this.item=list;
            this.types=type;
        },

    },
    created(){
            this.setData(this.pagingData,this.totalCount,this.nameData,this.type);
    }
    }
</script>
<style>
 /* .table .el-table thead{color: #00A8EC}*/
    .el-table td{height: 36px}
  .table .el-table__header-wrapper thead div {
      color:rgb(255, 255, 255);
      background-color:rgb(1, 172, 237)
  }

</style>
