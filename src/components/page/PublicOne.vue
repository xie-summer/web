<template>
   <el-row>
           <el-col :md="24" :xs="24" :sm="24" >
               <div>
                   <div v-if="data.bool">

                       <div class="remindTwo ">
                           <div style="width: 7rem;float:left;height: 7rem;background-color:#01ACED">
                               <img class="user-logo" src="../../../static/img/tianshu.png" style="width: 60%;height: 60%;padding-left: 20%;padding-top:20%">
                           </div>
                           <div class="titleCenter font">{{data.num}}</div>
                           <div class="titleCenter">预计可使用天数</div>
                       </div>
                   </div>
               </div>
               <div class="remind ">
                   <div style="width: 7rem;float:left;height: 7rem;background-color: #BB4B39">
                       <!--<svg class="icon" aria-hidden="true"style="width: 8rem;height: 8rem;color: #000000;float: left">
                           <use xlink:href="#el-icon-erp-jinggao"></use>
                       </svg>-->
                       <img class="user-logo" src="../../../static/img/tixing.png" style="width: 60%;height: 60%;padding-left: 20%;padding-top:20%">
                   </div>
                   <div class="remindText" >{{data.remindtext}}</div>
               </div>

            </el-col>
   </el-row>
</template>

<script>
    export default {
        props:['publicData'],
        data() {
        return {
            data:this.publicData
        }
    },
    created(){

    },
    methods: {



    }
    }
</script>

<style scoped>

    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }

    .titleCenter{text-align: center;color: #BB4B39;font-size: 1.8rem;height: 4rem}
    .font{font-size: 3.6rem;height: 4rem;line-height:4rem}
    .remind{font-size: 1.6rem;height: 7rem;float: left;width: 70%;border: 1px solid #BB4B39;margin-left:15%;margin-top: 5%}
    .remindTwo{font-size: 1.6rem;height: 7rem;float: left;width: 70%;border: 1px solid #01ACED;margin-left:15%;margin-top: 1%}
    .remindText{font-size: 1.5rem;width:55%;height:5rem;word-break:break-all;float: left;padding-left: 1.5rem;padding-top: 1rem}
</style>
