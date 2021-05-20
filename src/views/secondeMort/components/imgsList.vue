<template>
  <div class="imgsList">
    <div class="imgsList-imgs" v-for="(item,index) in list" :key="index">
      <img :src="item.imgUrl" alt />
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
  setup() {
    const state = {
      list: [
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0410%252F3339758aj00qrbw8p002uc000hs00hpg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112523&t=ad2f8951e48bbeebdd6e39670358f147",
          name: "1号"
        },
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0H120155P2%2F200H1155P2-8-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112535&t=0115b8adbf53ae144ae770b9333d1f5e",
          name: "2号"
        },
        {
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3881232314,3189374806&fm=224&gp=0.jpg",
          name: "3号"
        },
        {
          imgUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2683597247,2042643916&fm=11&gp=0.jpg",
          name: "4号"
        },
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0516%252F983a43e6j00qt61ez0019c000a000hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112581&t=04be3ee1bd39bc94b90f4e03d319520d",
          name: "5号"
        },
        {
          imgUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3851060386,4226426753&fm=224&gp=0.jpg",
          name: "6号"
        },
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F202104%2F09%2F004918qisv8h2vj6x9c5bo.jpg&refer=http%3A%2F%2Fclubimg.club.vmall.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112581&t=eb3ff3334e7326d661af25013c86c357",
          name: "7号"
        },
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0428%252Fe3c044adj00qs9lc9001gc000hs012hc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112634&t=72f6c12fe49d27a555b251fab7926864",
          name: "8号"
        },
        {
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006jc8iely4gqc1o3dui0j30k00jyq3i.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624112634&t=ae436b30829dccddd47dd775efc56fe4",
          name: "9号"
        }
      ]
    };
    return {
      ...toRefs(state)
    };
  }
  //   props: {
  //     imgUrl: {
  //       type: String,
  //       default: ""
  //     }
  //   }
});
</script>
<style lang="less" scoped>
.imgsList {
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