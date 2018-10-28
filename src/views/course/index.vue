<template>
  <el-container>
    <el-header>
      <el-row  type="flex" justify="space-between" align="center">
      <div class="logo-container">
        <div>Logo</div>
        <el-button-group>
          <el-button type="text">班级</el-button>
          <el-button type="text">绘本</el-button>
        </el-button-group>
      </div>
      <div class="user-container">
        <div>
          <h2>刘忙</h2>
          <span>老师</span>
        </div>
        <div class="avatar">
          avatar
        </div>
      </div>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="end">
        <el-col :span="12">
          <el-row type="flex">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"  v-for="(item, index) in courseList" :key="index">
          <el-card  @click.native="goCourse(item.id)">
        {{item.title}}
      </el-card>
        </el-col>
        </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      options: [{
          value: '选项1',
          label: '全部套系'
        }, {
          value: '选项2',
          label: '幼儿'
        }
      ]
    };
  },

  components: {},

  computed: {
    courseList() {
      let mockArray = [];
      for (let i = 0; i < 20; i++) {
        mockArray.push({
          title: "pelle rabbit",
          id: i
        });
      }
      return mockArray;
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    goCourse(id) {
      this.$router.push('/course/' + id)
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
.el-card {
  margin-top: .1rem;
  height: 1.2rem;
}
</style>