<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
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
  /* text-align: center;
  color: #2c3e50; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Aperu Light", Helvetica, Arial, sans-serif;
  /* font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; */
}

html,
body {
   max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: "Aperu Light", Helvetica, Arial, sans-serif;
}

.btn-close {
  margin-right: 24px;
}

.btn-close {
  text-align: center;
  border-radius: 2px;
  background-color: #fff;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
  color: #258C60;
  padding: 11px 46px;
  border: 1px solid #979797;
}

.btn-success {
  text-align: center;
  border-radius: 2px;
  background-color: #258C60;
  border: none;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
  color: #fff;
  padding: 11px 46px;
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

/* @media only screen and (min-width:320px) { */
/* .btn-success {
    text-align: center;
    border-radius: 2px;
    background-color: #258C60;
    border: none;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0;
    cursor: pointer;
    color: #fff;
    padding: 11px 26px;
  } */
/* } */




@media only screen and (min-width:320px) {
  .content-tab {
    padding: 20px;
    color: #999999;
    font-size: 18px;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: block;
    /* justify-content: space-between; */
    margin: 20px;
    padding: 20px;
  }

  .main-header__button {
    margin-top: 20px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr;
  }

  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: none;
  }

  .home-content {
    padding: 1px 16px;
    width: 100%;
    position: relative;
  }

  .sticky-image-wrapper {
    display: none;
  }

  .sign-up {
    margin: 0;
  }

  .modal {
    display: block;
    width: 329px;
    max-width: 100%;
    height: 487px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 51%;
    top: 36%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 10px 0 5px 0;
    color: #1F1F1F;
    font-size: 20px;
    line-height: 36px;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 14px;
    line-height: 30px;
  }

  .modal-button {
    margin-top: 0 10px;
  }

  .btn-close {
    margin: 0 0 4px 0;
  }
  div.content {
    margin-left: 0;
    height: 100vh;
    background-color: #F6F6F6;
  }
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .content-tab {
    padding: 20px;
    color: #999999;
    font-size: 18px;
    cursor: pointer;
  }

  .hambuger {
    display: block;
    cursor: pointer;
  }

  .main-header {
    display: block;
    margin: 20px;
    padding: 20px;
  }

  .main-header__button {
    margin-top: 20px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr;
  }

  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: none;
  }

  .home-content {
    padding: 1px 16px;
    width: 100%;
    position: relative;
  }

  .sticky-image-wrapper {
    display: none;
  }

  .sign-up {
    margin: 0;
  }


  .modal {
    display: block;
    width: 329px;
    max-width: 100%;
    height: 592px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 51%;
    top: 49%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 10px 0 5px 0;
    color: #1F1F1F;
    font-size: 20px;
    line-height: 36px;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 14px;
    line-height: 30px;
  }

  .modal-button {
    margin-top: 0 10px;
  }

  .btn-close {
    margin: 0 0 4px 0;
  }
  div.content {
    margin-left: 0;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .content-tab {
    padding: 20px;
    color: #999999;
    font-size: 24px;
    cursor: pointer;
  }

  .hambuger {
    display: block;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
  }

  .main-header__button {
    margin-top: 0px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: block;
  }

  .home-content {
    padding: 1px 16px;
    width: 100%;
    position: relative;
  }

  .sticky-image-wrapper {
    display: block;
  }

  .sign-up {
    margin: 0;
  }

  .modal {
    display: block;
    width: 700px;
    max-width: 100%;
    height: 550px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 30px 0 5px 0;
    color: #1F1F1F;
    font-size: 20px;
    line-height: 36px;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 16px;
    line-height: 30px;
  }

  .modal-button {
    margin-top: 0 10px;
  }

  .btn-close {
    margin-right: 24px;
  }
  div.content {
    margin-left: 200px;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .content-tab {
    padding: 20px;
    color: #999999;
    font-size: 24px;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
  }

  .main-header__button {
    margin-top: 0px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: block;
  }

  .home-content {
    padding: 1px 16px;
    width: 100%;
    position: relative;
  }

  .sticky-image-wrapper {
    display: block;
  }

  .sign-up {
    margin: 0px 90px;
  }

  /* modal */
  .modal {
    display: block;
    width: 700px;
    max-width: 100%;
    height: 550px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 50px 0 5px 0;
    color: #1F1F1F;
    font-size: 30px;
    line-height: 36px;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 16px;
    line-height: 30px;
  }

  .modal-button {
    margin-top: 20px;
  }

  .btn-close {
    margin-right: 24px;
  }
  div.content {
    margin-left: 250px;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .content-tab {
    padding: 20px;
    color: #999999;
    font-size: 24px;
    cursor: pointer;
  }

  .hambuger {
    display: none;
    cursor: pointer;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
  }

  .main-header__button {
    margin-top: 0px;
  }

  .home {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .sidebar {
    margin: 0;
    padding: 0 30px;
    width: 376px;
    background-color: #1F1F1F;
    position: relative;
    height: 100%;
    overflow: auto;
    height: 100%;
    display: block;
  }

  .home-content {
    padding: 1px 16px;
    width: 100%;
    position: relative;
  }

  .sticky-image-wrapper {
    display: block;
  }

  .sign-up {
    margin: 0px 180px;
  }

  .modal {
    display: block;
    width: 700px;
    max-width: 100%;
    height: 550px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 57%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  }

  .modal-body-content h3 {
    margin: 50px 0 5px 0;
    color: #1F1F1F;
    font-size: 30px;
    line-height: 36px;
  }

  .modal-body-content p {
    color: #999999;
    font-size: 18px;
    line-height: 32px;
  }

  .modal-button {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-close {
    margin-right: 24px;
  }

  div.content {
    margin-left: 250px;
    height: 100vh;
    background-color: #F6F6F6;
  }
}

/* @media screen and (max-width: 700px) {
    div.content {
      margin-left: 0;
    }
  } */


</style>
