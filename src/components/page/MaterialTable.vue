<template>
    <div class="table">
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
        <el-table :data="tableData" border style="width: 100%;" ref="multipleTable" @selection-change="handleSelectionChange"height=282 stripe>
            <el-table-column prop="date" label="质检时间"  width="150" >
            </el-table-column>
            <el-table-column prop="name" label="班次" width="120"align="center">
            </el-table-column>
            <el-table-column prop="address" label="原料名称"align="center" >
            </el-table-column>
            <el-table-column prop="address" label="质检项"align="center" >
            </el-table-column>
            <el-table-column prop="address" label="质检值" align="center">
            </el-table-column>
            <el-table-column prop="address" label="质检结果" align="center">
            </el-table-column>

        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="total, prev, pager, next"
                :total="totalCount"
                :current-page="currentPage"
                >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            tableData: [],
            cur_page: 1,
            pagesize:5,
            /* multipleSelection: [],*/
            select_cate: '',
            select_word: '',
            currentPage: 1,
            totalCount: 500,
        }
    },
    created(){
    },
    methods: {
        handleCurrentChange(val){
            //页码
            this.cur_page = val;
        },

        filterTag(value, row) {
            //过滤
            return row.tag === value;
        },

        handleSelectionChange: function(val) {
            this.multipleSelection = val;
        }
    }
    }
</script>

<style >
    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }

</style>
