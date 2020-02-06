<template>
  <div>
    <div class="_content">
      <!--======= Header ======-->
      <div class="_1header">
        <h2 class="_1header_title">Contact Us</h2>
      </div>
      <!--======= Header end ======-->

      <!--======= Form section ======-->
      <section class="_pages _pages_before">
        <div class="_1banner_call">
          <a class="_1banner_call_a" href>
            <i class="fas fa-phone"></i> (530) 222-4900
          </a>
        </div>
        <template v-if="!isSubmit">
          <div class="_pages_main _contact_main">
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12 _patientForms_header_left">
                  <p class="_1text">
                    We are waiting to hear from you. Please fill the form below and one of our staff will get back to you as soon as possible.
                    <br />Thank you for your trust.
                  </p>

                  <div class="_review_card _1box_shadow _mar_t40">
                    <div class="row">
                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Full Name</p>

                          <input class="_1int" @keyup="assingData(1)" v-model="from.name" type="text" placeholder="type your name" />
                          <p v-if="error.name==''" class="Rectangle_coustom">Type your name</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Email</p>

                          <input @keyup="assingData(2)" class="_1int" v-model="from.email" type="email" placeholder="type email address" />
                          <p v-if="error.email==''" class="Rectangle_coustom">Type your email address</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-6">
                        <div class="_1input_group">
                          <p class="_1label">Phone Number</p>

                          <input @keyup="assingData(3)" class="_1int" v-model="from.phone" type="text" placeholder="type phone number" />
                          <p v-if="error.phone==''" class="Rectangle_coustom">Type Your phone number</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="_1input_group">
                          <p class="_1label">Message</p>

                          <textarea @keyup="assingData(3)" class="_1textarea" v-model="from.message" placeholder="type message" rows="5"></textarea>
                          <p v-if="error.message==''" class="Rectangle_coustom">Write Your Message</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-12 col-lg-12">
                        <div class="row">
                          <div class="col-12 col-md col-lg"></div>
                          <div class="col-12 col-md-auto col-lg-auto">
                            <button
                              class="_btn_gradient_default _mar_t10 _btn_padd30"
                              @click="storealldata"
                            >Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <!-- Thank you -->
          <div class="_thank">
            <h2 class="_booking_title">Thank you</h2>

            <div class="_thank_check">
              <Icon type="md-checkmark" />
            </div>

            <p class="_booking_text">Thanks for contacting us! We will be in touch with you shortly.</p>

            <div class="_booking_button _text_center" @click="isSubmit=false">
              <button class="_btn_gradient_default _mar_t10">Done</button>
            </div>
          </div>

          <!-- Thank you -->
        </template>

        <div class="_details_list _mar_t55">
          <div class="container">
            <div class="_cantact_sec_top">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_cantact_card">
                    <div class="_cantact_card_icon _bg_default">
                      <img class="_cantact_card_img" src="/images/mapPin.png" alt title />
                    </div>

                    <div class="_cantact_card_details">
                      <p class="_cantact_card_title">2695 Bechelli Lane</p>
                      <p class="_cantact_card_value">Radding, CA 96002</p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_cantact_card">
                    <div class="_cantact_card_icon _bg_default">
                      <img class="_cantact_card_img" src="/images/phone.png" alt title />
                    </div>

                    <div class="_cantact_card_details">
                      <p class="_cantact_card_title">(530) 222-4900</p>
                      <p class="_cantact_card_value">Call Us Today</p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_cantact_card">
                    <div class="_cantact_card_icon _bg_default">
                      <img class="_cantact_card_img" src="/images/clock.png" alt title />
                    </div>

                    <div class="_cantact_card_details">
                      <p class="_cantact_card_title">Opening Hours</p>
                      <p class="_cantact_card_value">Mon- Thu 8AM-4PM</p>
                      <p class="_cantact_card_value">Friday By Appointment</p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3">
                  <div class="_cantact_card">
                    <div class="_cantact_card_icon _bg_default">
                      <img class="_cantact_card_img" src="/images/mail.png" alt title />
                    </div>

                    <div class="_cantact_card_details">
                      <p class="_cantact_card_title">Appointment Booking</p>
                      <p class="_cantact_card_value">office@authenticdentalstudio.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="_cantact_sec_map _mar_t55">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.7976903174645!2d-122.36444148459944!3d40.56814467934782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2ecbd735e5bb5%3A0x12c4ecf578819984!2s2695%20Bechelli%20Ln%2C%20Redding%2C%20CA%2096002%2C%20USA!5e0!3m2!1sen!2sbd!4v1580649027857!5m2!1sen!2sbd"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen
            ></iframe>
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
                REQUEST APPOINTMENT
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
      isSubmit: false,
      from: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      error: {
        name: " ",
        email: " ",
        phone: " ",
        message: " "
      },
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      };
  },
  async created() {},
  methods: {
    assingData(l) {
      if(l==1){
        this.error.name = this.from.name.trim();
      }
      if(l==2){
        if (this.reg.test(this.from.email)){
          this.error.email =this.from.email
        }
        else{
          this.error.email =''
        }
      }
      if(l==3){
        this.error.phone = this.from.phone.trim();
      }
      if(l==4){
        this.error.message = this.from.message.trim();
      }
    },
    setAppointMentModal(d) {
      // let d = !this.appointmentModal
      this.$store.dispatch("setAppointmentModal", d);
    },
    async storealldata() {
      this.from.name = this.from.name.trim();
      this.from.email = this.from.email.trim();
      this.from.phone = this.from.phone.trim();
      this.from.message = this.from.message.trim();

      if (this.from.name == "") {
        this.from.name = "";
        this.error.name = "";
        return;
      }
      if (this.from.email == "") {
        this.error.email = "";
        this.from.email = "";
        return;
      }
      if(this.error.email==''){
        return 
      }
      
      if (this.from.phone == "") {
        this.error.phone = "";
        this.from.phone = "";
        return;
      }
      
      if (this.from.message == "") {
        this.from.message = "";
        this.error.message = "";
        return;
      }
      console.log(this.from);
      this.$vs.loading({
        color: "#6647ff"
      });
      const res = await this.callApi("post", "app/sendContactMail", this.from);
       this.$vs.loading.close();
      if (res.status == 200 || res.status ==204) {
        this.isSubmit = true;
        (this.from = {
          name: " ",
          email: " ",
          phone: " ",
          message: " "
        }),
          this.$vs.loading.close();
      }
     this.$vs.loading.close();
    }
  }
};
</script>