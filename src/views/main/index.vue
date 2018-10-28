<template>
  <el-container class="main-container">
    <el-header>
      <top-header></top-header>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>
<script>
import TopHeader from '@/components/TopHeader'
export default {
  components: {TopHeader},
  data() {
    return {
      showSearch: false,
      projectVisible: false,
      username: ''
    }
  },
  computed: {
    activeName() {
      if (this.$route.path.split('/')[1] == 'project') {
        return 'project-list'
      }
      return this.$route.path.split('/')[1] || 'dashboard'
    }
  },
  created() {
    this.checkAuth()
  },
  methods: {
    handleClick(tab) {
      this.$router.push({ path: '/' + tab.name })
    },
    logout() {
      sessionStorage.clear()
      this.$router.push('/login')
    },
    checkAuth() {
      // 下面注释掉的代码用于检查权限
      // if (!sessionStorage.user) {
      //   this.$router.push('/login')
      //   return
      // }
      this.username = JSON.parse(sessionStorage.getItem('user')).name
    }
  }
}
</script>
<style lang="scss">
.main-container {
  height: 100%;
}
.main-header-container {
  display: flex !important;
  align-items: center;
  padding: 0 0 0 .2rem !important;
  background: #1d3548;
  
  & .logo-container{
    min-width:320px;

    .icon {
      margin: 9.5px 0;
      width:36px;
    }

    .label {
      margin-top: 13px;
      width:75px;
    }

    .splitter{
      width: 1px;
      height:40px;
      margin: 10px 10px 0;
      background-color:white;
    }

    & .office {
      margin-top: 15px;

      & p{
        margin:0;
        padding:0;
        color: #fff;
        font-size: 12px;
        
        line-height: 0.15rem;
      }

      & p:last-child{
        font-weight: 300;
      }
    }

    
  }
  

  & .el-tabs__header {
    margin: 0;
  }
  & .el-tabs__item {
    font-size: .16rem;
    font-weight: 300;
    color: #fff !important;
  }
  & .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  & .el-tabs__active-bar {
    height: 3px;
    background-color: #fff;
  }
  & .el-menu {
    border: 0;
  }
  & .el-submenu {
    width: 200px;
  }
  & .el-submenu__title {
    height: .5rem;
    line-height: .5rem;
    & i {
      font-size: .16rem;
      color: #fff;
    }
  }
  & .el-menu-item {
    min-width: 0 ;
  }
  & .menu-container {
      z-index: 1;
      align-self: start;
  }
  & .tool-bar-container {
    
    & i {
      font-size: .16rem;
    }
    & .light {
       color: #fff;
    }
    & .el-icon-search, .el-icon-bell{
      margin-top: 3px;
    }
  }
  & .splitter-container{
    width: 1px;
    z-index:2;

    & .splitter {
      width: 1px;
      height: .2rem;
      background: #fff;
    }
  }
  
  & .banner-button {
    color: #fff;
    & i {
      color: #fff;
    }
    & :hover {
      color: #fff;
    }
  }
}
</style>

