<template>
    <el-row type="flex" justify="space-between" ref="putTable">
        <el-col :span="6" style="background-color:#ffffff">
            <el-col :span="12" :offset="7" style="color:#00A8EC;font-size: 3.5rem;height: 20rem;line-height: 24rem">{{data.data}}吨</el-col>
            <el-col :span="12" :offset="6" style="color:#00A8EC;font-size: 1.5rem;height: 3rem;line-height: 7rem">更新时间: {{data.time}}</el-col>
        </el-col>
        <el-col :span="18" style="background-color: #ffffff" class="putTitle">
            <el-table class="putTable":data="tableData" ref="mulTable" border style="width: 100%;"  height=286 stripe>
                <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label" align="center" >
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

        </el-col>
    </el-row>
</template>
    <script>
        export default {
            props: ["outputTable", "tableName","outputData","type"],
            data(){
            return {
                tableData: [],
                totalCount: 0,
                item: this.tableName,
                cur_page: 1,
                pagesize: 5,
                currentPage: 1,
                data:{data:0,time:"00:00:00"},
                types:this.type
            }
        }
        ,
        methods:{
            /* */
            handleCurrentChange(val){
                this.cur_page=val;
                this.$emit('handleCurrentChange', {page: this.cur_page, pageSize: this.pagesize,type:this.types});
            },
            getData(numData,nameData,total,timeData){
                this.tableData=numData
                this.data=timeData;
                this.totalCount=total
            },
        },
        created(){
            this.getData(this.outputTable,this.tableName,this.totalCount,this.data)
        }
        }
    </script>
    <style >
        .putTitle .el-table thead{color: #00A8EC}
    </style>

