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
import axios from 'axios'
export default {
  data() {
    return {
      tabs: ['Profile', 'Bank Details', 'Password & Security', 'Support', 'Account Type',
        'Glossary'
      ],
      activeTab: 'Profile',
      editProfile: {
        basicInfo: {
          middlename: '',
          phone_number: "09863526723",
          gender: '',
          mother_maiden_name: '',
          date_of_birth: ''

        },
        userAddress: {
          address: '',
          city: '',
          state_of_origin: '',
          country: '',
          nationality: ''
        },
        nextOfKin: {
          full_name: '',
          email: '',
          phone_number: '',
          residential_address: '',
          relationship: ''

        },

        bankDetails: {
          full_name: '',
          email: '',
          phone_number: '',
          residential_address: '',
          relationship: ''
        },
        documents: {
          passport: '',
          proof_of_identity: '',
          utility_bill: '',
          signature: ''


        }
      }
    }
  },
  methods: {
    editUserProfile() {
      let url, userData;

      switch (currentTab) {
        case 1:
          url = 'basic'
          userData = this.editProfile.basicInfo
          break;
        case 2:
          url = 'address'
          userData = this.editProfile.userAddress
          break;
        case 3:
          url = 'kin'
          userData = this.editProfile.nextOfKin
          break;
        case 4:
          url = 'bank'
          userData = this.editProfile.bankDetails
          break;
        default:
          url = 'document'
          userData = this.editProfile.documents

      }

      const {  $toast } = this;
      axios.post(`/user/${url}`, JSON.stringify(userData), {
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.data.status) {

            this.message = response.data.message
            $toast.success(this.message, '', {
              position: 'topRight',
              timeout: 5000
            })

          } else {
            this.message = response.data.message

            $toast.error(this.message, '', {
              position: 'topRight',
              timeout: 5000
            })
          }
        })
        .catch(error => {
          loginButton.innerHTML = 'Create My Free Account'
          loginButton.disabled = false;

          $toast.error(error, '', {
            position: 'topRight',
            timeout: 5000
          })
          // console.error(error)
        })

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
  font-size: 2.25rem;
  margin-bottom: 1.25rem;
}

.settings__block {
  width: 100%;
  background-color: #FFFFFF;
  padding: 1.875rem 0;
  box-sizing: border-box;
}

.content {
  padding: 2.5rem;
}

.content-tab {
  font-size: 1.125rem;
}

.settings__block-navtabs {
  border-bottom: 0.0625rem solid #DBDDE1;
}

.settings__block-navtabs.active {
  border-bottom: 0.125rem solid #0FB36D;
}

.settings__block-wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 1.25rem;
  justify-content: space-between;
  padding: 2.5rem 1.25rem 0 1.25rem;
}

.settings__block-button {
  justify-self: flex-end;
}

.settings__block-basic {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1.25rem;
  margin-top: 2.5rem;
}

.settings__block-basic-items {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1.25rem;
  margin-top: 1.25rem;
}

.settings__block-basic-title {
  border-right: 0.0625rem solid #DBDDE1;
}

.profile-picture,
.settings__block-basic-label p,
.settings__block-basic-name p {
  padding-bottom: 1.25rem;
  font-size: 1rem;
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
  font-size: 1rem;
}

img {
  margin-bottom: 1.125rem
}
</style>
