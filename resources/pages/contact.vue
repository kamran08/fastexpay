<template>
    <div>
    <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Contact Us</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _contact_main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12 _patientForms_header_left">
                  <p class="_1text">We are waiting to hear from you. Please fill the form below and one of our staff will get back to you as soon as possible. <br> Thank you for your trust.</p>

                  
                  <div class="_review_card _1box_shadow _mar_t40">
                    <div class="row">
                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Full Name</p>

                          <input class="_1int" type="text" placeholder="type first name">
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Email</p>

                          <input class="_1int" type="text" placeholder="type email address">
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Phone Number</p>

                          <input class="_1int" type="text" placeholder="type phone number">
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Message</p>

                          <textarea class="_1textarea" placeholder="type message" rows="5"></textarea>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="row">
                          <div class="col-12 col-md col-lg">
                            
                          </div>
                          <div class="col-12 col-md-auto col-lg-auto">
                            <button class="_btn_gradient_default _mar_t10">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="_details_list _mar_t55">
            <div class="container">
              <div class="_cantact_sec_top">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-3">
                    <div class="_cantact_card">
                      <div class="_cantact_card_icon _bg_default">
                        <img class="_cantact_card_img" src="/images/mapPin.png" alt="" title="">
                      </div>

                      <div class="_cantact_card_details">
                        <p class="_cantact_card_title">2695 Bechelli Lane</p>
                        <p class="_cantact_card_value">Radding, CA 96002</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-3">
                    <div class="_cantact_card">
                      <div class="_cantact_card_icon _bg_default">
                        <img class="_cantact_card_img" src="/images/phone.png" alt="" title="">
                      </div>

                      <div class="_cantact_card_details">
                        <p class="_cantact_card_title">(530) 222-4900</p>
                        <p class="_cantact_card_value">Call Us Today</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-3">
                    <div class="_cantact_card">
                      <div class="_cantact_card_icon _bg_default">
                        <img class="_cantact_card_img" src="/images/clock.png" alt="" title="">
                      </div>

                      <div class="_cantact_card_details">
                        <p class="_cantact_card_title">Opening Hours</p>
                        <p class="_cantact_card_value">Mon- Thu 8AM-4PM</p>
                        <p class="_cantact_card_value">Friday By Appointment</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-6  col-lg-3">
                    <div class="_cantact_card">
                      <div class="_cantact_card_icon _bg_default">
                        <img class="_cantact_card_img" src="/images/mail.png" alt="" title="">
                      </div>

                      <div class="_cantact_card_details">
                        <p class="_cantact_card_title">Appointment Booling</p>
                        <p class="_cantact_card_value">Office@authentic.dental</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </div>

          <div class="container">
            <div class="_cantact_sec_map _mar_t55">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" frameborder="0" style="border:0"></iframe>
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
                  REQURST APPOINTMENT
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