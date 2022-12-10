import hyRequest from '@/services/request/index';
export function getHomeAll() {
  return hyRequest.get({
    url:'/home/hotSuggests'
  });
}
export function getHomeCategories(){
  return hyRequest.get({
    url:'/home/categories'
  })
}
export function getHomeHouseList(currentPage=1){
  return hyRequest.get({
    url:'/home/houselist',
    params:{
      page:currentPage
    }
  })
}
