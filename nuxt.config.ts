import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ["@nuxt/image", "@nuxt/ui"],

  
  

  runtimeConfig: {
    apiSecret: "zzzzz",
    public: {
      projectName: " دیجی استایل  ",
      mainUrl: "http://arioexir.com",
      baseUrl: "https://boutiqueline-api.bhptest.ir",
      testpayment:"https://boutiqueline-payment.bhptest.ir",
      imageUploaderUrl: "https://boutiqueline-file.bhptest.ir/api/PictureUpload",
      showImageBaseUrl: "https://boutiqueline-file.bhptest.ir",
      fileUploaderUrl: "https://boutiqueline-file.bhptest.ir/api/FileUpload",
      telegramShare: "http://telegram.me/share/url?url=",
      linkdinShare: "http://www.linkedin.com/shareArticle?mini=true&url=",
      whatsappShare: "http://web.whatsapp.com/send?l=en&text=",
      test:'',
      devMode: true,
      responseCode: {
        none: 0,
        signUp: 1,
        oneFactor: 2,
        twoFactor: 3,
        locked: 4,
        verifyCodeCountError: 5,
      },
      productCategoryId: 3,
    },
  }

})
