<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Extractions</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Details ======-->
        <section class="_1ser_details">
            <div class="_1banner_call">
               <a class="_1banner_call_a" href="tel:530222-4900"><i class="fas fa-phone"></i> (530) 222-4900</a>
            </div>

            <div class="container">
                <nuxt-link to="/services" class="back _c_default"><i class="fas fa-chevron-left"></i> Back to Services</nuxt-link>

                <div class="row">
                    <div class="col-12 col-md-7 col-lg-7 _mar_b40">
                        <p class="_1ser_details_text">
                            Good oral hygiene should always be practiced since the loss of a single tooth can have major 
                            impact upon your oral health and appearance. Although Dr. Dao will use every measure to prevent 
                            tooth loss, there still sometimes necessary occasions when a tooth may need to be extracted. A 
                            tooth may need to be extracted if there is severe decay, advanced periodontal disease, infection 
                            or abscess, malpositioned teeth, fractured teeth or roots, or impacted teeth.
                        </p>

                        <p class="_1ser_details_text">
                            After careful examination and treatment, Dr. Dao may advise to have a tooth extracted. Before a 
                            tooth is removed, the dental assistant will take an x-ray in order to understand the shape and 
                            position of the tooth and surrounding bone. Based on the degree of difficulty, we may refer you 
                            to a specialist called an oral surgeon.
                        </p>
                            
                        <p class="_1ser_details_text">
                            A certain amount of discomfort is to be expected following an extraction, which can be minimized 
                            with a pain medication and ice packs applied to the face for 15 minutes at a time. After a
                             routine extraction, discomfort should lessen within three days to two weeks.
                        </p>
                            
                        <p class="_1ser_details_text">
                            If you have prolonged or severe pain, swelling, bleeding or fever,
                            contact us immediately at: (530) 222-4900.
                        </p>
                    </div>

                    <div class="col-12 col-md-5 col-lg-5 _kjsbd">
                        <div class="_1ser_details_pic">
                            <img class="_1ser_details_img" src="/images/extractions.png" alt="" title="">
                        </div>
                    </div>
                </div>
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
