<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <el-row type="flex" justify="space-between">
        <span>
          《{{course.title}}》
        </span>
      </el-row>
      <el-row>
        <el-carousel trigger="click" height="80vh">
      <el-carousel-item v-for="item in 4" :key="item">
        <h1>{{ item }}</h1>
      </el-carousel-item>
    </el-carousel>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        course: {
          title: 'Title of the picture book'
        }
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      goList() {
        this.$router.push('/course-list')
      }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
    .el-carousel__item  {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .el-carousel__item h1 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>