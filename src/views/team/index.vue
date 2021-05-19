<template>
    <v-row justify="center">
        <v-dialog v-model="page.team" fullscreen hide-overlay  transition="dialog-bottom-transition" open-on-focus eager >
           <v-card>
               <v-toolbar dense elevation="0" class="b-border" height="65">
                       <section class="b-container">
                           <v-container class="padding-right-0">
                           <div class="text-right">
                                <v-btn class="btn-color" fab x-small elevation="1" @click="$emit('close')"><v-icon>mdi-close</v-icon></v-btn>
                           </div>
                           </v-container>
                       </section>
               </v-toolbar>
                
                <page-header></page-header>

                <div class="b-container">
                    <v-container>
                        <div class="row banner"><img :src="bg1" alt=""></div>
                        <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">Other Services</h4></v-col>
                        </v-row>
                        <v-row class="mb-5">
                            <v-col cols="12" sm="12" md="12" lg="6">
                                    <p class="text-justify">
                                    Through the years, Saniservice has expanded into a vast portfolio of services & solutions covering three major domains - Air, Water, & Surface. 
                                    We have pooled our expertise into concepts -products of our proven competence in all these domains -aligned to the highest standards & practices of safe & chemical-free disinfection.
                                    </p>
                                    <p class="text-justify mb-10">
                                    We offer turnkey disinfection solutions and formulate protocols you need to keep your house or facility thoroughly disinfected and protected. 
                                    Browse our wide array of residential and commercial sanitation services below.
                                    </p>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="6">
                                <v-row>
                                    <v-col sm="3" md="3" cols="6"><div class="text-center"><img :src="boxes[0].image" alt=""><div>{{ boxes[0].name }}</div></div></v-col>
                                    <v-col sm="3" md="3" cols="6"><div class="text-center"><img :src="boxes[1].image" alt=""><div>{{ boxes[1].name }}</div></div></v-col>
                                    <v-col sm="3" md="3" cols="6"><div class="text-center"><img :src="boxes[2].image" alt=""><div>{{ boxes[2].name }}</div></div></v-col>
                                    <v-col sm="3" md="3" cols="6"><div class="text-center"><img :src="boxes[3].image" alt=""><div>{{ boxes[3].name }}</div></div></v-col>
                                </v-row>
                            </v-col>  
                        </v-row>

                        <services :services="services"></services>
                    </v-container>
                </div>
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
import Services from '@/components/Services'

export default {
    name:'OtherService',
    components: {AppFooter, PageHeader, Services},
    props:{
        value:{
            required: true,
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            bg1: require('@/assets/img/other_services/top.jpg'),
            bg_team: require('@/assets/img/about/bg-team.png'),
            manager: require('@/assets/img/about/manager.png'),
            boxes:[
                { name: 'Air', image: require('@/assets/img/other_services/air.png') },
                { name: 'Water', image: require('@/assets/img/other_services/water.png') },
                { name: 'Surface', image: require('@/assets/img/other_services/surface.png') },
                { name: 'Concepts', image: require('@/assets/img/other_services/concept.png') },
            ],

            items:[
                {
                    title: 'AC Cleaning & Disinfection',
                    description: 'Comprehensive & total AC System Cleaning & Disinfection',
                    image: require('@/assets/img/other_services/saniservice.png'),
                    link: 'https://saniservice.com/'
                },
                {
                    title: 'Water Filtration System',
                    description: 'First-rate water filters allowing you to enjoy pure, safe drinking water from "DEWA to your glass"',
                    image: require('@/assets/img/other_services/saniwater.png'),
                    link: 'https://saniwater.com/'
                },
                {
                    title: 'Water Tank Cleaning',
                    description: 'A sustainable & chemical-free approach to disinfecting your water storage system, from your tank all the way to your taps',
                    image: require('@/assets/img/other_services/sanih2o.png'),
                    link: 'https://sanih2o.com/'
                },
                {
                    title: 'Pest Control Extermination',
                    description: 'Potent & Safe Pest Control Solutions with focus on finding the source to avoid chemical overuse & guarantee long-lasting protection',
                    image: require('@/assets/img/other_services/saniex.png'),
                    link: 'https://saniex.com/'
                },
                {
                    title: 'Deep Cleaning & Disinfection',
                    description: 'Mechanically-powered steam that penetrates deep surfaces, leaving them germ and dust mite free',
                    image: require('@/assets/img/other_services/sanistream.png'),
                    link: 'https://sanisteam.com/'
                },
                {
                    title: 'Total Disinfection Solutions',
                    description: 'Breakthrough disinfection solutions custom-designed for specific environments and challenges',
                    image: require('@/assets/img/other_services/sani360.png'),
                    link: 'http://sani360.ae/'
                },
                {
                    title: 'The Hypoallergenic Lifestyle Concept',
                    description: 'Offering tried and tested hypoallergenic products exclusive to Saniserivce clients',
                    image: require('@/assets/img/other_services/sani_allergy.png'),
                    link: 'https://saniallergy.com/'
                },
                {
                    title: 'Cold Air Diffusion System',
                    description: 'Awaken your senses. Boost your health & mood with a selection of 12 aromatic scents infused in your AC system',
                    image: require('@/assets/img/other_services/sani_scent.png'),
                    link: 'https://saniscent.ae/'
                },
            ]
        }
    },

    computed:{
        services(){
            return this.$_.chunk(this.items, 4);
        },
        page(){
            return this.$store.getters['Page/pages'];
        }
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
