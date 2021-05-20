<template>
  <div class="topImg">
    <div class="topImg-imgs">
      <img :src="imgUrl" alt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { Button } from "vant";
export default defineComponent({
  components: {
    [Button.name]: Button
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    }
  }
});
</script>
<style lang="less" scoped>
.topImg {
  width: 100%;
  height: 100%;
  &-imgs {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>