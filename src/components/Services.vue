<template>
    <div>
        <v-row v-for="(service, index) in services" :key="index">
            <v-col cols="12" md="3" sm="6" v-for="(item, index2) in service" :key="index2">
                <div class="text-center">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer">
                        <img :src="item.image" alt="" style="width: 100%">
                    </a>
                    <a :href="item.link" target="_blank"  class="service-title">
                        <h6 class="subtitle-2 text-center mb-3">{{ item.title }}</h6>
                    </a>
                    <p class="text-center caption">{{ item.description }}</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Services',
    props:{
        services:{
            required: true,
            type: Array
        }
    }
}
</script>
<style scoped>
    .service-title{
        color: #5a5a5a !important;
        text-decoration: none;
    }
</style>