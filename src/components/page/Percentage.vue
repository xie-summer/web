=<template>
    <div>
        <el-col :span="24" style="height: 25rem">
            <div class="percentage">
                <div style="text-align: center;font-size: 3.6rem;margin-top: 6rem;color: #13ce66">{{percentageData}}%</div>
                <div style="text-align: center;font-size: 1.8rem">合格率</div>
               <div style="width: 20rem;margin-top: 3rem;margin-left: 5rem">
                   <el-progress :text-inside="true" :stroke-width="15" :percentage="percentageData" :status="status"></el-progress>
               </div>
            </div>
        </el-col>
    </div>
</template>

<script>

    export default {
        data () {
        return {
            percentageData:98,
            status:'success'
        }
    },
    methods:{

    },
    mounted(){

    }
    }
</script>
<style>
.percentage{width: 30rem;height: 20rem;border: solid 1px #BB4B39;margin-left: 8rem}



</style>
