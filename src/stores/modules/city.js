import {defineStore} from 'pinia'
import {getCityAll} from '@/services'
const useCityStore=defineStore('city',{
    state(){
        return {
            allCities:{},
            currentCity:{
                cityName:'杭州'
            }
        }
    },
    actions:{
        async fetchAllCitiesData(){
            const res=await getCityAll()
            this.allCities=res.data
            // console.log(this.allCities)
        }
    }
})
export default useCityStore