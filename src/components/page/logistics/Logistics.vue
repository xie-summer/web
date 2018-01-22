<template>
    <div class="back" style="min-width: 1055px">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 在途资产</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
      <!--  <el-row style="margin-bottom: 3rem">
            <el-col :span="4" :offset="20">
                <div style="float: right">
                    <el-date-picker
                        @change="(value) => changeHandler(value)"
                        placeholder="请选择时间"
                        v-model="valueDate"
                        align="left"
                        :editable="zero"
                        :picker-options="pickerOptions"
                        >
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>-->
        <el-row  type="flex" justify="space-between">
            <el-col :span="7" >
              <el-card class="log_height">
                  <el-col :span="18" :offset="6" style="padding-top:5rem">
                      <div class="log_d_1">
                          <svg class="icon log_svg" aria-hidden="true" >
                              <use xlink:href="#el-icon-erp-kucunshuliang"></use>
                          </svg>
                      </div>
                      <div class="log_d_2">
                          <p class="log_p_1"style="color:#BB4B39">{{totalCount}}</p>
                          <p class="log_p_2">在途货物数量</p>
                      </div>
                  </el-col>
              </el-card>
            </el-col>
            <el-col :span="7" >
              <el-card class="log_height">
                  <el-col :span="18" :offset="6" style="padding-top: 5rem">
                      <div class="log_d_1">
                          <svg class="icon log_svg" aria-hidden="true" >
                              <use xlink:href="#el-icon-erp-yunshu"></use>
                          </svg>
                      </div>
                      <div class="log_d_2">
                          <p class="log_p_1"style="color:#01ACED">{{num}}</p>
                          <p class="log_p_2">超时运输数量</p>
                      </div>
                  </el-col>
              </el-card>
            </el-col>
            <el-col :span="7" >
                <el-card class="log_height">
                    <el-col :span="18" :offset="6" style="padding-top: 5rem">
                        <div class="log_d_1">
                            <svg class="icon log_svg" aria-hidden="true" >
                                <use xlink:href="#el-icon-erp-baifenbi"></use>
                            </svg>
                        </div>
                        <div class="log_d_2">
                            <p class="log_p_1" style="color:#3232CD">{{employ}}</p>
                            <p class="log_p_2">用户设备使用率</p>
                        </div>
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 2rem"class="putTitle ">
         <el-col :span="24" class="log_title">在途货物列表</el-col>
         <el-col :span="24" style="box-shadow: 0px 3px 0px #E5E5E5;background-color: #ffffff">
             <el-table :data="tableData" border style="width: 100%;margin-top: 1rem;" ref="multipleTable"height=390 stripe>
                 <el-table-column prop="orderNo" label="订单编号"  align="center" :show-overflow-tooltip=true >
                 </el-table-column>
                 <el-table-column prop="receiveAddress" label="收货地址"align="center" :show-overflow-tooltip=true  >
                 </el-table-column>
                 <el-table-column prop="address" label="当前位置"  align="center" :show-overflow-tooltip=true >
                 </el-table-column>
                 <el-table-column prop="startTime" label="出发时间" align="center" :show-overflow-tooltip=true >
                 </el-table-column>
                 <el-table-column prop="useDay" label="在途天数" align="center" :show-overflow-tooltip=true >
                 </el-table-column>
             </el-table>
             <div class="pagination">
                 <el-pagination
                     @current-change ="handleCurrentChange1"
                     layout="total, prev, pager, next"
                     :total="totalCount"
                     :page-size="pageSize"
                     :current-page="currentPage"
                     >
                 </el-pagination>
             </div>
         </el-col>
    </el-row>
        <el-row style="margin-top: 2rem" class="putTitle ">
            <el-col :span="24" class="log_title">货运完成列表</el-col>
            <el-col :span="24" style="box-shadow: 0px 3px 0px #E5E5E5;background-color: #ffffff">
                <el-table :data="tableData_two" border style="width: 100%;margin-top: 1rem;" ref="multipleTable"height=390 stripe>
                    <el-table-column prop="orderNo" label="订单编号"  align="center" :show-overflow-tooltip=true  >
                    </el-table-column>
                    <el-table-column prop="receiveAddress" label="收货地址"align="center" :show-overflow-tooltip=true :min-width=180 >
                    </el-table-column>
                    <el-table-column prop="startTime" label="出发时间"  align="center":show-overflow-tooltip=true  >
                    </el-table-column>
                    <el-table-column prop="arriveTime" label="抵达时间" align="center":show-overflow-tooltip=true  >
                    </el-table-column>
                    <el-table-column prop="useDay" label="运输天数" align="center" :show-overflow-tooltip=true >
                    </el-table-column>
                    <el-table-column prop="overDay" label="延时天数" align="center" :show-overflow-tooltip=true >
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination
                        @current-change ="handleCurrentChange2"
                        layout="total, prev, pager, next"
                        :total="totalCount2"
                        :page-size="pageSize"
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
        data(){
        return {
            tableData: [],
            tableData_two: [],
            zero: false,
            totalCount: 0,
            totalCount2: 0,
            pageSize: 5,
            currentPage: 1,
            employ:"0/0",
            num:0
        }
    },
    mounted(){
        this.getData(1, this.currentPage, this.pageSize);
        this.getData(2, this.currentPage, this.pageSize);
        this.getNum();

    },

    methods: {
        getData(code, page,size){
            let self = this;
            let _url = "http://192.168.1.106:9000/onway/getOnWayResult/" + code + "/" + page + "/" + size;
            self.$axios.get(_url).then((res)=>{
                let data = res.data.retval;
                if(data.list==null){
                    this.totalCount=0;
                }else{
                    if(code==1){
                        this.tableData=data.list;
                        this.totalCount=data.total;
                    }else{
                        this.tableData_two=data.list;
                        this.totalCount2=data.total;
                    }
                }
            }).catch((e)=>{

            })
        },
        handleCurrentChange1(val){
            this.getData(1, val, this.pageSize);

        },
        handleCurrentChange2(val){
            this.getData(2, val, this.pageSize);
        },
        getNum(){
            let _url="http://192.168.1.106:9000/onway/getTitleInfo"
            let self = this;
            self.$axios.get(_url).then((res)=>{
                let data=res.data.retval;
                console.log(data)
                if(data==null){
                    this.employ="0/0";
                    this.num=0;
                }else{
                    this.num=data.overDayCount;
                    this.employ=data.bindCount+"/"+data.allCount;
                }
            }).catch((e)=>{

            });
        }

    }
    }
</script>
<style >
    .log_d_1{width: 5rem; height: 5rem;float: left}
    .log_d_2{height: 6rem;float: left}
    .log_p_1{height: 3rem;line-height: 3rem;text-align: center;font-size: 3rem}
    .log_p_2{height: 3rem;line-height: 2rem;font-size: 1.5rem}
    .log_svg{width: 5rem; height: 5rem;}
    .log_title{font-size: 2rem;height: 5rem;line-height: 5rem}
    .el-table td{height: 36px;padding: 5px 0}
    .log_height{height: 16rem;}
   /* .putTitle .el-table thead{color: #00A8EC}*/
    .putTitle .el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }
</style>
