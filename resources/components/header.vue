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
                            <img class="_logo_img" src="/images/logo.png" alt="" title="">
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
                    <button class="_btn_gradient_default _btn_sm" type="button">Book Appointment</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route.name)
    }
}
</script>