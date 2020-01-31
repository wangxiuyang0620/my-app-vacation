import axios from 'axios'
export default function (method,url,data=[]){
    let configData ={}
    let type= method === 'get' ? 'params' : 'data'
    configData.method = method
    configData.url = url
    configData[type] = data
    configData.headers={
        authorToken : localStorage.getItem('token')
    }
    return axios(configData).catch(error=>{
        if(error.response.status===404){
            alert('接口不存在')
            return
          }
          if(error.response.status===500){
           alert('服务器故障')
           return
         }
    })
}