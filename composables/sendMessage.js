import axios from 'axios'

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const BOT_TOKEN = '7232063214:AAHAUmfSd_e6xP1sufzBt_vKmxFXIIcjFGo'
const CHAT_ID = '386534559'

export const sendMessage = async (message) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      data: {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    toast(`Message is sent! 
      \nI'll get back to You in a while!`, {
      "theme": "colored",
      "type": "warning",
      "position": "top-center",
      "hideProgressBar": true,
      "transition": "slide",
      "icon": false,
      "autoClose": 3000,
      closeButton: false,
      toastStyle: {
        backgroundColor: '#F0BF6C',
        color: '#000000',
        fontSize: '20',
        lineHeight: '1',
        textAlign: 'center',
      },
    })


    return data
  } catch (error) {
    
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

console.log(error.message)
  }
}
