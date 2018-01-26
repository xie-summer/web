<template>
    <div class="back">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 报警状态一览</el-breadcrumb-item>

            </el-breadcrumb>
        </div>



        <el-row type="flex"justify="space-between" style="margin-bottom:1rem">
        <!--    <el-col :span="18">
                <button class="button_class" :class="{blues:change==key}"@click="cut(key,item.name,item.code)" v-for=" (item,key) in nameData " :key="key" style="width: 8rem">{{item.name}}</button>
            </el-col>-->
            <el-col :span="3">
                <el-select v-model="value8" filterable placeholder="全部" @change="(value)=>handlerChange1(value)">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-select v-model="value9" filterable placeholder="全部责任人"  @change="(item)=>handlerChange2(item)" >
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6":offset="10">
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

        <el-row class="pTable putTitle police">
            <el-col :span="24" style="box-shadow: 0px 3px 0px #E5E5E5;background-color: #ffffff;">
                <el-table
                    :data="tableData"
                    border style="
                    width: 100%;"
                    ref="multipleTable"
                    stripe
                    v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(173,216,230, 0.2)"
                    >
                    <el-table-column  label="报警状态" align="center" prop="statusName" width="85">
                        <template slot-scope="scope" >
                            <el-button type="success"v-if="scope.row.statusName=='已解除'"@click="handleEdit1(scope.$index, scope.row)" >已解除</el-button>
                            <el-button type="danger" v-else @click="handleEdit(scope.$index, scope.row)" >未解除</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="warningname" label="报警项" align="center" min-width="175":show-overflow-tooltip=true>
                    </el-table-column>
                    <el-table-column prop="level" label="预警等级" align="center" min-width="80">
                    </el-table-column>
                    <el-table-column prop="warningContent" label="报警内容"align="center" min-width="266":show-overflow-tooltip=true>
                    </el-table-column>
                    <el-table-column prop="ctime" label="报警时间"align="center" min-width="100" >
                    </el-table-column>
                    <el-table-column prop="receiverName" label="责任人" align="center" min-width="100">
                    </el-table-column>
                    <el-table-column prop="returnContent" label="责任人日志" align="center" min-width="100":show-overflow-tooltip=true>
                    </el-table-column>
                    <el-table-column prop="utime" label="报警解除时间" align="center"min-width="100">
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination
                        @current-change ="handleCurrentChange"
                        @size-change="handleSizeChange"
                        layout="total, prev, pager, next,sizes"
                        :page-sizes="[8, 10, 20, 30]"
                        :total="totalCount"
                        :current-page="cur_page"
                        :page-size="pagesize"
                        >
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
        <el-dialog title="问题反馈表" :visible.sync="dialogFormVisible"width="30%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="内容">
                    <el-input type="textarea" v-model="form.desc" :rows=10 :maxlength=1000 @input="descInput" placeholder="相应负责人对情况简要说明..."></el-input>
                    <span>{{form.remnant}}/1000</span>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelIncident()">取 消</el-button>
                <el-button type="primary" @click="setContent(form)">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    var qs = require('qs');
    export default {
        data:function() {
        return {
            form:{
                desc:"",
                remnant:0
            },
            zreo:false,
            valueDate: [new Date().format("YYYY-MM-dd",0,7), new Date().format("YYYY-MM-dd")],
            tableData: [],
            cur_page: 1,
            pagesize:8,
            totalCount: 50,
            code:"",
            options:[{value:2,label:"全部"},{value:0,label:"未解除"},{value:1,label:"已解除"}],
            options2:[],
            value8: '',
            value9: '',
            change:0,
            status:2,
            dialogFormVisible:false,
            innerVisible:false,
            formLabelWidth: '120px',
            name:"",
            info:{},
            loading:true,
            pickerOptions: {
                disabledDate(time) {
                return time.getTime() > Date.now();
            }
        },
    };
    },
        created(){
        /*开始时间，结束时间，页码，大小，状态||责任人*/
        this.getDuty();
        this.queryData(this.valueDate[0],this.valueDate[1],this.cur_page,this.pagesize,this.status,this.name);

    },
        methods: {
                /*每页大小*/
                handleSizeChange(val){
                    this.pagesize = val;
                    this.queryData(this.valueDate[0],this.valueDate[1],this.cur_page,val,this.status,this.name);
                },
                /*时间*/
                changeHandler:function(value){
                    for(let i=0;i<value.length;i++){
                        value[i]=value[i].format("YYYY-MM-dd")
                    }
                    this.valueDate = value;
                    this.queryData(value[0],value[1],this.cur_page,this.pagesize,this.status,this.name);
                },
                /*页码*/
                handleCurrentChange(val){
                    this.cur_page = val;
                    this.queryData(this.valueDate[0],this.valueDate[1],val,this.pagesize,this.status,this.name);
                },
                filterTag(value, row) {
                    //过滤
                    return row.tag === value;
                },
                /*查询数据*/
                queryData(date1,date2,page,size,suatus,name){
                        this.loading=true;
                        if(name==""){}else{name="/"+name}
                        let self = this;
                        let _url = this.$url5+"/riskapi/getrisklist/"+date1+"/"+date2+"/"+page+"/"+size+"/"+suatus+name+"?"+Date.now();
                       self.$axios.get(_url).then((res)=>{
                            let data = res.data.retval.list;
                            this.totalCount=res.data.retval.total;
                            if(data==null){
                                this.tableData=[];
                                this.loading=false;
                            }else{
                                for(let i of data){
                                    i.ctime =  new Date(i.ctime).format("YYYY-MM-dd hh:mm:ss");
                                    i.utime = i.utime==null?"":new Date( i.utime).format("YYYY-MM-dd hh:mm:ss");
                                }
                                this.tableData=data;
                                this.loading=false;
                            }
                        }).catch((e)=>{
                        this.loading=false;
                })
                    },
                /*select选择*/
                handlerChange1(value){
                    this.status = value;
                    this.queryData(this.valueDate[0],this.valueDate[1],this.cur_page,this.pagesize,value,this.name);
                },
                handlerChange2(name){
                    if(name=="全部责任人"){name=""}
                    this.name = name;
                    this.queryData(this.valueDate[0],this.valueDate[1],this.cur_page,this.pagesize,this.status,name);
                },
                handleEdit(row,level){
                    this.info = level;
                    this.dialogFormVisible = true
                },
                handleEdit1(){},
                /*获取责任人*/
                getDuty(){
                   let self = this;
                    let _url = "http://192.168.1.106:5000/riskapi/getresponsiblenameList"+"?"+Date.now();
                    self.$axios.get(_url).then((res)=>{
                        let data = res.data.retval;
                        let personList=[];
                        let all={value:0,label:"全部责任人"}
                        personList.push(all);
                        data.find(function(value,index){
                               let obj={value:"",label:""};
                                obj.value=index+1;
                                obj.label=value;
                            personList.push(obj);

                        });
                        this.options2=personList;

                    })
                },
                /*记录输入内容长度*/
                descInput(){
                    let val = this.form.desc.length;
                    this.form.remnant=val;
                },
                /*提交输入内容*/
                setContent(formValue){
                    let self = this;
                    let _url = this.$url5+"/riskapi/finishbymanual"+"?"+Date.now();
                    let userName=sessionStorage.getItem('ms_username');
                    let obj={responsiblecontent:"",responsiblename:"",id:""};
                    obj.responsiblecontent=formValue.desc;
                    obj.responsiblename=userName;
                    obj.id=this.info.id;
                self.$axios.post(_url,
                    qs.stringify(obj)
                    ).then((res)=>{
                    if(res.data.retval==true){
                        this.$message({
                            type: 'success',
                            message: '提交成功'
                        });
                        this.queryData(this.valueDate[0],this.valueDate[1],this.cur_page,this.pagesize,this.status,this.name);
                    }else{
                        this.$message({
                            type: 'warning',
                            message: '提交失败'
                        });
                    }
                    this.form.desc="";
                    this.form.remnant=0;
                }).catch((e)=>{
                    this.form.desc="";
                    this.form.remnant=0;
                    this.$message.error("网络错误");
                });
                    this.dialogFormVisible=false;
                },
                /*取消事件*/
                cancelIncident(){
                this.form.desc="";
                this.form.remnant=0;
                this.dialogFormVisible=false;
                },

    }
    };

</script>
<style >
    .right{float: right}
    /*.putTitle .el-table thead{color: #00A8EC}*/
    .button_class{height: 3rem;border: 1px solid #888888;margin-right: 1rem;cursor: pointer;border-radius:5px ;background-color: #ffffff}
    .blues{background: #1DB5EF;color: #ffffff;border: solid 0px #ffffff}
    .btn{border:1px solid #bb4b39;background-color: #bb4b39;color: #ffffff;width: 100%;height: 100%}
    .btn:hover{ border: 1px solid #bb4b39;background-color: #bb4b39;color: #ffffff;width: 100%;height: 100%  }
    .bts{border: 1px solid #ffffff;background-color: #ffffff;color: #000000;width: 100%;height: 100%}
    .pTable .el-table td{padding: 0 0}
    .pTable .el-table .cell{padding-right: 0}
    .pTable .el-table--border td:first-child .cell{padding-left: 0;}
    .police .el-table .cell{  line-height: 36px;  }
    .pTable .el-table__header-wrapper thead div {  color:rgb(255, 255, 255);  background-color:rgb(1, 172, 237)  }
    .pTable .el-button--text{color: #5a5e66}
</style>
