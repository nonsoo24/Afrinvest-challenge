<template>
  <div>
    <SideNavbar />
    <NavBar />
    <Feedback />
    <div class="content">

    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/navigation/SideNavBar.vue';
import NavBar from '@/components/navigation/NavBar.vue';
import Feedback from '@/components/FeedBack.vue';
export default {
  components: {
    SideNavbar,
    NavBar,
    Feedback
  }
}
</script>
