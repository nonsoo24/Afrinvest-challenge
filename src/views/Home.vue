<template>
  <div class="home">

    <div class="sidebar">
      <div class="afrinvest-logo">
        <img src="../assets/images/logo.png" alt="logo" />
      </div>
    </div>



    <div class="home-content">
      <!-- sign up Content -->
      <div class="sign-wrapper">

        <!-- header Content -->
        <header class="header">
          <div class="header__content">
            <div class="header__content-title">
              {{title}}
            </div>
            <div class="header__content-button">
              <button class="btn-form" @click="toggleLogin()"
                v-if="activeMode">{{loginText}}</button>
              <button class="btn-form" @click="toggleSignUp()"
                v-if="activeMode == false">{{loginText}}
              </button>
            </div>

          </div>
        </header>
        <!-- header Content -->


        <!-- sign up Content -->
        <div class="sign-up">
          <form @submit.prevent="submitForm">
            <fieldset>
              <div class="page-header">
                <h4>{{header}}</h4>
                <p v-if="activeMode == false">Welcome back, enter your details below</p>
              </div>

              <!-- <p>{{message}}</p> -->
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
                <div>
                  <input id="password" :type="passwordType" class="form-control"
                    placeholder="At least 8 characters" v-model="account.password">
                  <span class="toggle-password" @click="togglePassword" v-if="activeMode"> <img
                      src="../assets/icons/eye.svg" alt="password-icon"> </span>
                </div>
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
                  <a href="javascript:void(0);" class="forgot-password-link">I forgot my
                    password</a>
                </div>
              </div>
              <!-- Remember me/forgot password -->

              <!-- action button -->
              <button type="submit" class="btn-submit" @click.prevent="submitForm()">
                {{buttonText}}
                <span class="btn-arrow">
                  <img src="../assets/icons/arrow-right.svg" alt="">
                </span>
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

    <!-- Images -->
    <div class="sticky-image-wrapper">
      <img src="../assets/images/image2.png" alt="image1" v-if="activeMode">
      <img src="../assets/images/image1.png" alt="image2" v-if="activeMode == false">
    </div>
    <!-- Images -->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data() {
      return {
        passwordType: 'password',
        password: '',
        message: '',
        buttonText: 'Create My Free Account',
        loginText: 'Login',
        title: 'Already have an account?',
        header: 'Gain financial freedom by simply investing',
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
        debugger
        this.title = 'Don’t have an account yet?';
        this.buttonText = 'Login';
        this.header = 'Hello!';
        this.username = 'Email/Username';
        this.loginText = 'Create Account';
        this.activeMode = false;
      },

      toggleSignUp() {
        debugger
        this.title = 'Already have an account?';
        this.buttonText = 'Create My Free Account';
        this.header = 'Gain financial freedom by simply investing';
        this.username = 'Username';
        this.loginText = 'Login';
        this.activeMode = true
      },

      togglePassword() {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },

      createAccount() {
        let loginButton = document.querySelector('.btn-submit');
        loginButton.innerHTML = `<i class="fa fa-spinner fa-spin fa-2x">`
        loginButton.disabled = true;
        const { $toast } = this;
        axios.post("/user/register", JSON.stringify(this.account), {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(response => {
            if (response.data.status) {
              this.message = response.data.message
              $toast.success(this.message, '', {
                position: 'topRight',
                timeout: 5000
              })
              this.toggleLogin()
              loginButton.innerHTML = 'Login'
              loginButton.disabled = false;

              localStorage.setItem('userData', JSON.stringify(response.data))

            } else {
              loginButton.innerHTML = 'Create My Free Account'
              loginButton.disabled = false;
              this.message = response.data.message

              $toast.error(this.message, '', {
                position: 'topRight',
                timeout: 5000
              })
            }
          })
          .catch(error => {
            this.message = error
            loginButton.innerHTML = 'Create My Free Account'
            loginButton.disabled = false;

            $toast.error(this.message, '', {
              position: 'topRight',
              timeout: 5000
            })
            // console.error(error)
          })
      },

      login() {
        let loginButton = document.querySelector('.btn-submit');
        loginButton.innerHTML = `<i class="fa fa-spinner fa-spin fa-2x">`
        loginButton.disabled = true;
        const { $toast } = this;
        const username = this.account.username
        const password = this.account.password

        axios.post("/user/login", JSON.stringify({
            username,
            password
          }), {
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(response => {
            if (response.data.status) {
              localStorage.setItem('token', JSON.stringify(response.data.data['access_token']))

              this.userDashboard()

              loginButton.innerHTML = 'Login';
              loginButton.disabled = false;

            } else {
              this.message = response.data.message
              loginButton.innerHTML = 'Login'
              loginButton.disabled = false;

              $toast.error(this.message, '', {
                position: 'topRight',
                timeout: 5000
              })
            }
          })
          .catch(error => {
            loginButton.innerHTML = 'Login'
            loginButton.disabled = false;
            this.message = error
            $toast.error(this.message, '', {
              position: 'topRight',
              timeout: 5000
            })
            // console.error(error)
          })

      },


      submitForm() {
        if (this.activeMode) {
          this.createAccount()
        } else {
          this.login()
        }
      },
    },
  };

</script>

<style scoped>

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
    border: 0.0625rem solid #DCD9D9;
    height: 3.125rem;
    margin-bottom: 2.5rem;

  }

  fieldset {
    border: 0;
  }

  h4 {
    color: #0E0E0E;
    font-family: inherit;
    font-size: 2.25rem;
    letter-spacing: 0;
    line-height: 3.125rem;
    text-align: center;
    margin-top: 6.25rem;
  }

  .fullname-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.875rem;
  }

  .afrinvest-logo {
    margin: 0.625rem auto;
  }

  .btn-form {
    height: 2.8125rem;
    width: 100%;
    border: 0.0625rem solid #DCD9D9;
    border-radius: 0.125rem;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 1.125rem;
    letter-spacing: 0;
    line-height: 1.3125rem;
    text-align: center;
    cursor: pointer;
    color: #258C60;
    background: #fff;
    padding: 0.3125rem 3.125rem;
  }

  .term-of-service {
    color: #258C60;
  }

  fieldset p:last-child {
    margin: 0.625rem 0 2.5rem 0;
    text-align: center;
    font-size: 0.875rem;
    color: #0E0E0E;
  }

  .page-header {
    margin-bottom: 3.125rem;
  }

  .btn-submit {
    width: 100%;
    height: 3.125rem;
    border-radius: 0.125rem;
    background-color: #258C60;
    border: none;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    text-align: center;
    letter-spacing: 0;
    cursor: pointer;
    color: #fff;
  }

  /* .btn-submit:after {
    content: url('../assets/icons/arrow-right.svg');
    position: relative;
    left: 1.25rem;
  } */

  .btn-submit:disabled {
    cursor: not-allowed;
    opacity: .65;
  }

  /* forgot password */
  .forgot-password {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.9375rem;
  }

  .forgot-password {
    font-size: 0.875rem;
    color: #0E0E0E;
  }

  .forgot-password-link {
    color: #0E0E0E;
    cursor: pointer;
  }

  /* checkbox  */
  .container {
    display: block;
    position: relative;
    padding-left: 2.1875rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    font-size: 0.875rem;
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
    height: 1.5625rem;
    width: 1.5625rem;
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
    left: 0.5625rem;
    top: 0.3125rem;
    width: 0.3125rem;
    height: 0.625rem;
    border: solid white;
    border-width: 0 0.1875rem 0.1875rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* checkbox  */


  /* sidenavbar */

  .header__content {
    display: flex;
    justify-content: flex-end;
    padding-top: 0.625rem;
  }

  .header__content-title {
    margin-right: 1.25rem;
    margin-top: 0.625rem;

  }

  .header__content-button {
    margin-right: 0.625rem;

  }

  .toggle-password {
    float: right;
    margin: -4.5rem 0.625rem 0 -1.5625rem;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  .btn-arrow {
    float: right;
    margin: 0 1.625rem 0 -6.562rem;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

</style>
