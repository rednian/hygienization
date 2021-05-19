<template>
    <section class="mt-25">
      <section class="b-container">
        <v-container>
        <v-row>
          <v-col cols="12" md="3"  sm="2">
            <div class="footer-logo">
              <img  :src="logo">
            </div>
          </v-col>
          <v-col cols="12" md="9" sm="10">
              <div class="pt-3" :class="textAlign">
                <v-btn

                @click="openPage(menu.value)" 
                class="custom-font btn-footer pl-1"
                :class="{ active :menu.is_active}"
                text 
                v-for="(menu, index) in menus" 
                :key="index"
                >
                {{ menu.name }}
                </v-btn>
              </div>
          </v-col>
        </v-row>
        </v-container>
      </section>
       
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="teal1 pt-0 pb-0">
          <div class="b-container">
            <v-container>
              <v-row>
                <v-col class="d-none d-sm-flex" cols="2">
                  <span class="white--text" style="line-height: 35px"><a class="white--text" style="text-decoration: none" href="https://hygienization.com">www.hygienization.com</a></span>
                </v-col>
                <v-col cols="12" md="10" sm="10" :class="textAlign">
                    <v-btn
                    v-for="account in accounts"
                    :key="account.icon"
                    :href="account.link"
                    target="_blank"
                    class="mx-2"
                    color="white"
                    dark
                    icon
                    >
                    <v-icon size="25px">
                      {{ account.icon }}
                    </v-icon>
                </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        
        </v-card-text>
      </v-card>

    </section>
   
</template>

<script>

import '@/assets/bootstrap/bootstrap-grid.css'

  export default {
    data: () => ({
      logo: require('@/assets/logo/logo2.png'),
      accounts: [
        {link: 'https://www.facebook.com/saniservice' , icon: 'mdi-facebook'},
        {link: 'https://twitter.com/saniservice', icon: 'mdi-twitter'},
        {link: 'https://www.linkedin.com/company/saniservice', icon: 'mdi-linkedin'},
        {link: 'https://www.instagram.com/saniservice/', icon: 'mdi-instagram'},
        {link: 'https://www.youtube.com/channel/UCsXw5T8Bx8BxIYla7ts0etw', icon: 'mdi-youtube'},
      ],
      menus:[
        {is_active: false, value: 'home', name: 'Home'},
        {is_active: false, value: 'about', name: 'About Us'},
        {is_active: false, value: 'gallery', name: 'Gallery'},
        {is_active: false, value: 'process', name: 'Process'},
        {is_active: false, value: 'testimonial', name: 'Testimonial'},
        {is_active: false, value: 'team', name: 'Other Services'},
        {is_active: false, value: 'contact', name: 'Contact Us'},
      ]
    }),

    computed:{
      pages(){
        let pages = this.$store.getters['Page/pages'];
        return pages;
      },
      textAlign(){
        return this.$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-right';
      }
    },

    methods:{
      openPage(name){ 
        this.$store.dispatch('Page/setPage', name);
      },

      activePage(page){
          return this.menus.forEach((v, i)=>{
            if(v.value === page ){
              this.menus[i].is_active = true;
            }
          });
      },

     
    },
    mounted(){
      

      if(this.pages.team == true){
        this.activePage('team');
      }
      if(this.pages.about == true){
        this.activePage('about');
      }

      if(this.pages.contact == true){
        this.activePage('contact');
      }
      if(this.pages.testimonial == true){
        this.activePage('testimonial');
      }
      if(this.pages.process == true){
        this.activePage('process');
      }
      if(this.pages.gallery == true){
        this.activePage('gallery');
      }
    }
  }
</script>
<style scoped>
  .active{
      opacity: 0.5;
  }
  
  .custom-font{
    font-family: "SFProDisplay-Regular" !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 16px !important;
    line-height: 19px !important;
    color: #5a5a5a !important;
  }

  .teal1 {
    background-color: #20407d !important;
    border-color: #20407d !important;
  }
  
  .mt-25{
    margin-top: 25px;
  }

</style>