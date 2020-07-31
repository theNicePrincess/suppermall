<template>
  <div class="detail" id="detail">
    <DetailNavBar class="detail-nav" />
    <scroll ref="scroll" class="scrollBox">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods" />
      <detail-shop-info :shopInfo="shop" />
      <detail-goods-info  @imageLoad="imageLoad" :detailInfo="detailInfo" />
      <detail-par-info :paramsInfo="paramsInfo" />
      <detail-com-info />
    </scroll>
  </div>

</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParInfo from "./childComps/DetailParInfo";
  import DetailComInfo from "./childComps/DetailComInfo";
  import { getDetail,GoodsInfo,Shop } from 'network/detail'
  import Scroll from "components/common/scroll/Scroll"
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "common/mixin";

  export default {
    name: "Detail",
    data(){
      return {
        id:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        itemImgListener:null
      }
    },
    created() {
      // 1、保存传入的id
      this.id = this.$route.params.id

      // 2、根据id请求详情页面数据
      getDetail(this.id).then(res => {
        const data = res.data.result;
        // 1、获取顶部轮播图数据
        this.topImages = data.itemInfo.topImages;

        // 2、获取商品信息
        this.goods = new GoodsInfo(data.itemInfo,data.columns,data.services)

        // 3、创建店铺信息
        this.shop = new Shop(data.shopInfo)

        // 4、获取商品详情信息
        this.detailInfo = data.detailInfo

        // 4、获取参数信息
        this.paramsInfo = data.itemParams

      })
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParInfo,
      DetailComInfo
    },
    mixins:[itemListenerMixin],
    methods:{
      imageLoad(){
        this.$refs.scroll.ref();
      }
    },
    mounted() {
      //使用mixin（混入）
      /*let newRefresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = () => {
        newRefresh();
      }
      this.$bus.$on('itemImgLoad',this.itemImgListener)*/
    },
    destroyed() {

    }
  }
</script>

<style scoped>
.detail{position: relative;z-index: 9;background-color: #fff;height: 100vh;}
  .scrollBox{height:calc( 100% - 44px)}
  .detail-nav{position: relative;background-color: #fff;z-index: 9;}
</style>
