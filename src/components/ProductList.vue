<template>
    <section>
        <ul v-if="items.length > 0" class="mt-5">
            <li v-for="(item, index) in items" :key="index" class="mb-3"> {{ item.name  }}</li>
        </ul>
    </section>
</template>

<script>
export default {
    name:'ProductList',
    props:{
        items: {
            type: Array,
            required: true,
            default: ()=> []
        }
    }
}
</script>