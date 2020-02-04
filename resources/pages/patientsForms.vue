<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Patients Forms</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages _2patientForms_main_all">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _patientForms_top _2patientForms_main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-7 col-lg-7 _patientForms_header_left">
                  <h2 class="_1title">
                    <span class="_1title_span">Click the links below to download the forms you need</span>
                  </h2>

                  <p class="_1text">Our office offers our New Patients a choice to print and conveniently fill out our new patient forms at home. Just be sure to bring them with you during your initial visit. By doing so, you can save up to 15 minutes of registration. If you prefer to register upon your initial visit, you will need to arrive at the office at least 15 minutes prior.</p>
                </div>
                <div class="col-12 col-md-5 col-lg-5">
                  <img src="/images/pat.png" alt="" title="">
                  <!-- <div class="_patientForms_header_pic">
                    <div class="_patientForms_header_imgOne">
                      <img class="" src="/images/pros.png" alt="" title="">
                    </div>
                    <div class="_patientForms_header_imgTwo">
                      <img class="" src="/images/1.jpg" alt="" title="">
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="_patientForms_cat">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="_patientForms_card _mar_b20 _1box_shadow">
                    <p class="_patientForms_card_title">Patient Registration</p>

                    <img class="_patientForms_card_errow" src="/images/next.png" alt="" title="">
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div  class="_patientForms_card _mar_b20 _1box_shadow">
                    <p class="_patientForms_card_title">Health History Form</p>

                    <img class="_patientForms_card_errow" src="/images/next.png" alt="" title="">
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div  class="_patientForms_card _mar_b20 _1box_shadow">
                    <p class="_patientForms_card_title">Financial Policy Form</p>

                    <img class="_patientForms_card_errow" src="/images/next.png" alt="" title="">
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div  class="_patientForms_card _mar_b20 _1box_shadow">
                    <p class="_patientForms_card_title">Notice of Privacy Policy</p>

                    <img class="_patientForms_card_errow" src="/images/next.png" alt="" title="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--======= Form section end ======-->

        <!--======= Schedule section ======-->
        <section class="_schedule">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md col-lg">
                <h3 class="_schedule_title">SCHEDULE AN APPOINTMENT FOR A CONSULTATION</h3>
              </div>

              <div class="col-12 col-md-auto col-lg-auto">
                <button class="_schedule_btn" type="button" @click="setAppointMentModal(true)">
                  REQERST APPOINTMENT
                  <img src="/images/arrowRight.png" alt="" title="">
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
  data(){
    return{
      
    }
  },
  async created(){
 

  },
  methods:{
     setAppointMentModal(d){
      // let d = !this.appointmentModal
      this.$store.dispatch('setAppointmentModal',d)
    },

  }
}
</script>