import axios from "axios"

export const ApiMethods = {
    post : 'POST',
    get : 'GET',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
}

export const ApiErrors = {
    e1 : 'e1'
}

export default class Apiprovider{
    erreorReturner(e){
        if(e.code === 'ERR_NETWORK'){
            return {
                error : "e1",
                response : {},

            }
        }
    }

    async provider(config){
        const {baseUrl, endPoint, apiMethod, successCodeExpertation, requestData} = config
        const url = `${baseUrl+'/'+endPoint}`;
        console.log("Service available at : ", url);
        
        return axios(url, {
            method : apiMethod,
            data : apiMethod !== ApiMethods.get && requestData.body,
            headers : {}
        }).then((response) =>{
            if(response.status === successCodeExpertation){
                try{
                    console.log('Parsed', JSON.parse(response.data))
                    return {response : JSON.parse(response.data)}
                }catch(e){
                    console.log("NOT PARSED", response.data)
                    return {response : response.data};
                }
            }else{
                return{
                    error : 'e1',
                    response : {},
                }
            }
        }).catch((e)=>{
            console.log(e);
            console.log("API SERVICES  : endpoint : ", endPoint + 'Exeption' + e)
            return this.erreorReturner(e)
        })
    }
}