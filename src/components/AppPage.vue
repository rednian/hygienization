<template>
    <section>
        <section 
        ref="background" 
        class="background"
        >
        </section>
        <section 
            ref="foreground" 
            class="foreground"
            :style="foregroundStyle"  
            @mousedown.left="mouseDown" 
            @mouseup.left="mouseUp"
            @mousemove="mouseMove"
            v-resize="onResize"
        ></section>
    </section>
</template>
<script>
export default {
    name: 'AppPage',

    props:['backgroundStyle', 'foregroundStyle'],

    data(){
        return{
            is_mouse_down: false,
            count: 0
        }
    },

    methods:{

        mouseDown(){ this.is_mouse_down = false },

        mouseUp(){ this.is_mouse_down = false },

        mouseMove(e){
            if(this.is_mouse_down){
                console.log(e);
            }
        },

        onResize(){
            
            console.log(`componet resize ${this.count++} times`);
        }
    }
}
</script>

<style scoped>
.foreground{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    /* z-index: 0; */
    overflow: hidden;
}

.background{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* transform: scale(1); */
    pointer-events: none;
    /* z-index: 9; */
    opacity: 1;
}
</style>