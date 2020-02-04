<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Porcelain Veneers</h2>
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
                    <img class="_1ser_details_img" src="/images/porcelain.png" alt="" title="">
                </div>

                <p class="_1ser_details_text">
                    Porcelain veneers have become a very popular and widely used treatment for an assortment of 
                    dental problems. The cosmetic results of porcelain veneers from Sacramento's Serenity Dental are 
                    relatively fast and always astonishing.
                </p>

                <p class="_1ser_details_text">
                    Porcelain veneers are thin, yet exceptionally strong porcelain shells that are custom made for each tooth 
                    and are bonded to the front sides of your natural teeth. High quality porcelain veneers provide 
                    long-lasting results and can transform your teeth and smile into a beautiful attribute of your appearance.
                </p>

                <p class="_1ser_details_text">
                    Porcelain veneers can be a marvelous remedy for people who need to correct certain 
                    dental problems, such as:
                </p>

                <ul class="_1ser_details_list">
                    <li>Chipped or Broken Teeth</li>
                    <li>Crooked Teeth</li>
                    <li>Cracked Teeth</li>
                    <li>Misshapen Teeth</li>
                    <li>Gaps Between Teeth</li>
                    <li>Worn Down Teeth</li>
                    <li>Stained or Discolored Teeth</li>
                </ul>

                <p class="_1ser_details_text">
                    Not all porcelain veneers are the same, and in some cases there are alternative 
                    olutions you should consider.
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
