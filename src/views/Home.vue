<template>
  <div class="home">

    <div class="sidebar">
      <div class="afrinvest-logo">
        <img src="../assets/images/logo.png" alt="logo" />
      </div>
      <!-- <div class="sticky-image-wrapper">
        <img src="../assets/images/image2.png" alt="image1" v-if="activeMode">
        <img src="../assets/images/image1.png" alt="image2" v-if="activeMode == false">
      </div> -->
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

<!-- <div class="sticky-image-wrapper">
        <img src="../assets/images/image2.png" alt="image1" v-if="activeMode" width="431" height="579">
        <img src="../assets/images/image1.png" alt="image2" v-if="activeMode == false">
      </div> -->

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
                <div>
                  <input id="password" :type="passwordType" class="form-control"
                  placeholder="At least 8 characters" v-model="account.password">
                    <span class="toggle-password" @click="togglePassword" v-if="activeMode"> <img src="../assets/icons/eye.svg" alt="password-icon"> </span>
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

      <div class="sticky-image-wrapper">
        <img src="../assets/images/image2.png" alt="image1" v-if="activeMode" >
        <img src="../assets/images/image1.png" alt="image2" v-if="activeMode == false">
      </div>
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
        const {
          $toast
        } = this;
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
            loginButton.innerHTML = 'Create My Free Account'
            loginButton.disabled = false;

            $toast.error(error, '', {
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
        const {
          $toast
        } = this;
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

            $toast.error(error, '', {
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
    /* position: absolute; */
    /* margin-top: 130px; */
    /* bottom: 0; */
    width: 100%;
    /* margin-top: 266px; */
  }

  .sticky-image-wrapper img {
    position: absolute;
    left: 0px;
    top: 140px;
    bottom: 0;
    z-index: 1000;
    height: 100%;
    /* width: 400px; */
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
    padding: 5px 50px;
  }

  .navbar-collapse {
    display: inline-block;
    /* flex-direction: row; */
  }

  .term-of-service {
    color: #258C60;
  }

  fieldset p:last-child {
    margin: 10px 0 40px 0;
    text-align: center;
    font-size: 14px;
    color: #0E0E0E;
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

  .forgot-password-link {
    color: #0E0E0E;
    cursor: pointer;
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

/* .header {
  position: fixed;
  justify-content: flex-end;
} */
.header__content {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}

.header__content-title {
  margin-right: 20px;
  margin-top: 10px;

}
.header__content-button {
  margin-right: 10px;

}

.toggle-password {
  float: right;
  margin-left: -25px;
  margin-top: -72px;
  position: relative;
  z-index: 2;
  margin-right: 10px;
  cursor: pointer;
}

  /* @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }

    div.content {
      margin-left: 0;
    }
  } */

</style>
