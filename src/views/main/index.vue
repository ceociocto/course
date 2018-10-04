<template>
  <el-container class="main-container">
    <el-header type="primary" height=".5rem" class="main-header-container">
      <el-col class='logo-container' :span="8">
        <el-col :span="2" class="splitter"></el-col>
        <el-col :span="14" class="office">
          <p>xxx</p>
        </el-col>
      </el-col>
      
      <el-col :span="6">
      <el-tabs v-model="activeName" router="true" background-color="#545c64" class="tab-header" @tab-click="handleClick">
        <el-tab-pane label="仪表盘" name="dashboard"></el-tab-pane>
        <el-tab-pane label="列表" name="project-list"></el-tab-pane>
      </el-tabs>
       </el-col>
       <el-col :span="11">
            <el-row :gutter="28" type="flex" justify="end" align="middle" class="tool-bar-container">
              <el-col :span="21">
              <el-collapse-transition>
                <div v-show="false">
                  <el-input placeholder="请输入内容">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </div>
              </el-collapse-transition>
              </el-col>
              <el-col :span="1">
              <i class="el-icon-search light" @click="showSearch = !showSearch"></i>
              </el-col>
              <el-col :span="1">
                <i class="el-icon-bell light"></i>
              </el-col>
              <el-col class="splitter-container" :span="1">
                <div class="splitter"></div>
              </el-col>
            </el-row>
       </el-col>
        <el-col :span="4" class="menu-container">
          <el-menu background-color="#1d3548" text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>{{username}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="logout">退出</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>
<script>
export default {
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

