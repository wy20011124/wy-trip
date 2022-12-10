import {defineStore} from 'pinia'
import {getHomeAll,getHomeCategories,getHomeHouseList} from '@/services'
const useHomeStore=defineStore('home',{
    state(){
        return{
           hotSuggests:[],
           categories:[],
           houseList:[],
           currentPage:1
        }
    },
    actions:{
        async fetchSuggestsData(){
          const res=await getHomeAll()
        //   console.log(res)
          this.hotSuggests=res.data
        //   console.log(this.hotSuggests)
        },
        async fetchCategoriesData(){
          const res =await getHomeCategories()
          // console.log(res)
          this.categories=res.data
        },
        async fetchHouseListData(){
          const res=await getHomeHouseList(this.currentPage)
          // console.log(res)
          this.houseList.push(...res.data)
          this.currentPage++
        }
    }
})
export default useHomeStore