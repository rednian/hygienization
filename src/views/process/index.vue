<template>
    <v-row justify="center">
        <v-dialog v-model="page.process" fullscreen hide-overlay  transition="dialog-bottom-transition" open-on-focus eager style="width:100%" >
           <v-card>
                  <v-toolbar dense elevation="0" class="b-border" height="65">
                       <section class="b-container">
                           <v-container class="padding-right-0">
                                <div class="text-right">
                                    <v-btn class="btn-color" x-small fab elevation="0" @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                                </div>
                           </v-container>
                       </section>
                    </v-toolbar>
                     <page-header></page-header>
                     <div class="b-container">
                         <v-container>
                             <div class="row banner"><img :src="top_image" class="top-image"></div>
                         </v-container>
                     </div>
             
        
                    <section class="b-container">
                <v-container>

                     <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">Our Process</h4></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6" lg="6">
                             <p class="text-justify">
                                 
                                Our team of hygiene technicians have developed a systematic Hygienization formula that defines every step of our intensive methodology as detailed in our wall to wall scope of work, guaranteeing positive results every time.
                            </p>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <p class="custom-font"><q>The caliber of our work is embedded in our stringent process.</q></p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="6" md="6" lg="6">
                            <h5 class="text-h5"><span class="blue--text">Step 1.</span> Inspection</h5>
                            <p class="text-justify mt-5">The Team Leader performs an initial inspection of your facility and takes the necessary information to be able to formulate a customized Hygienization journey.</p>

                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                             <h5 class="text-h5"><span class="blue--text">Step 2.</span> Quotation</h5>
                              <p class="text-justify mt-5">
                                Upon inspection, a full quotation will be issued stating the job order and breakdown of services, as recommended by the team leader and verified by the supervisor.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row class="mb-5">
                        <v-col cols="12" sm="6" md="6" lg="6">
                             <h5 class="text-h5"><span class="blue--text">Step 3.</span> Planning</h5>
                              <p class="text-justify mt-5">
                                Our custom Hygienization protocols are designed based on precise planning backed by our hygiene experts’ solid background in developing sanitization procedures for critical industries such as aviation & healthcare.
                            </p>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="6">
                             <h5 class="text-h5"><span class="blue--text">Step 4.</span> Completion Report</h5>
                              <p class="text-justify mt-5">
                                The Final Completion Report is an affirmation of our whole process, detailing protocols applied and showcasing before and after photos on a macro (high touch zones and food preparation areas) and micro-level (down to objects, and often neglected parts such as caster wheels).
                            </p>
                        </v-col>
                    </v-row>

             

                    <section class="bottom mt-10" :style="`background-image: url(${bg2})`">
                            <section class="row">
                                <div class="col-sm-6 col-md-6 col-xs-12">
                                    <h5 class="text-h5" :class="marginTop10">Quality</h5>
                                    <p class="text-justify mt-5">
                                        <strong>Expertise</strong> strengthened by Saniservice’s 12+ years of excellence in sanitization & hygiene.
                                    </p>
                                    <p class="text-justify">
                                        <strong>High-End</strong> Brand Products sourced from Europe, Australia & The Americas, specifically formulated for upscale applications.
                                    </p>
                                </div>
                            </section>
                            <section class="row">
                                <div class="col-sm-6 col-md-6 col-xs-12">
                                    <h5 class="text-h5">Control</h5>
                                    <p class="text-justify mt-5">
                                        <strong> Operational Audit</strong> orchestrated by (1st level) Team Leader, (2nd level) Supervisor, and (3rd level) Operations Manager with client
                                    </p>
                                    <p class="text-justify">
                                     <strong>Microbiology Sampling</strong>    & Audit by resident Microbiologist to gauge the effectiveness of applied Hygienization protocols.
                                    </p>
                                    <p class="text-justify">
                                        <strong>Guaranteed Results</strong> with a complementary Hygienization service for every swab test showing unremarkable results.
                                    </p>
                                    <p class="text-justify">
                                        <strong>Lean 6-Sigma Job Completion</strong> A streamlined process focusing on preventing defects and waste. This means no work discrepancies and no operational errors - delivering exemplary results.
                                    </p>
                                </div>
                            </section>
                    </section>

                      <section class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12">
                            <img :src="bg3" alt="" class="mt-10" :class="margin" style=" width: 100%; border-radius: 15px">
                        </div>
                    </section>
                    

                    <v-row>
                        <v-col cols="12" sm="6" md="6" >
                            <div class="success2 p-4">
                                <h6 style="font-weight: 400" class="text-h6 mb-5 line-height">Differentiated approach plays an essential factor and is the backbone of our sanitization protocols.</h6>
                                <p class="text-justify">
                                    Backed by our team of experts’ experience in developing systematic Hygienization protocols adopted from ‘hygiene critical’ industries like the aviation industry, every step of our intensive methodology is strategically identified, defined and customized for your workplace’s needs. 
                                    This granular approach further highlights the differentiations.
                                </p>
                            </div>
                        </v-col>
                    <v-col cols="12" sm="6" md="6" class="white--text pt-0">
                            <v-row class="text-center " >
                                <v-col cols="12" sm="12" md="12" lg="6" class="padding-top-0" >
                                    <div class="box2" style="background: #2B81A3; border-radius: 15px 0 0 0;">By Zones</div>
                                </v-col>
                                <v-col  cols="12" sm="12" md="12" lg="6" class="padding-b-0">
                                    <div class="box2"  style="background: #288BB4; border-radius: 0 15px 0 0;">By Tools</div>
                                </v-col>
                            </v-row>
                            <v-row class="text-center">
                                <v-col sm="12" md="12" lg="6" class="padding-b-0" cols="12">
                                    <div class="box2"  style="background: #2197C6; border-radius: 0 0 0 15px; ">By Products</div>
                                </v-col>
                                <v-col sm="12" md="12" lg="6" class="padding-b-0" cols="12">
                                    <div class="box2"  style="background: #12A3DC; border-radius: 0 0 15px 0;">By Surfaces</div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>


                
                </v-container>
                </section>

            <app-footer></app-footer>
           </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import '@/assets/css/pages.css'

import AppFooter from '@/views/footer/index'
import '@/assets/bootstrap/bootstrap-grid.css'
import PageHeader from '@/components/PageHeader'
export default {
    name:'Process',
    components: {AppFooter, PageHeader},
 
    data(){
        return{
            logo: require('@/assets/logo/logo2.png'),
            top_image: require('@/assets/img/process/bg_top.jpg'),
            bg2: require('@/assets/img/process/bg2.png'),
            bg3: require('@/assets/img/process/bg3.png'),
            breakpoint: this.$vuetify.breakpoint
        }
    },

    computed:{
        margin(){
            if(this.breakpoint.name == 'xs'){
                return null;
            }
            return 'mb-10';
        },
        marginTop10(){
            if(this.breakpoint.name == 'xs'){
                return null;
            }
            return 'mt-10';
        },

        
      page(){
          return this.$store.getters['Page/pages'];
      }
    },
    
}
</script>

<style scoped>
    .sf-pro{
        font-style: 'SF Pro Display';
    }
    
    .box{
        height: 123px;
        line-height: 123px;
        font-size: large;
        /* font-weight: 300; */
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
        background-position: center center;
        background-size: cover;
        mix-blend-mode: darken;
    }

    
    .success2{
        background-color: #2D7794;
        border-radius: 15px;
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
