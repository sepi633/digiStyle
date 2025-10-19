// /plugins/vue-toastification.client.ts
import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    timeout: 5000,
    closeButton: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    position: 'top-right',
    toastClassName: 'custom-toast',
  }

  nuxtApp.vueApp.use(Toast, options)
})
