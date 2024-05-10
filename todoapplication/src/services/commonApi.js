//to create instance of axios
import axios from 'axios'

export const commonAPI = async (httpMethod,url,body)=>{
    let reqConfig={
        method:httpMethod,
        url:url,
        data:body,
        Headers:{
            "content-Type": "application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
}