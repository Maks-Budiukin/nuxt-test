// import 'dotenv/config'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useApi = async (id) => {
  const config = useRuntimeConfig()

    let url = ''
  
    if (id) {
      url = `${config.public.apiBase}/portfolio-pages${id}?populate=deep`
    } else {
      url = `${config.public.apiBase}/portfolio-pages?populate=deep`
    }
  
    const { data, error } = await useAsyncData('item', () => $fetch(url, {
        method: 'GET',
        params: { populate: 'deep' },
        headers: {
            authorization: config.apiToken
        }
      }));
    
    if(error.value) {
      toast(`Something went wrong :( 
          \nPlease, try again or contact me directly!`, {
          "theme": "colored",
          "type": "error",
          "position": "top-center",
          "hideProgressBar": true,
          "transition": "slide",
          "icon": false,
          "autoClose": 3000,
          closeButton: false,
          toastStyle: {
            fontSize: '20',
            lineHeight: '1',
            textAlign: 'center',
          },
        })
    } 

    return data.value
  }
  