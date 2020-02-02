<template>
    <div>
    <div class="_content">
        <!--======= Header ======-->
        <div class="_1header">
          <h2 class="_1header_title">Log In</h2>
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

                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="_review_card _1box_shadow _mar_t40">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                        <p class="_1label">Email</p>

                                        <input class="_1int" v-model="formData.email" type="text" placeholder="type email address">
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="_1input_group">
                                        <p class="_1label">Password</p>

                                        <input class="_1int" v-model="formData.password" type="password" placeholder="type your password">
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="row">
                                        <div class="col-12 col-md col-lg">
                                            
                                        </div>
                                        <div class="col-12 col-md-auto col-lg-auto" @click="onSubmit">
                                            <button class="_btn_gradient_default _mar_t10">Log In <i class="fas fa-arrow-right"></i></button>
                                        </div>
                                        </div>
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
<script>

export default {
  middleware:['loginTrue'],
  data(){
    return{
        formData:{
          email:'',
          password:'',
        }
    }
  },
  created(){

  },
  methods:{
        async onSubmit(){
            if (this.formData.email=='' || this.formData.password=='') {
                this.e('field can not be empty')
                return
            }
             this.$vs.loading({
                color: "#6647ff"
              });
              const res = await this.callApi('post','/login',this.formData)
              if(res.status===200){
                  this.s("Login Successfully !")
                  this.$store.dispatch('setAuthInfo',res.data)
                  this.$vs.loading.close();
                  // this.$router.push('/')
                  // console.log('login success')
                  // this.$router.go(0);
                  this.$router.push('/')
                  // // window.location= '/'
                  // console.log(this.authInfo)
                  // if(this.authInfo.role==1){
                  //     // this.$router.push('flanker/'+this.authInfo.id)
                  //     // window.location= '/flanker/'+this.authInfo.id
                  //     this.$router.push('/product_post')
                  // }
                  // else if(this.authInfo.role==2){
                  //       // window.location ='/profile/'+this.authInfo.id
                  //       this.$router.push('/')
                  // }
              }
              else if(res.status==401){
                  this.e(res.data.message)
              }
              else{
                  this.swr();
              }
      },
       setAppointMentModal(d){
        this.$store.dispatch('setAppointmentModal',d)
      },
  }
}
</script>

