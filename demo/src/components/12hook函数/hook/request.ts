import axios from "axios";
import { ref } from 'vue'
export default (url: string, method: string, params?: any, headers?: object) => {
  const loading = ref(true)
  const err = ref('')
  const data = ref()
  const getData = () => {
    axios({
      url: url,
      method,
      params,
      headers,
    }).then(res => {
      loading.value = false
      data.value = res
    }).catch((err: any) => {
      loading.value = false
      err.value = '请求错误'
    })
  }
  return {
    loading,
    err,
    data,
    getData
  }
}