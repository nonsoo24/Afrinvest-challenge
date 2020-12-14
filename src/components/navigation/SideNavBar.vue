<template>
  <div>
    <div class="sidebar">
      <div class="afrinvest-logo">
        <img src="../../assets/images/logo.png" alt="afrinvest-logo">
      </div>

       <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact>
        <img src="../../assets/icons/home.svg" alt="home-icon">
        <span>Home</span>
       </router-link>

<router-link id="invest" class="nav-link" to="/invest" tag="li" active-class="active" exact>
        <img src="../../assets/icons/investment.svg" alt="invest-icon">
        <span>Invest</span>
</router-link>

      <router-link id="wallet" class="nav-link" to="/wallet" tag="li" active-class="active" exact>
        <img src="../../assets/icons/wallet.svg" alt="wallet-icon">
        <span>Wallet</span>
      </router-link>

      <router-link id="settings" class="nav-link" to="/settings" tag="li" active-class="active" exact>
        <img src="../../assets/icons/settings.svg" alt="settings-icon">
        <span>Settings</span>
      </router-link>

      <router-link id="tell-a-friend" class="nav-link" to="/tell-friend" tag="li" active-class="active" exact>
        <img src="" alt="">
        <!-- <img src="../assets/icons/settings.svg" alt="friend-icon"> -->
        <span>Tell a friend</span>
      </router-link>

      <button class="sidebar-help">
        <i class="far fa-question-circle"></i>
        Get Help
      </button>
    </div>

  </div>
</template>

<style scoped>

   .sidebar span {
     font-size: 18px;
   }

   .sidebar img {
     margin-right: 1rem;
     margin-top: .3rem;
   }

   .sidenav__list-item:hover {
     background-color: rgba(255, 255, 255, 0.2);
     cursor: pointer;
   }

   .sidebar-text {
     margin-top: 200px;
   }

   .afrinvest-logo {
     margin: 10px auto;
   }

   .sidebar {
     margin: 0;
     padding: 0 30px;
     width: 250px;
     background-color: #1F1F1F;
     position: fixed;
     height: 100%;
     overflow: auto;
   }


   .sidebar li {
     display: block;
     color: #FFFFFF;
     padding: 16px 0;
     text-decoration: none;
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

   .sidebar-help {
     box-sizing: border-box;
     padding: 8px 45px;
     border: 1px solid #258C60;
     border-radius: 19px;
     background-color: rgba(37, 140, 96, 0.15);
     color: #258C60;
     font-size: 14px;
     cursor: pointer;
     justify-content: space-between;
   }

   #tell-a-friend {
     margin-top: 150px;
   }

   @media screen and (max-width: 400px) {
     .sidebar li {
       text-align: center;
       float: none;
     }
   }


   @media screen and (max-width: 700px) {
     .sidebar {
       width: 100%;
       height: auto;
       position: relative;
     }

     .sidebar li {
       float: left;
     }
   }


</style>
