<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Patients Reviews</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages _1ser_main _1rev_alls">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main ">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-5 col-lg-5">
                  <img src="/images/PatientsReviews.png" alt="" title="">
                </div>
                <div class="col-12 col-md-7 col-lg-7 _patientForms_header_left">

                  <h2 class="_1title _text_left">
                    <span class="_1title_span">What Our Customer Saying</span>
                  </h2>

                    <ul class="_1rating _mar_t30 _mar_b20">
                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                        <li class="_1rating_active"><i class="fas fa-star"></i></li>
                        <li class=""><i class="fas fa-star"></i></li>
                    </ul>

                    <p class="_1text _text_left">
                      Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. 
                      Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est.
                    </p>
                    <p class="_1rev_name">Arkell Charles</p>
                    <p class="_1rev_pre">
                      Marketing Manager
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--======= Form section end ======-->

        <!--======= Lists ===========-->
        <section class="_ser_listss">
            <div class="container">
                <div class="_ser_section_cards">
                    <div class="row">
                        <div class="col-12">
                            <p class="_noter">data not found</p>
                        </div>

                        
                        <div class="col-12 col-md-6 col-lg-6" v-for="(items,index) in 4" :key="index">
                            <div class="_1rev_main _1box_shadow _mar_b30">
                                <div class="_1rev_top">
                                    <div class="_1rev_pic">
                                        <img class="_1rev_img" src="/images/pro.jpg" alt="" title="">
                                    </div>

                                    <div class="_1rev_details">
                                        <p class="_1rev_name">Nitithorn Prinya</p>
                                        <p class="_1rev_pre2">Digital Engineering</p>
                                    </div>

                                    <div class="_1rev_rating">
                                        <ul class="_1rating">
                                            <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                            <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                            <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                            <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                            <li class=""><i class="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="_1rev_status">
                                    <p class="_1rev_status_text"><i>Fusce vehicula dolor arcu, 
                                        sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper
                                         metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices.</i> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--======= Lists ===========-->

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