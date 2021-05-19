<template>
    <section style="position: relative; height: 100%; width: 100%; min-width: 90%" v-resize="onReSize" >
        <section class="back-ground" ref="background"></section>
        <section ref="foreground" class="fore-ground">
            <pin-panel :image="setting.image_map_photo" :items="setting.tooltips" @selectedLocation="selectedLocation"></pin-panel>  
        </section> 
    </section>
</template>

<script>  
import PinPanel from '@/components/PinPanel'
import CalculatePosition from '@/mixins/CalculatePosition.js'
import PositionCenter from '@/mixins/PositionCenter.js'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  mixins: [ CalculatePosition, PositionCenter],
  components:{ 
    PinPanel
  },

  data(){ 
    return{
      setting:{
        tooltips:[],
        image_map_photo: null
      },    
    } 
  },

  computed:{
      tooltips_filter(){
        return this.setting.tooltips;
      },

    ...mapGetters({
      position:'Page/position',
      loading:'Index/loading',
      all: 'locations/all',
    }),

   
  },
  methods:{
    ...mapActions({
      previous: 'Page/previous',
      // getPosition: 'Page/getPosition',
      getLoadedItem: 'Page/getLoadedItem',
      setAnimation:'Page/setAnimation',
      setCurrrentLocation:'Page/setCurrrentLocation',
      setSetting:'Index/setSetting',
    }),

   
    selectedLocation(location){
       this.setAnimation('zoomIn');
  
      this.previous(false);
   
      this.$router.push({name:'location.index', params: {location: location.slug} });

    },

    setBackground(){
        const b = this.$refs.background.style;
        const f = this.$refs.foreground.style;

        let position = `${this.position.x}px ${this.position.y}px`;
        let image = `url("https://admin.hygienization.com/images/photo-uploader/677cf5598906ddb44e92d5d8754ab47b.jpg")`;

        b.transformOrigin = position;
        b.backgroundPosition = 'center center !important';
        f.transformOrigin = position;
        f.backgroundPosition = 'center center !important';

        b.backgroundImage = image;
        f.backgroundImage = image;
    },

    onReSize(){
  
        this.$store.dispatch('locations/calculatedPosition', this.setting);
    },

    alterTooltips(){
      let image = new Image();
      image.src = this.setting.image_map_photo;
    },

    homeImage(){
      return new Promise((resolve, reject)=>{
          let locations = this.all;
          let image = new Image();

          let home = locations.find(v=>v.slug == 'home' && v.name =='home');
              image.src = 'https://admin.hygienization.com/images/photo-uploader/677cf5598906ddb44e92d5d8754ab47b.jpg'
              resolve();
      });
     
    },

  },

  mounted(){
  
    this.homeImage();
    this.alterTooltips();
    this.onReSize();
  },

  beforeRouteEnter (to, from, next) {
    next(vm=>{
      vm.setting = vm.$store.getters['locations/home'];
      vm.setBackground();


    });
  },
  
}
</script>
