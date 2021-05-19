<template>
    <div>
     

      <section style="opacity: .9; position: absolute; top: 20px; left: 10px;  width: 100%; max-width: 600px; z-index: 1">
            <v-card >
              <v-container class="d-flex justify-content-start align-items-center">
                    <v-app-bar-nav-icon class="mt-2" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <!-- <v-autocomplete outlined label="Search..." ></v-autocomplete> -->
                    <v-text-field outlined label="Search..." append-icon="mdi-magnify"></v-text-field>
              </v-container>
            </v-card>
      </section>

   

       <div v-if="!isHome" style="position: absolute; top: 10px; right: 10px; z-index: 11" class="d-flex flex-column" >
            <v-btn class="mx-2" color="white" fab ripple @click="previous">
              <v-icon dark>
              mdi-arrow-up
              </v-icon>
            </v-btn>
            <v-btn @click.prevent.stop="home" class="mx-2 mt-3" color="white" fab ripple>
              <v-icon dark>
                mdi-domain
              </v-icon>
            </v-btn>
            <v-btn class="mx-2 mt-3" fab ripple >
              <v-icon dark>
               mdi-cart
              </v-icon>
              <v-badge color="red " content="5"></v-badge>
            </v-btn>
       </div>


    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name:'Header',
    props:{
      drawer:{
        type: Boolean,
        
      }
    },
   
   
    computed:{
      isHome(){
        return this.$store.getters['Page/is_home']
      }
    },

    methods:{
      ...mapActions({
        back:'Page/previous',
        getPosition: 'Page/getPosition',
        deleteLastPosition: 'Page/deleteLastPosition',
      }),

      previous(event){

        let payload = {
          event: event,
         route_name: this.$route.name
        };

        this.deleteLastPosition();
        this.back(true);

        this.$router.go(-1);

      },

      home(event){

         let payload = {
          event: event,
           route_name: this.$route.name
        };

        this.getPosition(payload);

        this.back(true);

        this.$router.push({name: 'home'})
      }
    },

   
    

   
}
</script>