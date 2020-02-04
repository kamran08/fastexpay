<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Sealants & Fluoride</h2>
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
                    <img class="_1ser_details_img" src="/images/rectangle.png" alt="" title="">
                </div>
                
                <h2 class="_1ser_details_title">Sealants</h2>

                <p class="_1ser_details_text">
                    Your dentist can apply sealants easily, and it takes only a few minutes to seal each tooth. The dentist first cleans 
                    the teeth that will be sealed, which may require the use of a dental drill to open the grooves of the teeth and determine if decay is present. Then he or she will roughen the chewing surfaces with an acid solution, which will help the sealant stick to the teeth. The dentist then “paints” the sealant on the tooth. It bonds directly to the 
                    tooth and hardens. Sometimes your dentist will use a special curing light to help the sealant harden.
                </p>


                <h2 class="_1ser_details_title">Fluoride</h2>

                <p class="_1ser_details_text">
                    The fluoride preparation used in the dental office is a much stronger concentration than that in toothpastes 
                    or fluoride mouth rinses that may be available in a store or at a pharmacy.
                </p>

                <p class="_1ser_details_text">
                    Professional fluoride treatments generally take just a few minutes. The fluoride may be in the form of a solution, 
                    gel, foam or varnish. Typically, it is applied with a cotton swab or brush, or it is used as a rinse or placed in a 
                    tray that is held in the mouth for several minutes. After the treatment, you may be asked not to rinse, eat or drink for 
                    at least 30 minutes to allow the teeth to absorb the fluoride and help repair microscopic carious areas. Depending on your 
                    oral health status, fluoride treatments may be recommended every three, six, or 12 months.
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
