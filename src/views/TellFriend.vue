<template>
  <div>
    <SideNavbar />
    <NavBar />
  </div>
</template>

<script>
import SideNavbar from '@/components/navigation/SideNavBar.vue';
import NavBar from '@/components/navigation/NavBar.vue';
export default {
  components: {
    SideNavbar,
    NavBar
  }
}
</script>
