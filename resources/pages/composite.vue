<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Composite & Amalgam Fillings</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Details ======-->
        <section class="_1ser_details">
            <div class="_1banner_call">
                 <a class="_1banner_call_a" href="tel:530222-4900"><i class="fas fa-phone"></i> (530) 222-4900</a>
            </div>

            <div class="container">
                <nuxt-link to="/services" class="back _c_default"><i class="fas fa-chevron-left"></i> Back to Services</nuxt-link>

                <div class="_1ser_details_pic">
                    <img class="_1ser_details_img" src="/images/composite.png" alt="" title="">
                </div>

                <p class="_1ser_details_text">
                    Your dentist can apply sealants easily, and it takes only a few minutes to seal each tooth. The dentist 
                    first cleans the teeth that will be sealed, which may require the use of a Almost everyone has had a 
                    cavity filled at least once in their lifetime. We offer our patients a choice in the material used to give 
                    their decayed tooth back the support it needs to function normally. In the past, the only options for 
                    fillings were colored, silver or gold. Today, we have the option to restore teeth with composite 
                    tooth-colored filling material that seamlessly blends with the surrounding teeth. Fillings are meant to be 
                    strong and durable, providing support to a tooth that has lost some of its natural structure due to tooth 
                    decay. Both amalgam and composite fillings can provide that support, but there are advantages and 
                    disadvantages to each.
                </p>

                <h2 class="_1ser_details_title">Composite Fillings</h2>

                <p class="_1ser_details_text">
                    Most patients elect to get white composite fillings instead of silver amalgam fillings for the following 
                    reasons:
                </p>

                <ul class="_1ser_details_list">
                    <li>Fewer health risks associated with the use of composite fillings</li>
                    <li>Less post-treatment discomfort and sensitivity</li>
                    <li>The tooth-colored material can be matched to blend in with surrounding teeth</li>
                    <li>Strong and durable</li>
                    <li>Single visit for filling</li>
                    <li>Maximum amount of healthy tooth is preserved</li>
                    <li>Small risk of leakage if bonded only to the enamel</li>
                    <li>Does not corrode</li>
                    <li>Holds up well to the force of biting</li>
                </ul>

                <p class="_1ser_details_text">
                    Although most patients prefer composite fillings, there are some disadvantages to consider:
                </p>

                <ul class="_1ser_details_list">
                    <li>Tooth-colored fillings are typically more expensive than silver fillings</li>
                    <li>Material shrinks when hardened and could lead to further decay and/or temperature sensitivity</li>
                    <li>The material may wear faster than the surrounding enamel</li>
                </ul>

                <h2 class="_1ser_details_title">Amalgam Fillings</h2>

                <p class="_1ser_details_text">Some patients prefer silver fillings to composite fillings for several reasons:</p>

                <ul class="_1ser_details_list">
                    <li>The silver amalgam treatment takes less time.</li>
                    <li>Silver fillings do not require use of advanced dental tools or techniques, lowering the cost of treatment.</li>
                    <li>They have been used for decades and have a solid long-term record.</li>
                </ul>

                <p class="_1ser_details_text">However, there are some drawbacks associated with silver amalgam fillings, including:</p>

                <ul class="_1ser_details_list">
                    <li>Temperature changes in the mouth may cause the amalgam to expand and contract over a period of time, which can damage the integrity of the tooth</li>
                    <li>More of the natural tooth structure must be removed in order to prepare the tooth for the silver filling material</li>
                    <li>The silver amalgam material is noticeable and shows that dental work has been done</li>
                    <li>Some patients are concerned about the potential dangers of the mercury that is found in amalgam fillings</li>
                </ul>

                <p class="_1ser_details_text">No matter what, if you need a filling, our team can ensure you the best option for your lifestyle.</p>
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
