<template>
    <div>
    <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Contact Us</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _contact_main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12 _patientForms_header_left">
                  <p class="_1text">We are waiting to hear from you. Please fill the form below and one of our staff will get back to you as soon as possible. <br> Thank you for your trust.</p>

                  
                  <div class="_review_card _1box_shadow _mar_t40">
                    <div class="row">
                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Full Name</p>

                          <input class="_1int" v-model="from.name" type="text" placeholder="type first name">
                        <p v-if="from.name==''" class="Rectangle_coustom">Write Your Full Name</p>
                        </div>
                      </div>
                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Designation</p>

                          <input class="_1int" v-model="from.designation" type="text" placeholder="type designation">
                        <p v-if="from.designation==''" class="Rectangle_coustom">Write designation</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Email</p>

                          <input class="_1int" v-model="from.email"  type="text" placeholder="type email address">
                         <p v-if="from.email==''" class="Rectangle_coustom">Write email</p>
                        </div>
                        
                      </div>

                     

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Description</p>

                          <textarea class="_1textarea" v-model="from.description" placeholder="type message" rows="5"></textarea>
                        <p v-if="from.description=='' || from.description==null" class="Rectangle_coustom">Write description</p>
                        </div>
                      </div>
                      <div class="col-12 col-md-12 col-lg-12">
                          
                          <div style="hight:20px;" v-if="from.image">
                              <img :src="from.image" alt="">
                              <button @click="deleteImage">delete</button>
                          </div>
                          
                        <div class="_1input_group" v-if="from.image=='' || from.image==null">
                          <p class="_1label">Upload Image</p>

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
                          style="display: inline-block;width:58px;"
                        >
                          <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="ios-camera" size="20"></Icon>
                          </div>
                        </Upload>
                        </div>

                        <p v-if="image=='' || image==null" class="Rectangle_coustom">upload image</p>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="row">
                          <div class="col-12 col-md col-lg">
                            
                          </div>
                            <div class="col-12 col-md-auto col-lg-auto" @click="storeAlldata">
                                <button class="_btn_gradient_default _mar_t10">Send</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div class="container">
            <div class="_cantact_sec_map _mar_t55">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" frameborder="0" style="border:0"></iframe>
            </div>
          </div>
        </section>
        <!--======= Form section end ======-->

     
      </div>
            <Modal v-model="isSuccess" :footer-hide="true" width="850">
                <div class="_book_modal">
                    <div class="_thank">
                            <h2 class="_booking_title">Thank you</h2>

                            <div class="_thank_check"><Icon type="md-checkmark" /></div>

                            <p class="_booking_text">
                                Thank you for booking an appointment with Authentic Dental Studio. Your oral health is our priority. A Patient 
                                Coordinator will contact you as soon as possible to confirm your appointment.
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
                email:' ',
                image:'',
                designation:' ',
                description:' ',
            },
            isSuccess:false,
            image:' '
        }
    },
    created(){

    },
    methods:{
          deleteImage(){
      
                this.from.image =''
            },
        async storeAlldata(){
                if(this.from.name.trim()==''){
                    this.from.name ='' 
                    return
                }
                
                if(this.from.designation.trim()==''){
                    this.from.designation ='' 
                    return
                }
                if(this.from.email.trim()==''){
                    this.from.email ='' 
                    return
                }
                if(this.from.description.trim()==''){
                    this.from.description ='' 
                    return
                }
                if(this.from.image.trim()==''){
                    this.image ='' 
                    return
                }
                const res = await this.callApi('post', '/storeTeamData', this.from)
                if(res.status===200){
                    this.isSuccess = true
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
            const check = this.uploadList.length < 1;
            if (!check) {
                this.$Notice.warning({
                title: "1 image can be uploaded."
                });
            }
            return check;
     },
         handleSuccess(res, file) {
      // console.log(res);
      // console.log(file);
      if (res) {
        let img = {
          name: file.name,
          percentage: file.percentage,
          status: file.status,
          // uid:1234567,
          url: res.image_path
        };
        this.from.image = img.url
        this.image = ' '
        this.uploadList.push(img);
        // console.log(this.custom_product_image_create)
      }
      console.log(this.uploadList);
    },
  
    }
}
</script>
<style >

</style>