<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Porcelain Crowns & Bridges</h2>
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
                    If you are worried about a cracked tooth, chipped teeth, or are suffering from tooth decay that has badly 
                    damaged your tooth, porcelain dental crowns may be the right option for you. Our team want you to have a 
                    healthy smile, and that may be achieved with the placement of a durable and attractive porcelain crown.
                </p>

                <h2 class="_1ser_details_title">What can I expect if I do need a dental crown?</h2>

                <p class="_1ser_details_text">
                    A dental crown is a method for restoring a tooth that has decayed, worn down, or cracked and cannot be 
                    corrected with a tooth filling. In some instances an old filling may have expanded and contracted over 
                    time, causing it to separate from the tooth, which can cause the tooth to become damaged or weakened. 
                    The distorted filling eventually causes a small opening between itself and the tooth, which invariably 
                    results in decay. If the filling is not replaced by a crown, the tooth may crack and bring on more serious 
                    problems and discomfort.
                </p>

                <p class="_1ser_details_text">
                    A dental bridge literally bridges the gap created by a missing tooth and then linking a false tooth in 
                    between the two crowns, to fill the empty space of the missing tooth. Bridges are a great way to replace 
                    missing teeth. Other options for replacing teeth include Dental Implants or Implant Retained Dentures.
                </p>


                <h2 class="_1ser_details_title">All-Porcelain Crowns</h2>

                <p class="_1ser_details_text">
                    All-porcelain crowns are all white, like your teeth, so they give your 
                    mouth the natural look you want
                </p>

                <ul class="_1ser_details_list">
                    <li>Porcelain crowns are custom made to fit over your natural tooth. The crown is bonded to your tooth, covering it completely, restoring its strength and 
                    function.</li>
                    <li>Porcelain crowns repair and strengthen damaged teeth, and can also be used to give a new surface to 
                        discolored or misshaped teeth.</li>
                </ul>

                <p class="_1ser_details_text">
                    Porcelain crowns help stop the spread of decay and correct any structural damage. A strategically placed 
                    crown can also improve the alignment of your bite, thereby preventing other teeth from shifting, 
                    and more evenly distributing the pressure placed upon your teeth when you bite or chew. Because of the 
                    inherent smoothness of porcelain and strength of the bonding process, all-porcelain crowns increase not 
                    only the strength but also the life span of the tooth.
                </p>

                    
                <h2 class="_1ser_details_title">The Procedure</h2>

                <p class="_1ser_details_text">
                    Porcelain crown placement typically involves two visits. Your tooth is prepared and shaped, and then 
                    impressions are taken and sent to a dental lab. The lab creates a model from your impressions and crafts a 
                    porcelain crown to fit over your tooth. This crown is then bonded to your tooth.
                </p>

                <p class="_1ser_details_text">
                    Other than a little sensitivity for a few days, the procedure itself is 
                    relatively pain-free.
                </p>

                    
                <h2 class="_1ser_details_title">Caring for a Porcelain Crown</h2>

                <p class="_1ser_details_text">
                    All-porcelain crowns are very strong and durable. In many instances they will outlast the biting 
                    capacity of your natural teeth, but they still require the same daily care that you give your normal 
                    teeth.
                </p>

                <p class="_1ser_details_text">
                    Dental crowns look just like natural teeth, but are more than just a cosmetic fix. Crowns protect the 
                    damaged teeth from further problems, as they are strong enough to endure regular eating and drinking.
                </p>

                    ​
                <h2 class="_1ser_details_title">Are there options to help me pay for a porcelain crown?</h2>

                <p class="_1ser_details_text">
                    If you are concerned with the cost of a crown, rest assured we are here to help. We provide access to 
                    Care Credit to help spread out the cost with no interest options!
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
