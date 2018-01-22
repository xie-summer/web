<template>
    <div class="tableP" ref="son">
       <div class=" erji">
           <el-table
               :data="tableData"
               border
               style="width: 100%;"
               ref="multipleTable"
               @selection-change="handleSelectionChange"
               height=285 stripe
               v-loading="loading"
               element-loading-text="拼命加载中"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(173,216,230, 0.2)"
               >
               <el-table-column prop="inTime" label="进厂时间"  align="center" :show-overflow-tooltip="showtf" :formatter="formatterIn">
               </el-table-column>
               <el-table-column prop="outTime" label="出厂时间"align="center" :show-overflow-tooltip="showtf" :formatter="formatter">
               </el-table-column>
               <el-table-column prop="name" label="物料名称"  align="center" :show-overflow-tooltip="showtf">
               </el-table-column>
               <el-table-column prop="numberPlate" label="车牌" align="center":show-overflow-tooltip="showtf" >
               </el-table-column>
               <el-table-column prop="netWeight" label="净重" align="center" width="80":show-overflow-tooltip="showtf">
               </el-table-column>
               <el-table-column prop="tare" label="扣重" align="center" width="70":show-overflow-tooltip="showtf">
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
    </div>
</template>

<script>
    export default {
        props:["tableCon","tableTotal"],
        data() {
            return {
                tableData: [],
                cur_page: 1,
                pagesize:5,
                currentPage: 1,
                totalCount: this.totalCount,
                showtf:true,
                loading:true
            }
        },
        created(){
        this.totalCount=this.tableTotal
            this.getData(this.tableCon);
        },
        methods: {
            handleCurrentChange(val){
               //页码
                this.cur_page = val;
                this.$emit('handleCurrentChange',{page:this.cur_page,pageSize:this.pagesize});

            },
            getData(data,total,loading){
                this.totalCount=total;
                this.tableData=data;
                this.loading=loading==undefined?true:loading;
            },

            handleSelectionChange: function(val) {
                this.multipleSelection = val;
            },
            formatter(row, column){
              return row.outTime==undefined?null:new Date(row.outTime).format("hh:mm:ss")
            },
            formatterIn(row, column)    {
                return row.inTime==undefined?null:new Date(row.inTime).format("hh:mm:ss")
            },
        }
    }
</script>

<style >

    .tableP .el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }

</style>
