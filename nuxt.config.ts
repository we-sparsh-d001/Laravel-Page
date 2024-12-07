// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['nuxt-icon','@nuxt/ui','@pinia/nuxt','nuxt-aos'],
  /*nuxt-icon has been used to add the icons on the pages*/
  /*nuxtUI is used for creating Ucards and Ubuttons in the pages */
  /*pinia in this project has been  used for storing all the logic for the user form and form validations*/
  pinia:{
    autoImports:['defineStore']
  },
  imports:{
    dirs:["./stores"],
  },
  app:{
    head:{
      link:[
        {rel:"stylesheet" ,href:"//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"},
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"},
        {rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"},
        {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"}
      ],
      bodyAttrs: {
        class: 'font-[poppins]'
      },
      /*alertify has been used in the pinia for showing the alert to the user on success of form submission*/
      script :[
        {src:"//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"},
        {src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"},
        {src:"https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"}
      ],
      /*alertify script has been added here for execution of the  alertify function script*/
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },

          /*meta tag has been use for making the website responsive for the size of the desktop,ipad and mobile users*/
      ]
    },
    layout: {
      pageTransition: 'fade',
    }
  },

})
