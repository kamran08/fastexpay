<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Periodontal Disease & Treatments</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages">
          <div class="_1banner_call">
             <a class="_1banner_call_a" href="tel:530222-4900"><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _patientForms_top">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-7 col-lg-7 _patientForms_header_left">
                  <nuxt-link to="/services" class="back _c_default"><i class="fas fa-chevron-left"></i> Back to Service</nuxt-link>

                  <!-- <h2 class="_1title">
                    <span class="_1title_span">If a patient cannot clean his teeth, no dentist can clean them for him.</span>
                  </h2>

                  <p class="_1text">Our team will make you feel right at home when you come in for your check-up. Our team will walk you through each step of your evaluation to make sure you are given every opportunity to ask questions. They will take care of any anxious feelings you may experience, and provide you with the most comfortable care imaginable. You will be asked to share any concerns or changes you may have noticed, such as tooth discoloration, bad breath, sensitivity to hot and cold, or bleeding during brushing or flossing.  The team will then complete a wellness check to make sure they have a comprehensive understanding of your wellness. To do that they will complete:</p> -->
                </div>
                
              </div>
              <div class="_new_pages_bg"></div>
            </div>
          </div>
          

          <div class="_details_list">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <ul class="_details_list_ul">
                    <li>Review of your health history (medication use, changes in systemic health, etc.)</li>

                    <li>Gum disease assessment</li>

                    <li>Bone health assessment</li>

                    <li>Check of existing restorations</li>
                  </ul>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <ul class="_details_list_ul">
                    <li>Oral cancer screening</li>

                    <li>Home care routine review (brushing and flossing)</li>

                    <li>X-rays if necessary•Address any other concerns you may have</li>
                  </ul>
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