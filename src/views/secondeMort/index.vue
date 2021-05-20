<template>
  <div class="secondeMort">
    <topImgs :imgUrl="topUrl" />
    <!-- 倒计时 -->
    <compteARebours />
    <imgsList />
  </div>
</template>

<script lang="ts">
import { Button } from "vant";
import topImgs from "./components/topImg.vue";
import compteARebours from "./components/compteARebours.vue";
import imgsList from "./components/imgsList.vue"
import { defineComponent, reactive, toRefs, computed } from "vue";
export default defineComponent({
  components: {
    topImgs,
    compteARebours,
    imgsList,
    [Button.name]: Button
  },
  name: "秒杀",
  setup() {
    const state = reactive({
      topUrl:
        "http://img2020.yixuansoft.cn/images/2/2020/12/HK2zP4rh568p211r34v1r16i21hb51.jpg/99.jpg"
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
<style lang="less" scoped>
.secondeMort {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  background-color: #f3f3f3;
  &-text {
    font-size: 12px;
    color: red;
  }
}
</style>