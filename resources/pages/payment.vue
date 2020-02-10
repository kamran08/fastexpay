<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Payment & Insurance</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _patientForms_top payment">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-7 col-lg-7 _patientForms_header_left">
                  <h2 class="_1title">
                    <span class="_1title_span">Insurance & Payments</span>
                  </h2>

                  <p class="_1text _padd_t20">Our front office team will help you to make the financial aspect of your appointment as easy as possible. During the consultation appointment, you will meet with the treatment coordinator to discuss insurance and financial options. Payment plans are available to help spread the cost over the duration of treatment, making all your dental care surprisingly affordable!

                  <p class="_1text">We offer the following additional services to help take the stress out of dentistry and invest in yourself:</p>
                </div>
                <div class="col-12 col-md-5 col-lg-5">
                  <img src="/images/payment.png" alt="" title="">
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

              <ul class="_details_list_ul _mar_t55">
                <li>We will bill your insurance company for you. See the list of our preferred providers.</li>

                <li>We accept Cash, Check, MC, VISA, and Discover.</li>

                <li>Private consultations, in office to discuss your financial options and cost of treatment.</li>

                <li>Care Credit: This option allows payments to be spread out over time and many options that include interest free.</li>
              </ul>
            </div>
          </div>

          <div class="_insurance">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-4 col-lg-4">
                  <h2 class="_1title">
                    <span class="_1title_span">Insurance</span>
                  </h2>
                </div>

                <div class="col-12 col-md-8 col-lg-8">
                  <p class="_1text">We continuing update our list of insurance. If you don’t see your insurance on this list, please contact us to inquire about your insurance.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="_pay_card_all">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_pay_card _1box_shadow">
                    <ul class="_pay_card_list">
                      <li>Aetna</li>

                      <li>Ameritas</li>

                      <li>Assurant Employee Benefits</li>
                    </ul>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_pay_card _1box_shadow">
                    <ul class="_pay_card_list">
                      <li>Blue Shield of California

                      <li>CIGNA</li>

                      <li>Connection Dental</li>
                    </ul>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_pay_card _1box_shadow">
                    <ul class="_pay_card_list">
                      <li>Delta Dental Premier

                      <li>Dental Health Alliance</li>

                      <li>GEHA</li>
                    </ul>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_pay_card _1box_shadow">
                    <ul class="_pay_card_list">
                      <li>MetLife

                      <li>Principal</li>

                      <li>United Concordia</li>

                      <li>United Health Care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="_payment_system">
            <div class="container">
              <h2 class="_1title _1title_center">
                <span class="_1title_span">Payments</span>
              </h2>

              <p class="_1text">We accept cash and most form of payments and credit cards.</p>

              <div class="_payment_system_main">
                <ul class="_payment_system_pic">
                  <li>
                    <img src="/images/visa.png" alt="" title="">
                  </li>
                  <li>
                    <img src="/images/masterCard.png" alt="" title="">
                  </li>
                  <li>
                    <img src="/images/american.png" alt="" title="">
                  </li>
                  <li>
                    <img src="/images/discover.png" alt="" title="">
                  </li>
                  <li>
                    <img src="/images/careCredit.png" alt="" title="">
                  </li>
                </ul>
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
                  REQUEST APPOINTMENT
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