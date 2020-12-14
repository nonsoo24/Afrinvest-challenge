<template>
  <div class="home">
<!-- <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full"> -->

      <!-- logo -->
          <!-- <div class="flex items-center flex-shrink-0 text-white title">
            <svg @click="toggle()" class="hambuger cursor-pointer fill-current h-8 w-8 mr-2" viewBox="0 0 100 80"
              width="25" height="25" fill="#fff" stroke="#fff">
              <rect width="100" height="10" rx="8"></rect>
              <rect y="30" width="100" height="10" rx="8"></rect>
              <rect y="60" width="100" height="10" rx="8"></rect>
            </svg>
          </div>

          <div class="w-auto block flex-grow sm:flex sm:items-center lg:flex lg:items-center ml-8">
            <div class="text-sm lg:flex-grow text-white">
              <router-link to="/">
                <span class="font-semibold text-2xl tracking-tight logo-text text-white">Catholic
                  Hymns</span>
              </router-link>
            </div>
          </div>
    </nav> -->


    <div class="sidebar">
  <div class="afrinvest-logo">
    <img src="../assets/images/logo.png" alt="logo" />
  </div>
  <div class="sticky-image-wrapper">
    <img src="../assets/images/image2.png" alt="image1" v-if="activeMode">
    <img src="../assets/images/image1.png" alt="image2" v-if="activeMode == false">
  </div>
</div>



    <div class="content">
      <!-- sign up Content -->
      <div class="sign-wrapper">

        <!-- header Content -->
        <div class="nav-wrapper">
          <div></div>
          <div class="nav-wrapper-login">
             <p> {{title}} </p>
              <button class="btn-form" @click="toggleLogin()"  v-if="activeMode">{{loginText}}</button>
              <button class="btn-form" @click="toggleSignUp()" v-if="activeMode == false">{{loginText}}</button>
          </div>
        </div>
        <!-- header Content -->

        <!-- sign up Content -->
          <div class="sign-up">
            <form @submit.prevent="submitForm">
              <fieldset>
                <div class="page-header">
                  <h4>{{header}}</h4>
                  <p v-if="activeMode == false">Welcome back, enter your details below</p>
                </div>

                <p>{{message}}</p>
                <!-- user email -->
                <div v-if="activeMode">
                  <label for="email">Email</label>
                  <input id="email" type="text" class="form-control"
                    placeholder="e.g michealolawale@gmail.com" v-model="account.email">
                </div>
                <!-- user email -->

                <!-- username -->
                <div>
                  <label for="username">{{username}}</label>
                  <input id="username" type="text" class="form-control" placeholder="e.g mikeola"
                    v-model="account.username">
                </div>
                <!-- username -->

                <!-- user fullname -->
                <div class="fullname-block" v-if="activeMode">
                  <div>
                    <label for="first-name">First name</label>
                    <input id="first-name" type="text" class="form-control" placeholder="e.g Mayowa"
                      v-model="account.firstname">
                  </div>

                  <div>
                    <label for="last-name">Last name</label>
                    <input id="last-name" type="text" class="form-control" placeholder="Olawale"
                      v-model="account.lastname">
                  </div>
                </div>
                <!-- user fullname -->

                <!-- user password -->
                <div>
                  <label for="password">Password</label>
                  <input id="password" type="password" class="form-control"
                    placeholder="At least 8 characters" v-model="account.password">
                </div>
                <!-- user password -->

                <!-- Remember me/forgot password -->
                <div class="forgot-password" v-if="activeMode == false">
                  <div class="remember-block">
                    <label class="container">Remember me
                      <input type="checkbox">
                      <span class="checkmark"></span>
                    </label>
                  </div>

                  <div>
                    <a href="">I forgot my password</a>
                  </div>
                </div>
                <!-- Remember me/forgot password -->

                <!-- action button -->
                <button type="submit" class="btn-submit" @click.prevent="submitForm()"> {{buttonText}}
                </button>
                <!-- action button -->

                <p v-if="activeMode">By creating, you agree to Afrinvestor
                  <span class="term-of-service">Terms of service</span> and
                  <span class="term-of-service">Privacy policy</span>
                </p>
              </fieldset>
            </form>
          </div>
      </div>
      <!-- sign up Content -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginButton from '@/components/buttons/Login.vue';
import axios from 'axios'

export default {
  // name: 'Home',
  // components: {
  //   LoginButton,
  // },
  data() {
    return {
      disabled: true,
      submitStatus: null,
      loader: `<i class="fa fa-spinner fa-spin fa-2x">`,
      message: '',
      buttonText: 'Create My Free Account',
      loginText: 'Login',
      title: 'Already have an account?',
      header: 'Gain financial freedom by simple investing',
      activeMode: true,
      username: 'Username',
      account: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userDashboard() {
      this.$router.push({
        path: 'dashboard'
      })

    },
    toggleLogin() {
      this.title = 'Don’t have an account yet?';
      this.buttonText = 'Login';
      this.header = 'Hello!';
      this.username = 'Email/Username';
      this.loginText = 'Login';
      this.activeMode = false;
    },

    toggleSignUp() {
      this.title = 'Already have an account?';
      this.buttonText = 'Create My Free Account';
      this.header = 'Gain financial freedom by simply investing';
      this.username = 'Username';
      this.loginText = 'Create My Free Account';
      this.activeMode = true
    },


    submitForm() {
      let loginButton = document.querySelector('.btn-submit');
      loginButton.innerHTML = `<i class="fa fa-spinner fa-spin fa-2x">`
      loginButton.disabled = true;

      if (this.activeMode) {
        axios.post("/user/register", JSON.stringify(this.account), {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(response => {
            if (response.data.status) {
              this.message = response.data.message
              this.toggleLogin()
              loginButton.disabled = false;

              localStorage.setItem('userData', JSON.stringify(response.data))

            } else {
              this.message = response.data.message
            }
          })
          .catch(error => {
            console.error(error)
          })

      } else {
        const username = this.account.username
        const password = this.account.password

        axios.post("/user/login", JSON.stringify({username, password}),
        {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(response => {
            if (response.data.status) {
              localStorage.setItem('token', JSON.stringify(response.data.data['access_token']))
              this.message = response.data.message
              this.userDashboard()

              loginButton.innerHTML = 'Login';
              loginButton.disabled = false;
            } else {
              this.message = response.data.message
            }
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
  },
};

</script>

<style scoped>
  .home-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(200px, auto);
  }

  .image-block {
    height: 1080px;
    width: 376px;
    background-color: #1F1F1F;
    /* position: fixed; */
  }

  .wrapper {
    /* display: flex; */
    /* justify-content: center; */
    margin: 0 auto;
  }

  .nav-wrapper {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;
    margin-top: 10px;
    justify-content: space-between;
  }

  .nav-wrapper-login {
    display: flex;
    flex-direction: row;
    flex-direction: wrap;
  }

  .sticky-image-wrapper {
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    margin-top: 266px;
  }

  .sticky-image-wrapper img {
    display: table;
    position: relative;
  }

  .sign-up {
    margin: 0 auto;
    width: 500px;
  }

  label {
    margin-bottom: .5rem;
    text-align: left;
    color: #0E0E0E;
    display: block;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #DCD9D9;
    height: 50px;
    margin-bottom: 40px;

  }

  fieldset {
    border: 0;
  }

  h4 {
    color: #0E0E0E;
    font-family: inherit;
    font-size: 36px;
    letter-spacing: 0;
    line-height: 50px;
    text-align: center;
    margin-top: 100px;
  }

  .fullname-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  .afrinvest-logo {
    margin: 10px auto;
  }

  .btn-form {
    height: 45px;
    width: 100%;
    border: 1px solid #DCD9D9;
    border-radius: 2px;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    color: #258C60;
    background: #fff;
  }

  .navbar-collapse {
    display: inline-block;
    /* flex-direction: row; */
  }

  .term-of-service {
    color: #258C60;
  }

  fieldset p:last-child {
    margin-top: 28.2px;
    text-align: center;
    font-size: 14px;
    color: #999999;
  }

  .page-header {
    margin-bottom: 50px;
  }


  .btn-submit {
    width: 100%;
    height: 50px;
    border-radius: 2px;
    background-color: #258C60;
    border: none;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0;
    cursor: pointer;
    color: #fff;
  }

  .btn-submit:after {
    content: url('../assets/icons/arrow-right.svg');
    position: relative;
    left: 120px;
  }

  .btn-submit:disabled {
    /* background-color:#ddd; */
    cursor: not-allowed;
    opacity: .65;
  }

  /* forgot password */
  .forgot-password {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .forgot-password {
    font-size: 14px;
    color: #0E0E0E;
  }

  /* checkbox  */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    color: #0E0E0E;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .container:hover input~.checkmark {
    background-color: #ccc;
  }

  .container input:checked~.checkmark {
    background-color: #258C60;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked~.checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* checkbox  */


  /* sidenavbar */
  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    ;
    position: fixed;
    height: 100%;
    overflow: auto;
  }

  div.content {
    margin-left: 376px;
    padding: 1px 16px;
    height: 1000px;
  }

  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }

    div.content {
      margin-left: 0;
    }
  }

</style>
