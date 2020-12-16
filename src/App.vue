<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Aperu Bold";
  src: url("./assets/fonts/Apercu Bold.otf") format("woff"),
    url("./assets/fonts/Apercu Bold.otf") format("opentype"),
    url("./assets/fonts/Apercu Bold.otf") format("truetype");
}

@font-face {
  font-family: "Aperu Light";
  src: url("./assets/fonts/Apercu Light.otf") format("woff"),
    url("./assets/fonts/Apercu Light.otf") format("opentype"),
    url("./assets/fonts/Apercu Light.otf") format("truetype");
}

#app {
  font-family: "Aperu Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Aperu Light", Helvetica, Arial, sans-serif;
}

html,
body {
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.btn-close {
  margin-right: 1.5rem;
}

.btn-close {
  text-align: center;
  border-radius: 0.125rem;
  background-color: #fff;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  cursor: pointer;
  color: #258C60;
  padding: 0.6875rem 2.875rem;
  border: 0.0625rem solid #979797;
}

.btn-success {
  text-align: center;
  border-radius: 0.125rem;
  background-color: #258C60;
  border: none;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
  color: #fff;
  padding: 0.6875rem 2.875rem;
}

.text-success {
  color: #258C60;
}

.is-open {
  display: block !important;
}

.content-tab.active {
  color: #0FB36D;
}


.v-step__header {
  margin: -1rem -1rem .5rem;
  padding: .5rem;
  background-color: #fff !important;
  border-top-left-radius: 0.1875rem;
  border-top-right-radius: 0.1875rem;
  color: #0E0E0E !important;
  font-weight: 700 !important;
  font-size: 1.5rem !important;
  text-align: left !important;
}

.v-step[x-placement^="right"] {
  margin-left: 28.5rem !important;
}

.v-step {
  position: absolute;
  will-change: transform;
  top: 0.125rem;
  left: 20.25rem;
  transform: translate3d(-6.25rem, 2.5rem, 0rem);
  color: #000 !important;
  background: #fff !important;
  text-align: left !important;
  width: 100% !important;
  max-width: 31.25rem !important;
  height: 35% !important;
  padding: 1.875rem !important;
}

.v-step__button {
  background: transparent;
  border: .05rem solid #979797 !important;
  color: #258C60 !important;
  margin-top: 1.875rem !important;
}

.v-step__buttons {
  display: flex !important;
  justify-content: space-between !important;

}

.v-step__button-previous,
.v-step__button-next,
.v-step__button-stop {
  border-radius: 0.125rem !important;
  background-color: #258C60 !important;
  color: #FFFFFF !important;
  font-size: 1.125rem !important;
  padding: 0.6875rem 1.25rem !important;
  text-align: center !important;
  height: unset !important;
}

.v-step__button-skip {
  font-size: 1.125rem !important;
  padding: 0.6875rem 1.25rem !important;
  text-align: center !important;
  height: unset !important;

}

.v-step__content>div {
  color: #999999 !important;
  font-size: 1.3125rem !important;
}



@media only screen and (min-width:20rem) {
  .content-tab {
    padding: 1.25rem;
    color: #999999;
    font-size: 1.125rem;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: block;
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .main-header__button {
    margin-top: 1.25rem;
  }

  .sidebar {
    margin: 0;
    padding: 0 1.875rem;
    width: 23.5rem;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: none;
  }

  .sticky-image-wrapper {
    display: none;
  }

  .modal {
    display: block;
    width: 20.5625rem;
    max-width: 100%;
    height: 30.4375rem;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 51%;
    top: 36%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 3.75rem 0.625rem rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 0.625rem 0 0.3125rem 0;
    color: #1F1F1F;
    font-size: 1.25rem;
    line-height: 2.25rem;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 0.875rem;
    line-height: 1.875rem;
  }

  .modal-button {
    margin-top: 0 0.625rem;
  }

  .btn-close {
    margin: 0 0 0.25rem 0;
  }

  div.content {
    margin-left: 0;
    height: 100vh;
    background-color: #F6F6F6;
  }
}


/* Extra small devices (phones, 37.5rem and down) */
@media only screen and (max-width: 37.5rem) {
  .content-tab {
    padding: 1.25rem;
    color: #999999;
    font-size: 1.125rem;
    cursor: pointer;
  }

  .hambuger {
    display: block;
    cursor: pointer;
  }

  .main-header {
    display: block;
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .main-header__button {
    margin-top: 1.25rem;
  }

  .sidebar {
    margin: 0;
    padding: 0 1.875rem;
    width: 23.5rem;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: none;
  }

  .sticky-image-wrapper {
    display: none;
  }

  .sign-up {
    margin: 1.4375rem;
  }

  .modal {
    display: block;
    width: 20.5625rem;
    max-width: 100%;
    height: 37rem;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 51%;
    top: 49%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 3.75rem 0.625rem rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 0.625rem 0 0.3125rem 0;
    color: #1F1F1F;
    font-size: 1.25rem;
    line-height: 2.25rem;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 0.875rem;
    line-height: 1.875rem;
  }

  .modal-button {
    margin-top: 0 0.625rem;
  }

  .btn-close {
    margin: 0 0 0.25rem 0;
  }

  div.content {
    margin-left: 0;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Small devices (portrait tablets and large phones, 37.5rem and up) */
@media only screen and (min-width: 37.5rem) {
  .content-tab {
    padding: 1.25rem;
    color: #999999;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hambuger {
    display: block;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .main-header__button {
    margin-top: 0;
  }

  .sidebar {
    display: none;
  }


  .sticky-image-wrapper {
    display: none;
  }

  .sign-up {
    margin: 0;
  }

  .modal {
    display: block;
    width: 43.75rem;
    max-width: 100%;
    height: 34.375rem;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 3.75rem 0.625rem rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 1.875rem 0 0.3125rem 0;
    color: #1F1F1F;
    font-size: 1.25rem;
    line-height: 2.25rem;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 1rem;
    line-height: 1.875rem;
  }

  .modal-button {
    margin-top: 0 0.625rem;
  }

  .btn-close {
    margin-right: 1.5rem;
  }

  div.content {
    margin-left: 12.5rem;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Medium devices (landscape tablets, 48rem and up) */
@media only screen and (min-width: 48rem) {
  .content-tab {
    padding: 1.25rem;
    color: #999999;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .main-header__button {
    margin-top: 0;
  }

  .sidebar {
    margin: 0;
    padding: 0 1.875rem;
    width: 23.5rem;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: none;
  }

  .sticky-image-wrapper {
    display: none;
  }

  .sign-up {
    margin: 0 5.625rem;
  }

  /* modal */
  .modal {
    display: block;
    width: 43.75rem;
    max-width: 100%;
    height: 34.375rem;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 3.75rem 0.625rem rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 3.125rem 0 0.3125rem 0;
    color: #1F1F1F;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 1rem;
    line-height: 1.875rem;
  }

  .modal-button {
    margin-top: 1.25rem;
  }

  .btn-close {
    margin-right: 1.5rem;
  }

  div.content {
    margin-left: 15.625rem;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Large devices (laptops/desktops, 62rem and up) */
@media only screen and (min-width: 62rem) {
  .content-tab {
    padding: 1.25rem;
    color: #999999;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 1.25rem;
    padding: 1.25rem;
  }

  .main-header__button {
    margin-top: 0;
  }

  /* .home {
    display: grid;
    grid-template-columns: 1fr 2fr;
  } */

  .sidebar {
    margin: 0;
    padding: 0 1.875rem;
    width: 21.875rem;
    background-color: #1F1F1F;
    position: fixed;
    height: 100%;
    overflow: auto;
    display: block;
  }

  .home-content {
    margin-left: 19rem;
    height: 100vh;
  }

  .sticky-image-wrapper {
    display: block;
  }

  .sign-up {
    margin: 0 16rem;
    ;
  }

  .modal {
    display: block;
    width: 43.75rem;
    max-width: 100%;
    height: 34.375rem;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 3.75rem 0.625rem rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 3.125rem 0 0.3125rem 0;
    color: #1F1F1F;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 1.125rem;
    line-height: 2rem;
  }

  .modal-button {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-close {
    margin-right: 1.5rem;
  }

  div.content {
    margin-left: 15.625rem;
    height: 100vh;
    background-color: #F6F6F6;
  }

  .sticky-image-wrapper {
    display: block;
    position: fixed;
    z-index: 100;
    left: 0%;
    top: 30%;
  }
}

</style>
