<template>
  <div>
    <div class="sidebar">
      <div class="sidebar__image-block">

          <!-- Afrinvest logo -->
        <div class="afrinvest-logo" @click="userHome()">
          <img src="../../assets/images/logo.png" class="afrinvest-logo-image" alt="afrinvest-logo">
        </div>
          <!-- Afrinvest logo -->

        <div>
          <!-- close button -->
          <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;
          </a>
          <!-- close button -->
        </div>
      </div>

      <!-- Navigation link -->

      <router-link v-for="(nav, navIndex) in navigation" :key= navIndex :id= nav.id class="nav-link"
        :to= nav.path tag="li" active-class="active" exact>
        <img :src= nav.imgUrl :alt= nav.alt>
        <span> {{nav.text}} </span>
      </router-link>

      <!-- Navigation link -->


  <!-- Get help -->

      <div>
        <button class="sidebar-help text-success">
          Get Help
        </button>
        <span class="question-icon">
          <i class="far fa-question-circle text-success"></i>
        </span>
      </div>

      <!-- Get help -->

    </div>

  </div>
</template>

<script>
import {eventBus} from '../../main'
export default {
   data() {
       return {
         navigation: [{
             id: 'home',
             path: '/dashboard',
             alt: 'home-icon',
             text: 'Home',
             imgUrl: require('../../assets/icons/home.svg')
           },
           {
             id: 'invest',
             path: '/invest',
             alt: 'invest-icon',
             text: 'Invest',
             imgUrl: require('../../assets/icons/investment.svg')
           },
           {
             id: 'wallet',
             path: '/wallet',
             alt: 'wallet-icon',
             text: 'Wallet',
             imgUrl: require('../../assets/icons/wallet.svg')
           },
           {
             id: 'settings',
             path: '/settings',
             alt: 'settings-icon',
             text: 'Settings',
             imgUrl: require('../../assets/icons/settings.svg')
           },
           {

             id: 'tell-a-friend',
             path: '/tell-friend',
             alt: '',
             text: 'Tell a friend',
             imgUrl: ''
           }
         ]
       }
     },
     methods: {
       //route to dashboard home on click of afrinvest logo
       userHome() {
         this.$router.push({
           path: 'dashboard'
         })
       },

       //close side navbar on small screens
       toggle() {
         eventBus.closeBtn();
       }
     }
   }
</script>

<style>

   .sidebar span {
     font-size: 1.125rem;
   }

   .sidebar img {
     margin-right: 1rem;
     margin-top: .3rem;
   }

   .sidebar-text {
     margin-top: 12.5rem;
   }

   .afrinvest-logo {
     margin: 0.625rem auto;
     cursor: pointer;
   }

   .sidebar li.active {
     color: #258C60;
   }

   /* .router-link-exact-active {
     color: #258C60 !important;
     cursor: pointer;
   } */

   .sidebar li:hover:not(.active) {
     color: #258C60;
     cursor: pointer;
   }

   #tell-a-friend {
     margin-top: 9.375rem;
   }

   .sidebar__image-block {
     display: flex;
   }

   @media only screen and (min-width:20rem) {

     .sidebar {
       margin: 0;
       padding: 0 1.875rem;
       width: 12.5rem;
       background-color: #1F1F1F;
       position: fixed;
       height: 100%;
       overflow: auto;
       display: none;
     }

     .sidebar li {
       display: block;
       color: #FFFFFF;
       padding: 1rem 0;
       text-decoration: none;
       cursor: pointer;
     }

     .sidebar-help {
       box-sizing: border-box;
       padding: 0.5rem 2.8125rem;
       border: 0.0625rem solid #258C60;
       border-radius: 1.1875rem;
       background-color: rgba(37, 140, 96, 0.15);
       font-size: 0.75rem;
       cursor: pointer;
       justify-content: space-between;
     }

     .question-icon {
       float: right;
       margin-left: 0rem;
       margin-top: -1.75rem;
       position: relative;
       z-index: 2;
       margin-right: 7rem;
       cursor: pointer;
     }

     .fa-plus {
       display: none;
     }
   }


   /* Extra small devices (phones, 600px and down) */
   @media only screen and (max-width: 37.5rem) {

     .sidebar {
       margin: 0;
       padding: 0 1.875rem;
       width: 12.5rem;
       background-color: #1F1F1F;
       position: fixed;
       height: 100%;
       overflow: auto;
       display: none;
     }

     .sidebar li {
       display: block;
       color: #FFFFFF;
       padding: 1rem 0;
       text-decoration: none;
       cursor: pointer;
     }

     .afrinvest-logo-image {
       width: 7.5rem;
     }

     .sidebar-help {
       box-sizing: border-box;
       padding: 0.5rem 2.8125rem;
       border: 0.0625rem solid #258C60;
       border-radius: 1.1875rem;
       background-color: rgba(37, 140, 96, 0.15);
       font-size: 0.75rem;
       cursor: pointer;
       justify-content: space-between;
     }

     .question-icon {
       float: right;
       margin-left: 0rem;
       margin-top: -1.75rem;
       position: relative;
       z-index: 2;
       margin-right: 7rem;
       cursor: pointer;
     }

     .closebtn {
       font-size: 2rem;
       display: block;
       color: #ffff;
       text-decoration: none;
     }

      .fa-plus {
       display: none;
     }
   }

   /* Small devices (portrait tablets and large phones, 600px and up) */
   @media only screen and (min-width: 37.5rem) {

     .sidebar {
       margin: 0;
       padding: 0 1.875rem;
       width: 15.625rem;
       background-color: #1F1F1F;
       position: fixed;
       height: 100%;
       overflow: auto;
       display: block;
     }


     .sidebar li {
       display: block;
       color: #FFFFFF;
       padding: 1rem 0;
       text-decoration: none;
       cursor: pointer;
     }

     .sidebar-help {
       box-sizing: border-box;
       padding: 0.5rem 2.8125rem;
       border: 0.0625rem solid #258C60;
       border-radius: 1.1875rem;
       background-color: rgba(37, 140, 96, 0.15);
       font-size: 0.75rem;
       cursor: pointer;
       justify-content: space-between;
     }

     .question-icon {
       float: right;
       margin-left: 0rem;
       margin-top: -1.75rem;
       position: relative;
       z-index: 2;
       margin-right: 7rem;
       cursor: pointer;
     }

     .closebtn {
       font-size: 2rem;
       display: block;
       color: #ffff;
       text-decoration: none;
     }

      .fa-plus {
       display: none;
     }
   }

   /* Medium devices (landscape tablets, 768px and up) */
   @media only screen and (min-width: 48rem) {

     .sidebar {
       margin: 0;
       padding: 0 1.875rem;
       width: 15.625rem;
       background-color: #1F1F1F;
       position: fixed;
       height: 100%;
       overflow: auto;
       display: block;
     }


     .sidebar li {
       display: block;
       color: #FFFFFF;
       padding: 1rem 0;
       text-decoration: none;
       cursor: pointer;
     }

     .sidebar-help {
       box-sizing: border-box;
       padding: 0.5rem 2.8125rem;
       border: 0.0625rem solid #258C60;
       border-radius: 1.1875rem;
       background-color: rgba(37, 140, 96, 0.15);
       font-size: 0.75rem;
       cursor: pointer;
       justify-content: space-between;
     }

     .question-icon {
       float: right;
       margin-left: 0rem;
       margin-top: -1.75rem;
       position: relative;
       z-index: 2;
       margin-right: 7rem;
       cursor: pointer;
     }

     .closebtn {
       font-size: 2rem;
       display: none;
       color: #ffff;
       text-decoration: none;
     }

     .fa-plus {
       display: block;
     }
   }

   /* Large devices (laptops/desktops, 992px and up) */
   @media only screen and (min-width: 62rem) {
     .sidebar {
       margin: 0;
       padding: 0 1.875rem;
       width: 15.625rem;
       background-color: #1F1F1F;
       position: fixed;
       height: 100%;
       overflow: auto;
       display: block;
     }

     .sidebar li {
       display: block;
       color: #FFFFFF;
       padding: 1rem 0;
       text-decoration: none;
       cursor: pointer;
     }

     .sidebar-help {
       box-sizing: border-box;
       padding: 0.5rem 2.8125rem;
       border: 0.0625rem solid #258C60;
       border-radius: 1.1875rem;
       background-color: rgba(37, 140, 96, 0.15);
       font-size: 0.875rem;
       cursor: pointer;
       justify-content: space-between;
     }

     .question-icon {
       float: right;
       margin-left: 0rem;
       margin-top: -1.75rem;
       position: relative;
       z-index: 2;
       margin-right: 10rem;
       cursor: pointer;
     }

     .closebtn {
       font-size: 2rem;
       display: none;
       color: #ffff;
       text-decoration: none;
     }

      .fa-plus {
       display: block;
     }

   }

</style>
