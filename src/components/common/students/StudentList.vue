<template>
  <div class="studentlist">
    <!-- 查询 重置 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" >
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 学生表单列表 -->
    <!-- slice((当前页数-1)*每页条数,当前页数*当前条数) -->
    <!-- <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" stripe style="width: 100%"> -->
    <el-table :data="compData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" align='center'></el-table-column>
      <el-table-column prop="sex_text" label="性别" align='center'></el-table-column>
      <el-table-column prop="age" label="年龄" align='center'></el-table-column>
      <el-table-column prop="number" label="学号" align='center'></el-table-column>
      <el-table-column prop="class" label="班级" align='center'></el-table-column>
      <el-table-column prop="state_text" label="状态" align='center'></el-table-column>
      <el-table-column prop="address" label="地址" align='center'></el-table-column>
      <el-table-column prop="phone" label="联系方式" align='center'></el-table-column>
      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页列表 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
  
<script>
import { student, studentDel } from '@/api/api';
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,//当前页数
      pageSize: 10,//每页条数
      total: 0,//总条数
      formInline: {
        name: '',
      }
    }
  },
  created() {
    this.getData()
  },
  computed: {

    // 计算
    compData() {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  methods: {
    // 查询
    find() { 
      this.getData(this.formInline)
    },
    // 重置
    reset() { 
      // 清空 查询
      this.formInline={}
      this.getData(this.formInline)
    },
    // 获取数据
    getData(params) {
      student(params).then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          // 赋值为请求过来的值
          this.tableData = res.data.data;
          this.total = res.data.total
          // 遍历 转换修改sex_text 的值
          this.tableData.forEach(item => {
            item.sex === '1' ? item.sex_text = '男' : item.sex_text = '女'
            item.state === '1' ? item.state_text = '已入学'
              : item.state === '2' ? item.state_text = '未入学'
                : item.state_text = '休学中'
          })
        }
      })

    },
    // 分页方法
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`);
    },
    // 删除方法
    del(row) {
      // 拿id
      studentDel(row.id).then(res => {
        // 为200及请求成功
        if (res.data.status === 200) {
          this.$message({ message: "删除成功", type: 'success' })
          // 获取最新数据
          this.getData()
        }
      }
      )
    },
  }
}
</script>
  
<style scoped lang="scss">
.studentlist {

  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>