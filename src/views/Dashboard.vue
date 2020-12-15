<template>
  <div>

    <SideNavbar />

    <div class="content">

      <NavBar />

      <div id="feedback">
        <a href="javascript:void(0);">Feedback</a>

      </div>

      <main class="main">
        <div class="main-header">
          <div class="main-header__heading">
            <h4>Welcome, {{firstName}}</h4>
            <p>Good to have you on board, get started with the actions below</p>
          </div>
          <div class="main-header__button">
            <button class="btn-success"><i class="fas fa-plus fa-sm"></i> Invest</button>
          </div>
        </div>

        <div class="main-overview">
          <div class="overviewcard">
            <div class="action-card">
              <div>
                <img src="../assets/icons/mail-icon.svg" alt="">
              </div>

              <div>
                <h5>Action 1: Verify your email</h5>
                <p>We sent an email to henryokafor333@gmail.com Check your inbox and click the
                  button to verify your account. Didn’t get a mail?
                  <span class="action-card-text">Resend</span>
                </p>
              </div>
            </div>
          </div>


          <div class="overviewcard">
            <div class="action-card">
              <div>
                <img src="../assets/icons/identity.svg" alt="">
              </div>

              <div>
                <h5>Action 2: Verify your Identity</h5>
                <p>To access the amazing investment business experience, Kindly help us to know you
                  better
                  <span class="action-card-text" @click="userSetting()">Start Now <i
                      class="fas fa-arrow-right"></i></span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card">
            <p class="card-title">Portfolio Value </p>
            <p class="card__portofolio-value"><span class="card__title-currency">₦</span> 0.00</p>

            <div class="card-portfolio">
              <div class="card-portfolio-box">
                <p class="card__portfolio-title">Equities</p>
                <p><span class="card-currency">₦</span> 0.00</p>
              </div>

              <div class="card-portfolio-box">
                <p class="card__portfolio-title">Treasury Bills</p>
                <p><span class="card-currency">₦</span> 0.00</p>
              </div>

              <div class="card-portfolio-box">
                <p class="card__portfolio-title">Bonds</p>
                <p><span class="card-currency">₦</span> 0.00</p>
              </div>

              <div class="card-portfolio-box">
                <p class="card__portfolio-title">Wallet</p>
                <p><span class="card-currency">₦</span> 0.00</p>
              </div>

            </div>
          </div>


          <div class="card"></div>
        </div>

        <div class="transaction-block">
          <div class="transaction-block__navtabs">
            <span class="content-tab" :class="{ active: tab === activeTab }"
              v-for="(tab, tabIndex) in tabs" :key="`selected-tab-${tabIndex}`" v-text="tab"
              @click="activeTab = tab" />
          </div>

          <div class="transaction-block__watchlist" v-if="activeTab === 'Watchlist'">
            <div class="transaction-block__image">
              <img src="../assets/icons/watchlist.svg" alt="watchlist-icon">
            </div>

            <h4>No Watchlist Yet</h4>
            <p>Soon, your watchlist of investment, for your monitoring will appear here</p>
          </div>


          <div class="transaction-block__recent-transaction"
            v-if="activeTab === 'Recent Transaction'">
            <div class="recent-transaction">
              <div class="recent-transaction-details">
                <h5>Opening balance</h5>
                <p>Wed, 04 Oct 2020 05:39:01 GMT</p>
              </div>

              <div class="recent-transaction-summary">
                <h5 class="text-success">Paid</h5>
                <p>N0.00</p>
              </div>

            </div>

            <div class="recent-transaction">
              <div class="recent-transaction-details">
                <h5>Opening balance</h5>
                <p>Wed, 04 Oct 2020 05:39:01 GMT</p>
              </div>

              <div class="recent-transaction-summary">
                <h5 class="text-success">Paid</h5>
                <p>N0.00</p>
              </div>

            </div>
          </div>
        </div>

      </main>
      <Modal>
        <div slot="body">

          <div class="modal-body-icon">
            <img src="../assets/icons/welcome.svg" alt="welcome-icon">
          </div>

          <div class="modal-body-content">
            <h3>Welcome To Afrinvestor</h3>
            <p>We are glad to know you have choosen Afrinvestor
              as your investment platform. Kindly let us walk with
              you as take a quick tour of the app.
            </p>
          </div>
        </div>

        <span slot="cancel">Let’s do this later</span>
        <span slot="save">Show me Around</span>

      </Modal>

    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/navigation/SideNavBar.vue';
import NavBar from '@/components/navigation/NavBar.vue';
import Modal from '@/components/modal/Modal.vue';
import axios from 'axios'
export default {
    data() {
      return {
        tabs: ['Watchlist', 'Recent Transaction'],
        activeTab: 'Watchlist',
        firstName: ''
      }
    },
   components: {
      SideNavbar,
      NavBar,
      Modal
    },

  methods: {
      getUserName() {
          const userName = JSON.parse(localStorage.getItem('userData'));
          this.firstName = userName.data.firstname
        },

        userSetting() {
          this.$router.push({
            path: 'settings'
          })
        },

      // async getDashboard() {
      //   const accessToken = JSON.parse(localStorage.getItem('token'));
      //   axios.get("/user/dashboard", {
      //       headers: {
      //         'content-type': 'application/json',
      //         'Accept': 'application/json',
      //         'Authorization': `Bearer ${accessToken}`
      //       }
      //     })
      //     .then(response => {
      //       console.log('message', response)
      //     })
      //     .catch(error => {
      //       console.error(error)
      //     })


      // }
    },
   mounted() {
    // this.getDashboard()
    // this.getUserName()
  },
}
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    font-family: inherit;
    box-sizing: border-box;
  }

  .text-success {
    color: #05AA07;
  }

  .menu-icon {
    position: fixed;
    display: flex;
    top: 5px;
    left: 10px;
    align-items: center;
    justify-content: center;
    background-color: #DADAE3;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
    padding: 12px;
  }


  .sidenav__close-icon {
    position: absolute;
    visibility: visible;
    top: 8px;
    right: 12px;
    cursor: pointer;
    font-size: 20px;
    color: #ddd;
  }

  .main {
    grid-area: main;
    background-color: #F6F6F6;
  }

  .main-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    grid-auto-rows: 106px;
    grid-gap: 20px;
    margin: 20px;
  }

  .overviewcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 17px;
    background-color: #FFFFFF;
    border-left: .4rem solid #419AFA;
    border-radius: 2px 0 0 2px;
  }

  .action-card {
    display: flex;
    flex-direction: row;
  }

  .action-card>div:first-child {
    margin-right: 22px;
  }

  .card {
    width: 100%;
    background-color: #FFFFFF;
    padding: 24px;
    box-sizing: border-box;
  }

  .card-portfolio-box {
    border: 1px solid #DBDDE1;
    border-radius: 2px;
    padding: 24px;
  }

  /* .card-portfolio-box:after {
    font-family: FontAwesome;
    font-family: "Font Awesome 6";;
    content: "\f095";
  } */

  .card-currency {
    font-size: 16px;
  }

  .card__title-currency {
    font-size: 24px;
  }

  .card-portfolio-box p:last-child {
    font-size: 30px;
    margin-top: 8px;
  }

  .card__portofolio-value {
    font-size: 48px;
  }

  .action-card-text {
    color: #258C60;
    cursor: pointer;
  }

  .card-title,
  .card__portfolio-title {
    color: #999999;
    font-family: inherit;
    font-size: 18px;
    line-height: 21px;
  }

  .transaction-block {
    justify-content: space-around;
  }

  .transaction-block__watchlist {
    margin: 80px auto;
    padding-bottom: 100px;
  }

  .transaction-block__recent-transaction {
    padding-bottom: 100px;
  }

  .transaction-block__watchlist h4 {
    margin-top: 37px;
    font-size: 30px;
    color: #0E0E0E;
    text-align: center;
  }

  .transaction-block__watchlist p {
    margin-top: 25.8px;
    font-size: 16px;
    color: #999999;
    text-align: center;
  }

  .transaction-block__image {
    justify-content: center;
    display: flex;
  }

  .recent-transaction {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1050px;
    border-radius: 2px;
    margin: 20px;
    padding: 24px;
    background-color: #FFFFFF;
  }

  .recent-transaction-details h5 {
    font-size: 18px;
    color: #0E0E0E;
    margin-bottom: 10px;

  }

  .recent-transaction-details p {
    font-size: 16px;
    color: #999999;
    margin-bottom: 10px;
  }

  .recent-transaction-summary h5 {
    font-size: 18px;
    /* margin-bottom: 10px; */

  }

  .recent-transaction-summary p {
    color: #0E0E0E;
    font-size: 24px;
    margin-bottom: 10px;
  }

  #feedback {
    height: 0px;
    width: 66px;
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 1000;
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
  }

  #feedback a {
    display: block;
    background: #1F1F1F;
    height: 52px;
    padding-top: 10px;
    width: 118px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 4px 0 0 4px;
    font-size: 18px;
    text-decoration: none;
  }

  .modal-body-icon {
    display: flex;
    justify-content: center;
    border-radius: 4px;
    background-color: #F7F4F0;
  }

  .modal-body-content h3,
  .modal-body-content p {
    text-align: center;
  }


  .modal-body-content {
    padding: 20px 50px;
  }

  .modal-body-icon {
    padding-top: 30px;
  }

  @media only screen and (min-width:320px) {
    .main-header h4 {
      color: #0E0E0E;
      font-size: 28px;
    }

    .main-header p {
      color: #999999;
      font-size: 18px;
      margin-top: 5px;
    }

    .card-portfolio {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(102px, auto);
      grid-gap: 24px;
      margin-top: 36px;
    }

    .main-cards {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 528px;
      grid-gap: 20px;
      margin: 20px;
    }

    .overviewcard {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px;
      background-color: #FFFFFF;
    }

    .action-card p {
      margin-top: 8.2px;
      font-size: 10px;
      letter-spacing: 0.8px;
      align-items: center;
    }

    .action-card h5 {
      font-size: 14px;
      color: #419AFA;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 600px) {

    .main-header h4 {
      color: #0E0E0E;
      font-size: 36px;
    }

    .main-header p {
      color: #999999;
      font-size: 24px;
    }

    .card-portfolio {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(102px, auto);
      grid-gap: 34px;
      margin-top: 46px;

    }

    .main-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 426px;
      grid-gap: 20px;
      margin: 20px;
    }

    .overviewcard {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 17px;
      background-color: #FFFFFF;
    }

    .action-card p {
      margin-top: 8.2px;
      font-size: 14px;
      letter-spacing: 0.8px;
      align-items: center;
    }

    .action-card h5 {
      font-size: 18px;
      color: #419AFA;
    }

  }

</style>
