<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Periodontal Disease & Treatments</h2>
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
                    <img class="_1ser_details_img" src="/images/periodental.png" alt="" title="">
                </div>

                <h2 class="_1ser_details_title">1. What is periodontal disease?</h2>

                <p class="_1ser_details_text">
                    The term “periodontal” means “around the tooth.” Periodontal disease 
                    (also known as periodontitis and gum disease) is a common inflammatory 
                    condition which affects the supporting and surrounding soft tissue of the tooth; also,
                    the jawbone itself, when in its most advanced stages.
                </p>

                <p class="_1ser_details_text">
                    Periodontal disease is most often preceded by gingivitis which is a bacterial infection of 
                    the gum tissue. A bacterial infection affects the gums when the toxins contained in plaque begin to irritate
                    and inflame the gum tissues. Once this bacterial infection colonizes in the gum pockets between the teeth, 
                    it becomes much more difficult to remove and treat. Periodontal disease is a progressive condition that eventually 
                    leads to the destruction of the connective tissue and jawbone. If left untreated, it can lead to shifting teeth, 
                    loose teeth, and eventually, tooth loss.
                </p>

                <p class="_1ser_details_text">
                    Periodontal disease is the leading cause of tooth loss among adults in the developed world and should always 
                    be promptly treated.
                </p>


                <h2 class="_1ser_details_title">2. Signs and symptoms of periodontal disease:</h2>

                <div class="row justify-contant-center">
                    <div class="col-12 col-md-10 col-lg-6">
                        <img class="" src="" alt="" title="">
                    </div>
                </div>

                <h2 class="_1ser_details_title">3. When to see a dentist</h2>

                <p class="_1ser_details_text">
                    Health gums are firm and pale pink. If your gums are puffy, dusky 
                    red and bleed easily, or show other signs or symptoms of periodontitis, 
                    see your dentist soon. The sooner you seek care, the better chances of reversing damage from 
                    periodontitis and preventing other serious health problems.
                </p>


                <h2 class="_1ser_details_title">4. Causes of periodontal disease</h2>

                <p class="_1ser_details_text">
                    It’s thought that periodontitis begins with plaque. This sticky film is 
                    composed mainly of bacteria. Plaque forms on your teeth when starches and sugars in
                     food interact with bacteria normally found in your mouth. Brushing your teeth removes plaque. But 
                     plaque re-forms quickly, usually within 24 hours.
                </p>

                <p class="_1ser_details_text">
                    Plaque that stays on your teeth longer than two or three days can harden under 
                    your gum line into tartar (calculus). Tartar makes plaque more difficult to remove and acts as a reservoir 
                    for bacteria. What's more, you usually can't get rid of tartar by brushing and flossing — you need 
                    a professional dental cleaning to remove it.
                </p>

                <p class="_1ser_details_text">
                    The longer plaque and tartar remain on your teeth, the more damage they can do. 
                    Initially, they may simply irritate and inflame the gingiva, the part of your gum around the base of your teeth. 
                    This is called gingivitis, the mildest form of periodontal disease. But ongoing inflammation eventually causes
                     pockets to develop between your gums and teeth that fill with plaque, tartar and bacteria. In time, these 
                     pockets become deeper and more bacteria accumulate, eventually advancing under your gum tissue. These deep 
                     infections cause a loss of tissue and bone. If too much bone is destroyed, you may lose one or more teeth.
                </p>

                <h2 class="_1ser_details_title">5. Risk Factors that increase the risk of periodontal disease</h2>

                <p class="_1ser_details_text">
                    Poor Oral Health Habits<br>
                    Preventing dental disease starts at home with good oral hygiene and a 
                    balanced diet. Prevention also includes regular dental visits which include exams, cleanings, and x-rays.
                     A combination of excellent home care and professional dental care will ensure and preserve the natural 
                     dentition and supporting bony structures. When bacteria and calculus (tartar) are not removed, the gums 
                     and bone around the teeth become affected by bacteria toxins and can cause gingivitis or periodontitis,
                      which can lead to tooth loss.
                </p>
                
                <p class="_1ser_details_text">
                    e with uncontrolled diabetes, steroid users, and people who control seizures and blood pressure 
                    using medication.
                </p>

                <p class="_1ser_details_text">
                    Treatment for gingivitis is easily reversible using a solid combination of home care and professional 
                    cleaning. The dentist may perform root planing and deep scaling procedures to cleanse the pockets of debris. A 
                    combination of antibiotics and medicated mouthwashes may be used to kill any remaining bacteria and promote the 
                    good healing of the pockets.
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
