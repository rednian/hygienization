<template>
    <v-navigation-drawer 
    app
    absolute
    temporary
    @input="toggle"
    >

     <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      <v-divider></v-divider>

      <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-basket</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Basket</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Menu 1</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Menu 2</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name:'AppSidebar',
    props:{
        drawer:{
            type: Boolean,
            required: true,
            default: () => false,
        }
    },

    data(){
        return{
            value: this.drawer
        }
    },

    methods:{
        toggle(){
            this.$emit('input', this.value);
        }
    }
}
</script>