<template>

    <v-expansion-panels  v-model="expansion" multiple class="mt-2">
        <v-expansion-panel class="mb-1" v-for="(item, index) in items" :key="index">
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
    </v-expansion-panels>

</template>
<script>
export default {
    name: 'LocationProduct',
    props:{
        items:{
            required: true
        }
    },
    data(){
        return{
            expansion: []
        }
    }
}
</script>
<style scoped>
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
</style>