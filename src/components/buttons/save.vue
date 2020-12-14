<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

<style scoped>
  @media only screen and (min-width:320px) {
    button {
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
      /* display: flex; */
      /* font-family: Apercu; */
    }
  }

  @media only screen and (min-width: 600px) {
    button {
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
      /* font-family: Apercu; */
    }
  }


</style>
