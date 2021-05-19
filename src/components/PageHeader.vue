<template>
      <section class="b-container">
          <v-container>
              <v-row class="mt-5">
                  <v-col cols="3">
                      <a href="https://hygienization.com">
                        <img :src="logo" alt="">
                      </a>
                      </v-col>
                  <v-col cols="9"> <h4 class="text-h4 text-right">{{ title }}</h4></v-col>
              </v-row>
          </v-container>
    </section>  
</template>

<script>
export default {
    name: 'PageHeader',
    props:{
        title:{
            type: String,
            required: false,
            default: null,
        }
    },
    data(){
        return{
            logo: require('@/assets/logo/logo2.png'),
        }
    }

}
</script>