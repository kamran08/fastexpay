<template>
<div>
    <nav class="_menu">
      <div class="container-fluid _menu_con">
        <div class="row align-items-center">
          <div @click="mobileOpen = true" class="_mobile_button _lg_hidden _col_visible _col_md_visible _c_default">
            <i class="fas fa-grip-vertical"></i>
          </div>
          <div class="col col-md col-lg">
            <nuxt-link class="_logo_pic" to="/" @click="mobileOpen = false">
              <img class="_logo_img" src="/images/logo.png" alt title />
            </nuxt-link>
          </div>

          <div class="col-auto col-md-auto col-lg-auto _col_hidden _col_md_hidden">
            <ul class="_menu_list">
              <li :class="($route.name == 'index') ? `_menu_active `: ''">
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li  :class="($route.name == 'services') ? `_menu_active `: ''">
                <nuxt-link to="/services">Services</nuxt-link>
              </li>
              <li :class="($route.name == 'team') ? `_menu_active `: ''">
                <nuxt-link to="/team">Our Team</nuxt-link>
              </li>
              <!-- <li v-if="authInfo" :class="($route.name == 'uploadTeam') ? `_menu_active `: ''">
                <nuxt-link to="/uploadTeam" >Upload your Team member</nuxt-link>
              </li> -->
              <li :class="($route.name == 'patientsForms') ? `_menu_active `: ''">
                <nuxt-link to="/patientsForms">Patient Forms</nuxt-link>
              </li>
              <li :class="($route.name == 'payment') ? `_menu_active `: ''">
                <nuxt-link to="/payment">Payments</nuxt-link>
              </li >
              <!-- <li v-if="authInfo" :class="($route.name == 'manageReview') ? `_menu_active `: ''">
                <nuxt-link to="/manageReview">Patient Reviws</nuxt-link>
              </li> -->
              <li :class="($route.name == 'patientsReviews') ? `_menu_active `: ''">
                <nuxt-link to="/patientsReviews">Patient Review</nuxt-link>
              </li>
              <li :class="($route.name == 'contact') ? `_menu_active `: ''">
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>

              <li v-if="authInfo">
                <p class="_1menu_drop_title" @click="dropOpen =!dropOpen">More <Icon type="ios-arrow-down" /></p>

                <div class="_1menu_drop" v-if="dropOpen">
                  <div class="_1menu_drop_main">
                    <ul class="_1drop_list">
                      <li v-if="authInfo" :class="($route.name == 'uploadTeam') ? `_menu_active `: ''" @click="dropOpen=false">
                        <nuxt-link to="/uploadTeam" >Upload your Team member</nuxt-link>
                      </li>

                      <!-- <li :class="($route.name == 'patientsForms') ? `_menu_active `: ''">
                        <nuxt-link to="/patientsForms">Patient Forms</nuxt-link>
                      </li> -->

                      <li v-if="authInfo" :class="($route.name == 'manageReview') ? `_menu_active `: ''" @click="dropOpen=false">
                        <nuxt-link to="/manageReview">Manage Reviews</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-auto col-md-auto col-lg-auto _col_hidden">
            <button class="_btn_gradient_default _btn_sm" @click="setAppointMentModal(true),isSubmit=false" type="button">Book Appointment</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div :class="(mobileOpen == true)? '_mobile_menu mobileOpen' : '_mobile_menu'">
      <div class="_mobile_menu_main">
        <ul class="_menu_list _mobile_menu_list">
          <li :class="($route.name == 'index') ? `_menu_active `: ''">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li  :class="($route.name == 'services') ? `_menu_active `: ''">
            <nuxt-link to="/services">Services</nuxt-link>
          </li>
          <li :class="($route.name == 'team') ? `_menu_active `: ''">
            <nuxt-link to="/team">Our Team</nuxt-link>
          </li>
          <li v-if="authInfo" :class="($route.name == 'uploadTeam') ? `_menu_active `: ''">
            <nuxt-link to="/uploadTeam" >Upload your Team member</nuxt-link>
          </li>
          <li :class="($route.name == 'patientsForms') ? `_menu_active `: ''">
            <nuxt-link to="/patientsForms">Patient Forms</nuxt-link>
          </li>
          <li :class="($route.name == 'payment') ? `_menu_active `: ''">
            <nuxt-link to="/payment">Payments</nuxt-link>
          </li >
          <li v-if="authInfo" :class="($route.name == 'manageReview') ? `_menu_active `: ''">
            <nuxt-link to="/manageReview">Manage Reviews</nuxt-link>
          </li>
          <li :class="($route.name == 'contact') ? `_menu_active `: ''">
            <nuxt-link to="/contact">Contact Us</nuxt-link>
          </li>
        </ul>

        <div class="_mobile_menu_button">
          <button class="_btn_gradient_default _btn_sm" @click="setAppointMentModal(true),isSubmit=false" type="button">Book Appointment</button>
        </div>

        <p @click="mobileOpen = false" class="_mobile_menu_close"><Icon type="md-close" /></p>
      </div>

      <div @click="mobileOpen = false" :class="(mobileOpen == true)? '_mobile_menu_bg _mobile_menu_bg_open' : '_mobile_menu_bg'"></div>
    </div>
    <!-- Mobile Menu -->

    <Modal v-model="getAppointmentModal" :mask-closable="false" :footer-hide="true" width="850" @on-cancel="setAppointMentModal(false)">
      <div class="_book_modal">
        <template v-if="!isSubmit">
          <h2 class="_booking_title">Request an Appointment</h2>

          <p class="_booking_text">Please fill out the form below and our scheduling coordinator will <br> contact you to confirm your appointment.</p>
            <div class="_booking_step">
                <p class="_booking_step_num _bg_default_dark">1</p>

                <p class="_booking_step_text _c_default_dark">Patient Information</p>
            </div>

            <div class="_booking_form _mar_b50">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">First Name</p>

                            <input @keyup="assingData(1)" class="_1int" v-model="from.firstName" type="text" placeholder="type first name">
                            <p v-if="from2.firstName=='' || from2.firstName==null" class="Rectangle_coustom">Write Your First Name</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Last Name</p>

                            <input @keyup="assingData(2)" class="_1int" v-model="from.lastName" type="text" placeholder="type last name">
                           <p v-if="from2.lastName=='' || from2.lastName== null" class="Rectangle_coustom">Write Your Last Name</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Date of Birth</p>
                            
                            <DatePicker @on-change="editStartTime"  v-model="social"  prefix="ios-calendar-outline" class="_1date" type="date" placeholder="Select date"></DatePicker>
                         <!-- <p v-if="from2.dob==''" class="Rectangle_coustom">Select Date of Birth</p> -->
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Phone</p>

                            <input class="_1int" @keyup="assingData(3)" v-model="from.phone" type="text" placeholder="type phone number">
                        <p v-if="from2.phone==''" class="Rectangle_coustom">write an phone</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Email</p>

                            <input class="_1int" @keyup="assingData(4)" type="email" v-model="from.email"  placeholder="type email"  @change="assingData">
                           <p v-if="from2.email=='' || from2.email==null" class="Rectangle_coustom">Invalid email</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="_booking_step">
                <p class="_booking_step_num _bg_default_dark">2</p>

                <p class="_booking_step_text _c_default_dark">Appointment Details</p>
            </div>

            <div class="_booking_form">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Are you a new patient?</p>

                            <div class="_dis_flex">
                              <!-- <RadioGroup  v-model="from.isNew">
                                 <Radio label='Yes'>
                                    <span>Yes</span>
                                </Radio>
                                 <Radio label='No' >
                                    <span>No</span>
                                </Radio>
                               
                            </RadioGroup > -->
                                  <!-- <input type="radio" v-model="from.isNew" id="male" name="gender" value="Yes">
                                  <label for="Yes">Yes</label><br>
                                  <input type="radio" v-model="from.isNew" id="female" name="gender" value="No">
                                  <label for="No">No</label><br> -->
                              
                                <div class="_mar_r10 _flex_auto">
                                    <label class="_radio_default">Yes
                                        <input type="radio" checked="checked" value="Yes" v-model="from.isNew" name="radio"> 
                                        <span class="radio_check"></span>
                                    </label>
                                </div>
                                
                                <div class="_mar_r10 _flex_auto">
                                    <label class="_radio_default">No
                                        <input type="radio" checked="checked" value="No" v-model="from.isNew" name="radio"> 
                                        <span class="radio_check"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Services</p>

                            <select class="_1select" v-model="from.desiredServices" @change="assingData(5)">
                                <option selected="true" value="" label="" disabled="disabled">Choose Services</option>
                                <option value="Cleaning" label="Cleaning">Cleaning</option>
                                <option value="Exams" label="Exams">Exams</option>
                                <option value="Pains" label="Pains">Pains</option>
                                <option  value="Other" label="Other" >Other</option>
                            </select>
                            <p v-if="from2.desiredServices=='' || from2.desiredServices==null" class="Rectangle_coustom">Select Desired Services</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Day</p>

                            <CheckboxGroup v-model="from.days" @on-change="assingData(6)">
                            
                                <Checkbox class="_1check" label="Monday">
                                    <span>Monday</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="Tuesday">
                                    <span>Tuesday</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="Wednesday">
                                    <span>Wednesday</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="Thursday">
                                    <span>Thursday</span>
                                </Checkbox>
                                
                            </CheckboxGroup>
                            

                            <p v-if="from2.days.length==0" class="Rectangle_coustom">Select Desired Day</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Time</p>
                            <CheckboxGroup v-model="from.alltimes" @on-change="assingData(7)">
                                <Checkbox class="_1check" value="8:00 AM to 10:00 AM" label="8:00 AM to 10:00 AM">
                                    <span>8:00 AM to 10:00 AM</span>
                                </Checkbox>
                                <Checkbox class="_1check" value="10:00AM to 12:00AM" label="10:00AM to 12:00AM">
                                    <span>10:00AM to 12:00AM</span>
                                </Checkbox>
                                <Checkbox class="_1check" value="1:00PM to 2:00PM" label="1:00PM to 2:00PM">
                                    <span>1:00PM to 2:00PM</span>
                                </Checkbox>
                                <Checkbox class="_1check" value="2:00PM to 4:00 PM"  label="2:00PM to 4:00 PM">
                                    <span>2:00PM to 4:00 PM</span>
                                </Checkbox>
                            </CheckboxGroup>
                            <p v-if="from2.alltimes.length==0" class="Rectangle_coustom"> Select Desired Time</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Please describe the nature of your appointment</p>

                            <textarea @keyup="assingData(8)" v-model="from.description" class="_1textarea" placeholder="" rows="6"></textarea>
                         <p v-if="from2.description=='' || from2.description==null" class="Rectangle_coustom"> Write Some Descriptions</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12 _text_right" >
                        <button class="_btn_gradient_default _mar_t10" @click="storealldata">Submit <Icon type="ios-arrow-round-forward" /></button>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <!-- Thank you -->
            <div class="_thank">
                <h2 class="_booking_title">Thank you</h2>

                <div class="_thank_check"><Icon type="md-checkmark" /></div>

                <p class="_booking_text">
                    Thank you for booking an appointment with Authentic Dental Studio. Your oral health is our priority. A Patient 
                    Coordinator will contact you as soon as possible to confirm your appointment.
                </p>

                <div class="_booking_button _text_center"  @click="isSubmit=false, setAppointMentModal(false)">
                    <button class="_btn_gradient_default _mar_t10">Done</button>
                </div>
            </div>
          
            <!-- Thank you -->
        </template>
      </div>
    </Modal>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      animal:"No",
      dropOpen:false,
      mobileOpen:false,
      isSubmit:false,
      booking_modal: false,
      days: [],
      fruit: ['one', 'two'],
      alltimes: [],
      from:{
        firstName:'',
        lastName:'',
        dob:'',
        phone:'',
        email:'',
        isNew:"No",
        desiredServices:'',
        days:[],
        alltimes:[],
        description:''
      },
      from2:{
        firstName:' ',
        lastName:' ',
        dob:' ',
        phone:' ',
        email:' ',
        isNew:'No',
        desiredServices:' ',
        days:["Monday"],
        alltimes:["8:00 AM to 10:00 AM"],
        description:' '
      },
      social:"",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

    };
  },
  created() {
    // console.log(this.$route.name);
  },

  // computed: {
  //    ...mapGetters({
  //     getAppointmentModal: 'getAppointmentModal'
  //    })
  // },
  methods:{
    setAppointMentModal(d){
      // let d = !this.appointmentModal
      this.$store.dispatch('setAppointmentModal',d)
    },
     editStartTime(date){
           this.from.dob=date
          //  this.from2.dob = date
      },
     assingData(flag) {
       if(flag==1){
         if(! this.from.firstName) return  this.from2.firstName =''
         this.from2.firstName = this.from.firstName.trim()
         console.log(this.from.firstName)
       }
       if(flag==2){
         if(! this.from.lastName) return  this.from2.lastName =''
        this.from2.lastName =this.from.lastName.trim()
       }
       if(flag==3){
         if(! this.from.phone) return  this.from2.phone =''
         this.from2.phone =this.from.phone.trim()
        //  console.log(this.from.phone)
       }
       if(flag==4){
         if (this.reg.test(this.from.email)){
          this.from2.email =this.from.email
        }
        else{
          this.from2.email =''
          return 
        }
        // this.from2.email = this.from.email.trim()
       }
       if(flag==5){
         if(! this.from.desiredServices) return  this.from2.desiredServices =''
        this.from2.desiredServices =this.from.desiredServices.trim()
       }
       if(flag==6){
         
        this.from2.days = this.from.days
       }
       if(flag==7){
         this.from2.alltimes = this.from.alltimes
       }
       if(flag==8){
         if(! this.from.description) return  this.from2.description =''

        this.from2.description =this.from.description.trim()
       }
       
      },
    async storealldata(){
      // console.log(this.from)
      
      // this.from.phone =this.from.phone.trim()
      // this.from.firstName =this.from.firstName.trim()
      // this.from.lastName =this.from.lastName.trim()
      // this.from.dob = (this.from.dob && this.from.dob.trim()=='')?'':this.from.dob
      // this.from.desiredServices =this.from.desiredServices.trim()
      // this.from.email = this.from.email.trim()
      // this.from.description =this.from.description.trim()
      // console.log(this.from)
      
      if(!this.from.firstName || this.from.firstName.trim()==''){
        this.from.firstName = ''
        this.from2.firstName = ''
        return
      }
      if(!this.from.lastName || this.from.lastName.trim()==''){
        this.from.lastName = ''
        this.from2.lastName = ''
        return
      }
      // if(!this.from.dob || this.from.dob=='' || this.from.dob==null){
      //   this.from.dob = ''
      //   this.from2.dob = ''
      //   return
      // }
      if(!this.from.phone || this.from.phone.trim()==''){
        // this.i("hello")
        this.from.phone=''
        this.from2.phone=''
        return
      }
      if (this.reg.test(this.from.email)){
        this.from2.email =this.from.email
      }
      else{
        this.from2.email =''
        return 
     }
      if(!this.from.desiredServices || this.from.desiredServices=='' || this.from.desiredServices==null){
        // this.i("hello")
        this.from.desiredServices = ''
        this.from2.desiredServices = ''
        return
      }
      
    
  
     
      if(this.from.days.length==0){
        this.from2.days =[]
        return
        
      }
    
      if(this.from.alltimes.length==0){
        this.from2.alltimes =[]
        return

      }
       if(!this.from.description || this.from.description=='' || this.from.description==null){
        this.from.description = ''
        this.from2.description = ''
        return
      }
     
      // this.from.days = this.days
      // this.from.alltimes = this.alltimes
      console.log(this.from)
      this.$vs.loading({
      color: '#6647ff'  
      })
      const res = await this.callApi('post', 'app/sendMail', this.from)
      if (res.status == 200 || res.status ==204) {
      this.isSubmit = true
      this.from={
        firstName:' ',
        lastName:' ',
        dob:' ',
        phone:' ',
        email:' ',
        isNew:'No',
        desiredServices:' ',
        days:[],
        alltimes:[],
        description:' '


      },
       this.$vs.loading.close()
      this.social=""
      }
      else{
        this.$vs.loading.close()
      }

      
    }
  }
};
</script>
