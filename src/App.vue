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
  max-width: 100%;
  overflow-x: hidden;
  font-family: "Aperu Light", Helvetica, Arial, sans-serif;
}
/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
