<template>
  <div>
     <!-- Feedback -->
      <div id="feedback">
        <a href="javascript:void(0);">Feedback</a>
      </div>
      <!-- Feedback -->
  </div>
</template>

<style scoped>
   #feedback {
    height: 0;
    width: 4.125rem;
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
    height: 3.25rem;
    padding-top: 0.625rem;
    width: 7.375rem;
    text-align: center;
    color: #FFFFFF;
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 1.125rem;
    text-decoration: none;
  }
</style>
