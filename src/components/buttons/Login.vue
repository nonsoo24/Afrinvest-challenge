<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

<style scoped>
button {
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
  /* font-family: Apercu; */
}

button:after {
  content: url('../../assets/images/arrow-right.svg');
  position: relative;
  left: 120px;
}

</style>
