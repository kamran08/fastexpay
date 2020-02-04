<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Restoration of Implants</h2>
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
                    <img class="_1ser_details_img" src="/images/restoration.png" alt="" title="">
                </div>
                
                <p class="_1ser_details_text">
                    ​A dental implant is an ideal tooth restoration for people who are missing one or more teeth, whatever the 
                    reason may be. A dental implant is a metal post that a periodontist or oral surgeon surgically positions into 
                    the jaw. Once in place, and the bone surrounding the implant has had time to heal, a replacement tooth is 
                    attached to the post. While implants are typically more expensive than other methods of tooth replacement, 
                    they provide superior benefits. Implants are stronger than natural teeth and generally last 10-20 years. 
                    They are also a more favorable approach than bridgework since they do not depend on neighboring teeth for 
                    support.
                </p>

                <p class="_1ser_details_text">
                    To receive implants, you need to have healthy gums and adequate bone to support the implant. You must also 
                    be committed to excellent oral hygiene and regular dental visits, as these are critical to the long-term 
                    success of dental implants.
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
