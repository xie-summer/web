<template>
    <div class="table" ref="son">
       <!-- <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>-->
      <!--  <div class="handle-box">
            <el-button class="handle-del mr10">批量删除</el-button>
            <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                <el-option key="1" label="广东省" value="1"></el-option>
                <el-option key="2" label="湖南省" value="2"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search">搜索</el-button>
        </div>-->
        <el-table :data="tableData" border style="width: 100%;" ref="multipleTable" @selection-change="handleSelectionChange"height=282 >
          <!--  <el-table-column type="selection" width="55"></el-table-column>-->
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

           <!-- <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>-->
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
        props:["tableCon","tableTotal"],
        data() {
            return {
                tableData: [],
                cur_page: 1,
                pagesize:6,
                select_cate: '',
                select_word: '',
                currentPage: 1,
                totalCount: this.totalCount,
                showtf:true
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
            getData(data,total){
                this.totalCount=total;
                this.tableData=data;
            },

            handleSelectionChange: function(val) {
                this.multipleSelection = val;
            },
            formatter(row, column){

              return row.outTime==undefined?null:new Date(row.outTime).format("YYYY/MM/dd")
            },
            formatterIn(row, column)    {
                return row.inTime==undefined?null:new Date(row.inTime).format("YYYY/MM/dd")
            },
        }
    }
</script>

<style >

    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }
</style>
