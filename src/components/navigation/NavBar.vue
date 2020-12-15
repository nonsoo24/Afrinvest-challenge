<template>
  <div>
    <!-- <div class="menu-icon">
        <i class="fas fa-bars header__menu"></i>
      </div> -->

    <header class="header">
      <div>
        <!-- hamburger icon -->
        <svg @click="toggle()" class="hambuger" viewBox="0 0 100 80" width="25" height="25"
          fill="#000" stroke="#000">
          <rect width="100" height="10" rx="8"></rect>
          <rect y="30" width="100" height="10" rx="8"></rect>
          <rect y="60" width="100" height="10" rx="8"></rect>
        </svg>
        <!-- hamburger icon -->

      </div>
      <div class="header__avatar">
        <img class="header__avatar-notification" src="../../assets/icons/bell-ring.svg"
          alt="notification-icon">
        <img src="../../assets/icons/rahul.svg" alt="profile-icon">
      </div>
    </header>

  </div>
</template>

<script>
import {
  eventBus
} from '../../main'
export default {
  data() {
    return {
      isClose: true
    }
  },
  watch: {
    isClose: (value) => {
      if (value == false) {
        eventBus.$on('close', () => {
          let sideBar = document.querySelector(".sidebar");
          sideBar.classList.remove("is-open");
          let hambuger = document.querySelector(".hambuger");
          hambuger.style.display = "block";
        })
      }
    }
  },
  methods: {
    toggle() {
      let sideBar = document.querySelector(".sidebar");
      let closeBtn = document.querySelector(".closebtn");
      let hambuger = document.querySelector(".hambuger");
      if (this.isClose) {
        sideBar.classList.add("is-open");
        closeBtn.style.display = "block"
        hambuger.style.display = "none"
      }
      this.isClose = !this.isClose
    }
  }
}

</script>

<style scoped>
   .header {
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 1.25rem;
     background-color: #F6F6F6;
   }

   .header__avatar-notification {
     margin-right: 3rem;
   }
</style>
