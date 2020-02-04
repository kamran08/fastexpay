<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Teeth Whitening</h2>
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
                    <img class="_1ser_details_img" src="/images/teeth.png" alt="" title="">
                </div>
                
                <p class="_1ser_details_text">
                    If your smile has become discolored, has lost its luster, or is making you look older than you are, teeth 
                    whitening can be a simple solution for you. Dr. Dao offers a take-home whitening treatment that 
                    provides a noticeably whiter smile.
                </p>

                <p class="_1ser_details_text">
                    Dr. Dao will make whitening trays just for you, and then provide you with the professional grade whitening gel to utilize 
                    at home. You will be instructed on how to use the whitening system, as well as how often it should be used in order to get 
                    the results you want.
                </p>

                <p class="_1ser_details_text">
                    Some patients do multiple shorter treatments during the day, while others may wear the trays overnight. The good news is the 
                    timing is up to you. Sine you have the supplies at home; there is no need to whiten on someone else’s 
                    schedule.
                </p>

                <p class="_1ser_details_text">
                    In order to maintain the whitest teeth possible, it is important to be aware of how teeth discolor. Many things 
                    can cause staining or discoloration.  It is normal for teeth to dull with age, but there are also avoidable risk 
                    factors such as consuming foods and drinks that can stain.  The main culprits of a lackluster or yellowed smile are tea, 
                    coffee, red wine, and tobacco.  Fortunately, teeth whitening is one of the most cost-effective and quickest ways
                    to take your smile from blah to beaming.
                </p>

                <h2 class="_1ser_details_title">How long will the results last?</h2>

                <p class="_1ser_details_text">
                    The lasting effects vary from patient to patient. It is important to avoid staining agents after your treatment 
                    in order to maintain longer lasting results.  Some patients whiten their teeth on a regular basis in order to keep 
                    their smile rejuvenated regularly. Your color preference and lifestyle will determine the number of treatments you require.  
                    We would be happy to talk with you about regular upkeep and maintenance.
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