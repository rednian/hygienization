<template>
    <v-row justify="center">
        <v-dialog v-model="page.testimonial" fullscreen hide-overlay  transition="dialog-bottom-transition" open-on-focus eager >
           <v-card>
                  <v-toolbar dense elevation="0" class="b-border" height="65">
                       <section class="b-container">
                           <v-container class="padding-right-0">
                           <div class="text-right">
                                <v-btn class="btn-color" fab x-small elevation="0" @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                           </div>
                           </v-container>
                       </section>
               </v-toolbar>
                <page-header ></page-header>
                <div class="b-container">
                    <v-container>
                        <div class="row banner"><img class="top-image" :src="top"  alt=""></div>
                    </v-container>
                </div>
               <section class="b-container">
                   <v-container>
                       <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">Customer Testimonials</h4></v-col>
                       </v-row>
                       <v-row>
                           <v-col cols="12" md="6" sm="6">
                               <p class="text-justify">
                                    Hygienization is a journey. In this journey, our customers’ needs come first above everything else.
                                    Our integrated surface hygiene solutions provide protection for your business, giving you peace of mind that you are able to keep your employees and customers safe.
                                </p>
                                <p class="text-justify">
                                    The philosophy behind Hygienization is simply rooted in our endeavour to create a hygienic environment for all. 
                                </p>
                                <ul>
                                    <li class="mb-2"><strong>Enhance Staff Productivity</strong> by providing a holistic workplace environment</li>
                                    <li class="mb-2"><strong>Improve your Brand Image</strong> to potential customers and investors</li>
                                    <li class="mb-2"><strong>Safeguard</strong> your Employees’ Health & Wellbeing</li>
                                </ul>
                           </v-col>
                           <v-col cols="12" sm="6" md="6">
                                <div class="text-center border p-1">
                                    <iframe 
                                    style="width:100%; height: 300px" 
                                    src="https://www.youtube.com/embed/q6Wp11xel-A" 
                                    title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                    </iframe>
                                </div>
                           </v-col>
                       </v-row>
                   </v-container>
               </section >

               <section style="background: #FAFAFA" class="mt-10 mb-10">
                   <section class="b-container">
                       <v-container>
                        <v-row>
                            <v-col cols="12" md="12" sm="12">
                                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">March 30, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Exceptional</span> Professionalism</v-card-title>
                                                    <v-card-text>
                                                    <p class="text-justify body-1 black--text">
                                                        Very excellent team caring about detail i really never regret sani services
                                                    </p>
                                                    <div class="caption">
                                                        Ms. Mona A., Al Mizhar, Dubai
                                                    </div>
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">March 21, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Efficient</span> work done</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                        I am very impressed with this service— it’s like having a new garden! Impressive equipment, efficient work, perfect results and of course a professional and courteous team (which is always the case with Saniservice), Thank you!
                                                        </p>
                                                        <div class="caption">
                                                            Mrs. Lauren A., Jumeirah 1, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">March 18, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Great</span> service</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                        Great team and service, guys are polite and considerate.
                                                        Would be useful though if Sani had a clearer idea of how long the cleaning of individual items takes.
                                                        I could have cleaned another set of curtains during the four hours but the equipment had already been moved downstairs.
                                                        Overall, a good service.
                                                        </p>
                                                        <div class="caption">
                                                        Mr. Nick B., Jumeirah Golf Estate, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">February 18, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Organized</span> and Professional Coordination</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                            Very professional staff
                                                            They explained everything they did and they were very organized
                                                            Thank you for the excellent service
                                                        </p>
                                                        <div class="caption">
                                                        Ms. Josaphine D., Dubai Hills Estate, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">February 18, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Exceptional</span> Attention to Detail</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                        I was explained if procedures in details. Great job
                                                        </p>
                                                        <div class="caption">
                                                        Mr. Faisal K., Palm Jumeirah, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">February 17, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Very</span> courteous staff</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                        Fantastic service and representatives. Could not ask for more
                                                        </p>
                                                        <p class="text-justify body-1 black--text">
                                                        The guys were professional and courteous, and diligent and careful in their work.
                                                        </p>
                                                        <p class="text-justify body-1 black--text">
                                                        Exceptional team and end results
                                                        </p>
                                                        <div class="caption">
                                                        Mr. Alex C., Jumeirah Golf Estate, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">February 17, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Outstanding</span> Results</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                        Outstanding service and very professional and nice team. Will recommend to my friends.
                                                        </p>
                                                        <div class="caption">
                                                            Mr. Andrew M., Victory Heights, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">December 28, 2020</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Very</span> Detailed Protocols</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                            Great team. Waqas and Arun were very professional and had great procedures in place to make sure everything was cleaned properly. 
                                                            They took the time to explain the steps they were taking and the reasons behind it. Best of all they really cared about our well-being. 
                                                            We couldnt be happier.
                                                        </p>
                                                        <div class="caption">
                                                            Mr. Faisal J., The Lakes, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                        <v-timeline-item small>
                                            <template v-slot:opposite>
                                                <span class="body-1">January 27, 2021</span>
                                            </template>
                                            <div class="py-4">
                                                <v-card>
                                                    <v-card-title><span class="info--text mr-1">Highly</span> Recommended</v-card-title>
                                                    <v-card-text>
                                                        <p class="text-justify body-1 black--text">
                                                            We are definitely more than satisfied the team done an excellent cleanliness I suggest it to everyone
                                                        </p>
                                                        <div class="caption">
                                                            Ms. Andrea B, Dubai
                                                        </div>
                                                    
                                                    </v-card-text>
                                                </v-card>
                                            
                                            </div>
                                        </v-timeline-item>

                                    </v-timeline>
                                    

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
import '@/assets/css/pages.css'

import AppFooter from '@/views/footer/index';
import PageHeader from '@/components/PageHeader'
export default {
    name:'testimonial',
    components:{AppFooter, PageHeader},

    data(){
        return{
             logo: require('@/assets/logo/logo2.png'),
             top: require('@/assets/img/testimonial/top.jpg'),
        }
    },
    
    computed:{
         page(){
            return this.$store.getters['Page/pages'];
        }
    },
    

}
</script>
<style scoped>
    .theme--light.v-timeline::before {
    background: none;
    border: 1px dashed #2D7794  !important;
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
