<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Oral Surgery</h2>
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
                    <img class="_1ser_details_img" src="/images/oralSurgery.png" alt="" title="">
                </div>
                
                <p class="_1ser_details_text">
                    When you hear the words oral surgery, you may think of a hospital setting, general anesthesia, 
                    and one or more days in recovery from this type of dental procedure; but you might be surprised to 
                    know what is considered oral surgery in dentistry. Actually, this is the area of medicine concerned with 
                    correcting problems or damage to the mouth, teeth and jaw. It is often referred to as "Oral and 
                    Maxillofacial Surgery" which combines oral surgery with surgery on the structures of the face, 
                    sinuses and neck. Many procedures done in a general dental office are considered oral surgery and 
                    patients that require such procedures are booked for the procedure without the inconvenience of being 
                    put on a waiting list for treatment.
                </p>

                <p class="_1ser_details_text">
                    Oral surgery is commonly performed to remove wisdom teeth, prepare the mouth for dentures, repair 
                    jaw problems and perform root canals. Oral surgeons may also perform more advanced procedures as 
                    required after trauma or severe disease damages the structures of the mouth.
                </p>

                <p class="_1ser_details_text">
                    A number of conditions may require oral surgery, including:
                </p>

                <h2 class="_1ser_details_title">Tooth Extractions</h2>

                <p class="_1ser_details_text">
                    The most recognized form of oral surgery is tooth extraction. Reasons for tooth extraction can range from:
                </p>

                <ul class="_1ser_details_list">
                    <li>Impacted or partially erupted wisdom teeth.</li>
                    <li>Teeth beyond repair either from tooth decay, root fracture, or trauma.</li>
                    <li>Primary teeth that have failed to fall out, preventing the eruption of permanent teeth.</li>
                    <li>Orthodontic treatment plans may require the removal of some teeth to achieve the optimum result.</li>
                </ul>

                <p class="_1ser_details_text">
                    Wisdom teeth, otherwise known as third molars, are the last set of teeth to develop. Sometimes 
                    these teeth emerge from the gum line and the jaw is large enough to allow room for them, but most of the 
                    time, this is not the case. More often, one or more of these third molars fails to emerge in proper 
                    alignment or fails to fully emerge through the gum line and becomes entrapped or "impacted" between the 
                    jawbone and the gum tissue. Impacted wisdom teeth can result in swelling, pain, and infection of the gum 
                    tissue surrounding the wisdom teeth. In addition, impacted wisdom teeth can cause permanent damage to 
                    nearby teeth, gums, and bone and can sometimes lead to the formation of cysts or tumors that can destroy 
                    sections of the jaw. Therefore, dentists recommend people with impacted wisdom teeth have them surgically 
                    removed.
                </p>

                <p class="_1ser_details_text">
                    It's not just wisdom teeth that sometimes become impacted and need to be removed. Other teeth, 
                    such as the cuspids and the bicuspids can become impacted and can cause the same types of problems 
                    described with impacted wisdom teeth.
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
