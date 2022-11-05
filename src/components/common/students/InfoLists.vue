<template>
  <div>
    <!-- 新增 -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
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
      <!-- 按钮和方法 -->
      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-edit" @click="edit(scope.row)">
          </el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.row)">
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗表格 -->
    <el-dialog :title="state ? '添加学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="父亲姓名" :label-width="formLabelWidth" prop="father">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="母亲姓名" :label-width="formLabelWidth" prop="mather">
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="家庭住址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="入校时间" :label-width="formLabelWidth" prop="time">
          <el-date-picker v-model="form.time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="联系方式" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  
<script>
import { getData, changeInfo, delDate } from '@/utils/table'

export default {
  data() {
    return {
      // 初始化数据
      tableData: [],
      // 默认隐藏弹窗
      dialogFormVisible: false,
      // 初始化表单
      form: {
        name: '',
        sex: '1',
        age: '',
        father: '',
        mather: '',
        address: '',
        time: '',
        phone: '',
      },
      // 初始化total值
      total: 0,
      // 控制修改添加信息title
      state: true,
      // 弹窗表格的大小
      formLabelWidth: '80px',
      // 弹窗表格简单的检验
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        sex: [{ required: true }],
        age: [{ required: true, message: '请输入年龄' }],
        address: [{ required: true, message: '请输入地址' }],
        time: [{ required: true, message: '请输入入学时间' }],
        phone: [{ required: true, message: '请输入联系方式' }],
      }
    }
  },
  // vue挂载钩子 调用getData获取表单方法
  created() {
    getData(this, '/info')
  },
  methods: {
    // 修改
    edit(row) {
      // 传参改为伪数组
      this.form = { ...row }
      // 更改弹窗title信息
      this.state = false
      // 弹出弹窗
      this.dialogFormVisible = true
    },
    // 取消按钮 隐藏弹窗
    closeInfo() {
      this.dialogFormVisible = false
    },
    // 删除
    del(row) {
      delDate(this, '/info', row.id, getData)
    },
    // 添加
    addStudent() {
      // 初始化表格
      this.form = {
        name: '',
        sex: '1',
        age: '',
        father: '',
        mather: '',
        address: '',
        time: '',
        phone: '',
      },
        // 修改表单title
        this.state = true
      // 弹出弹窗
      this.dialogFormVisible = true
      // 清除表单验证
      this.$refs.form.resetFields()
    },
    // 新增与修改方法
    sure(form) {
      console.log(this.form);
      // 能否通过检验
      this.$refs[form].validate(valid => {
        // 通过检验 调用方法
        if (valid) {
          console.log(form, this.form);
          let method = ''
          // 根据method 的值调用新增与删除信息
          this.state ? method = 'post' : method = 'put'
          // 调用changeInfo封装方法
          changeInfo(this, method, '/info', this.form, getData)
        }
      })

    },

  }
}
</script>
  
<style>

</style>