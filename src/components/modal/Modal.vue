<template>
  <div>
    <!-- Modal -->
    <div class="modal-overlay" id="modal-overlay">

      <div class="modal" id="modal">

        <div class="modal-body">

          <slot name="body"></slot>
<!--
          <div class="modal-button">
            <button @click="toggleModal()" class="btn-close">
              <slot name="cancel"></slot>
            </button>

            <button class="btn-success" @click="activateTour()">
              <slot name="save"></slot>
            </button>
          </div> -->

        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
// import { eventBus } from '../../main'
export default {
    data() {
      return {
      }
    },

    // methods: {
    //   activateTour() {
    //     this.$tours['myTour'].start()
    //     this.isVisible = false
    //   }
    // },
  }
</script>


<style scoped>
.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}

.modal-body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

body {
  background-color: #556;
  background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
    linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
    linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
    linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
    linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a),
    linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}

</style>
