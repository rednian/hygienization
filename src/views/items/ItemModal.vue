<template>
    <v-row justify="center">
        <v-dialog v-model="show" max-width="1500"  transition="dialog-bottom-transition">
                  <v-card class="pr-5 pl-5">
          <v-card-title class="headline">
            <v-row>
              <v-col cols="12" sm="9" md="9"><h4>{{ modal.title }}</h4></v-col>
              <!-- <v-col cols="12" sm="9" md="9"><h4>Test Title</h4></v-col> -->
              <v-col sm="3" cols="12">
                <v-btn block class="mt-1" ripple large color="success">Book Now</v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-divider></v-divider>
            <v-container >
              <v-row>
                <v-col md="4" sm="12" cols="12" lg="4" class="pr-5 pl-5">
                  <h3 class="mb-2">Protocol</h3>
                  <v-divider></v-divider>
                    <ul class="mt-4">
                      <li class="mb-3">
                        <h4 class="mb-2">Placing safety measures & protection to protect your premises and objects</h4>
                         <p class="text-justify">
                           A plastic sheet is used to cover all furniture to avoid dust and dirt. Protective wall and corner guards are also installed to safeguard the premises against unavoidable impacts in logistics & equipment. In addition to the above, safety cones are placed to restrict entry and bring attention that work is under progress within the premises. 
                        </p>
                      </li>
                      <li class="mb-3">
                        <h4 class="mb-2">Pre - Vacuuming with Heavy duty Machine</h4>
                         <p class="text-justify">
                           Heavy-duty industrial vacuum cleaners and suction machines remove dust and dirt on all types of surfaces more efficiently by covering large areas in just minutes. Contaminated liquid found in sinks or stove tops are also vacuumed out. 
                        </p>
                      </li>
                    </ul>

                </v-col>
                <v-col md="4" sm="12" cols="12" lg="4" class="pr-5 pl-5">
                 
                  <h3 class="mb-2">Products</h3>
                  <v-divider></v-divider>
                  <ul class="mt-2">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                  </ul>
                </v-col>
                <v-col md="4" sm="12" cols="12" lg="4" class="pr-5 pl-5">
                   <!-- <h3 class="mb-2">Title for this</h3> -->
                  <v-divider class="mt-9"></v-divider>
                  <div class="mt-3">
                    <iframe style="width: 100%;" height="260" src="https://www.youtube.com/embed/slYEyaBKA5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class="mt-5">
                    <v-row>
                      <v-col cols="12" sm="6">
                        <img src="https://www.saniservice.com/wp-content/uploads/2020/04/home-disinfection-2.jpg"  style="width:100%; border: #000">
                      </v-col>
                      <v-col cols="12" sm="6">
                        <img src="https://www.saniservice.com/wp-content/uploads/2020/04/home-disinfection-2.jpg"  style="width:100%; border: #000">
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <img src="https://www.saniservice.com/wp-content/uploads/2020/04/home-disinfection-2.jpg"  style="width:100%; border: #000">
                      </v-col>
                      <v-col cols="12" sm="6">
                        <img src="https://www.saniservice.com/wp-content/uploads/2020/04/home-disinfection-2.jpg"  style="width:100%; border: #000">
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="darken-1"
              
            
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
            
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name:'Item',
    props:{
        value:{
            required: true,
            type: Boolean,
            default: true
        }
    },
    computed:{
        show: {
            get(){ return this.value},
            set: (value)=> {this.$emit('input', value)}
        }
    },
    mounted(){
        console.log(this.value);
    }
}
</script>