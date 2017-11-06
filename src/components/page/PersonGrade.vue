=<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 评分</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <el-row>
            <el-col :span="3" class="border">
                <el-col :span="12">
                    <img class="user-logo" src="../../../static/img/1.jpg">
                </el-col>
                <el-col :span="12">
                    <span style="color:#ff9900;padding-left:20px">{{value}}分</span>
                    <el-rate v-model="value" disabled  text-color="#ff9900"font-size="5px" >
                    </el-rate>
                    <span>姓名：{{name}}</span>
                </el-col>
            </el-col>
            <el-col :span="8" class="border">
                <img class="user-logo" src="../../../static/img/1.jpg">
            </el-col>
            <el-col :span="8" class="border">
                <img class="user-logo" src="../../../static/img/1.jpg">
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .user-logo{
        width: 6rem;
        height: 10rem;
    }
    .border{border: 1px solid #5e7382}
    .el-rate__icon{font-size: 0.7rem}
</style>
<script>
    export default {
        data() {
        return {
            value: 5,
            name:'张三'
        }
    }
    }

</script>
