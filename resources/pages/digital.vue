<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Digital X-Ray</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Details ======-->
        <section class="_1ser_details">
            <div class="_1banner_call">
                <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
            </div>

            <div class="container">
                <nuxt-link to="/services" class="back _c_default"><i class="fas fa-chevron-left"></i> Back to Services</nuxt-link>

                <div class="_1ser_details_pic">
                    <img class="_1ser_details_img" src="/images/digital.png" alt="" title="">
                </div>

                <p class="_1ser_details_text">
                    Digital radiography (digital x-ray) is the latest technology used to take dental x-rays. 
                    This technique uses an electronic sensor (instead of x-ray film) that captures and stores the digital 
                    image on a computer.This image can be instantly viewed and enlarged, helping the dentist and dental 
                    hygienist detect problems easier. Digital x-rays reduce radiation 80-90% compared to the already low 
                    exposure of traditional dental x-rays.
                </p>

                <p class="_1ser_details_text">
                    Dental x-rays are essential, preventative, diagnostic tools that provide valuable information not visible 
                    during a regular dental exam. Dentists and dental hygienists use this information to safely and accurately detect 
                    hidden dental 
                    abnormalities and complete an accurate treatment plan. Without x-rays, problem areas may go undetected.
                </p>
            </div>
        </section>
        <!--======= Details end ======-->

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
