import axios from "axios"

class RestClient extends Component {
   
    static GetRequest = (getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        });
    }
}

export default RestClient
