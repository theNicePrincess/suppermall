<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl v-show="isTabFixed" :titles="['流行','时尚','个性']"
                @tabClick="tabClick" ref="tabControl1" class="oneTabControl" ></TabControl>
    <scroll
      :probe-type="3"
      @scroll="contentScroll"
      ref="scroll" class="wrapper"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recom-view :recommends="recommend" />
      <FeatureView />

      <TabControl class="tabControl"
                  :titles="['流行','时尚','个性']"
                  @tabClick="tabClick" ref="tabControl2" ></TabControl>

      <GoodsList :goods="showGoods"></GoodsList>

    </scroll>

    <back-top class="backTop" @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecomView from "./childComps/RecomView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop";
  import { getHomeMultidata,getHomeGoods} from "network/home"
  import {debounce} from "common/utils";
  import { backTopMixin } from "common/mixin";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecomView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
        itemImgListener:null
      }
    },
    mixins:[backTopMixin],
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 函数调用 -》 压入函数栈（保存函数调用过程中所有变量）
      // 函数调用结束 -> 弹出函数栈（释放函数所有变量）

      this.getHomeMu();
      this.getHomeGs('pop');
      this.getHomeGs('new');
      this.getHomeGs('sell');
      // this.theGoodsJson()

    },
    mounted() {
      // 1、图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.ref,500)

      // 2、监听bus 总线
      this.itemImgListener = () => {
        refresh();
      }

      this.$bus.$on('itemImageLoad', this.itemImgListener)
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.ref();
    },
    deactivated() {
      // 1、保存Y值
      this.saveY = this.$refs.scroll.getScrollY();

      // 2、取消全局事件的监听 ，监听的函数
      this.$bus.$off('itemImgLoad',this.itemImgListener)

    },
    methods:{
      /**
       * 事件监听方法*/
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;

      },
      contentScroll(pos){
        // 1、判断backTop是否显示
        this.isShowBackTop = (-pos.y) >= 1000

        //2、决定tabControl是否吸顶（position：fixed）
        this.isTabFixed = (-pos.y) >= this.tabOffsetTop
      },

      /**
       * 网络请求相关的方法*/
      getHomeMu(){
        //1、请求多个数据
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGs(type){
        // 2、请求商品数据
        const page = this.goods[type].page + 1;
        getHomeGoods().then(res => {
          this.goods[type].list.push(...res.data[type]);

          this.goods[type].page += 1;

          // 执行这个方法后，可以多次加载更多，不然只能加载一次
          this.$refs.scroll.finishPullUp();
        })
      },

      //本地调用json 数据
      theGoodsJson(){
        this.$http.get('http://localhost:8080/goods.json')
          .then(function(res){
              console.log(res)
            }
              .catch(err=>{console.log(err)})
          )
      },

      // 加载更多方法
      loadMore(){
        this.getHomeGs(this.currentType);
      },
      swiperImageLoad(){
        // 获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
  .home{height:100vh;position: relative;}
.home-nav{
  background-color: var(--color-tint);
  color:#ffffff;
  /*position: fixed;
  left: 0;
  right:0;
  top:0;
  z-index: 9;*/
}
  .tabControl{z-index: 9;}
  .wrapper{/*height:calc(100% - 49px);*/overflow: hidden;position: absolute;top:44px;bottom:49px;left: 0;right:0;}

  .oneTabControl{
    position: relative;
    z-index: 9;
  }
</style>
