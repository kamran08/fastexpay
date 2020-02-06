<template>
    <div>
    <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Upload Team</h2>
        </div>
        <!--======= Header end ======-->

        <!--======= Form section ======-->
        <section class="_pages _pages_before">
          <div class="_1banner_call">
            <a class="_1banner_call_a" href=""><i class="fas fa-phone"></i> (530) 222-4900</a>
          </div>

          <div class="_pages_main _contact_main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12 _patientForms_header_left">
                  <p class="_1text">Thank you for write review for Authentic Dental Studio. Your review will be show in Patient Review</p>

                  
                  <div class="_review_card _1box_shadow _mar_t40">
                    <div class="row">
                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Full Name</p>

                          <input class="_1int" @keyup="assingData(1)" v-model="from.name" type="text" placeholder="type full name">
                         <p v-if="error.name==''" class="Rectangle_coustom">Write Your Full Name</p>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Designation</p>

                          <input class="_1int" @keyup="assingData(2)" v-model="from.designation" type="text" placeholder="type designation">
                        <p v-if="error.designation==''" class="Rectangle_coustom">Write designation</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Email</p>

                          <input class="_1int" @keyup="assingData(3)" v-model="from.email"  type="text" placeholder="type email address">
                         <p v-if="error.email==''" class="Rectangle_coustom">Write email</p>
                        </div>
                        
                      </div>

                     

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Description</p>

                          <textarea @keyup="assingData(4)" class="_1textarea" v-model="from.description" placeholder="type message" rows="5"></textarea>
                        <p v-if="error.description=='' || error.description==null" class="Rectangle_coustom">Write description</p>
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
                        <p v-if="image=='' || image==null" class="Rectangle_coustom">Upload your Picture</p>
                      </div>

                    </div>
                  </div>

                      <!-- <div class="col-12 col-md-12 col-lg-12">
                          
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
                          :format="['jpg','jpeg','png','webp']"
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
                      </div> -->

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="row">
                          <div class="col-12 col-md col-lg">
                            
                          </div>
                            <div class="col-12 col-md-auto col-lg-auto" @click="storeAlldata">
                                <button class="_btn_gradient_default _mar_t10 _btn_padd30">Submit</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
// import authenticated from '../middleware/authenticated.js';
export default {
  
  middleware:['authenticated'],
    data(){
        return{
            uploadList:[],
            from:{
                name:'',
                email:'',
                image:'',
                designation:'',
                description:'',
            },
            error:{
                name:' ',
                email:' ',
                image:'',
                designation:' ',
                description:' ',
            },
            isSuccess:false,
            image:' ',
           reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

        }
    },
    created(){


    },
    methods:{
          deleteImage(){
      
                this.from.image =''
            },
        setAppointMentModal(d){
            this.$store.dispatch('setAppointmentModal',d)
          },
        async storeAlldata(){

              this.from.name = this.from.name.trim()
              this.from.designation = this.from.designation.trim()
              this.from.email = this.from.email.trim()
              this.from.description = this.from.description.trim()
              this.image = this.from.image.trim()==''?'':' '

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
                 if (this.reg.test(this.from.email)){
                    this.error.email =this.from.email
                  }
                  else{
                    this.error.email =''
                    return
                  }
                if(!this.authInfo){
                 return this.e("You are not Authentic User!!")
                }
              this.$vs.loading({
                color: "#6647ff"
              });
                const res = await this.callApi('post', '/storeTeamData', this.from)
                if(res.status===200){
                  this.error = {
                    name:' ',
                    email:' ',
                    image:' ',
                    designation:' ',
                    description:' ',
                },
                 this.image = ' '
                    this.$vs.loading.close();
                    this.isSuccess = true
                }
                else{
                     this.$vs.loading.close();
                  this.e("please check your network")
                }
        },
        assingData(l) {
          if(l==1){
            this.error.name = this.from.name.trim();
          }
         
          if(l==2){
            this.error.designation = this.from.designation.trim();
          }
           if(l==3){
            if (this.reg.test(this.from.email)){
              this.error.email =this.from.email
            }
            else{
              this.error.email =''
            }
          }
          if(l==4){
            this.error.description = this.from.description.trim();
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