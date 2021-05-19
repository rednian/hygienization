<template>
    <v-row justify="center">
        <v-dialog v-model="page.contact" fullscreen   transition="dialog-bottom-transition" open-on-focus eager>
           <v-card>
                <v-toolbar dense elevation="0" class="b-border" height="65">
                       <section class="b-container">
                           <v-container class="padding-right-0">
                           <div class="text-right">
                                <v-btn class="btn-color" x-small fab elevation="0" @click="setContactClose(false)"><v-icon>mdi-close</v-icon></v-btn>
                           </div>
                           </v-container>
                       </section>
               </v-toolbar>
                <page-header></page-header>
               <section class="b-container">
                   <v-container>
                       <div class="row banner" style="align-content: flex-start;"> <img :src="top" alt=""></div>
                         <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">Contact Us</h4></v-col>
                        </v-row>
                        <v-row>
                            <v-col sm="12" cols="12" md="12" lg="6">
                                <p class="mr-5">Achieve the optimal state of hygiene in your property today. Speak to our Hygienization experts to get a quote.</p>
                                    <div class="d-flex align-start">
                                        <v-icon x-large color="info">mdi-map-marker</v-icon>
                                        <v-card elevation="0">
                                            <v-card-title class="pt-0 pb-0">Address</v-card-title>
                                            <v-card-text>
                                                <p class="black--text">19th Street, Al Quoz Industrial Area 3 Dubai, <br> UAE.(Behind Dubai Driving Center)</p>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                    <div class="d-flex align-start">
                                        <v-icon large color="info">mdi-email</v-icon>
                                        <v-card elevation="0">
                                            <v-card-title class="pt-0 pb-0">General Enquiries</v-card-title>
                                            <v-card-text>
                                                <p class="black--text">frontdesk@saniservice.com</p>
                                            </v-card-text>
                                        </v-card>
                                    </div>
                                    <div class="d-flex align-start">
                                        <v-icon large color="info">mdi-phone</v-icon>
                                        <v-card elevation="0">
                                            <v-card-title class="pt-0 pb-0">Call Now</v-card-title>
                                            <v-card-text>
                                                <p class="black--text">800-SANI (7264)</p>
                                            </v-card-text>
                                        </v-card>
                                    </div>

                            </v-col>
                            <v-col sm="12" cols="12" md="12" lg="6">
                                <v-card class="teal2 p-4">
                                    <v-card-title class="text-h5 wite--text mb-5">Contact us</v-card-title>
                                    <v-card-text>
                                        <v-form id="form" ref="form" v-model="valid" lazy-validation @submit="submit">
                                        
                                            <v-text-field  autocomplete="off" :rules="rules.name" required v-model="form.name" color="white" class="custom-label-color" outlined label="Name"></v-text-field>
                                            <v-text-field autocomplete="off" :rules="rules.email" required v-model="form.email" color="white" outlined label="Email"></v-text-field>
                                            <v-text-field autocomplete="off" :rules="rules.phone" required v-model="form.phone_no" color="white" outlined label="Phone No"></v-text-field>
                                            <v-textarea autocomplete="off" :rules="rules.message" required v-model="form.message" color="white" outlined label="Message"></v-textarea>
                                            
                                             <vue-recaptcha style="width: 90%" class=" pt-0 mt-0 mb-5" ref="recaptcha"
                                                @verify="onVerify" :sitekey="site_key">
                                             </vue-recaptcha>
                                            

                                            <v-btn 
                                                type="submit" 
                                                block 
                                                color="white" 
                                                large
                                            >Submit Now</v-btn>
                                        </v-form>                    
                                    </v-card-text>
                                </v-card>
                            </v-col>
                         </v-row>
                   </v-container>
               </section>

               <section class="map mb-5" style="margin-top: -200px">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.313912265236!2d55.21420691540182!3d25.125075940787575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd425bc5e43%3A0xed88aa517e3a293!2sSaniservice!5e0!3m2!1sen!2sae!4v1616937107339!5m2!1sen!2sae" 
                    style="width: 100%; margin: 0 auto; border: 0; height: 60vh" 
                    allowfullscreen="" 
                    loading="lazy">
                    </iframe>
               </section>

          
               <app-footer></app-footer>
               <v-snackbar
                v-model="notification.snackbar"
                :color="notification.color"
                vertical
                app
                top
                >
                {{ notification.text }}
                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    small
                    @click="notification.snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
           </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
import '@/assets/css/pages.css'
import AppFooter from '@/views/footer/index'
import PageHeader from '@/components/PageHeader'
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import {mapActions} from 'vuex';

export default {
    name:'contact',
    components: {AppFooter, PageHeader, VueRecaptcha},

    data(){
        return{
        
            show: true,
             logo: require('@/assets/logo/logo2.png'),
             
             top: require('@/assets/img/contact/top.jpg'),

             notification:{
                 snackbar: false,
                 color: 'info',
                 timeout: 1,
                 text: 'Thank you for submitting your details. Our Hygienization expert will get back to you soon!',
             },

             form:{
                 name: null,
                 email: null,
                 phone_no: null,
                 message: null,
             },

             api_token: 'x2X9db6NGDOSD3zFgIvUSUmUXv2busFZ9dVupHHNeEaF55ysomiHrddbw0ki',

            //  site_key: '6LeAu6YaAAAAAHXiVa3x-Gi0_G0G7FN5dGeD7D3Z',
             site_key: '6LeAu6YaAAAAABHXTD8hZE_xiJnmvhJaWMOl_RvW',
             
             robot: false,
             not_verified: false,  

             rules:{
                 name: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 50) || 'Name must be less than 50 characters',
                ],
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                phone: [
                    v => !!v || 'Phone number is required',
                ],
                message: [
                    v => !!v || 'Message is required',
                ],
             },

            valid: true,
        }
    },
    computed:{
        page(){
            return this.$store.getters['Page/pages'];
        },

    
    },
    
    methods:{
        ...mapActions({
            setContactClose:'Page/setContactClose',
        }),
          
        onVerify(response){
             if (response) this.robot = true;
        },

        submit(e){
            e.preventDefault();

            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            
            let is_valid = this.$refs.form.validate();

            if(this.robot ==false){
                this.notification.text = 'Please allow to verify that you are not a robot';
                this.notification.color = 'red';
                this.notification.snackbar = true;
            }

            if(is_valid && this.robot){
                
                const headers ={ 'Content-Type': 'application/x-www-form-urlencoded' };

                axios.post(`https://erp.dxb.saniservice.com/api/v3/hygienization/contact-us/store?api_token=${this.api_token}`, this.form, {headers: headers})
                .then(res=>res.data)
                .then(res=>{
                    if(res.code === 401){
                        this.notification.color = 'red';
                        this.notification.text = 'Something went wrong. Please Try again.'
                    }
                    else{
                         this.notification.color = 'info';
                        this.notification.text = 'Thank you for submitting your details. Our Hygienization expert will get back to you soon!';
                        this.clearForm();
                        this.$refs.recaptcha.reset();
                    }
                    this.notification.snackbar = true;
                })
                .catch(e=>{
                    this.notification.color = 'red';
                    this.notification.text = e.message;
                });
            }
        },

    
        clearForm(){
            this.form.name = null;
            this.form.email = null;
            this.form.phone_no = null;
            this.form.message = null;
            this.$refs.form.resetValidation();
        }     
    },

  
}
</script>

<style scoped>
  

    .v-text-field--outlined >>> fieldset {
        border-color: #fff;
        color: #fff;
    }


    .v-text-field >>> label, .v-text-field >>> input, .v-text-field >>> textarea {
    color: #fff  !important;
    }

    .theme--light.v-label {
        color: #fff !important;
    }

   
    .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
        color: rgb(255, 255, 255) !important;
    }

    .v-application .primary--text {
        color: #fff !important;
        caret-color: #fff !important;
    }

   .theme--light.v-label {
        color: #fff !important;
    }

    .theme--light.v-label {
        color: rgb(255, 255, 255) !important;
    }
    
    .v-sheet.v-toolbar:not(.v-sheet--outlined) {
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    }

    .theme--light.v-timeline::before {
        background: none;
        border: 1px dashed #2D7794  !important;
    }

    .teal2{
        background-color: #2D7794;
        border-radius: 5px;
        color: #fff !important;
    }


    .box{
        height: 21vh;
        line-height: 20vh;
    }
    .bottom{
        width: 100%;
        background-position: center;
        background-size: cover;
        mix-blend-mode: darken;        
    }
    .top{
        opacity: .8;
        background-color: #fff;
    }

    .b-border{
        border-bottom: 1px solid #12A3DC;
    }

    .team-container{
        width: 100%;
        height: 100vh;
        background-position: center;
        background-size: cover;
        mix-blend-mode: darken;
    }

 
    .success2{
        background-color: #2D7794;
        border-radius: 5px;
        color: #fff;
    }
    .info2{
        background-color: #1A8FDD;
    }
    .primary2{
        background-color: #20407D;
        border-radius: 0px 15px 15px 0px;
    }
    .success-text2{
        color: #2D7794;
    }
    .btn-color{
        background-color: #797373  !important;
        color: #fff;
    }
</style>
