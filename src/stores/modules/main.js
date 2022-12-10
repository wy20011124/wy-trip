import {defineStore} from 'pinia'
const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);
const useMain=defineStore('main',{
    state(){
        return{
          startDate:nowDate,
          endDate:newDate,
          isLoading:false
        }
    }
})
export default useMain