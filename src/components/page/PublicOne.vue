<template>
   <el-row>


           <el-col :md="24" :xs="24" :sm="24" >
                <div class="titleCenter font">3</div>
               <div class="titleCenter">预计可使用天数</div>
               <div class="remind">提醒：</div>
               <div class="remindText">电石库存较低，未来7天计划到货700吨</div>
            </el-col>



   </el-row>
</template>

<script>
    export default {
        data() {
        return {

        }
    },
    created(){

    },
    methods: {



    }
    }
</script>

<style >

    .el-table__fixed-header-wrapper thead div,.el-table__header-wrapper thead div {
        color:rgb(255, 255, 255);
        background-color:rgb(1, 172, 237)
    }

    .titleCenter{text-align: center;color: #BB4B39;font-size: 1.8rem;height: 6rem}
    .font{font-size: 3.6rem;height: 6rem;line-height: 8rem;}
    .remind{font-size: 1.6rem;height: 2rem}
    .remindText{font-size: 1.8rem;padding-left: 4rem;height:6rem}
</style>
