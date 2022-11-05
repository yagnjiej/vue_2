<template>
  <div>
    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" align='center'></el-table-column>
      <el-table-column prop="sex" label="性别" align='center'></el-table-column>
      <el-table-column prop="age" label="年龄" align='center'></el-table-column>
      <el-table-column prop="father" label="父亲" align='center'></el-table-column>
      <el-table-column prop="mather" label="母亲" align='center'></el-table-column>
      <el-table-column prop="address" label="家庭地址" align='center'></el-table-column>
      <el-table-column prop="time" label="入校时间" align='center'></el-table-column>
      <el-table-column prop="phone" label="联系方式" align='center'></el-table-column>
    </el-table>
  </div>
</template>
  
<script>
import { getData,} from '@/utils/table'

export default {
  data() {
    return {
      tableData: [],
      formLabelWidth: '80px',
    }
  },
  created() {
    getData(this, '/info')
  },

}
</script>
  
<style>

</style>