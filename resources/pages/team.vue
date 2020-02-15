<template>
  <div>
    <div class="_content">
      <!--======= Header ======-->
      <div class="_1header">
        <h2 class="_1header_title">Our Team</h2>
      </div>
      <!--======= Header end ======-->

      <!--======= Team section ======-->
      <section class="_team">
        <div class="_1banner_call">
          <a class="_1banner_call_a" href>
            <i class="fas fa-phone"></i> (530) 222-4900
          </a>
        </div>

        <div class="_team_main" id="div1">
          <div class="container">
            <div class="row align-items-center" v-if="singleMember">
              <div class="col-12 col-md-4 col-lg-4">
                <div class="dbngohodfg">
                  <img class="_team_img" :src="singleMember.image" alt title />
                  <div class="_1card_delete" v-if="authInfo">
                    <button
                      class="_1card_delete_btn"
                      style="color:green !important;"
                      @click="editModalOpen(singleMember,-1)"
                    >
                      <Icon type="md-open" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-8 col-lg-8">
                <div class="_team_main_details">
                  <h2 class="_1title">
                    <span class="_1title_span">About</span>
                    <span class="_c_default">{{singleMember.name}}</span>
                  </h2>

                  <p
                    class="_1text"
                    v-if="!isAll && singleMember.description.length>1500"
                  >{{singleMember.description.substring(0, 1500)}}</p>
                  <p class="_1text" v-else>{{singleMember.description}}</p>

                  <!-- <b-collapse v-if="isAll" id="collapse-1" class="mt-2">
                    <p class="_1text" >{{singleMember.description}}</p>
                  </b-collapse>-->

                  <!-- <p class="_1text">
                      Our aim is to provide top quality dental care in order to improve our patient's quality of life for a lifetime, to take time to do extra things that will make the patient's experience positive - before, during, and after treatment to provide patients with an environment of trust and respect through compassion, enthusiasm, and commitment for dental health. We always strive to deliver quality general dental care in a safe, gentle, and friendly environment at a fee which is fair to both the patient and to the office personnel.
                  </p>-->

                  <button class="_btn_gradient_default" type="button" @click="isAll=!isAll">
                    {{(!isAll)?"View More":"View Less"}}
                    <Icon type="ios-arrow-round-forward" />
                  </button>
                  <!-- <button class="_btn_gradient_default" type="button" v-else @click="isAll=false">View Less <Icon type="ios-arrow-round-forward" /></button> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="_team_cards" v-if="allmembers.length>0">
          <div class="container">
            <div class="row">
              <!-- Card -->
              <div
                class="col-6 col-md-4 col-lg-4"
                v-for="(item,index) in allmembers"
                :key="index"
                v-if="item.isDentist == 'No'"
              >
                <div class="_1card _mar_b30">
                  <div class="_1card_pic">
                    <img
                      class="_1card_img"
                      style="cursor: pointer;"
                      :src="item.image"
                      alt
                      title
                      @click="asignSingleMemebr(index)"
                      v-scroll-to="'#div1'"
                    />
                    <div class="_1card_delete" v-if="authInfo">
                      <button class="_1card_delete_btn" @click="deleteMemeber(item.id,index)">
                        <Icon type="md-trash" />
                      </button>
                      <button
                        class="_1card_delete_btn"
                        style="color:green !important;"
                        @click="editModalOpen(item,index)"
                      >
                        <Icon type="md-open" />
                      </button>
                    </div>
                  </div>

                  <div class="_1card_details">
                    <p class="_1card_name">{{item.name}}</p>
                    <p class="_1card_status">{{item.designation}}</p>
                  </div>
                </div>
              </div>

              <!-- Card -->
            </div>
          </div>
        </div>

        <div class="_team_cards" v-else>
          <div class="container">
            <div class="row">
              <div class="col-6 col-md-4 col-lg-4">
                <div class="_1card _mar_b30">
                  <div class="_1card_pic">
                    <div class="_1card_details">
                      <p class="_1card_name">No Team Members Foound</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--======= Team section end ======-->

      <!--======= Schedule section ======-->
      <section class="_schedule">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md col-lg">
              <h3 class="_schedule_title">SCHEDULE AN APPOINTMENT FOR A CONSULTATION</h3>
            </div>

            <div class="col-12 col-md-auto col-lg-auto">
              <button class="_schedule_btn" type="button" @click="setAppointMentModal(true)">
                REQUEST APPOINTMENT
                <img src="/images/arrowRight.png" alt title />
              </button>
            </div>
          </div>
        </div>
      </section>
      <!--======= Schedule section end ======-->
    </div>

    <Modal v-model="editModal" :footer-hide="true" width="850">
      <section class>
        <div class>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <h2 class="_1title _text_center _mar_t40">Edit Your team member</h2>

                <div class="_mar_t40">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="_1input_group">
                        <p class="_1label">Full Name</p>

                        <input
                          class="_1int"
                          @keyup="assingData(1)"
                          v-model="from.name"
                          type="text"
                          placeholder="type full name"
                        />
                        <p v-if="error.name==''" class="Rectangle_coustom">Write Your Full Name</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="_1input_group">
                        <p class="_1label">Title</p>

                        <input
                          class="_1int"
                          @keyup="assingData(2)"
                          v-model="from.designation"
                          type="text"
                          placeholder="type title"
                        />
                        <p v-if="error.designation==''" class="Rectangle_coustom">Write title</p>
                      </div>
                    </div>
                    <!-- 
                    <div class="col-12 col-md-12 col-lg-12">
                      <div class="_1input_group">
                        <p class="_1label">Email</p>

                        <input
                          class="_1int"
                          @keyup="assingData(3)"
                          v-model="from.email"
                          type="text"
                          placeholder="type email address"
                        />
                        <p v-if="error.email==''" class="Rectangle_coustom">Invalid email</p>
                      </div>
                    </div>-->

                    <div class="col-12 col-md-12 col-lg-12" v-if="from.isDentist == 'Yes'">
                      <div class="_1input_group">
                        <p class="_1label">Bio</p>

                        <textarea
                          @keyup="assingData(4)"
                          class="_1textarea"
                          v-model="from.description"
                          placeholder="type bio"
                          rows="5"
                        ></textarea>
                        <p
                          v-if="error.description=='' || error.description==null"
                          class="Rectangle_coustom"
                        >Write Bio</p>
                      </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                      <div class="_1input_group">
                        <p class="_1label">Upload Image</p>
                        <div class="_1upload">
                          <div class="_image_upload_pic">
                            <!-- Image -->
                            <div class="_upload_image" v-if="from.image">
                              <img class="_image_upload_img" :src="from.image" alt title />

                              <p class="_1upload_edit" @click="from.image=false">
                                <i class="fas fa-pen"></i>
                              </p>
                            </div>
                            <!-- Image -->

                            <!-- Upload -->
                            <div class="_1upload_upload" v-else>
                              <Upload
                                ref="upload"
                                :show-upload-list="false"
                                :on-success="handleSuccess"
                                :format="['jpg','jpeg','png']"
                                :max-size="2048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                type="drag"
                                action="/uploadImages"
                              >
                                <div>
                                  <div class="_1upload_main">
                                    <p class="_1upload_icon">
                                      <i class="fas fa-camera"></i>
                                    </p>
                                  </div>
                                </div>
                              </Upload>
                            </div>
                            <!-- Upload -->

                            <p class="_upload_text">Upload your Picture</p>
                          </div>
                          <p
                            v-if="image=='' || image==null"
                            class="Rectangle_coustom"
                          >Upload your Picture</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                      <div class="row">
                        <div class="col-12 col-md col-lg"></div>
                        <div class="col-12 col-md-auto col-lg-auto" @click="storeAlldata">
                          <button class="_btn_gradient_default _mar_t10 _btn_padd30">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
    <Modal v-model="isSuccess" :footer-hide="true" width="850">
      <div class="_book_modal">
        <div class="_thank">
          <h2 class="_booking_title">Thank you</h2>

          <div class="_thank_check">
            <Icon type="md-checkmark" />
          </div>

          <p class="_booking_text">Your team member has been updated</p>

          <div class="_booking_button _text_center" @click="isSuccess=false">
            <button class="_btn_gradient_default _mar_t10">Done</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allmembers: [],
      isSuccess: false,
      singleMember: false,
      from: {
        name: "",
        email: "",
        image: "",
        designation: "",
        description: ""
      },

      error: {
        name: " ",
        email: " ",
        image: "",
        designation: " ",
        description: " "
      },
      editIndex: -1,
      isAll: false,
      image: false,
      editModal: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  async created() {
    this.$vs.loading({
      color: "#6647ff"
    });
    const res = await this.callApi("get", "/getTeamMember");
    if (res.status == 200) {
      this.allmembers = res.data;


      if (this.allmembers) {

        for(let i in this.allmembers){
          if(this.allmembers[i].isDentist=='Yes'){
              this.singleMember = this.allmembers[i];
          }
        }
        
      }
      this.$vs.loading.close();
    }
    this.$vs.loading.close();
  },
  methods: {
    deleteImage() {
      this.from.image = "";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      // const check = this.uploadList.length < 1;
      // if (!check) {
      //     this.$Notice.warning({
      //     title: "1 image can be uploaded."
      //     });
      // }
      // return check;
    },
    handleSuccess(res, file) {
      // console.log(res);
      // console.log(file);
      if (res) {
        let img = {
          name: file.name,
          percentage: file.percentage,
          status: file.status,
          // uid:1234567,
          url: res.image_path
        };
        this.from.image = img.url;
        this.image = " ";
        // this.uploadList.push(img);
        // console.log(this.custom_product_image_create)
      }
      console.log(this.uploadList);
    },
    async storeAlldata() {
      this.from.name = this.from.name.trim();
      this.from.designation = this.from.designation.trim();
      this.from.email = this.from.email.trim();
      this.from.description = this.from.description.trim();
      // this.image = this.from.image.trim()==''?'':' '

      if (this.from.name.trim() == "") {
        this.from.name = "";
        this.error.name = "";
        return;
      }

      if (this.from.designation.trim() == "") {
        this.from.designation = "";
        this.error.designation = "";
        return;
      }
      // if (this.from.email.trim() == "") {
      //   this.from.email = "";
      //   this.error.email = "";
      //   return;
      // }
      if (this.from.description.trim() == "" && this.from.isDentist == "Yes") {
        this.from.description = "";
        this.error.description = "";
        return;
      }

      if (this.from.image == "") {
        this.image = "";
        return;
      }
      // if (this.reg.test(this.from.email)) {
      //   this.error.email = this.from.email;
      // } else {
      //   this.error.email = "";
      //   return;
      // }
      if (!this.authInfo) {
        return this.e("You are not Authentic User!!");
      }
      this.$vs.loading({
        color: "#6647ff"
      });
      const res = await this.callApi("post", "/updatedTeam", this.from);
      if (res.status === 200) {

        if(this.editIndex==-1){
          this.singleMember = res.data;
        }
        else{

          this.allmembers[this.editIndex] = res.data;
        }
        // if (this.allmembers[this.editIndex].id == this.singleMember.id) {
        //   this.singleMember = res.data;
        // }
        this.error = {
          name: " ",
          email: " ",
          image: " ",
          designation: " ",
          description: " "
        },
          this.image = " "
        this.$vs.loading.close();
        this.editModal = false;
        this.isSuccess = true;
      } else {
        this.$vs.loading.close();
        this.e("please check your network");
      }
    },
    assingData(l) {
      if (l == 1) {
        this.error.name = this.from.name.trim();
      }

      if (l == 2) {
        this.error.designation = this.from.designation.trim();
      }
      if (l == 3) {
        if (this.reg.test(this.from.email)) {
          this.error.email = this.from.email;
        } else {
          this.error.email = "";
        }
      }
      if (l == 4) {
        this.error.description = this.from.description.trim();
      }
    },
    editModalOpen(item, index) {
      this.editIndex = index;
      this.from = JSON.parse(JSON.stringify(item));
      this.image = this.from.image;
      this.editModal = true;
    },
    asignSingleMemebr(index) {
      this.singleMember = this.allmembers[index];
      // window.scrollTo(0,0);
    },
    setAppointMentModal(d) {
      this.$store.dispatch("setAppointmentModal", d);
    },
    async deleteMemeber(id, index) {
      if (!confirm("Are you sure to delete?")) {
        return;
      }
      this.$vs.loading({
        color: "#6647ff"
      });
      const res = await this.callApi("post", "deletesingleMember", { id: id });
      if (res.status == 200) {
        this.allmembers.splice(index, 1);
        if (this.allmembers.length == 0) {
          this.singleMember = false;
        }
        if (this.allmembers.length != 0) {
          if (this.singleMember.id == id) {
            this.singleMember = this.allmembers[0];
          }
        }
        this.$vs.loading.close();
      } else {
        this.$vs.loading.close();
        this.e("please check your network");
      }
      this.$vs.loading.close();
    }
  }
};
</script>