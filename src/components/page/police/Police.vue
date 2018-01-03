<template>
    <div class="back">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 报警状态一览</el-breadcrumb-item>

            </el-breadcrumb>
        </div>



        <el-row type="flex"justify="space-between" style="margin-bottom: 2rem">
            <el-col :span="18">
                <button class="button_class" :class="{blues:change==key}"@click="cut(key,item.name,item.code)" v-for=" (item,key) in nameData " :key="key" style="width: 8rem">{{item.name}}</button>
            </el-col>

            <el-col :span="6">
                <div style="float: right" class="sizeDate">
                    <el-date-picker
                        :picker-options="pickerOptions"
                        @change="(value) => changeHandler(value)"
                        placeholder="请选择时间"
                        v-model="valueDate"
                        type="daterange"
                        format="yyyy-MM-dd"
                        align="right"
                        :editable="zreo"
                        range-separator="至"
                        >
                    </el-date-picker>
                </div>
            </el-col>

        </el-row>

        <el-row class="pTable">
            <el-col :span="24">
                <el-table :data="tableData" border style="width: 100%;" ref="multipleTable" >
                    <el-table-column  label="报警状态" align="center" prop="isZero">
                        <template slot-scope="scope">
                            <el-col v-if="scope.row.isZero>0" :class="scope.row.isZero? 'bts':'btn'"@click="handleEdit(scope.row.isZero)" >已解除</el-col>
                            <el-col v-else :class="scope.row.isZero? 'bts':'btn'"@click="handleEdit(scope.row.isZero)" >未解除</el-col>
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
                        @size-change="handleSizeChange"
                        layout="total, prev, pager, next,sizes"
                        :page-sizes="[5, 10, 20, 30]"
                        :total="totalCount"
                        :current-page="cur_page"
                        :page-size="pagesize"
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
            zreo:false,
            valueDate: [new Date().format("YYYY-MM-dd",0,3), new Date().format("YYYY-MM-dd")],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海',
                isZero:1,
            } ,{
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市',
                isZero:0,
            }],
            cur_page: 1,
            pagesize:10,
            totalCount: 50,
            code:"",
            nameData:[  {name:"全部",code:""},
                        {name:"出库监控",code:"in_or_out_exception_record"},
                        {name:"生产监管",code:""},
                        {name:"数据校验",code:"data_validation"},
                        {name:"原料库",code:"raw_material_stock"},
                        {name:"产品库",code:"product_stock"},
                        {name:"备品备件库",code:"spare_parts_stock"}],
            change:0,
            pickerOptions: {
                disabledDate(time) {
                return time.getTime() > Date.now();
            }
        },
    };
    },
        created(){
        this.queryData(this.code,this.cur_page,this.pagesize,this.valueDate);
    },
        methods: {
            handleSizeChange(val){
                this.pagesize = val;
                this.queryData(this.code,this.cur_page,this.pagesize,this.valueDate);
            },
            changeHandler:function(value){
                let date=[];
               for(let i=0;i<value.length;i++){
                   date.push(value[i].format("YYYY-MM-dd"))
               }
                this.valueDate = date;
                this.queryData(this.code,this.cur_page,this.pagesize,this.valueDate);
            },
        handleCurrentChange(val){
            this.cur_page = val;
            this.queryData(this.code,this.cur_page,this.pagesize,this.valueDate);
        },
        filterTag(value, row) {
            //过滤
            return row.tag === value;
        },
            cut:function(key,value,code){
                this.change = key;
                this.code=code;
                this.queryData(code,this.cur_page,this.pagesize,this.valueDate);

            },
        queryData(code,page,size,date){
                if(code==""){}else{code=code+"/"}
                let startDate=date[0];
                let endDate=date[1];
                let self = this;
                let _url = "http://192.168.1.106:9000/exception/record/"+code+startDate+"/"+endDate+"/"+page+"/"+size;
                console.log(_url)
               self.$axios.get(_url).then((res)=>{
                    console.log(res)
                })
            }
    }
    };

</script>
<style >
    .right{float: right}
    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }

    .button_class{height: 3rem;border: 1px solid #888888;margin-right: 1rem;cursor: pointer;border-radius:5px ;background-color: #ffffff}
    .blues{background: #1DB5EF;color: #ffffff;border: solid 0px #ffffff}
    .btn{border: 1px solid #bb4b39;cursor: auto;background-color: #bb4b39;color: #ffffff;width: 100%;height: 100%}
    .bts{border: 1px solid #ffffff;cursor: auto;background-color: #ffffff;color: #000000;width: 100%;height: 100%}
   .pTable .el-table td{padding: 0 0}
    .pTable .el-table .cell{padding-right: 0}
    .pTable .el-table--border td:first-child .cell{padding-left: 0;}
     .sizeDate .el-date-editor--daterange.el-input__inner{
        width: 22rem;
    }
</style>
