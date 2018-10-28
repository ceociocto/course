<template>
  <el-container>
    <el-header>
     <top-header></top-header>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4">

           <el-menu
      default-active="2">
      <h2>xx教育集团</h2>
      <h3>刘老师</h3>
       <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">国际二班</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">国际二班</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">国际二班</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">国际二班</span>
      </el-menu-item>
    </el-menu>
        </el-col>
        <el-col :span="20">
          <el-table
      :data="tableData"
      height="80vh"
      style="width: 100%;"
      header-row-class-name="table-header">
      <el-table-column
        prop="username"
        label="学生姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="account"
        label="账号"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
    </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getStudentList } from "@/api/student";
import TopHeader from '@/components/TopHeader'
export default {
  name: "",
  props: [""],
  data() {
    return {
      tableData: []
    };
  },

  components: {TopHeader},

  computed: {},

  beforeMount() {},

  mounted() {
    this.loadStudentList()
  },

  methods: {
    loadStudentList() {
      // getStudentList().then(res => {
      //   this.tableData = res
      // })
    this.tableData = getStudentList()
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.logo-container {
  display: flex;
  align-items: center;
}
.user-container {
  display: flex;
  align-items: center;
}
.el-table {
  border-radius: .06rem;
  box-shadow: 10px 10px 5px #efefef;
}
.el-table /deep/ th {
  background: #ffd003
}
</style>