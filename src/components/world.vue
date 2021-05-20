<template>
  <div class="helloWorld">
    <button @click="getCount">count is: {{ count }}</button>
    <div class="helloWorld-text">312312312312321</div>
    <van-button type="primary">主要按钮121312</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { Button } from "vant";
export default defineComponent({
  components: {
    [Button.name]: Button
  },
  name: "home",
  setup() {
    const state = reactive({
      count: 0
    });
    const getCount = () => {
      state.count++;
    };
    return {
      ...toRefs(state),
      getCount
    };
  }
});
</script>
<style lang="less" scoped>
.helloWorld {
  width: 100%;
  height: 100%;
  &-text {
    font-size: 24px;
    color: red;
  }
}
</style>