<template>
  <div class="home">
    <div class="sign-up-block">
      <!-- Image-block -->
      <div class="image-block">
        <div class="afrinvest-logo">
          <img
            src="../assets/images/logo.png"
            alt="logo"
            width="150px"
            height="50px"
          >
        </div>

        <div class="sticky-image-wrapper">
          <img
            src="../assets/images/image2.png"
            alt="image1"
          >
        </div>
      </div>
      <!-- Image-block -->

      <!-- sign up Content -->
      <div class="sign-up">
        <form action="">
          <fieldset>
            <h4>Gain financial freedom by <br> simple investing</h4>
            <div>
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                class="form-control"
                placeholder="e.g michealolawale@gmail.com"
              >
            </div>

            <div>
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                class="form-control"
                placeholder="e.g mikeola"
              >
            </div>
            <div class="fullname-block">
              <div>
                <label for="first-name">First name</label>
                <input
                  id="first-name"
                  type="text"
                  class="form-control"
                  placeholder="e.g Mayowa"
                >
              </div>

              <div>
                <label for="last-name">Last name</label>
                <input
                  id="last-name"
                  type="text"
                  class="form-control"
                  placeholder="Olawale"
                >
              </div>
            </div>
            <div>
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="At least 8 characters"
              >
            </div>
            <SaveButton type="submit">
              Create My Free Account
            </SaveButton>
          </fieldset>
        </form>
      </div>

      <!-- sign up Content -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SaveButton from '@/components/buttons/save.vue';

export default {
  name: 'Home',
  components: {
    SaveButton,
  },
  data() {
    return {
      disabled: false,
      submitStatus: null,
      loader: false,
      errors: {},
      modes: ['Sign up', 'Login'],
      activeMode: '',
      faccountorm: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    auth() {
      if (this.activeMode === 'Login') {
        // this.login(this.account)
      } else {
        // this.signup(this.account)
      }
    },
  },
};
</script>

<style scoped>
  .sign-up-block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .image-block{
    background: #000;
    Width: 376px;
    Height: 1080px

  }

   .sticky-image-wrapper{
        /* position: fixed; */
        bottom: 0;
        width: 100%;
        margin-top: 266px;
    }

    .sticky-image-wrapper img{
        display: table;
        position: relative;
   }

  .sign-up {
    margin: auto;
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
  font-family: Apercu;
  font-size: 36px;
  letter-spacing: 0;
  line-height: 50px;
  text-align: center;
  margin-bottom: 100px;
}

.fullname-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.afrinvest-logo {
  margin-top: 20px;
  float: left;
}
</style>
