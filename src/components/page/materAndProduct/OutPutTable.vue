<template>
    <el-row type="flex" justify="space-between" ref="putTables" class="table_title">
        <el-col :span="6" style="background-color:#ffffff">
            <el-col :span="24"  style="color:#00A8EC;" class="mUpData secondFontColor">{{data.data}}吨</el-col>
            <el-col :span="24"  class="mUpData1 secondFontColor">{{data.data1}}</el-col>
            <el-col :span="24"  style="line-height: 0rem;height: 5rem" class="mUpData1 secondFontColor">{{data.data2}}</el-col>
            <el-col :span="24"  style=" "class="mUpDateTime secondFontColor">更新时间: {{data.time}}</el-col>
        </el-col>
        <el-col :span="18" style="background-color: #ffffff" class="putTitle">
            <el-table class="putTables":data="tableData" ref="mulTable" border style="width: 100%;"  height=286 stripe>
                <el-table-column v-for=" (i,value) in item" key="value":prop="i.name" :label="i.label" align="center":show-overflow-tooltip=true >
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
        .table_title .el-table thead{color: #00A8EC}
        .table_title .el-table .cell{  line-height: 46px; height: 46px }
        .table_title .el-table td, .el-table th{padding: 0}
    </style>

