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

        <div class="_team_main">
          <div class="container">
            <div class="row align-items-center" v-if="singleMember">
              <div class="col-12 col-md-4 col-lg-4">
                <img class="_team_img" :src="singleMember.image" alt title />
              </div>

              <div class="col-12 col-md-8 col-lg-8">
                <div class="_team_main_details">
                  <h2 class="_1title">
                    <span class="_1title_span">Our Team</span>
                    <span class="_c_default">{{singleMember.name}}</span>
                  </h2>

                  <p
                    class="_1text"
                    v-if="!isAll && singleMember.description.length>400">
                    {{singleMember.description.substring(0, 400)}}
                  </p>
                  <p class="_1text" v-else>{{singleMember.description}}</p>

                  <!-- <b-collapse v-if="isAll" id="collapse-1" class="mt-2">
                    <p class="_1text" >{{singleMember.description}}</p>
                  </b-collapse>-->

                  <!-- <p class="_1text">
                      Our aim is to provide top quality dental care in order to improve our patient's quality of life for a lifetime, to take time to do extra things that will make the patient's experience positive - before, during, and after treatment to provide patients with an environment of trust and respect through compassion, enthusiasm, and commitment for dental health. We always strive to deliver quality general dental care in a safe, gentle, and friendly environment at a fee which is fair to both the patient and to the office personnel.
                  </p>-->

                  <button
                    class="_btn_gradient_default"
                    type="button"
                    @click="isAll=!isAll"
                  >
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
              <div class="col-6 col-md-4 col-lg-4" v-for="(item,index) in allmembers" :key="index" >
                <div class="_1card _mar_b30">
                  <div class="_1card_pic" @click="asignSingleMemebr(index)">
                    <img class="_1card_img" :src="item.image" alt title />
                    <div class="_1card_delete" v-if="authInfo">
                      <button class="_1card_delete_btn" @click="deleteMemeber(item.id,index)">
                        <Icon type="md-trash" />
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

              <div class="col-6 col-md-4 col-lg-4" >
                <div class="_1card _mar_b30">
                  <div class="_1card_pic" >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      allmembers: [],
      singleMember: false,
      isAll: false
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
        this.singleMember = this.allmembers[0];
      }
      this.$vs.loading.close();
    }
    this.$vs.loading.close();
  },
  methods: {
    asignSingleMemebr(index) {
      this.singleMember = this.allmembers[index];
    },
    setAppointMentModal(d) {
      this.$store.dispatch("setAppointmentModal", d);
    },
    async deleteMemeber(id, index) {
       this.$vs.loading({
      color: "#6647ff"
    });
      const res = await this.callApi("post", "deletesingleMember", { id: id });
      if (res.status == 200) {
        // if(id == this.singleMember.id){
        //     if(this.allmembers[index+1]){
        //       this.singleMember = this.allmembers[index+1]
        //     }
        //     else if(this.allmembers[index-1]){
        //       this.singleMember = this.allmembers[index-1]
        //     }
        // }
        this.allmembers.splice(index, 1);
        if(this.allmembers.length==0){
          this.singleMember = false
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