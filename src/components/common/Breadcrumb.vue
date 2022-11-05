<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
            {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>