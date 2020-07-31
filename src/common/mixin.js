import {debounce} from "./utils";

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
