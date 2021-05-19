<template>
    <v-row justify="center">
        <v-dialog v-model="page.about" fullscreen hide-overlay  transition="dialog-bottom-transition" open-on-focus eager >
           <v-card>
               <v-toolbar dense elevation="0" class="b-border" height="65">
                       <section class="b-container">
                           <v-container class="padding-right-0">
                           <div class="text-right">
                                <v-btn class="btn-color"  x-small color="white" fab elevation="0" @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                           </div>
                           </v-container>
                       </section>
               </v-toolbar>
                <page-header></page-header>
           
          
                <section class="b-container">
                <v-container>
                     <div class="row banner">
                         <img class="top-image" :src="top_image">
                    </div>
                     <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">About Us</h4></v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12" lg="7" cols="12"  sm="12">
                            <h5 class="text-h5 mb-5">A New Dimension of Hygiene in Workspace</h5>
                            <p class="text-justify">
                               The science of disinfection is rapidly evolving as advances in chemistry, biochemistry, microbiology and molecular biology are being made. 
                               New products are emerging to meet the technological, political and environmental dimensions of modern day demands.
                            </p>
                            <p class="text-justify mb-10">
                                An average person spends 90% of their time indoors. Therefore, it is critical these long lengths are spent in a clean, and hygienic environment, most importantly during the onset of a post-pandemic world we live in today. 
                                Powered by Saniservice, Hygienization was born as a response to the pandemic, filling the gap between normal cleaning & disinfection procedures to formulate the optimum level of hygiene & disinfection.
                            </p>
                            <h5 class="text-h5 mb-5">What is SaniHygienization?</h5>
                            <p class="text-justify">
                                <strong>SaniHygienization</strong> is an innovative-integrated steam surface protocol, consisting of customized & bespoke Floor to Ceiling, Cleaning to Protection solutions and services. 
                                Hygienization by Saniservice is the optimal state of surface hygiene obtained through a vectorial integration process of Steam Deep Cleaning, Disinfection and Antibacterial Protection of all surfaces - a state no other cleaning company has ever reached before.
                            </p>
                        </v-col>
                        <v-col class="hide-in-small-device" cols="12" md="5" sm="12">
                             <div class="text-center">
                                <img :src="techinician_image" alt=""  style="width: 60%">
                            </div>
                        </v-col>
                    </v-row>
                    
                

                    <div class="row gx-0">
                        <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12 mb-2 box success2">
                            <v-card elevation="0" class="success2 white--text">
                                <v-card-title>Steam Deep Cleaning</v-card-title>
                                <v-card-text class="text-left white--text">The most powerful method of sanitizing surfaces, an absolute complement to your regular housekeeping & cleaning routines.</v-card-text>
                            </v-card>
                        </div>
                        <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12  box mb-2 info2">
                            <v-card elevation="0" class="info2 white--text">
                                <v-card-title>Total Disinfection</v-card-title>
                                <v-card-text class="text-left white--text">100% hospital-grade, state-of-the-art, high-end disinfection products and protocols that eliminate germs in the air and surfaces upon contact.</v-card-text>
                            </v-card>
                        </div>
                        <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12 box mb-2 primary2 ">
                            <v-card elevation="0" class="primary2">
                                <v-card-title class="white--text">Coating Protection</v-card-title>
                                <v-card-text class="text-left white--text">Nano-Coating Technology applied to protect them from recontamination for a duration of 24 hours to 7 days (depending on surface use), further reducing cleaning time of protected surfaces by 50%.</v-card-text>
                            </v-card>
                        </div>
                    </div>

                    <div class="row mt-10">
                        <div class="col-md-6 col-sm-12 col-xs-12 box mb-2">
                            <h5 class="text-h5 mb-5">Innovative-Integrated Steam Surface Protocols</h5>
                            <p class="text-justify">
                                Hygienization by Saniservice delivers custom protocols for your facility powered by the robust, sanitizing STEAM method, tested and proven to kill germs and bacteria, making it a safe, eco-friendly, all-natural way to deep clean any type of surface and item. 
                            </p>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12 box">
                            <h5 class="text-h5 mb-5">Floor to Ceiling Solutions</h5>
                            <p class="text-justify">
                                Typical cleaning service often neglects ceilings and walls, which are also exposed to dirt, grease, smoke, and other contaminants. 
                                Hygienization by Saniservice provides an all-inclusive, 360-degree cleaning solution leaving no surfaces unturned & unhygienic.
                            </p>
                        </div>
                    </div>

                </v-container>
                </section>
                
                <section class="team-container" :style="`background-image: url(${bg_team})`">
                    <section class="b-container">
                        <v-container>
                            <v-row>
                                <v-col  cols="12" sm="12" md="12" lg="7" class="pb-0">
                                    <h5 class="text-h5" :class="margin">The Team</h5>
                                    <p class="text-justify black--text">
                                        SaniHygienization is the pinnacle of Airline Industry Professionals and Saniservice’s combined knowledge & expertise in providing the highest standards of hygiene.       
                                    </p>
                                    <p class="text-justify black--text">
                                        Our Hygienization team is composed of hygiene & sanitization experts honed in the fields of Airline & Luxury commodities & essential industries. Each technician boasts years of experience in commercial and private airlines, hospitals & clinics, private yachts, luxury apartments, and more.
                                    </p>
                                    <p class="text-justify black--text">
                                        The Hygienization team is led by Waqas. He has over 16 years of experience in Operations Management & Manpower Management for the largest Airline Sanitization company in the GCC region. Today, he is one of the driving forces leading the SaniHygienization 
                                    </p>
                                    <div class="subtitle-2 mt-10">Muhammad Waqas</div>
                                    <div class="caption">Operations Manager</div>
                                    <div class="caption mb-10">SaniHygienization</div>
                                </v-col>
                                <v-col cols="12" sm="12" md="5" class="pb-0 hide-in-small-device">
                                    <img :src="manager" alt="" style="width: 100%; max-width: 350px">
                                </v-col>
                            </v-row>
                    
                        </v-container>    
                    </section>
                </section>

             
               <app-footer></app-footer>
           </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import '@/assets/css/pages.css';

import AppFooter from '@/views/footer/index'
import '@/assets/bootstrap/bootstrap-grid.css'
import PageHeader from '@/components/PageHeader'
export default {
    name:'about',
    components: {AppFooter, PageHeader},
 
    data(){
        return{
            logo: require('@/assets/logo/logo2.png'),
            top_image: require('@/assets/img/about/about-top2.png'),
            techinician_image: require('@/assets/img/about/technician.png'),
            bg_team: require('@/assets/img/about/bg-team.png'),
            manager: require('@/assets/img/about/manager.png'),
        }
    },

    computed:{
        margin(){
            let b = this.$vuetify.breakpoint;
            if(b.name === 'xs'){
                return 'mb-5 mt-0';
            }
            else{
                return 'mb-5 mt-10';
            }
        },
        
         page(){
            return this.$store.getters['Page/pages'];
        },
        
        padding(){
            return this.$vuetify.breakpoint.name == 'xs' ? 'protocol-padding' : null;
        },
      
    },    
}
</script>

<style scoped>
    .b-border{
        border-bottom: 1px solid #12A3DC;
    }

    .team-container{
        width: 100%;
        background-position: center;
        background-size: cover;
        mix-blend-mode: darken;
    }

    
    .success2{
        background-color: #2D7794;
        border-radius: 15px 0px 0px 15px;
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
