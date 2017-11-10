=<template>
    <div>
        <el-col :span="24" style="height: 25rem">
            <el-col :span="17"class="percentage">
                <div style="text-align: center;font-size: 3.6rem;margin-top: 6rem;color: #13ce66">{{dataper.value}}%</div>
                <div style="text-align: center;font-size: 1.8rem">合格率</div>
               <div style="width: 80%;margin-top: 3rem;margin-left: 10%">
                   <el-progress :text-inside="true" :stroke-width="15" :percentage="dataper.value" :status="dataper.status"></el-progress>
               </div>
            </el-col>
        </el-col>
    </div>
</template>

<script>

    export default {
        props: ['perData'],
        data(){
        return{
           dataper:this.perData
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.perData);


    }
    }
</script>
<style>
.percentage{height: 20rem;border: solid 1px #BB4B39;margin-left: 3rem;margin-top: 2rem}



</style>
