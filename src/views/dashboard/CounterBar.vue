<template>
<div class="counter-bar-container">
<el-row type="flex" justify="space-around" class="row-container">
        <el-col v-for="(item, index) in dataList" :key="index">
          <div class="counter-container">
            <div class="indicator-container">
              <div class="counter" v-bind:style="{color: item.color}">{{item.count}}</div>
              <div>{{item.title}}</div>
            </div>
          <div class="title-container">
            {{item.label}}
          </div>
          </div>
          
          </el-col>
    </el-row>
</div>
   
</template>
<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.counter-bar-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.row-container {
  flex: 1;
  max-width: 12rem;
}
.counter-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.indicator-container {
  height: 128px;
    width: 128px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.counter {
  font-size: .45rem;
  font-weight: 600;
}
.title-container {
  padding: .15rem 0;
  font-weight: 600;
}
</style>

