<template>
  <el-container class="main-container">
    <el-header height=".5rem" class="sub-header">
      我的仪表盘
    </el-header>
    <el-main>
      <el-row type="flex" justify="center" align="middle"  class="greeting-bar">
        你好，{{username}}，欢迎
      </el-row>
      <counter-bar :data-list="dataList"></counter-bar>
      
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="12" class="news-container">
          <el-card class="news-card" :body-style="{height: '3rem'}">
            <div slot="header" class="card-header">
              <span class="title">最近的项目数量</span>
              <el-select v-model="projectDuration" placeholder="请选择">
                <el-option
                  v-for="item in durations"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <template>
              <ve-histogram :data="chartData" :settings="chartSettings" :height="'3rem'" :grid="{bottom: 0}" :colors="colorArray"></ve-histogram>
            </template>
          </el-card>
        </el-col>
        <el-col :span="12" class="news-container">
          <el-card :body-style="{height: '3rem'}">
            <div slot="header" class="card-header">
              <span class="title">项目状态</span>
            </div>
            <section class="">
                <div class="news-entry" v-for="(item, index) in statusList" :key="index">
                      <span class="news-title">{{item.title}}</span>
                    <span>{{item.status | formatStatus}}</span>
                </div>
            </section>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="12" class="news-container">
          <el-card :body-style="{height: '3rem'}">
            <div slot="header" class="card-header">
              <span class="title">类别比列</span>
              <el-select v-model="ratioDuration" placeholder="请选择">
                <el-option
                  v-for="item in durations"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <template>
              <ve-pie :data="chartData" :settings="chartSettings" :height="'3rem'" :grid="{bottom: 0}" :colors="colorArray"></ve-pie>
            </template>
          </el-card>
        </el-col>
        <el-col :span="12" class="news-container">
          <el-card :body-style="{height: '3rem', overflowY: 'auto'}">
            <div slot="header" class="card-header">
              <span class="title">公告</span>
              <el-select v-model="winDuration" placeholder="请选择">
                <el-option
                  v-for="item in durations"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <section class="">
                <div class="news-entry" v-for="(item, index) in winList" :key="index">
                      <span class="news-title">{{item.title}}</span>
                    <span>{{item.date}}</span>
                </div>
            </section>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import CounterBar from './CounterBar.vue'

export default {
  name: 'Dashboard',
  components: {
    CounterBar
  },
  data() {
    this.chartSettings = {
        stack: { '总数': ['准备中', '进行中', '完成'] },
       
      }
    return {
      username: '',
      projectDuration: 30,
      ratioDuration: 30,
      winDuration: 30,
      colorArray: ['#648fff', '#e4adea', '#9753e1' ],
      durations: [
        {label:'最近7天', value: 7},
        {label:'最近30天', value: 30},
        {label:'最近一年', value: 365}
        ],
      dataList: [{count: 10, title: '项目等待', label: '准备', color: '#3c6df0'},
      {count: 1, title: '正在',  label: '进行', color: '#00aa5e'},
      {count: 20, title: '项目已完成',  label: '已完成'}
      ],
      chartData: {
          columns: ['日期',  '准备中', '进行中', '完成'],
          rows: [
            { '日期': '8月11日', '准备中': 75, '进行中': 45, '完成': 20  },
            { '日期': '8月12日', '准备中': 42, '进行中': 30, '完成': 30 },
            { '日期': '8月13日', '准备中': 39, '进行中': 52, '完成': 40 },
            { '日期': '8月14日', '准备中': 4, '进行中': 0, '完成': 15 },
            { '日期': '8月15日', '准备中': 2, '进行中': 12, '完成': 3 },
            { '日期': '8月16日', '准备中': 39, '进行中': 52, '完成': 40 }
          ]
        },
        statusList: [
          {title: '中铁十六局呼市地铁2号线8标三级箱', status: 1},
          {title: '中铁十六局呼市地铁2号线8标三级箱', status: 2},
          {title: '中铁十六局呼市地铁2号线8标三级箱',  status: 3},
          {title: '中铁十六局呼市地铁2号线8标三级箱',  status: 4},
          {title: '中铁十六局呼市地铁2号线8标三级箱', status: 5},
          {title: '中铁十六局呼市地铁2号线8标三级箱', status: 6}
        ],
        winList: [
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'},
          {title: '中铁十六局呼市地铁2号线8标三级箱', date: '2018-08-10'}
        ]
    }
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem('user')).name
  }
}
</script>
<style lang="scss">
.main-container {

}
.sub-header {
  font-size: .16rem;
  font-weight: 600;
  line-height: .5rem;
  background: #fff;
  box-shadow: 0 1px 0 0 #DEDFDF;
}
.greeting-bar {
  padding-bottom: .2rem;
  font-size: .16rem; 
}
.news-container {
  max-width: 6rem;
  margin-bottom: .2rem;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: .4rem;
  padding: 0 0 0 .15rem;
  & .title {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  & .el-select {
    width: 1.2rem;
  }
  
  & .el-input__inner {
    border: 0px solid;
    border-left: 1px solid #c0bfc0;
  }
}

.news-entry {
  display: flex;
  justify-content: space-between;
  height: .35rem;
}

.news-title::before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: .08rem;
  color: #3c6df0;
  font-size: .16rem;
}
</style>
