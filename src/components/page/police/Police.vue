<template>
    <div class="back">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 报警状态一览</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <el-row type="flex"justify="space-between" style="margin-bottom: 2rem">
            <el-col :span="18">
                <button class="button_class" :class="{blue:change==key}"@click="cut(key,item.name)" v-for=" (item,key) in nameData " :key="key" style="width: 8rem">{{item.name}}</button>
            </el-col>
            <el-col :span="6">
              <div style="float: right">
                  <el-date-picker
                      @change="(value) => changeHandler(value)"
                      placeholder="请选择时间"
                      v-model="value6"
                      type="daterange"
                      align="right"
                      :editable="zreo"
                      range-separator="至"
                   >
                  </el-date-picker>
              </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table :data="tableData" border style="width: 100%;" ref="multipleTable" >
                    <el-table-column  label="报警状态" align="center" prop="isZero">
                        <template scope="scope">
                            <el-button v-if="scope.row.isZero>0" :class="scope.row.isZero? 'bts':'btn'"@click="handleEdit(scope.row.isZero)" >已解除</el-button>
                            <el-button v-else :class="scope.row.isZero? 'bts':'btn'"@click="handleEdit(scope.row.isZero)" >未解除</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="报警项" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="报警内容"align="center" >
                    </el-table-column>
                    <el-table-column prop="address" label="报警时间"align="center" >
                    </el-table-column>
                    <el-table-column prop="address" label="责任人" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="责任人日志" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="报警解除时间" align="center">
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
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data:function() {
        return {
            value6: '',
            zreo:false,
            url: '../../../static/vuetable.json',
            tableData: [],
            cur_page: 1,
            pagesize:2,
            /* multipleSelection: [],*/
            select_cate: '',
            select_word: '',
            currentPage: 1,
            totalCount: 500,
            nameData:[{"name":"全部"},{"name":"出库监控"},{"name":"生产监管"},{"name":"数据校验"},{"name":"原料库"},{"name":"产品库"},{"name":"备品备件库"}],
            change:0,
    };
    },
        created(){
        this.getData();
    },
        methods: {
            changeHandler:function(value){
                this.$message(value)
            },
            handleEdit(row) {
               console.log(row);
            },
        handleCurrentChange(val){
            //页码
            this.cur_page = val;
            this.getData();
        },
        getData(){
            let self = this;

            if(process.env.NODE_ENV === 'development'){
                self.url = '/ms/table/list';

            };
            self.$axios.post(self.url, {page:self.cur_page}).then((res) => {

                var   tableData=[{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海',
                    isZero:1,
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市',
                    isZero:1,
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市',
                    isZero:0,
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市',
                    isZero:0,
                }]
                self.tableData = tableData;
            })
        },

        filterTag(value, row) {
            //过滤
            return row.tag === value;
        },
            cut:function(key,value){
                this.change = key;
                this.$message.success(value)

            }

    }
    };
</script>
<style>
    .right{float: right}
    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }
    .blue{background: #1DB5EF;color: #ffffff;border: solid 0px #ffffff}
    .button_class{height: 3rem;border: 1px solid #888888;margin-right: 1rem;cursor: pointer;border-radius:5px ;}
    .el-table .cell {
        padding: 0;
    }
    .btn{border: 1px solid #bb4b39;cursor: auto;background-color: #bb4b39;color: #ffffff;width: 100%;height: 100%}
    .bts{border: 1px solid #ffffff;cursor: auto;background-color: #ffffff;color: #000000;width: 100%;height: 100%}
    .btn:hover{
        border: 1px solid #bb4b39;
        color: #ffffff;
    }
    .bts:hover{
        border: 1px solid #ffffff;
        color: #000000;
    }
</style>
