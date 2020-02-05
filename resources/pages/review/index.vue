<template>
    <div>
        <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Patients Reviews</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages _pages_before">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="container">
            <div class="_pages_main">
              <p class="review_title">Write Review</p>

              <p class="_1text">Thank you for trusting us with the oral care. We invite your to share your <br> experience.</p>

              <div class="_review_card _1box_shadow _mar_t40">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                      <p class="_1label">Full Name</p>

                      <input class="_1int" type="text" v-model="from.name" placeholder="full name">
                    <p v-if="from.name==''" class="Rectangle_coustom">Write Your full name</p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                      <p class="_1label">Date of Visit</p>
                       <!-- <DatePicker @on-change="editStartTime"  v-model="social"  prefix="ios-calendar-outline" class="_1date" type="date" placeholder="Select date"></DatePicker> -->
                      <input class="_1int" v-model="from.date" type="date" placeholder="Jhon Doe">
                     <p v-if="from.date==''" class="Rectangle_coustom">Select Date of Visit</p>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                      <p class="_1label">Upload Image</p>
                      <div class="_1upload">
                       <div class="_image_upload_pic">
                        <!-- Image -->
                        <div class="_upload_image" v-if="from.image">
                          <img class="_image_upload_img" :src="from.image" alt="" title="" >

                           <p class="_1upload_edit" @click="from.image=false"><i class="fas fa-pen"></i></p>
                        </div>
                        <!-- Image -->

                        <!-- Upload -->
                        <div class="_1upload_upload" v-else>
                          <Upload
                          ref="upload"
                          :show-upload-list="false"
                          :on-success="handleSuccess"
                          :format="['jpg','jpeg','png']"
                          :max-size="2048"
                          :on-format-error="handleFormatError"
                          :on-exceeded-size="handleMaxSize"
                          :before-upload="handleBeforeUpload"
                          type="drag"
                          action="/uploadImages"
                          >
                            <div>
                              <div class="_1upload_main">
                                <p class="_1upload_icon"><i class="fas fa-camera"></i></p>
                              </div>
                            </div>
                          </Upload>
                        </div>
                        <!-- Upload -->

                        <p class="_upload_text">Upload your Picture</p>
                       </div>
                        <p v-if="image==''" class="Rectangle_coustom">Upload your Picture</p>
                      </div>

                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="_1input_group">
                      <p class="_1label">How would you rate our service for your visit?</p>

                      <ul class="_1rating">
                         <li :class="(from.rate>0)?'boitol':''" @click="from.rate=1"><i class="fas fa-star" @click="from.rate=1"></i></li>
                        <li :class="(from.rate>1)?'boitol':''" @click="from.rate=2"><i class="fas fa-star"></i></li>
                        <li :class="(from.rate>2)?'boitol':''" @click="from.rate=3"><i class="fas fa-star"></i></li>
                        <li :class="(from.rate>3)?'boitol':''" @click="from.rate=4"><i class="fas fa-star"></i></li>
                        <li :class="(from.rate>4)?'boitol':''" @click="from.rate=5"><i class="fas fa-star"></i></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-12 col-md-12 col-lg-12">
                    <div class="_1input_group">
                      <p class="_1label">Please leave your review below</p>

                      <textarea v-model="from.description" class="_1textarea" placeholder="Write Review" rows="5"></textarea>
                    </div>
                    <p v-if="from.description==''" class="Rectangle_coustom">Please leave your review</p>
                  </div>

                  <div class="col-12 col-md-12 col-lg-12">
                    <div class="row">
                      <div class="col-12 col-md col-lg">
                        <!-- <ul class="_add_image">
                          <li v-if="from.additionalImages.length" v-for="(item,index) in from.additionalImages" :key="index">
                            <img class="_add_image_img" :src="item" alt="" title="">
                            <div class="_add_image_icon">
                              <p class="_add_image_delete"><i class="fas fa-trash-alt"></i></p>
                            </div>
                          </li>

                          <li class="_add_image_upload">
                            <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :on-success="handleSuccess1"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload1"
                            type="drag"
                            action="/uploadImages"
                            >
                              <div>
                                <img class="_add_image_upload_img" src="/images/plus.png" alt="" title="">
                            <p class="more">Add more</p>
                              </div>
                            </Upload>
                          </li>
                        </ul> -->
                      </div>
                      <div class="col-12 col-md-auto col-lg-auto" @click="storeAlldata">
                        <button class="_btn_gradient_default _mar_t10">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
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
                          Thank You For Your Review
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
            uploadList:[],
            from:{
                name:' ',
                date:' ',
                status:'Pending',
                image:false,
                rate:0,
                description:' ',
                additionalImages:[],
            },
            isSuccess:false,
            image:' ',
            doctor:{}
        }
    },
   async created(){
     
    //    this.from.doctorId  = this.$route.params.docId
    //    if(this.from.doctorId ){
    //     const res = await this.callApi('get', `getSingleDoctor/${this.from.doctorId}`)
    //     if(res.status==200){
    //       this.doctor = res.data
    //       if(this.doctor.length<1){
    //         this.$router.push('/')
    //       }
    //     }
    //     else{
    //       this.router.push('/')
    //     }
    //   }

    },
    methods:{
         editStartTime(date){
              this.from.dob=date
          },
          deleteImage(){
      
                this.from.image =''
            },
        async storeAlldata(){
            this.from.name = this.from.name.trim()
            this.from.date = this.from.date.trim()
            this.from.description = this.from.description.trim()
            this.image = this.from.image?' ':''
                if(this.from.name.trim()==''){
                    this.from.name =''
                    return
                }
                
                if(this.from.date.trim()==''){
                    this.from.date ='' 
                    return
                }
             
                if(this.from.description.trim()==''){
                    this.from.description ='' 
                    return
                }
                if(this.from.image==false){
                    this.image ='' 
                    return
                }
                const res = await this.callApi('post', '/storeReviewData', this.from)
                if(res.status===200){
                    this.isSuccess = true
                    this.from = {
                       name:' ',
                        date:' ',
                        status:'Pending',
                        image:false,
                        rate:0,
                        description:' ',
                        additionalImages:[]
                    }
                    this.image =' '
                }
        },
          handleFormatError(file) {
                this.$Notice.warning({
                    title: "The file format is incorrect",
                    desc:
                    "File format of " +
                    file.name +
                    " is incorrect, please select jpg or png."
                });
          },
            handleMaxSize(file) {
            this.$Notice.warning({
                title: "Exceeding file size limit",
                desc: "File  " + file.name + " is too large, no more than 2M."
            });
        },
        handleBeforeUpload() {
            const check = this.from.image==''?true:false;
            if (!check) {
                this.$Notice.warning({
                title: "1 image can be uploaded."
                });
            }
            return check;
     },
        handleBeforeUpload1() {
            // const check = this.uploadList.length < 1;
            // if (!check) {
            //     this.$Notice.warning({
            //     title: "1 image can be uploaded."
            //     });
            // }
            // return check;
     },
    handleSuccess(res, file) {
          if (res) {
            this.from.image = res.image_path
            this.image = ' '
          }
        },
    handleSuccess1(res, file) {
          if (res) {
            this.from.additionalImages.push(res.image_path);
            // console.log(this.custom_product_image_create)
          }
          console.log(this.uploadList);
        },
     setAppointMentModal(d){
        this.$store.dispatch('setAppointmentModal',d)
      },
    }
}
</script>
<style >
.boitol{
   color: #ff8c36 !important;
}

</style>