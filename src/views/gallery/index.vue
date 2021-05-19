<template>
    <v-row justify="center">
        <v-dialog v-model="page.gallery" fullscreen hide-overlay  transition="dialog-bottom-transition" open-on-focus eager >
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
               <page-header title=""></page-header>
                 <section class="b-container">
                     <v-container>
                         <v-row>
                           <v-col cols="12"><h4 class="text-h4 mt-5">Gallery</h4></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4"><img :src="images[0].a" alt=""></v-col>
                            <v-col cols="12" sm="4"><img :src="images[1].b" alt=""></v-col>
                            <v-col cols="12" sm="4"><img :src="images[2].c" alt=""></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6"><img :src="images[3].d" alt=""></v-col>
                            <v-col cols="12" sm="6"><img :src="images[4].e" alt=""></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12"><img :src="images[5].f" alt=""></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4"><img :src="images[6].j" alt=""></v-col>
                            <v-col cols="12" sm="4"><img :src="images[7].h" alt=""></v-col>
                            <v-col cols="12" sm="4"><img :src="images[8].i" alt=""></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12"><img :src="images[10].k" alt=""></v-col>
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
import PageHeader from '@/components/PageHeader'
export default {
    name:'gallery',
    components: {AppFooter, PageHeader},
 
    data(){
        return{
              images:[
            {
                a: require('@/assets/img/gallery/a.png')
            },
            {
                b: require('@/assets/img/gallery/b.png'),
            },
            {
                c: require('@/assets/img/gallery/c.png'),
            },
            {

                d: require('@/assets/img/gallery/d.png'),
            },
            {

                e: require('@/assets/img/gallery/e.png'),
            },
            {

                f: require('@/assets/img/gallery/f.png'),
            },
            {

                j: require('@/assets/img/gallery/g.png'),
            },
            {

                h: require('@/assets/img/gallery/h.png'),
            },
            {

                i: require('@/assets/img/gallery/i.png'),
            },
            {

                j: require('@/assets/img/gallery/j.png'),
            },
            {

                k: require('@/assets/img/gallery/k.png'),
            }
        ]
        }
      
    },

    computed:{
        page(){
            return this.$store.getters['Page/pages'];
        }
    },
    
    methods:{
      
    }

  
}
</script>

<style scoped>

    img{
        width: 100%;
    }
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

    .full-image{
        width: 100%;
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
