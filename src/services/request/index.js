import useMain from '@/stores/modules/main';
import axios from 'axios';
import {BASE_URL,TIMEOUT} from './config'
const mainSrore=useMain()
class HYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 设置拦截器进行loading的展示
    this.instance.interceptors.request.use((config)=>{
      mainSrore.isLoading=true
      return config
    },(err)=>{
      return err
    })
    this.instance.interceptors.response.use((config)=>{
      mainSrore.isLoading=false
      return config
    },(err)=>{
      mainSrore.isLoading=false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: 'get' });
  }

  post(config) {
    return this.request({ ...config, method: 'post' });
  }
}

export default new HYRequest(BASE_URL,TIMEOUT);
