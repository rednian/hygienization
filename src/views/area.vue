<template>
    <section :style="`background: url(${this.setting.bg}) no-repeat center center`" class="page">

      <section
        ref="background" 
        class="background"
        >
        </section>

      <section 
      ref="foreground" 
      class="foreground"
      >
      <pin-panel :items="areas" @selectedLocation="selectedLocation"></pin-panel>
      </section>
      
               
      
    <v-dialog v-model="dialog" max-width="960">

        <v-card>
          <v-card-title class="headline">{{ modal_title }}</v-card-title>
            <v-container>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae iste nisi in blanditiis sequi ipsa, rerum, nulla, 
                quaerat dignissimos nobis necessitatibus eligendi eius! Unde consectetur rem perferendis iusto a? 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia, at tempore, 
                autem rem natus explicabo quam esse amet facilis quod sequi molestias provident ducimus repellat harum! Quod, unde quisquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae iste nisi in blanditiis sequi ipsa, rerum, nulla, 
                quaerat dignissimos nobis necessitatibus eligendi eius! Unde consectetur rem perferendis iusto a? 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia, at tempore, 
                autem rem natus explicabo quam esse amet facilis quod sequi molestias provident ducimus repellat harum! Quod, unde quisquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae iste nisi in blanditiis sequi ipsa, rerum, nulla, 
                quaerat dignissimos nobis necessitatibus eligendi eius! Unde consectetur rem perferendis iusto a? 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia, at tempore, 
                autem rem natus explicabo quam esse amet facilis quod sequi molestias provident ducimus repellat harum! Quod, unde quisquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae iste nisi in blanditiis sequi ipsa, rerum, nulla, 
                quaerat dignissimos nobis necessitatibus eligendi eius! Unde consectetur rem perferendis iusto a? 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia, at tempore, 
                autem rem natus explicabo quam esse amet facilis quod sequi molestias provident ducimus repellat harum! Quod, unde quisquam.
              </p>

            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="s darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Some action
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>

    <section>
      <v-btn @click.prevent.stop="prev" color="white" fab style="position: absolute; top: 40%; left: 5px">
          <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>

      <v-btn @click="next"  color="white" fab style="position: absolute; top: 40%; right: 5px">
        <v-icon dark>mdi-arrow-right</v-icon>
      </v-btn>
    </section>
  
    </section>
  
</template>
<script>
import PinPanel from '@/components/PinPanel'
import {mapGetters, mapActions} from 'vuex'
export default {
    name:'locationArea',
     components:{
        PinPanel
    },
    data(){
        return{
            path: process.env.BASE_URL,
            params:this.$route.params,
            previous_url: null,
            dialog: false,
            modal_title: null,
        }
    },

    watch:{
      $route(to, from){
        this.params = to.params
      }
    },

    computed:{
      ...mapGetters({
        is_click: 'Page/is_click'
      }),

      setting(){
          return this.$store.getters['Index/location'](this.params.area);
      },

      areas(){
        return this.$store.getters['Index/locations'](this.params.area);
      },

      locations(){
        return this.$store.getters['Index/locations'](this.params.location);
      }
    },

  
    methods:{
      ...mapActions({
        navigation: 'Page/getNavigation'
      }),

      
      prev(){ 
        this.navigation('prev');
        this.$router.push({
          name: 'area.index', params:{area: 'reception'},
          query: {
            t: new Date().getTime(),
          }
        });

      },

      next(){
          this.navigation('next');
        this.$router.push({
          name: 'area.index', params:{area: 'gym-toilet'},
          query: {
            t: new Date().getTime(),
          }
        });

      },

      selectedLocation(item){
        this.dialog = true
        this.modal_title = item.name
      }
    },

}
</script>
