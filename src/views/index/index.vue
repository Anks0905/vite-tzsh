<template>
  <div class="index">
      <!-- 子路由出口 -->
      <router-view></router-view>
      <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/" icon="home-o">shouye</van-tabbar-item>
        <van-tabbar-item replace to="/world" icon="search">秒杀</van-tabbar-item>
        <van-tabbar-item replace to="/hello" icon="friends">团购</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="manager">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Tabbar, TabbarItem } from "vant";
export default defineComponent({
  name: "index",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const state = reactive({
      active: "/hello"
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>