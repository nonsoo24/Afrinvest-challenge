<template>
  <div>
    <SideNavbar />
    <NavBar />

    <div class="content">
      <h3>Settings</h3>
      <div class="settings__block">
        <div class="settings__block-header">
          <!-- nav tab -->
          <div class="settings__block-navtabs" :class="{ active: tab === activeTab }">
            <span class="content-tab" :class="{ active: tab === activeTab }"
              v-for="(tab, tabIndex) in tabs" :key="`selected-tab-${tabIndex}`" v-text="tab"
              @click="activeTab = tab" />
          </div>
          <!-- nav tab -->
          <!-- profile tab -->

          <div class="settings__block-wrapper" v-if="activeTab === 'Profile'">
            <div class="settings__block-profile">

              <div class="settings__block-basic">
                <div class="settings__block-basic-title">
                  <h4>Basic data</h4>
                </div>

                <div class="settings__block-basic-items">
                  <div class="settings__block-basic-label">

                    <div class="profile-picture">
                      <h5>Profile picture <br>
                        <span>
                          <small>png, jpg, bitmap</small>
                        </span>
                      </h5>
                    </div>

                    <p>First Name</p>
                    <p>Middle Name</p>
                    <p>Last Name</p>
                    <p>Phone number</p>
                    <p>Date Of Birth</p>
                    <p>Gender</p>
                    <p>Mother’s Maiden Name</p>

                  </div>

                  <div class="settings__block-basic-name">
                    <img src="../assets/icons/rahul.svg" alt="profile-picture">
                    <p>Micheal</p>
                    <p>Boluwatife</p>
                    <p>Okafor</p>
                    <p>+234 7056329624</p>
                    <p>23rd July 1988</p>
                    <p>Male</p>
                    <p>Olushola</p>
                  </div>
                </div>
              </div>


              <div class="settings__block-basic">
                <div class="settings__block-basic-title">
                  <h4>Next of Kin</h4>
                </div>

                <div class="settings__block-basic-items">
                  <div class="settings__block-basic-label">
                    <p>Full name</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                    <p>Address</p>
                    <p>Relationship</p>

                  </div>

                  <div class="settings__block-basic-name">
                    <p>Bolanle Okafor</p>
                    <p>bola@gmail.com</p>
                    <p>070563296524</p>
                    <p>2, Clement Ashford crescent, Gbagada, Lagos</p>
                    <p>Sister</p>
                  </div>
                </div>
              </div>


              <div class="settings__block-basic">
                <div class="settings__block-basic-title">
                  <h4>Address</h4>
                </div>

                <div class="settings__block-basic-items">
                  <div class="settings__block-basic-label">
                    <p>Residential Address</p>
                    <p>City</p>
                    <p>State</p>
                    <p>Country</p>
                    <p>Nationality</p>

                  </div>

                  <div class="settings__block-basic-name">
                    <p>2, Clement Ashford crescent, Gbagada, Lagos</p>
                    <p>Lagos</p>
                    <p>Lagos</p>
                    <p>Nigeria</p>
                    <p>Nigerian</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="settings__block-button">
              <button class="btn-close">Edit</button>
            </div>
          </div>

          <!-- profile tab -->


          <!-- Bank details -->

          <!-- Bank details -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/navigation/SideNavBar.vue';
import NavBar from '@/components/navigation/NavBar.vue';
export default {
  data() {
      return {
        tabs: ['Profile', 'Bank Details', 'Password & Security', 'Support', 'Account Type',
          'Glossary'
        ],
        activeTab: 'Profile',
        firstName: ''
      }
    },
    components: {
      SideNavbar,
      NavBar
    }
  }
</script>

<style scoped>
h3 {
  font-size: 36px;
  margin-bottom: 20px;
}

.settings__block {
  width: 100%;
  background-color: #FFFFFF;
  padding: 30px 0;
  box-sizing: border-box;
}

.content {
  padding: 40px;
}

.content-tab {
  font-size: 18px;
}

.settings__block-navtabs {
  border-bottom: 1px solid #DBDDE1;
}

.settings__block-navtabs.active {
  border-bottom: 2px solid #0FB36D;
}

.settings__block-wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 20px;
  justify-content: space-between;
  padding: 40px 20px 0px 20px;
}

.settings__block-button {
  justify-self: flex-end;
}

.settings__block-basic {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  margin-top: 40px;
}

.settings__block-basic-items {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 20px;
  margin-top: 20px;
}

.settings__block-basic-title {
  border-right: 1px solid #DBDDE1;
}

.profile-picture,
.settings__block-basic-label p,
.settings__block-basic-name p {
  padding-bottom: 20px;
  font-size: 16px;
}

.settings__block-basic-label p,
span {
  color: #999999;
  text-align: right;
}

.settings__block-basic-name p {
  color: #1F1F1F;
  text-align: left;
}

h5 {
  text-align: right;
  font-size: 16px;
}

img {
  margin-bottom: 18px
}
</style>
