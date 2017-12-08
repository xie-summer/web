<template>
    <div class="back">
        <div class="crumbs" style="margin-bottom: 20px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 人工录入</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
       <el-row>
           <el-col :span="16":offset="4" class="enter">
               <div class="enter_title">请录入以下信息</div>
               <el-col :span="22":offset="2" style="margin-bottom: 1rem;padding-left: 4rem">
                       <el-date-picker
                           @change="(value) => changeHandler(value)"
                           placeholder="请选择时间"
                           v-model="value6"
                           align="left"
                           :editable="zreo"
                           :picker-options="pickerOptions"
                           >
                       </el-date-picker>
               </el-col>
               <el-col :span="22":offset="2"class="enter_remind" v-if="num>0">您还有其他{{num}}天的数据未录入，点击日历，选择日期，去补录吧</el-col>
               <el-col :span="18":offset="2">
                   <el-form ref="ruleForm" :model="ruleForm" label-width="15rem" :status-icon="status" :rules="rules">
                       <el-form-item label="磷钙入库量(晚班)" prop="capNight" auto-complete="off">
                           <el-input  v-model.number="ruleForm.capNight"placeholder="请输入磷钙入库量:单位(吨)"></el-input>
                       </el-form-item>
                       <el-form-item label="磷钙入库量(早班)" prop="capMorning">
                           <el-input  v-model.number="ruleForm.capMorning"placeholder="请输入磷钙入库量:单位(吨)"></el-input>
                       </el-form-item>
                       <el-form-item label="磷钙入库量(中班)" prop="capNon">
                           <el-input  v-model.number="ruleForm.capNon"placeholder="请输入磷钙入库量:单位(吨)"></el-input>
                       </el-form-item>
                       <el-form-item label="普钙入库量(晚班)" prop="calNight">
                           <el-input  v-model.number="ruleForm.calNight"placeholder="请输入普钙入库量:单位(吨)"></el-input>
                       </el-form-item>
                       <el-form-item label="普钙入库量(早班)" prop="calMorning">
                           <el-input  v-model.number="ruleForm.calMorning"placeholder="请输入普钙入库量:单位(吨)"></el-input>
                       </el-form-item>
                       <el-form-item label="普钙入库量(中班)" prop="calNon">
                           <el-input  v-model.number="ruleForm.calNon"placeholder="请输入普钙入库量:单位(吨)"></el-input>
                       </el-form-item>

                       <el-form-item style="text-align: center">
                           <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                       </el-form-item>
                   </el-form>
               </el-col>
           </el-col>
       </el-row>

    </div>
</template>
<script>
   /* var qs = require('qs');*/

    export default {
        data() {
            return {
                status:true,
                value6: new Date(),
                zreo:false,
                ruleForm: {
                    capNight: '',
                    capMorning: '',
                    capNon: '',
                    calNight: '',
                    calMorning: '',
                    calNon: ''

                },
                num:"0",
                pickerOptions: {
                    disabledDate(time) {
            return time.getTime() > Date.now();
        }
    },
                rules: {
                    capNight: [
                        { required: true, message: '内容不能为空'}
                    ],
                    capMorning: [
                        { required: true, message: '内容不能为空'}
                    ],
                    capNon: [
                        { required: true, message: '内容不能为空'}
                    ],
                    calNight: [
                        { required: true, message: '内容不能为空'}
                    ],
                    calMorning: [
                        { required: true, message: '内容不能为空'}
                    ],
                    calNon: [
                        { required: true, message: '内容不能为空'},
                    ]
                }
            };
        },

   mounted(){
       /* this.queryNum(this.value6.format("YYYY-MM-dd"));*/
       this.$axios({
           url:"http://test.neweplatform.com:6002/into/the/factory/records/2017-12-08",
           headers: {'Authorization': 'Basic dXNlcjp1c2Vy'},
           withCredentials:true,
           adapter: function (config) {
               console.log(config)
           },
           transformResponse: [function (data) {
               // 对 data 进行任意转换处理

             console.log(data)
           }],

       })
    },
    methods: {
        changeHandler:function(value){
            let _self = this;
            let _url_=self.$url+"/panoramic/inventory/entry/"+value.format("YYYY-MM-dd");
            console.log(_url_)
            _self.$axios.get(_url_).then((res)=>{
                let data = res.data.retval;
                console.log(data)
                for(let i of data){
                    if("HG01XY750510"== i.code){
                        if("早班"== i.schedule){
                            this.ruleForm.capMorning = i.value;
                        }
                        if("中班"== i.schedule){
                            this.ruleForm.capNon = i.value;
                        }
                        if("晚班"== i.schedule){
                            this.ruleForm.capNight = i.value;
                        }
                    }
                    if("HG01XY750410"== i.code){
                        if("早班"== i.schedule){
                            this.ruleForm.calMorning = i.value;
                        }
                        if("中班"== i.schedule){
                            this.ruleForm.calNon = i.value;
                        }
                        if("晚班"== i.schedule){
                            this.ruleForm.calNight = i.value;
                        }
                    }
                }
            })

        },
        submitForm(formName) {
            let self =this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    let arr=[
                        {
                            name:"磷钙",
                            value:this.ruleForm.capNight,
                            code:"HG01XY750510",
                            inOrOut:1,
                            schedule:1,
                            deleteFlag:1,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        },
                        {
                            name:"磷钙",
                            value:this.ruleForm.capMorning,
                            code:"HG01XY750510",
                            inOrOut:1,
                            schedule:2,
                            deleteFlag:1,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        },
                        {
                            name:"磷钙",
                            value:this.ruleForm.capNon,
                            code:"HG01XY750510",
                            inOrOut:1,
                            schedule:3,
                            deleteFlag:1,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        },
                        {
                            name:"普钙",
                            value:this.ruleForm.calNight,
                            code:"HG01XY750410",
                            inOrOut:1,
                            deleteFlag:1,
                            schedule:1,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        },
                        {
                            name:"普钙",
                            value:this.ruleForm.calMorning,
                            code:"HG01XY750410",
                            inOrOut:1,
                            deleteFlag:1,
                            schedule:2,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        },
                        {
                            name:"普钙",
                            value:this.ruleForm.calNon,
                            code:"HG01XY750410",
                            inOrOut:1,
                            schedule:3,
                            deleteFlag:1,
                            unit:"吨",
                            ctime:this.value6.format("YYYY-MM-dd"),
                            utime:this.value6.format("YYYY-MM-dd"),
                            fId:2,
                        }
                    ];

                  /* self.$axios.post('http://user:user@192.168.10.145:9000/panoramic/inventory/entry',
                            qs.stringify({"panoramicInventoryEntryList":JSON.stringify(arr)}),{
                            headers: {
                                "Authorization": "Basic dXNlcjp1c2Vy",
                                "content-type":"application/json"
                            }
                        }

                    ).then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                            console.log(error);
                        });*/
                 /*   this.$refs[formName].resetFields();*/
                 /*  self.$axios({
                        method:'post',
                        url:'http://user:user@192.168.1.106:6002/panoramic/inventory/entry',
                       data:{
                           param:{
                               "panoramicInventoryEntryList":JSON.stringify(arr)
                           }
                        },
                        headers: {
                            "Authorization": "Basic dXNlcjp1c2Vy",
                            "content-type":"application/json"
                        },
                        withCredentials : true
                    }).then((res)=>{

                    })*/
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        queryNum(date){
            let self = this;
            var _url =self.$url+ "/panoramic/inventory/entry/msg/"+date;
            self.$axios.get(_url).then((res)=>{

            })

        }

    }
    };
</script>
<style scoped>
    .enter{margin-top:3%;}
    .enter_title{width: 100%;height: 5rem;line-height: 5rem;text-align: center;font-size: 3.6rem;margin-bottom: 5rem;}
    .enter_remind{font-size: 1.2rem;line-height: 5rem;height: 5rem;color: red;margin-bottom: 2rem;padding-left: 4rem}
</style>
