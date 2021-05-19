<template>
 <section class="location-container" style="height: 100%">
   <section class="back-ground" :style="style" v-if="hasNavLeft && hasNavRight"></section>
   <section class="fore-ground" :style="style" v-if="hasNavLeft && hasNavRight">
    
    <v-carousel
          hide-delimiters
          hide-delimiter-background
        
          height="100%"
          v-model="carousel"
          touchless
        >

        <template v-slot:prev="{ on, attrs }">
          <v-btn
          style="display:none"
          class="btn-prev"
            v-bind="attrs"
            v-on="on"
            @click="setPrev"
            
          >
          </v-btn>
        </template>

      <template v-slot:next="{ on, attrs }">
          <v-btn
            style="display:none"
            class="btn-next"
            v-bind="attrs"
            v-on="on"
            @click="setNext"
          >
          </v-btn>
        </template>

        <v-carousel-item
          v-for="(nav, index) in side_navigation" 
          :key="index" 
          append 
          eager
          :value="index"
          >
          <v-sheet>
              <section ref="background" class="back-ground" :style="`background: url(${nav.image_map_photo}); background-size: cover !mportant;  transform-origin: ${nav.x}% ${nav.y}% `">
              </section>
                <section  class="fore-ground" :style="`background: url(${nav.image_map_photo}); background-size: cover !mportant;  transform-origin: ${nav.x}% ${nav.y}% `">
                  <pin-panel :image="setting.image_map_photo" :items="nav.tooltips" @selectedLocation="selectedLocation"></pin-panel>
              </section>
          </v-sheet>
        </v-carousel-item>
    </v-carousel>

   </section>

  
    <div v-else>
        <section ref="background" class="back-ground" :style="style"></section>
        <section :style="style" class="fore-ground" ref="foreground" >
            <pin-panel :image="setting.image_map_photo" :items="tooltips" @selectedLocation="selectedLocation"></pin-panel>
        </section>
    </div>
        
    <contact v-model="pages.contact" v-if="pages.contact"></contact>

    <v-dialog v-model="modal.show" max-width="95%">
        <v-card class="pr-5 pl-5 protocol-padding">
          <v-card-title class="headline">
            <v-row>
              <v-col cols="9" sm="6" md="6" class="pl-0">
                  <h3>{{ modal.title }}</h3>
                  
              </v-col>
              <v-col sm="6" md="6" cols="3" class="pr-0">
                <section class="d-flex justify-end">
                   
                   <v-btn ripple style="height: 40px" rounded class=" mr-2 d-none d-sm-flex" elevation="0" color="success" @click="submitBooking">Book Now</v-btn>

                    <v-btn  elevation="0" small fab class="pr-0 mr-0 btn-color"  @click="modal.show = false"><v-icon>mdi-close</v-icon></v-btn>

                </section>
              </v-col>
            </v-row>
         

          </v-card-title>
          <v-divider color="#58585A"></v-divider>
            <v-row class="d-flex d-sm-none mt-0">
              <v-col cols="8" offset="2">
                 <v-btn ripple style="height: 40px" rounded block class=" mr-2" elevation="0" color="success" @click="submitBooking">Book Now</v-btn>
              </v-col>
            </v-row>
            <v-container fluid>
              <v-row>
                <v-col md="4" sm="12" cols="12" lg="4" :class="padding">
                  <h3 class="mb-2">Protocols</h3>
                       <v-expansion-panels v-model="protocol_expansion" multiple class="mt-2 box-shadow" >
                            <template v-if="item.protocols.length > 0">
                                <v-expansion-panel class="mb-1" v-for="(item, index) in item.protocols" :key="index">
                                    <v-expansion-panel-header color="#58585A"  class="body-1">
                                        <template v-slot:actions>
                                        <v-icon color="primary">
                                        mdi-menu-down
                                        </v-icon>
                                    </template>
                                    {{ item.name }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="text-justify black--text" v-html="item.description"></v-expansion-panel-content>
                                </v-expansion-panel>
                            </template>
                        </v-expansion-panels>
                </v-col>
                <v-col md="4" sm="12" cols="12" lg="4" :class="padding">
                 
                  <h3 class="mb-2">Products</h3>
                   <v-expansion-panels  v-model="product_expansion" multiple class="mt-2">
                    <template v-if="item.products.length > 0">
                      <v-expansion-panel class="mb-1" v-for="(item, index) in item.products" :key="index">
                          <v-expansion-panel-header 
                              color="#58585A"  
                              class="body-1"
                              >
                              
                              <template v-slot:actions>
                                  <v-icon color="primary">mdi-menu-down</v-icon>
                              </template>

                              {{ item.name }}
                          </v-expansion-panel-header>

                          <v-expansion-panel-content 
                          class="text-justify black--text" 
                          v-html="item.description"
                          />
                      </v-expansion-panel>
                  </template>
                  </v-expansion-panels>
                </v-col>
                <v-col md="4" sm="12" cols="12" lg="4" :class="padding">
                  <div class="mt-9">
                    <div class="text-center border p-1">
                      <iframe 
                        style="width: 100%; height: 250px" 
                        src="https://www.youtube.com/embed/Ny4RnJ-qWCk" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                      </iframe>
                    </div>
                  </div>
                  <div class="mt-5">

                    <v-row>
                      <v-col cols="6"><img :src="images[0].a" alt=""></v-col>
                      <v-col cols="6"><img :src="images[1].b" alt=""></v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6"><img :src="images[2].c" alt=""></v-col>
                      <v-col cols="6"><img :src="images[3].d" alt=""></v-col>
                    </v-row>
                   
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-divider color="#58585A"></v-divider>
            <div class="text-right">
            </div>
        </v-card>
    </v-dialog>

 </section>
   
</template>
<script>
import Protocol from '@/components/Protocol'
import LocationProduct from '@/components/LocationProduct'
import PinPanel from '@/components/PinPanel'
import {mapGetters, mapActions, mapState} from 'vuex'
import CalculatePosition from '@/mixins/CalculatePosition.js'
import PositionCenter from '@/mixins/PositionCenter.js'
import axios from 'axios'

export default {
    name:'Location',

    mixins:[ CalculatePosition, PositionCenter],

    props:{
      location:{
        type: String,
        required: true,
        default: 'home'
      }
    },
    
     components:{
        PinPanel,
        Contact:()=>import('@/views/contact/index'),
        
    },
    data(){ 
        return{
          protocol_expansion: [],

          product_expansion: [],
        
          images:[
            {
              a:  require('@/assets/img/gallery/c.png'),
            },
            {
              b: require('@/assets/img/gallery/g.png'),
            },
            {
              c:  require('@/assets/img/gallery/h.png'),
            },
            {
              d: require('@/assets/img/gallery/i.png'),
            }
          ],
           
          erp_token: process.env.VUE_APP_ERP_TOKEN,
            modal:{
                show: false,
                title: null,
                expansion: [],
                is_book: false,
            },
          
          products:{
            expansion: []
          },

          item:{
            protocols: [],
            products: [],
            videos:null,
            gallery: []
          },

          is_nav:{
              right: false,
              left: false,
          },

          right: {},
          left: {},
          
          carousel: 1,

        }
    },

    watch:{
      //watch the item modal close or open if close, remove the open accordion/expadable
      modal:{
        deep: true,
        handler(){
          if(this.modal.show === false){
            this.protocol_expansion = [];
            this.product_expansion = [];
          }
        }
      },

     
    },


    computed:{
      ...mapGetters({ 
            position: 'Page/position',
            navigate: 'Page/navigate',
            pages: 'Page/pages',
            side_nav: 'Index/side_nav',
             all: 'locations/all',
            side_navigation: 'locations/side_navigation',
      }),

      changeImageSize(){
        if(this.location === '27- yacht'){
          return {
            backgroundSize: '100% 100% !important'
          }
         }
        return null;
      },

      padding(){
        return this.$vuetify.breakpoint.name == 'xs' ? 'protocol-padding' :'pl-5 pr-5';
      },
      
      setting(){
        return this.$store.getters['locations/inner_location'](this.location);
      },

      hasNavLeft(){
        return this.setting.left_nav !== null ? true : false;
      },
      
      hasNavRight(){
        return this.setting.right_nav !== null ? true : false;
      },

      tooltips(){
          return this.setting.tooltips;
      },

    
      style(){
        let image_size = 'cover !important';
        if(this.$vuetify.breakpoint == 'xs' && this.location == '27-yacht'){
          image_size = '100% 100% !important';
        }

        return {
          transformOrigin: `${this.setting.x}% ${this.setting.y}%`,
          backgroundSize: image_size,
          background: `url(${this.setting.image_map_photo})`,
        }
      },

      galleries(){
        if(this.location.gallery.length > 0){
          return this.$_.chunk(this.location.gallery, 2);
        }
        return [];
      }
  
    },

    methods:{
      ...mapActions({
          getPosition: 'Page/getPosition',
          previous: 'Page/previous',
          navigation: 'Page/getNavigation',
          setAnimation:'Page/setAnimation',
          setCurrrentLocation:'Page/setCurrrentLocation',
          setNavigationRight: 'Page/setNavigationRight',
          setNavigationLeft: 'Page/setNavigationLeft',
          setPage:'Page/setPage',
          setRightNavigation:'SideNavigation/setRightNavigation',
          setLeftNavigation:'SideNavigation/setLeftNavigation',
          setSideNav:'Index/setSideNav',

      }),
  

      selectedLocation(location, event){
        this.setAnimation('zoomIn');
            let payload = {
              event: event,
              route_name: this.$route.name,
              level: 2
          };

          this.previous(false);
          this.getPosition(payload);
          this.redirectTo(location);    
      },

       submitBooking(){
        this.setPage('contact');
      },


      setPrev(){
          let current = this.carousel;

          if(current === 0){ current = this.side_navigation.length; }

          let num = current - 2;

          if(num < 0){
            num = this.side_navigation.length -1;
          }


          if(num < 0){ num = this.side_navigation.length-2; }
          
          current = num;

          let prev = this.side_navigation[current];
          

          this.setNavigationLeft({
            has_left: true, 
            image: prev.image_map_photo_thumbnails,
            parent_id:  prev.parent_id,
            name: prev.name,
            slug: prev.slug
          });



        //next
        let next_num = current + 2;
          if(this.carousel == 1){
            next_num = 1;
          }
          else if(this.carousel == 0){
            next_num = 0;
          }
          else{

            next_num = next_num % (this.side_navigation.length);
          }

         let next = this.side_navigation[next_num];

        this.setNavigationRight({
            has_right: true, 
            image: next.image_map_photo_thumbnails,
            parent_id: next.parent_id,
            name: next.name,
            slug: next.slug
        });


      },

      setNext(){

        
        this.carousel = this.carousel +2;

          
        this.carousel = this.carousel % this.side_navigation.length;


        let next = this.side_navigation[this.carousel];

        this.setNavigationRight({
            has_right: true, 
            image: next.image_map_photo_thumbnails,
            parent_id: next.parent_id,
            name: next.name,
            slug: next.slug
        });



        //prev
        let prev_number = this.carousel;
        
        if(this.carousel === 0){
          prev_number = this.side_navigation.length;
        }

        prev_number = prev_number - 2;

        if(prev_number < 0){
          prev_number = this.side_navigation.length -1;
        }
        let prev = this.side_navigation[prev_number];

        this.setNavigationLeft({
            has_left: true, 
            image: prev.image_map_photo_thumbnails,
            parent_id:  prev.parent_id,
            name: prev.name,
            slug: prev.slug
          });
          
      },
    
      redirectTo(location){
          if(location.action === 'Navigate'){
              this.$router.push({name:'location.index', params: {location: location.slug} });
          }
       
          if(location.action === 'Popup'){
              this.modal.expansion = [];
              this.products.expansion = [];

              this.modal.title = location.name;
              this.modal.show = true;
              this.getItems(location.app_id);
          }
      },

      getItems(app_id){
        axios.get(`https://erp.dxb.saniservice.com/api/v3/protocols/items/${app_id}`,{ params: { api_token: this.erp_token } })
        .then(res=>res.data)
        .then(res=>{
            this.item = res.data;
        })
      },  

      alterTooltips(){
        let image = new Image();
        image.src = this.setting.image_map_photo;
      },

      locationImages(){

        return new Promise((resolve, reject)=>{
          let locations = this.all.filter(v=>v.parent_id === this.setting.goto_id && v.image_map_photo != null);

          locations.forEach((v, i)=>{
            let image = new Image();
                image.src = v.image_map_photo;
                if(i === locations.length - 1){
                  resolve();
                }
          });

        });

    },

    loadBackground(){
      let image = new Image();
      return new Promise((resolve,reject)=>{
            image.src = this.setting.image_map_photo;
            resolve();
      });
    },

    relatedLocationImage(){
      return new Promise((resolve, reject)=>{
        this.$store.dispatch('locations/setRelatedLocation', this.setting);
        let locations = this.$store.getters['locations/related_locations'];

        locations.forEach((v, i)=>{

          if(v.image_map_photo !== null){
            let image = new Image();
            image.src = v.image_map_photo;
          }

          if(v.image_map_photo_thumbnails !== null){
            let th = new Image();
            th.src = v.image_map_photo_thumbnails;
          }

          if(i === locations.length - 1){ resolve(); }
        });
      });
    },
    
    setRight(current){
      let num = current +1;
          
      num = num % this.side_navigation.length;

      let next = this.side_navigation[num];

      this.setNavigationRight({
          has_right: true, 
          image: next.image_map_photo_thumbnails,
          parent_id:  this.setting.parent_id,
          name: next.name,
          slug: next.slug
      });
    },
    
    setLeft(current){

      let num = current;

      if(num === 0){
            num = this.side_navigation.length;
      }
       num = num - 1;
        
      let left = this.side_navigation[num];

      this.setNavigationLeft({
          has_left: true, 
          image: left.image_map_photo_thumbnails,
          parent_id:  this.setting.parent_id,
          name: left.name,
          slug: left.slug
      });
    },

    InitPage(){
          if(!this.hasNavLeft){
            let left = {has_left: false, image: null};
            this.setNavigationLeft(left);
        
          }

          if(!this.hasNavRight){
            let right = {has_right: false, image: null};
              this.setNavigationRight(right);
          }
   

          if(this.hasNavLeft && this.hasNavRight){
          
          this.$store.dispatch('locations/setLocation', this.setting);

          this.$store.dispatch('locations/setSideNavigation', this.setting)
          .then(()=>{
              if(this.side_navigation.length > 0){
                
                this.side_navigation.forEach((v, i)=>{
                  
                  let image = new Image();
                  image.src = v.image_map_photo;

                  let th = new Image();
                  th.src = v.image_map_photo_thumbnails

                  if(v.slug == this.location){ 

                    this.carousel = i;
                    //prev
                      if(v.left_nav){
                        this.setLeft(i);
                      }
                    //next
                    if(v.right_nav){
                      this.setRight(i);
                    }
                  }

                });
              }

          });
          
        }
    }

    },
  
    async mounted(){
      //get the parent id 
      this.setCurrrentLocation(this.setting);

      await this.loadBackground();

      await this.relatedLocationImage().then(()=>{
          // this.$store.dispatch('Page/setIsAnimationDone', true);
      });

      this.alterTooltips();

      this.InitPage();  

    }
   
}
</script>

<style scoped>
  .v-expansion-panel::before {
    box-shadow: unset;
  }

  .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: #E5E5E5 !important;
    display: block !important;
    color: #fff;
  }
  .v-expansion-panel-header__icon{
    color: #fff !important;
  }
  .v-expansion-panel-content {
    display: block;
    padding: 10px;
 }

  .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
    color: #fff !important;
}

  .protocol-padding{
        padding-left: 10px !important;
        padding-right: 10px !important;
  }

.fore-ground, .back-ground{
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
    background-repeat: no-repeat;
    background-size: cover !important;
}

img{
  width: 100%;
}
</style>

