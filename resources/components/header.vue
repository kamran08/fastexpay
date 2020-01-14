<template>
  <div>
    <nav class="_menu">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="_mobile_button _lg_hidden _col_visible _col_md_visible _c_default">
            <i class="fas fa-grip-vertical"></i>
          </div>
          <div class="col col-md col-lg">
            <nuxt-link class="_logo_pic" to="/">
              <img class="_logo_img" src="/images/logo.png" alt title />
            </nuxt-link>
          </div>

          <div class="col-auto col-md-auto col-lg-auto _col_hidden _col_md_hidden">
            <ul class="_menu_list">
              <li :class="($route.name == 'index') ? `_menu_active `: ''">
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/detailProcedure">Servies</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/team">Our Team</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/patientsForms">Patient Forms</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/payment">Pyments</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/manageReview">Patient Reviws</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/login">Log In</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/registration">Sign Up</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-auto col-md-auto col-lg-auto _col_hidden">
            <button class="_btn_gradient_default _btn_sm" @click="booking_modal = true" type="button">Book Appointment</button>
          </div>
        </div>
      </div>
    </nav>

    <Modal v-model="booking_modal" :footer-hide="true" width="850">
      <div class="_book_modal">
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

                            <input class="_1int" type="text" placeholder="type first name">
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Last Name</p>

                            <input class="_1int" type="text" placeholder="type last name">
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Date of Birth</p>
                            
                            <DatePicker prefix="ios-calendar-outline" class="_1date" type="date" placeholder="Select date"></DatePicker>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Phone</p>

                            <input class="_1int" type="text" placeholder="type phone number">
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Email</p>

                            <input class="_1int" type="text" placeholder="type email">
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
                                <div class="_mar_r10 _flex_auto">
                                    <label class="_radio_default">Yes
                                        <input type="radio" checked="checked" name="radio"> 
                                        <span class="radio_check"></span>
                                    </label>
                                </div>

                                <div class="_mar_r10 _flex_auto">
                                    <label class="_radio_default">No
                                        <input type="radio" checked="checked" name="radio"> 
                                        <span class="radio_check"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Services</p>

                            <select class="_1select">
                                <option>Choose Servirs</option>
                                <option>Choose Servirs</option>
                                <option>Choose Servirs</option>
                                <option>Choose Servirs</option>
                                <option>Choose Servirs</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Day</p>
                            
                            <CheckboxGroup v-model="social">
                                <Checkbox class="_1check" label="twitter">
                                    <span>Twitter</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="facebook">
                                    <span>Facebook</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="github">
                                    <span>Github</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="snapchat">
                                    <span>Snapchat</span>
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Desired Day</p>
                            
                            <CheckboxGroup v-model="social">
                                <Checkbox class="_1check" label="twitter">
                                    <span>8:00 AM to 10:00 AM</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="facebook">
                                    <span>10:00AM to 12:00AM</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="github">
                                    <span>1:00PM to 2:00PM</span>
                                </Checkbox>
                                <Checkbox class="_1check" label="snapchat">
                                    <span>2:00PM to 4:00 PM</span>
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="_booking_form_input">
                            <p class="_booking_form_label">Please describe the nature of your appointment</p>

                            <textarea class="_1textarea" placeholder="" rows="6"></textarea>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12 _text_right">
                        <button class="_btn_gradient_default _mar_t10">Submit <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            
            <!-- Thank you -->
            <div class="_thank">
                <h2 class="_booking_title">Thank you</h2>

                <div class="_thank_check"><Icon type="md-checkmark" /></div>

                <p class="_booking_text">
                    Thank you for booking an appointment with Authentic Dental Studio. Your oral health is our priority. A Patient 
                    Coordinator will contact you as soon as possible to confirm your appointment.
                </p>

                <div class="_booking_button _text_center">
                    <button class="_btn_gradient_default _mar_t10">Done</button>
                </div>
            </div>
            <!-- Thank you -->
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      booking_modal: true
    };
  },
  created() {
    console.log(this.$route.name);
  }
};
</script>