<template>
  <div class="detail" id="detail" @mousewheel.prevent>
    <detail-nav-bar @titleClick="titleClick" ref="detaiNav" class="detail-nav" />
    <scroll @scroll="contentScroll" :probe-type="3" ref="scroll" class="scrollBox">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods" />
      <detail-shop-info :shopInfo="shop" />
      <detail-goods-info  @imageLoad="imageLoad" :detailInfo="detailInfo" />
      <detail-par-info ref="params" :paramsInfo="paramsInfo" />
      <detail-com-info ref="comment" />
      <detail-tj-info ref="tj" />
    </scroll>
    <back-top class="backTop" @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart = "addToCart"/>
<!--    <toast :message="message" :show="toastShow"></toast>-->
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
  import DetailTjInfo from "./childComps/DetailTjInfo";
  import { getDetail,GoodsInfo,Shop } from 'network/detail'
  import Scroll from "components/common/scroll/Scroll"
  import {debounce} from "../../common/utils";
  import { backTopMixin } from "common/mixin";
  // import Toast from 'components/common/toast/Toast'
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import { mapActions } from 'vuex'
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
        itemImgListener:null,
        themeTopYs:[],
        currentIndex:0,
        // message:'加入购物车',
        // toastShow:false
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


        this.$nextTick( ()=>{
          // 根据最新的数据，对应的dom已经渲染出来了，
          // 但是图片依然没有加载完成（目前offsetTop 不包含图片）
          // offsetTop值不对的时候，都是图片问题。
        });
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
      DetailComInfo,
      DetailTjInfo,
      DetailBottomBar,
      // Toast
    },
    mixins:[backTopMixin],
    methods:{
      imageLoad(){
        this.$refs.scroll.ref();

        this.themeFun();
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      themeFun(){
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.tj.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      },
      contentScroll(pos){
        const posY = -pos.y;

        // 跟主题中的值进行对比
        /*for(let i in this.themeTopYs){
          // i 是字符串类型 string
          i = i*1;
          if(posY > this.themeTopYs[i] && posY < this.themeTopYs[i+1]){
            console.log(i);
          }
        }*/

        let length = this.themeTopYs.length;
        for(let i=0;i<length-1;i++){
          if( this.currentIndex !== i && (posY >= this.themeTopYs[i] && posY < this.themeTopYs[i+1])){
            this.currentIndex = i;
            this.$refs.detaiNav.currentIndex = this.currentIndex;
          }
        }

        //3、是否显示回到顶部
        this.isShowBackTop = (-pos.y) >= 1000
      },
      ...mapActions(['addCart']),
      // 添加到购物车
      addToCart(){
        // 1、获取购物车需要展示商品信息
        const product= {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.price;
        product.id = this.id;
        // 2、将商品添加到购物车  (1、Promise 2、mapActions)
        // this.$store.commit('addCart',product)
        this.addCart(product).then(res => {
          // this.toastShow = true;
          // this.message = res;
          // setTimeout( () => {
          //   this.toastShow = false;
          //   this.message = "";
          // },1000)

          this.$toast.show(res,1000)
        })

        /*this.$store.dispatch('addCart',product).then(res => {

        })*/

      }

    },
    mounted() {
      //使用mixin（混入）

      let newRefresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = () => {
        newRefresh();
      }
      this.$bus.$on('itemImgLoad',this.itemImgListener)
    },
    destroyed() {

    },
    updated(){

    }
  }
</script>

<style scoped>
.detail{position: relative;z-index: 10;background-color: #fff;height: 100vh;}
  .scrollBox{height:calc( 100% - 44px - 49px);background-color: #fff}
  .detail-nav{position: relative;background-color: #fff;z-index: 9;}
</style>
