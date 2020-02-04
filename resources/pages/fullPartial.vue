<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Full & Partial Dentures</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Details ======-->
        <section class="_1ser_details">
            <div class="_1banner_call">
                <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
            </div>

            <div class="container">
                <nuxt-link to="/services" class="back _c_default"><i class="fas fa-chevron-left"></i> Back to Service</nuxt-link>

                <div class="_1ser_details_pic">
                    <img class="_1ser_details_img" src="/images/fullPartial.png" alt="" title="">
                </div>
                
                <h2 class="_1ser_details_title">What are Dentures?</h2>
                
                <p class="_1ser_details_text">
                    Losing your natural teeth can be difficult.  Dr. Lyons is sympathetic to any embarrassment you may be 
                    experiencing due to missing teeth. Dr. Lyons and his team will work hard to get you an amazingly 
                    attractive and functional smile.  If you have lost your teeth due to decay, gum disease, or trauma, 
                    dentures may be a great option for you.
                </p>

                <h2 class="_1ser_details_title">Will dentures work for me?</h2>

                <p class="_1ser_details_text">
                    These days, dentures are a much different experience than what your parents or grandparents endured. 
                    A denture that is well done can change your life.  Dentures or partials have taken our patients with 
                    little to no confidence, to smiling, laughing, and eating all of their favorite foods!
                </p>

                <p class="_1ser_details_text">
                    Dentures do more than provide a beautiful smile, they also serve the very important purpose of 
                    maintaining bone structure. When teeth are lost, the bone beneath begins to atrophy. A denture or 
                    partial can help maintain the structure of the bone and prevent ‘sunken face’ and bone deterioration. 
                    Dentures can also help recover normal speech. The muscles in your mouth may regain normal function when 
                    teeth are put back in place. Not only will dentures help your bone structure and speech, having a full 
                    mouth of teeth again allows you to eat foods you may not have enjoyed for a long time.
                </p>

                <p class="_1ser_details_text">
                    A denture is a removable dental appliance replacement for missing teeth and surrounding tissue.  
                    They are made to closely resemble your natural teeth and may even enhance your smile.
                </p>

                <p class="_1ser_details_text">
                    There are two types of dentures - complete and partial dentures.  Complete dentures are used when all of 
                    the teeth are missing, while partial dentures are used when some natural teeth remain.  A Partial denture 
                    not only fills in the spaces created by missing teeth, it prevents other teeth from shifting.
                </p>

                <p class="_1ser_details_text">
                    Immediate dentures are made in advance and immediately placed after the teeth are removed, thus preventing 
                    the patient from having to be without teeth during the healing process.  Once the tissues shrink and heal, 
                    adjustments will have to be made. Dentures are very durable appliances and will last many years, but may have to be 
                    remade, repaired, or readjusted due to normal wear.
                </p>

                <h2 class="_1ser_details_title">What is the Procedure for Dentures?</h2>

                <p class="_1ser_details_text">
                    The process of getting dentures requires several appointments, usually over several weeks.  
                    Highly accurate impressions (molds) and measurements are taken and used to create your custom denture.  
                    Several “try-in” appointments may be necessary to ensure proper shape, color, and fit.  At the final 
                    appointment, your dentist will precisely adjust and place the completed denture, ensuring a natural and 
                    comfortable fit.
                </p>
                        
                <p class="_1ser_details_text">
                    It is normal to experience increased saliva flow, some soreness, and possible speech and chewing difficulty, 
                    however this will subside as your muscles and tissues get used to the new dentures.
                </p>
                        
                <p class="_1ser_details_text">
                    You will be given care instructions for your new dentures.  Proper cleaning of your new dental appliance, 
                    good oral hygiene, and regular dental visits will aid in the life of your new dentures.
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
