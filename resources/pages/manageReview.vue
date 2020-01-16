<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Our Team</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages _pages_before">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="container">
            <div class="_pages_main">
              <p class="review_title">Manage Review</p>

              <p class="_1text">Thank you for trusting us with the oral care. We invite your to share your <br> experience.</p>

              <div class="_review_card _1box_shadow _mar_t40 _review_comm">
                <!-- Title -->
                <div class="_review_comm_th">
                  <div class="reviewer">
                    <p class="reviewer_title">Reviewer</p>
                  </div>

                  <div class="review">
                    <p class="reviewer_title">Review</p>
                  </div>

                  <div class="status">
                    <p class="reviewer_title">Status</p>
                  </div>
                </div>
                <!-- Title -->

                <!-- Items -->
                <div class="_review_comm_items _1border_color" v-for="(item,index) in allreviews" :key="index">
                  <div class="reviewer">
                    <div class="reviewer_pro">
                      <img class="reviewer_pro_img" :src="item.image" alt="" title="">

                      <p class="reviewer_pro_name">{{item.name}}</p>
                    </div>
                  </div>

                  <div class="review">
                    <div class="review_top">
                      <ul class="_2rating">
                        <li :class="(item.rate>0)?'_2rating_active':''"><i class="fas fa-star"></i></li>
                        <li :class="(item.rate>1)?'_2rating_active':''"><i class="fas fa-star"></i></li>
                        <li :class="(item.rate>2)?'_2rating_active':''"><i class="fas fa-star"></i></li>
                        <li :class="(item.rate>3)?'_2rating_active':''"><i class="fas fa-star"></i></li>
                        <li :class="(item.rate>4)?'_2rating_active':''"><i class="fas fa-star"></i></li>
                      </ul>

                      <p class="review_date">{{item.date.substring(0, 10)}}</p>
                    </div>

                    <p class="_1text">{{item.description}} </p>
                  </div>

                  <div class="status">
                    <button class="_btn _btn_pending _btn_sm" type="" v-if="item.status=='Pending'">Pending</button>
                    <button class="_btn _btn_decline _btn_sm" type="" v-else-if="item.status=='Declined'">Declined</button>
                    <button class="_btn _btn_published _btn_sm" type="" v-else-if="item.status=='Published'">Published</button>

                    <div class="status_drop" >
                      <i class="fas fa-ellipsis-h" @click="changeModalOpen(item,index)"></i>

                      <div class="_drop_modal" v-if="item.istrue">
                        <p class="_drop_modal_title">Set Status</p>

                        <div class="_drop_modal_buttons">
                          <button class="_btn _btn_decline2" @click="updateStatus('Declined')">Decline</button>
                          <button class="_btn_gradient_default"  @click="updateStatus('Published')" ><i class="fas fa-arrow-right"></i> Publish</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="_review_buttons">
                    <button class="_btn_pressed _btn_sm" type="button">Decilne</button>
                    <button class="_btn_gradient_default _btn_sm" type="button"><img class="_mar_r5" src="/images/check.png" alt="" title="">Publish</button>
                  </div>
                </div>
                <!-- Items -->

                <!-- Items -->
                <!-- <div class="_review_comm_items _1border_color">
                  <div class="reviewer">
                    <div class="reviewer_pro">
                      <img class="reviewer_pro_img" src="/images/pro.jpg" alt="" title="">

                      <p class="reviewer_pro_name">Ceilia Poza</p>
                    </div>
                  </div>

                  <div class="review">
                    <div class="review_top">
                      <ul class="_2rating">
                        <li class="_2rating_active"><i class="fas fa-star"></i></li>
                        <li class="_2rating_active"><i class="fas fa-star"></i></li>
                        <li class="_2rating_active"><i class="fas fa-star"></i></li>
                        <li class="_2rating_active"><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                      </ul>

                      <p class="review_date">23/3/2019</p>
                    </div>

                    <p class="_1text">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. </p>
                  </div>

                  <div class="status">
                    <button class="_btn _btn_published _btn_sm" type="">Published</button>


                    <div class="status_drop">
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                </div> -->
                <!-- Items -->

              

             
               
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
                <button class="_schedule_btn" type="button">
                  REQURST APPOINTMENT
                  <img src="/images/arrowRight.png" alt="" title="">
                </button>
              </div>
            </div>
          </div>
        </section>
        <!--======= Schedule section end ======-->
      </div>
          <Modal v-model="isSuccess" :footer-hide="true" width="850">
            <div class="_book_modal">
                <div class="_thank">
                        <h2 class="_booking_title">Thank you</h2>

                        <div class="_thank_check"><Icon type="md-checkmark" /></div>

                        <p class="_booking_text">
                            Status Has Been Updated
                        </p>

                        <div class="_booking_button _text_center"  @click="isSuccess=false">
                            <button class="_btn_gradient_default _mar_t10">Done</button>
                        </div>
                    </div>
            </div>
            </Modal>
    </div>
</template>

<script>
export default {
  data(){
    return{
        editModal:false,
        allreviews:{},
        singleMember:false,
        editData:{
          id:'',
          status:'',
        },
        editIndex:-1,
        isSuccess:false
    }
  },
  async created(){
    const res =await this.callApi('get', '/getAllReviews')
    if(res.status==200){
      this.allreviews = res.data
     
    }

  },
  methods:{
    asignSingleMemebr(index){
      this.singleMember = this.allreviews[index]
    },
    changeModalOpen(item,index){
      this.allreviews[index].istrue = !this.allreviews[index].istrue
      this.isSuccess = false
      this.isFail = false
      this.editData.id = item.id
      this.editData.status = item.status
      this.editIndex = index
      this.editModal = true
    },
    CloseModalOpen(item,index){
      this.isSuccess = false
      this.isFail = false
      this.editData.id = ''
      this.editData.status = ''
      this.editIndex = -1
      this.editModal = false
    },
    async updateStatus(status){
        const res =await this.callApi('post', '/updateReviews', {'status':status, id:this.editData.id})
        if(res.status==200){
          this.allreviews[this.editIndex].status = status
          this.allreviews[this.editIndex].istrue = !this.allreviews[this.editIndex].istrue
          this.editIndex = -1
          this.isSuccess = true
          this.isFail = false
        }
        else{
          this.isFail = true
        }
    }

  }
}
</script>