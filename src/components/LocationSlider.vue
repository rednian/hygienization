<template>
       <v-carousel
      hide-delimiters
      hide-delimiter-background
      v-if="hasNavLeft && hasNavRight"
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
        @click="navigation"
        
      >
      </v-btn>
    </template>

    <template v-slot:next="{ on, attrs }">
      <v-btn
        style="display:none"
        class="btn-next"
        v-bind="attrs"
        v-on="on"
        @click="navigation"
      >
      </v-btn>
    </template>

    <v-carousel-item 
      v-for="(item, index) in items" 
      :key="index" 
      append 
      eager
      :value="index"
      >
      <v-sheet>
           <section ref="background" class="back-ground" :style="`background: url(${item.image_map_photo}); background-size: cover !mportant;  transform-origin: ${nav.x}% ${nav.y}% `">
          </section>
            <section  class="fore-ground" :style="`background: url(${item.image_map_photo}); background-size: cover !mportant;  transform-origin: ${nav.x}% ${nav.y}% `">
              <pin-panel :items="item.tooltips" @selectedLocation="selectedLocation"></pin-panel>
          </section>
      </v-sheet>
    </v-carousel-item>



    </v-carousel>
</template>
<script>
import PinPanel from '@/components/PinPanel'
export default {
    name: 'LocationSlider',
    components:{PinPanel},
    props:{
        items:{
            required: true,
        }
    }
}
</script>