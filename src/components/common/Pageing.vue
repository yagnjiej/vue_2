<template>
    <div>
        <!-- 分页列表 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[5, 10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total" :url="url">
        </el-pagination>
    </div>
</template>

<script>
import { getTableData } from '@/utils/table'
export default {
    props:{
        'total':Number,
        'url':String
    },
    data() {
        return {
            page: 1,
            size: 10
        }
    },
    created() {
    getTableData(this.$parent, '/works',
      {
        page: this.page,
        size: this.size
      },
      ['completed'])
  },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            this.currentPage = 1
            getTableData(this.$parent, '/works', { page: this.page, size: val }, ['completed'])
        },
        handleCurrentChange(val) {
            this.currentPage = val
            getTableData(this.$parent, '/works', { page: val, size: this.size }, ['completed'])
        },
    }
}
</script>

<style>

</style>