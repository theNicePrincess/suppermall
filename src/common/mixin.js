import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  mounted(){
    let newRefresh = debounce(this.$refs.scroll.ref,300)
    this.itemImgListener = () => {
      newRefresh();
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
    console.log('我是混入的内容');
  }
}


/* 抽取 backtop 回到顶部 */
export const backTopMixin ={
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    //组件不可以直接监听点击事件呢 @click.native="backClick"
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300); // 500毫秒内回到顶部
    }
  }
}
