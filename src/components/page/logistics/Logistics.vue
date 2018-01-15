<template>
    <div class="back" style="min-width: 1055px">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 在途资产</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <el-row style="margin-bottom: 3rem">
            <el-col :span="4" :offset="20">
                <div style="float: right">
                    <el-date-picker
                        @change="(value) => changeHandler(value)"
                        placeholder="请选择时间"
                        v-model="valueDate"
                        align="left"
                        :editable="zreo"
                        :picker-options="pickerOptions"
                        >
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row  type="flex" justify="space-between">
            <el-col :span="7" >
              <el-card class="log_height">
                  <el-col :span="18" :offset="6" style="padding-top:5rem">
                      <div class="log_d_1">
                          <svg class="icon log_svg" aria-hidden="true" >
                              <use xlink:href="#el-icon-erp-num"></use>
                          </svg>
                      </div>
                      <div class="log_d_2">
                          <p class="log_p_1">5</p>
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
                          <p class="log_p_1">5</p>
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
                            <p class="log_p_1">5/24</p>
                            <p class="log_p_2">设置用户使用率</p>
                        </div>
                    </el-col>
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top: 4rem"class="putTitle ">
         <el-col :span="24" class="log_title">在途货物列表</el-col>
        <el-table :data="tableData" border style="width: 100%;margin-top: 1rem;" ref="multipleTable"height=390 stripe>

            <el-table-column prop="a" label="订单编号"  align="center" >
            </el-table-column>
            <el-table-column prop="b" label="收货地址"align="center"  >
            </el-table-column>
            <el-table-column prop="c" label="当前位置"  align="center" >
            </el-table-column>
            <el-table-column prop="d" label="出发时间" align="center" >
            </el-table-column>
            <el-table-column prop="e" label="在途天数" align="center" >
            </el-table-column>

        </el-table>
    </el-row>
        <el-row style="margin-top: 4rem" class="putTitle ">
            <el-col :span="24" class="log_title">货运完成列表</el-col>
            <el-table :data="tableData_two" border style="width: 100%;margin-top: 1rem;" ref="multipleTable"height=390 stripe>

                <el-table-column prop="a" label="订单编号"  align="center"  >
                </el-table-column>
                <el-table-column prop="b" label="收货地址"align="center"  >
                </el-table-column>
                <el-table-column prop="c" label="出发时间"  align="center" >
                </el-table-column>
                <el-table-column prop="d" label="抵达时间" align="center" >
                </el-table-column>
                <el-table-column prop="e" label="运输天数" align="center" >
                </el-table-column>
                <el-table-column prop="f" label="延时天数" align="center" >
                </el-table-column>
            </el-table>
        </el-row>

    </div>
</template>
<script>

    export default {
        data(){
        return {
            tableData:[{a:1,b:1,c:1,d:1,e:1}],
            tableData_two:[{a:1,b:1,c:1,d:1,e:1,f:1}],
            valueDate:new Date(),
            zreo:false,
            pickerOptions: {
                disabledDate(time) {
            return time.getTime() > Date.now();
        }
    },
        }

    },
    mounted(){},

    methods: {


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
    .putTitle .el-table thead{color: #00A8EC}
</style>
