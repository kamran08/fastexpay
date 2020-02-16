<template>
  <div>
    <div class="_content">
      <!--======= Header ======-->
      <div class="_1header">
        <h2 class="_1header_title">Patients Reviews</h2>
      </div>
      <!--======= Header end ======-->

      <!--======= Form section ======-->
      <section class="_pages _1ser_main _1rev_alls">
        <div class="_1banner_call">
           <a class="_1banner_call_a" href="tel:530222-4900"><i class="fas fa-phone"></i> (530) 222-4900</a>
        </div>

        <div class="_pages_main" >
          <div class="container">
            <h2 class="_1title _text_center _mar_b40">
              <span class="_1title_span">What our customers are saying</span>
            </h2>
            <div class="row" v-if="singleReview">
              <div class="col-12 col-md-5 col-lg-5">
                <div class="_2patientForms_pic">
                  <img :src="singleReview.image" alt title />
                </div>
              </div>
              <div class="col-12 col-md-7 col-lg-7 _patientForms_header_left">
                <ul class="_1rating _mar_t30 _mar_b20">
                  <li :class="(singleReview.rate>0)?'_1rating_active':''">
                    <i class="fas fa-star"></i>
                  </li>
                  <li :class="(singleReview.rate>1)?'_1rating_active':''">
                    <i class="fas fa-star"></i>
                  </li>
                  <li :class="(singleReview.rate>2)?'_1rating_active':''">
                    <i class="fas fa-star"></i>
                  </li>
                  <li :class="(singleReview.rate>3)?'_1rating_active':''">
                    <i class="fas fa-star"></i>
                  </li>
                  <li :class="(singleReview.rate>4)?'_1rating_active':''">
                    <i class="fas fa-star"></i>
                  </li>
                </ul>

                <p class="_1text _text_left">
                  {{singleReview.description}}.
                </p>
                <p class="_1rev_name">{{singleReview.name}}</p>
                <!-- <p class="_1rev_pre">Marketing Manager</p> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--======= Form section end ======-->

      <!--======= Lists ===========-->
      <section class="_ser_listss">
        <div class="container">
          <div class="_ser_section_cards">
              <template v-if="allReview.length>0">
                <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
                  <div class="row">
                      <div v-masonry-tile class="col-12 col-md-6 col-lg-6 item"
                        v-for="(item,index) in allReview"
                        :key="index">
                        <div class="_1rev_main _1box_shadow _mar_b30">
                          <div class="_1rev_top">
                            <div class="_1rev_pic">
                              <img class="_1rev_img" :src="item.image" alt title />
                            </div>

                            <div class="_1rev_details">
                              <p class="_1rev_name">{{item.name}}</p>
                              <!-- <p class="_1rev_pre2">Digital Engineering</p> -->
                            </div>

                            <div class="_1rev_rating">
                              <ul class="_1rating">
                                <li :class="(item.rate>0)?'_1rating_active':''">
                                  <i class="fas fa-star"></i>
                                </li>
                                <li :class="(item.rate>1)?'_1rating_active':''">
                                  <i class="fas fa-star"></i>
                                </li>
                                <li :class="(item.rate>2)?'_1rating_active':''">
                                  <i class="fas fa-star"></i>
                                </li>
                                <li :class="(item.rate>3)?'_1rating_active':''">
                                  <i class="fas fa-star"></i>
                                </li>
                                <li :class="(item.rate>4)?'_1rating_active':''">
                                  <i class="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="_1rev_status">
                            <p class="_1rev_status_text">
                              <i>{{item.description}}.</i>
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <!-- <div
                  class="col-12 col-md-6 col-lg-6"
                  v-for="(item,index) in allReview"
                  :key="index"
                >
                  <div class="_1rev_main _1box_shadow _mar_b30">
                    <div class="_1rev_top">
                      <div class="_1rev_pic">
                        <img class="_1rev_img" :src="item.image" alt title />
                      </div>

                      <div class="_1rev_details">
                        <p class="_1rev_name">{{item.name}}</p>
                      </div>

                      <div class="_1rev_rating">
                        <ul class="_1rating">
                          <li :class="(item.rate>0)?'_1rating_active':''">
                            <i class="fas fa-star"></i>
                          </li>
                          <li :class="(item.rate>1)?'_1rating_active':''">
                            <i class="fas fa-star"></i>
                          </li>
                          <li :class="(item.rate>2)?'_1rating_active':''">
                            <i class="fas fa-star"></i>
                          </li>
                          <li :class="(item.rate>3)?'_1rating_active':''">
                            <i class="fas fa-star"></i>
                          </li>
                          <li :class="(item.rate>4)?'_1rating_active':''">
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="_1rev_status">
                      <p class="_1rev_status_text">
                        <i>{{item.description}}.</i>
                      </p>
                    </div>
                  </div>
                </div> -->
              </template>
              <template v-else>
                <div class="col-12">
                  <p class="_noter">No Reviews Found</p>
                </div>
              </template>
              <!-- <div class="col-md-6 col-sm-6 col-12">
                            <div class="col-12 col-md-12 col-lg-12" v-for="(items,index) in 4" :key="index">
                              <div class="_1rev_main _1box_shadow _mar_b30">
                                  <div class="_1rev_top">
                                      <div class="_1rev_pic">
                                          <img class="_1rev_img" src="/images/pro.jpg" alt="" title="">
                                      </div>

                                      <div class="_1rev_details">
                                          <p class="_1rev_name">Nitithorn Prinya</p>
                                          <p class="_1rev_pre2">Digital Engineering</p>
                                      </div>

                                      <div class="_1rev_rating">
                                          <ul class="_1rating">
                                              <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                              <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                              <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                              <li class="_1rating_active"><i class="fas fa-star"></i></li>
                                              <li class=""><i class="fas fa-star"></i></li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div class="_1rev_status">
                                      <p class="_1rev_status_text"><i>Fusce vehicula dolor arcu, 
                                          sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper
                                          metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. <br><br> Fusce vehicula dolor arcu, 
                                          sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper
                                          metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. </i> </p>
                                  </div>
                              </div>
                          </div>
              </div>-->
          </div>
        </div>
      </section>
      <!--======= Lists ===========-->

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
                <img src="/images/arrowRight.png" alt title />
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
  data() {
    return {
      allReview: [],
      singleReview: false,
      isAll: false
    };
  },
  async created() {

     this.$vs.loading({
      color: "#6647ff"
    });
    const res1 = await this.callApi('get', "/getPrimeReview")
    this.$vs.loading.close();
    if(res1.status ==200){
      this.singleReview = res1.data
      this.$vs.loading.close();

    }
    this.$vs.loading({
      color: "#6647ff"
    });
    
    const res = await this.callApi("get", "/getAllPublishReviews");
    if (res.status == 200) {
      this.allReview = res.data;
      // this.allReview = {}
      // if (this.allReview.length) {
      //   this.singleReview = this.allReview[0];
      //   this.allReview.splice(0,1)
      
      // }
      this.$vs.loading.close();
    }
    

    this.$vs.loading.close();
  },
  methods: {
    setAppointMentModal(d) {
      // let d = !this.appointmentModal
      this.$store.dispatch("setAppointmentModal", d);
    }
  }
};
</script>