import { onMounted, onUnmounted, ref } from 'vue';
import {throttle} from 'underscore'
export default function useScroll(elRef) {
  let el=window
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);
  const scrollLister = throttle(() => {
    if(el===window){
      scrollTop.value = Math.ceil(document.documentElement.scrollTop);
      scrollHeight.value = document.documentElement.scrollHeight;
      clientHeight.value = document.documentElement.clientHeight;
       // console.log(scrollHeight,scrollTop,clientHeight)
    }else{
      scrollTop.value = Math.ceil(el.scrollTop);
      scrollHeight.value = el.scrollHeight;
      clientHeight.value = el.clientHeight;
    }
  
   if (scrollHeight.value <= scrollTop.value + clientHeight.value) {
     isReachBottom.value = true;
   }
 },100)
  // 监听页面的滚动
  onMounted(() => {
    if(elRef){
      el=elRef.value
    }
    el.addEventListener('scroll', scrollLister);
  });
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollLister);
  });
  return { isReachBottom, scrollHeight, scrollTop, clientHeight };
}
