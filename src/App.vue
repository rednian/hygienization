<template>
  <v-app v-resize="onResize">
        <a v-if="is_home" href="https://hygienization.com" class="img-logo">
            <img v-if="is_home"  :src="logo.path">
        </a>
    <v-main>

      <contact v-if="pages.contact"  @close="pages.contact = false"/>
      <about  v-if="pages.about"  v-model="pages.about" @close="pages.about = false"/>
      <process  v-if="pages.process" v-model="pages.process" @close="pages.process = false"/>
      <team  v-if="pages.team" v-model="pages.team" @close="pages.team = false"/>
      <gallery  v-if="pages.gallery" v-model="pages.gallery" @close="pages.gallery = false"/>
      <testimonial  v-if="pages.testimonial" v-model="pages.testimonial" @close="pages.testimonial = false"/>

      <section @click.stop="logo.is_show = false" class="wrapper" ref="wrapper">
        
            <div ref="inner" class="inner-wrapper" v-if="is_loaded">

              <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                :css="false"
              >
                <router-view :key='$route.path'/>   
              </transition>

            </div>

            <v-row style="position: absolute; top: 45%; left: 48%" v-else> 
              <v-progress-circular
                  :size="70"
                  :width="7"
                  color="green"
                  indeterminate
                >
              </v-progress-circular>
            </v-row>
      </section>

      <!-- circular menu -->
      <section class="radial-menu-container">
           <transition @before-leave="menuBeforeLeave" @enter="menuEnter" @before-enter="menuBeforeEnter" @after-leave="menuAfterLeave" @leave="menuLeave">
                <section class="menu-container" ref="menucontainer" v-if="drawer" @click.self="drawer = false">
                  <div class="circle">
                    <RadialMenu @close="close" ref="radialMenu" @clicked="menuClicked" :menu-items="menuItems" :size="size" close-on-click></RadialMenu>
                  </div>
                </section>
          </transition>
      </section>

    </v-main>

    <!-- logo transition -->
    <transition @enter="logoEnter" @leave="logoLeave"  @enter-cancelled="logoEnterCancelled">
      <section v-if="logo.is_show" class="logo" @click="logo.is_show = false" >
          <div  class="logo-container pr-5 pl-5  pt-5 pb-5">
            <v-row>
              <v-col cols="6 text-left">
                <img class="img-btn" :src="logo.btn" alt="">
              </v-col>
              <v-col cols="6 text-right">
                <img class="img-btn" :src="logo.btn" alt="">
              </v-col>
            </v-row>
            <p class="mt-3 ml-6 mr-6 text-justify font">
              <strong> Hygienization by Saniservice&#8482;</strong> goes beyond the best cleaning practices used anywhere. It is the ultimate state of disinfection cleaning, 
              where strictest protocols are applied not only to differentiate each furniture and surfaces but also to apply and treat them individually with the best product 
              designed for them. 
            </p>
            <p class="ml-6 mr-6 text-justify font">
              <strong>Sani Hygienization</strong> takes your property to a whole new level of perfection through a floor-to-ceiling cleaning, disinfection and protection from 
              immediate re-contamination.
            </p>
            <p class="ml-6 mb-3 mr-6 text-justify font">
              Choose your type of property and dive directly into our world of perfect hygiene. 
            </p>
          <v-row>
              <v-col cols="6 text-left">
                <img class="img-btn" :src="logo.btn" alt="">
              </v-col>
              <v-col cols="6 text-right">
                <img class="img-btn" :src="logo.btn" alt="">
              </v-col>
            </v-row>
      </div>
      </section>
  </transition>

  <!-- instruction animation -->
  <section class="instruction-wrapper" v-if="instruction.show" @click="instruction.show = false">
      <div class="instruction-container">
        <div class="img-container">
            <v-img :src="instruction.img" eager />
        </div>
        <div class="white--text">Drag the screen left and right.</div>
    </div>
  </section>
  
  <!-- button menu -->
  <section v-if="showMenu" class="bottom-container">
    <div class="inner-bottom-container">
      <v-row no-gutters>
        <v-col cols="2" sm="2" md="3" lg="4">
      <section class="nav-left-container">
        <v-avatar @click="prev" class="avatar" v-if="location_navigation.left.has_left">
          <v-img
            class="btn-avatar"
            max-height="150"
            max-width="250"
            :lazy-src="location_navigation.left.image"
            :src="location_navigation.left.image"
            eager
            />
        </v-avatar>
      </section>
        </v-col>
    
        <v-col cols="8" sm="8" lg="4" md="5" style="z-index: 1; display: flex; justify-content: center; align-items: center;">
          <div class="nav-container text-center" >
            <div class="text-center container-b">
                <v-btn fab x-large v-if="!is_home" @click.prevent.stop="home"  class="btn-menu btn-home" >
                  <img :src="menu_icon.home"  style="width: 50% !important" class="mb-1"/>
                </v-btn>
                <v-btn fab x-large @click.stop="openMenu"   class="btn-menu btn-center mr-3 ml-3 text-center">
                  <img :src="menu_icon.menu"  style="width: 50% !important" class="mt-3"/>
                </v-btn>
                <v-btn fab x-large  @click="previous" v-if="!is_home"  class="btn-menu">
                  <img :src="menu_icon.back"  style="width: 50% !important" class="mt-4 mr-1"/>
                </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="2" sm="2" md="4" lg="4">
            <section class="nav-right-container text-right">
            <v-avatar @click="next" class="avatar" v-if="location_navigation.right.has_right">
              <v-img
                class="btn-avatar"
                max-height="150"
                max-width="250"
                :lazy-src="location_navigation.right.image"
                :src="location_navigation.right.image"
                />
            </v-avatar>
          </section>
        </v-col>
    
      </v-row>
    </div>
  </section>

</v-app>
</template>
<script>

import {gsap, Elastic} from 'gsap';
import RadialMenu from '@/components/RadialMenu.vue'
import {mapActions, mapGetters} from 'vuex'
//pages
import About from '@/views/about/index'
import Gallery from '@/views/gallery/index'
import Process from '@/views/process/index'
import Contact from '@/views/contact/index'
import Testimonial from '@/views/testimonial/index'
import Team from '@/views/team/index'

export default {
  
  name:'app',

  components:{ 
      RadialMenu,
      Gallery,
      About,
      Process,
      Contact,
      Testimonial,
      Team,
    }, 
 
  data(){
    return{

      instruction:{
         show: false,

         img: require('@/assets/logo/hand.gif'),
         
         is_visited:  JSON.parse(localStorage.getItem('is_visit')) || false,
      },

      menu_icon:{
        home: require('@/assets/img/menu/home.svg'),
        menu: require('@/assets/img/menu/menu.svg'),
        back: require('@/assets/img/menu/back.svg'),
      },

      logo:{
        is_done_animation: false,
        is_show: false,
        path: require('@/assets/logo/logo_top2.png'), 
        btn: require('@/assets/logo/btn.png'), 
      },

      drawer: false,
      size: 350,
      menuItems: [
        {id: 'team', title: 'Other Services'},
        {id: 'about',title: 'About us'},
        {id: 'contact', title: 'Contact us'},
        {id: 'process', title: 'Our Process'},
        {id: 'testimonial',title: 'Testimonial'},
        {id: 'gallery', title: 'Gallery'},
      ],

      menu_position: null,
      
    

      is_loaded: false,

      

      location_navigation:{
        left:{  
          has_left: false,
          image: null,
        },
        right:{
          has_right: false,
          image: null,
        }
      },
  
    }
  },

  watch:{
   
    $route(to, from){
      
      this.location_navigation = this.getNavigation;

      this.$store.dispatch('Page/getNavigate', {to: to, from: from});
    
      let path =  this.$route.name  === 'home' ? true: false;

      this.checkPath(path);

      if(this.is_home){
        this.deletePosition();
      }

    },

  },

  computed:{
    ...mapGetters({
      is_previous:'Page/is_previous',
      position: 'Page/position',
      is_home: 'Page/is_home',
      is_area: 'Page/is_area',
      click_from: 'Page/click_from',
       navigation: 'Page/navigate',
       animation: 'Page/animation',
       current_location: 'Page/current_location',
       parent_location: 'Index/parent_location',
       getMenuPosition: 'Page/getMenuPosition',
       getNavigation: 'Page/getNavigation',
       get_location_nav: 'Index/get_location_nav',
       pages: 'Page/pages',
       all: 'locations/all',
    }),

    showMenu(){
      if(this.logo.is_show == false && this.instruction.is_visited){
        return true;
      }

      if(this.logo.is_show === false && this.instruction.show){
        return false;
      }

      if(this.logo.is_show === false && this.instruction.show == false){
        return true;
      }

      return false;
    }  
  },

  methods: {
  
    logoEnter(el, done){

      const wrapper = document.querySelector('.inner-wrapper');
      
       let duration = '1.5';
       gsap.timeline()
       .fromTo(el, 
        {opacity: 0, scale: 0}, 
        {scale: 1, opacity: 1, duration:  duration, ease:Elastic.easeOut.config(1, 0.5), delay: 1})
        .fromTo(wrapper, {filter: 'blur(0px)'}, {filter: 'blur(8px)',  duration: duration,  onComplete: done}, `-=${duration}`)

    },

    logoLeave(el, done){
       
      const wrapper = document.querySelector('.inner-wrapper');

       let duration = '.75';

     
       gsap.timeline()
       .to(el, {opacity: 0, scale: 0, duration: duration, onComplete: done})
       .to(wrapper, {filter: 'blur(0px)',  duration: duration, onComplete: ()=>{
       
         done();
         
         let breakpoint = this.$vuetify.breakpoint.name;

          if(breakpoint == 'xs' || breakpoint == 'sm'){
                
                if(this.instruction.is_visited){
                    this.instruction.show = false;
                }
                else{
                  this.instruction.show = true;
                  this.logo.is_done_animation = true;
                }

          }
         
       }}, `-=${duration}`)
    },

    logoEnterCancelled(el){
      this.$nextTick(()=>{
        const wrapper = document.querySelector('.inner-wrapper');
        wrapper.style.filter = 'blur(0px)';
      })
    },

    prev(){

      this.setAnimation('left');
      let parent =  document.querySelector('.btn-prev').click();

      let left = this.location_navigation.left;
      this.setLocationNav({name: left.name, parent_id: left.parent_id, slug:  left.slug});

      if(this.get_location_nav !== undefined){
        // this.redirectTo(this.get_location_nav);
      }
      else{
        console.log(`there is no location name: ${name}`);
      }
      

    },

    next(){
        let parent =  document.querySelector('.btn-next').click();
      this.setAnimation('right');
      let right = this.location_navigation.right;
      let name = right.name;
      this.setLocationNav({name: name, parent_id: right.parent_id, slug: right.slug});
      
      if(this.get_location_nav !== undefined){
        // this.redirectTo(this.get_location_nav);
      }
      else{
      // console.log(`there is no location name: ${name}`);
      }


    },

    redirectTo(location){
      if(location.action === 'Navigate'){
          this.$router.push({name:'location.index', params: {location: location.slug} });
      }
    },

    // -------menu-------------
    menuClicked(menuItem){
     
      this.setPage(menuItem.id);
    },

    openMenu(event){
      this.test =true
      this.setMenuPosition(event);
        
      this.drawer = !this.drawer
        
      if(this.drawer){
          this.$nextTick(()=>{
          this.$refs.radialMenu.open()
        });
      }
          
      },

    close(){
      this.drawer = false;
      this.pages.about = false;
    },

    menuAfterLeave(el){
        el.style.zIndex = 0;
        el.style.opacity = 0;
    },

    menuBeforeLeave(el){
          let circle = el.querySelector('.circle');
          circle.style.transformOrigin = 'center';
    },
    
    menuLeave(el, done){
        let circle = el.querySelector('.circle');
         
        let wrapper = document.querySelector('.inner-wrapper');

        let pos = this.menu_position;
        let duration = '.75'

        let y = window.innerHeight;

        let size  = this.$refs.radialMenu.size;

        let x = (window.innerWidth - size)/2

        gsap
        .timeline()
        .fromTo(circle, {opacity: .4}, {opacity: 0, x: x , y: y, scale: 0, duration: duration})
        .to(wrapper, {filter: 'blur(0px)',  duration: duration, onComplete: done}, `-=${duration}`);
    },

    menuEnter(el, done){
      
      this.$nextTick(()=>{
        let circle = el.querySelector('.circle');
        let wrapper = document.querySelector('.inner-wrapper');

        let duration = '1';
    
        let inner_width = window.innerWidth;
        let inner_height = window.innerHeight;
        let size  = this.$refs.radialMenu.size;

        let y = (inner_height - size)/2; 
        let x = (inner_width - size)/2;
         
        gsap
        .timeline()
        .fromTo(el, {opacity: 0}, {opacity: 1, duration: duration})
        .fromTo(circle, {scale: 0}, {scale: 1, x: x, y: y,  duration: duration, ease: Elastic.easeOut.config(1, 0.75)}, `-=${duration}`)
        .fromTo(wrapper, {filter: 'blur(0px)'}, {filter: 'blur(8px)',  duration: duration,  onComplete: done}, `-=${duration}`)
        });

    },

    menuBeforeEnter(el){

      el.style.zIndex = 2;

      let circle = el.querySelector('.circle');
      let pos = this.getMenuPosition;
        
      this.menu_position = this.getMenuPosition;
      circle.style.transformOrigin = `${pos.x}px ${pos.y}px`;

    },

    beforeEnter(el){
    
      if(this.animation == 'zoomIn' || this.animation == 'zoomOut'){

           const f =  el.querySelector('.fore-ground').style;
           const b =  el.querySelector('.back-ground').style;
          
          let prev = this.navigation.from.name === 'home' ? 'home' : this.navigation.from.params.location;
          let next = this.navigation.to.name === 'home' ? 'home' : this.navigation.to.params.location;

          prev = this.getImage(prev);
          next = this.getImage(next);

          f.backgroundImage = `url(${prev.image_map_photo})`;
          f.transformOrigin = `${this.position.x}px ${this.position.y}px`;
        
          b.backgroundImage = `url(${next.image_map_photo})`;
          b.transformOrigin = `${this.position.x}px ${this.position.y}px`;
          b.zIndex = 1
      }

    },

    enter(el, done){
        const f =  el.querySelector('.fore-ground');
        const b =  el.querySelector('.back-ground');

        let next = this.navigation.to.name === 'home' ? 'home' : this.navigation.to.params.location;      
        let prev = this.navigation.from.name === 'home' ? 'home' : this.navigation.from.params.location;

        next = this.getImage(next);
        prev = this.getImage(prev);

        let duration = '.3'

        if(this.animation === 'zoomIn'){
            gsap
            .timeline()
            .fromTo(f, {scale: 1, opacity: 1 }, {scale: 4, opacity: 1, duration: duration,  onComplete: ()=>{
              }})
            .fromTo(b, {scale: 0, opacity: 0}, {scale: 1, opacity: .5, duration: duration,  onComplete: ()=>{
              done();
               this.$store.dispatch('Page/setIsAnimationDone', true);
            }}, `-=${duration}`)
        }

        if(this.animation === 'zoomOut'){
          gsap.timeline()
          .fromTo(f, {scale: 4, opacity: 0},{scale: 1, opacity: 1, duration: duration})
          .fromTo(b, {scale: 1, opacity: 1},{scale: 0, opacity: 0, duration: duration, onComplete: ()=>{
            done();
             this.$store.dispatch('Page/setIsAnimationDone', true);
          }}, `-=${duration}`)
        }

        if(this.animation == 'right' || this.animation == 'left'){ done(); }

    },

    afterEnter(el){
      
      if(this.animation == 'zoomIn' || this.animation == 'zoomOut'){
         

        const f =  el.querySelector('.fore-ground');
        const b =  el.querySelector('.back-ground');

        let next = this.navigation.to.name === 'home' ? 'home' : this.navigation.to.params.location;      
        let prev = this.navigation.from.name === 'home' ? 'home' : this.navigation.from.params.location;

        next = this.getImage(next);
        prev = this.getImage(prev);



        f.style.transform = 'scale(1)'
        f.style.backgroundImage = `url(${next.image_map_photo})`;
        b.style.zIndex = 0;
        f.style.opacity = 1
      }

    },
  
    beforeLeave(el){  

      if(this.animation == 'zoomIn' || this.animation == 'zoomOut'){
        // console.log(el.querySelector('.fore-ground'));
          const f =  el.querySelector('.fore-ground').style;
          const b =  el.querySelector('.back-ground').style;

          let prev = this.navigation.from.name === 'home' ? 'home' : this.navigation.from.params.location;
          let next = this.navigation.to.name === 'home' ? 'home' : this.navigation.to.params.location;

          prev = this.getImage(prev);
          next = this.getImage(next);

          // b.zIndex = 0
      }

    },

    setImagePosition(position){ return `${position.x}px ${position.y}px`; },

    getImage(slug){ return this.$store.getters['locations/inner_location'](slug); },

    previous(){
       this.setAnimation('zoomOut');
    
       let location = this.$store.getters['locations/parent_location'](this.current_location.parent_id);

       if(location === undefined){ 
          this.$router.push({name: 'home'});
       }
       else{
          this.$router.push({name: 'location.index', params:{location: location.slug}});
       }
    },

    home(){
       this.setAnimation('zoomOut');
        this.back(true);
        this.location_navigation.left.has_left = false;
        this.location_navigation.right.has_right = false;
       this.$router.push({name: 'home'})
    },
    
    ...mapActions({
        back:'Page/previous',
        checkPath: 'Page/checkHome',
        getPosition: 'Page/getPosition',
        deletePosition: 'Page/deletePosition',
        deleteLastPosition: 'Page/deleteLastPosition',
        getLoadedItem: 'Page/getLoadedItem',
        setAnimation:'Page/setAnimation',
        setMenuPosition:'Page/setMenuPosition',
        setRightSelected:'Page/setRightSelected',
        setLeftSelected:'Page/setLeftSelected',
        setLocationNav:'Index/setLocationNav',
        setPage:'Page/setPage',
    }),

    homeImage(){
      return new Promise((resolve, reject)=>{
          let locations = this.all;
          let image = new Image();

          let home = locations.find(v=>v.slug == 'home' && v.name =='home');
              image.src = 'https://admin.hygienization.com/images/photo-uploader/677cf5598906ddb44e92d5d8754ab47b.jpg';
              resolve();
      });
     
    },

    loadHomeImages(){
      return new Promise((resolve, reject)=>{
    
          let locations = this.all.filter(v=>v.parent_id == 1)
          locations.forEach((v, i)=>{
            if(v.image_map_photo !== null){
              let image = new Image();
              image.src = v.image_map_photo

              if(i == locations.length - 1){ resolve();}

            }
          });

        });
    },

    loadLocationImages(){
      return new Promise((resolve, reject)=>{
        let locations = this.all.filter(v=>v.parent_id != 1 && v.image_map_photo !== null);
        locations.forEach((v, i)=>{
          let image = new Image();
          image.src = v.image_map_photo
          if(i === locations.length - 1){ resolve(); }
        });
      });
    },

    checkExpirationtime(){
        
      let expiration_date = localStorage.getItem('expiration_date');

      if( expiration_date !== null ){
      
        let d = new Date();

        if( expiration_date < d.getTime() ){
          localStorage.removeItem('api_response');
        }
      }

    },

    onResize(){
      this.$store.dispatch('Page/setSize', {width: window.innerWidth, height: window.innerHeight})
    },

    userFirstVisit(){
      if(localStorage.getItem('is_visit') === null){
          localStorage.setItem('is_visit', true );
      }
    }
  
  },
  
  mounted(){
    
      this.$nextTick(()=>{
        // make the menu button close when hitting back/forward button in the browser.
        window.onpopstate = () =>{
          this.drawer = false;
        };
      
        this.userFirstVisit();
      });
  },

 async beforeMount() {

    this.onResize();
   
    await this.$store.dispatch('Page/setIsAnimationDone', true);

    await this.$store.dispatch('Index/getLocation', 'home');

    this.checkExpirationtime();
    
    if(localStorage.getItem('api_response') === null){
      await this.$store.dispatch('locations/map');
    }

    await this.homeImage();
    this.loadHomeImages().then(()=>{
        setTimeout(() => {
        this.logo.is_show = true;
        this.is_loaded = true;
        }, 1000);
    });

  },
}
</script>
