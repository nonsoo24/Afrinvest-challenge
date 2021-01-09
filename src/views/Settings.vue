<template>
  <div>
    <SideNavbar />
    <NavBar />
    <Feedback />

    <div class="content">
      <h3>Settings</h3>
      <div class="settings__block">
        <div class="settings__block-header">
          <!-- nav tab -->
          <div class="settings__block-navtabs">
            <span class="content-tab" :class="{ active: tab === activeTab }"
              v-for="(tab, tabIndex) in tabs" :key="`selected-tab-${tabIndex}`" v-text="tab"
              @click="activeTab = tab" />
          </div>
          <!-- nav tab -->

          <!-- profile tab -->
          <div class="settings__block-wrapper" v-if="activeTab === 'Profile'">
            <div class="settings__block-profile">

              <!-- Basic Data -->
              <div class="settings__block-basic">
                <div class="settings__block-basic-title">
                  <h4>Basic Data</h4>
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

                  <div class="settings__block-basic-name" v-if="!isEditingBasic">
                    <img src="../assets/icons/rahul.svg" alt="profile-picture">
                    <p>{{editProfile.basicInfo.firstname}}</p>
                    <p>{{editProfile.basicInfo.middlename}}</p>
                    <p>{{editProfile.basicInfo.lastname}}</p>
                    <p>{{editProfile.basicInfo.phone_number}}</p>
                    <p>{{editProfile.basicInfo.date_of_birth}}</p>
                    <p>{{editProfile.basicInfo.gender}}</p>
                    <p>{{editProfile.basicInfo.mother_maiden_name}}</p>
                  </div>

                  <div class="settings__block-basic-name" v-if="isEditingBasic">
                    <img src="../assets/icons/rahul.svg" alt="profile-picture">
                    <p>{{editProfile.basicInfo.firstname}}</p>
                    <input type="text" class="form-control"
                      v-model="editProfile.basicInfo.middlename" />
                    <p>{{editProfile.basicInfo.lastname}}</p>
                    <input type="text" class="form-control"
                      v-model="editProfile.basicInfo.phone_number" />
                    <input type="text" class="form-control"
                      v-model="editProfile.basicInfo.date_of_birth" />
                    <input type="text" class="form-control"
                      v-model="editProfile.basicInfo.gender" />
                    <input type="text" class="form-control"
                      v-model="editProfile.basicInfo.mother_maiden_name" />
                  </div>
                </div>

                <div class="settings__block-basic-button">
                  <button class="btn-close" @click="toggleEdit('basicData', 1)"
                    v-if="!isEditingBasic">Edit</button>
                  <button class="btn-success" @click="saveProfile('basicData')"
                    v-if="isEditingBasic">Save</button>
                </div>

              </div>

            </div>
            <!-- Basic Data -->

            <!-- Next of Kin -->
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

                <div class="settings__block-basic-name" v-if="!isEditingKin">
                  <p>{{editProfile.nextOfKin.full_name}}</p>
                  <p>{{editProfile.nextOfKin.email}}</p>
                  <p>{{editProfile.nextOfKin.phone_number}}</p>
                  <p>{{editProfile.nextOfKin.residential_address}}</p>
                  <p>{{editProfile.nextOfKin.relationship}}</p>
                </div>

                <div class="settings__block-basic-name" v-if="isEditingKin">
                  <input type="text" class="form-control"
                    v-model="editProfile.nextOfKin.full_name" />
                  <input type="text" class="form-control"
                    v-model="editProfile.nextOfKin.email" />
                  <input type="text" class="form-control"
                    v-model="editProfile.nextOfKin.phone_number" />
                  <input type="text" class="form-control"
                    v-model="editProfile.nextOfKin.residential_address" />
                  <input type="text" class="form-control"
                    v-model="editProfile.nextOfKin.relationship" />
                </div>
              </div>



              <div class="settings__block-basic-button">
                <button class="btn-close" @click="toggleEdit('nextOfKin', 1)"
                  v-if="!isEditingKin">Edit</button>
                <button class="btn-success" @click="saveProfile('nextOfKin')"
                  v-if="isEditingKin">Save</button>
              </div>
            </div>
            <!-- Next of Kin -->

            <!-- Address -->
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

                <div class="settings__block-basic-name" v-if="!isEditingAddress">
                  <p>{{editProfile.userAddress.address}}</p>
                  <p>{{editProfile.userAddress.city}}</p>
                  <p>{{editProfile.userAddress.state_of_origin}}</p>
                  <p>{{editProfile.userAddress.country}}</p>
                  <p>{{editProfile.userAddress.nationality}}</p>
                </div>

                <div class="settings__block-basic-name" v-if="isEditingAddress">
                  <input type="text" class="form-control"
                    v-model="editProfile.userAddress.address" />
                  <input type="text" class="form-control"
                    v-model="editProfile.userAddress.city" />
                  <input type="text" class="form-control"
                    v-model="editProfile.userAddress.state_of_origin" />
                  <input type="text" class="form-control"
                    v-model="editProfile.userAddress.country" />
                  <input type="text" class="form-control" value=""
                    v-model="editProfile.userAddress.nationality" />
                </div>
              </div>


              <div class="settings__block-basic-button">
                <button class="btn-close" @click="toggleEdit('address', 1)"
                  v-if="!isEditingAddress">Edit</button>
                <button class="btn-success" @click="saveProfile('address')"
                  v-if="isEditingAddress">Save</button>
              </div>
            </div>
            <!-- Address -->
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
import Feedback from '@/components/FeedBack.vue';
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
            middlename: 'Boluwatife',
            phone_number: "+234 7056329624",
            gender: 'Male',
            mother_maiden_name: 'Olushola',
            date_of_birth: '23rd July 1988',
            firstname: 'Micheal',
            lastname: 'Okafor'

          },
          userAddress: {},
          nextOfKin: {}
        },
        isEditingBasic: false,
        isEditingKin: false,
        isEditingAddress: false,
        message: ''
      }
    },
    methods: {
      //switch between editable fields and non-editable fields
      toggleEdit(item, status) {
        debugger
        if (item === 'basicData') {
          status == 1 ? this.isEditingBasic = true : this.isEditingBasic = false
        } else if (item === 'nextOfKin') {
          status == 1 ? this.isEditingKin = true : this.isEditingKin = false
        } else if (item === 'address') {
          status == 1 ? this.isEditingAddress = true : this.isEditingAddress = false
        }

      },

      //save basic data, next kin and address to the DB
      saveProfile(userData) {
        let url, data;

        switch (userData) {
          case 'basicData':
            url = 'basic'
            data = this.editProfile.basicInfo
            break;
          case 'address':
            url = 'address'
            data = this.editProfile.userAddress
            break;
          case 'nextOfKin':
            url = 'kin'
            data = this.editProfile.nextOfKin
            break;

        }

        const { $toast } = this;
        axios.post(`/user/${url}`, JSON.stringify(data))
          .then(response => {
            if (response.data.status) {
              $toast.success(response.data.message, '', {
                position: 'topRight',
                timeout: 5000
              })

              this.toggleEdit(userData, 2)

            } else {
              // this.message = response.data.message

              $toast.error(response.data.message.toString(), '', {
                position: 'topRight',
                timeout: 5000
              })
            }
          })
          .catch(error => {
            $toast.error(error.toString(), '', {
              position: 'topRight',
              timeout: 5000
            })
          })

      },
      //fetch user address from the DB
      getAddress() {
        const { $toast } = this;
        // axios.all([
        //   axios.get('/user/basic'),
        //   axios.get('/user/kin'),
        //   axios.get('/user/address')
        // ])

        axios.get('/user/address').then(response => {
          //  console.log( response.data.data);
          this.editProfile.userAddress = response.data.data;

        }).catch(error => {
          $toast.error(error.toString(), '', {
            position: 'topRight',
            timeout: 5000
          })
          // console.error(error);
        });

      },

      //fetch user next of kin from the DB
      getNextOfKin() {
        const { $toast } = this;
        axios.get('/user/kin').then(response => {
          //  console.log( response.data.data);
          this.editProfile.nextOfKin = response.data.data;

        }).catch(error => {
          $toast.error(error.toString(), '', {
            position: 'topRight',
            timeout: 5000
          })
          // console.error(error);
        });


      },

      // getBasicData() {
      //    const { $toast } = this;
      //    axios.get('/user/basic').then(response => {
      //      console.log( response.data.data);
      //     this.editProfile.basicInfo = response.data.data;

      //   }).catch(error => {
      //      $toast.error(error.toString(), '', {
      //         position: 'topRight',
      //         timeout: 5000
      //       })
      //     // console.error(error);
      //   });

      // }
    },
    components: {
      SideNavbar,
      NavBar,
      Feedback
    },
    mounted() {
      // this.getBasicData()
      this.getNextOfKin()
      this.getAddress()
    },

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
 /* div.content {
    height: 100vh;
  } */

.content-tab {
  font-size: 1.125rem;
}

.settings__block-navtabs {
  border-bottom: 0.0625rem solid #DBDDE1;
  padding-bottom: 20px;
}

.settings__block-navtabs.active {
  border-bottom: 0.125rem solid #0FB36D;
}

.settings__block-wrapper {
  padding: 2.5rem 1.25rem 0 1.25rem;
}

.settings__block-basic-button {
  justify-self: flex-end;
}

.settings__block-basic {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
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
  margin-top: 1.25rem;
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
  margin-bottom: 2rem;
}

.settings__block-basic-name p {
  color: #1F1F1F;
  text-align: left;
  margin-bottom: 2rem;
}

h5 {
  text-align: right;
  font-size: 1rem;
}

img {
  margin-bottom: 1.125rem
}

.btn-success  {
  padding: 0.6875rem 2.875rem;
  font-size: 1.125rem;
  margin-right: 1.5rem;
  border-radius: 0.125rem;
}
.content-tab.active {
  color: #258C60;
    border-bottom: 5px solid #258C60;
}

.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 0.0625rem solid #DCD9D9;
    height: 3.125rem;
    margin-bottom: 1.2rem;

  }
</style>
