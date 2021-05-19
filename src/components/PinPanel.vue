<template>

    <div ref="pin-panel" >
        <transition-group
        :appear="isDone"
        enter-active-class="animate__animated animate__bounceInDown animate__fast" 
        tag="div"
        >
            <template v-for="(item, index) in items">
                <div :key="index" class="pin" :style="`top:${item.y}%;left:${item.x}%`" :id="item.slug">
                    <div class="post" ></div>
                    <div class="panel" :style="{zIndex: 999}">
                        <v-btn elevation="8" @click.prevent.stop="$emit('selectedLocation', item, $event)" small>{{ item.name }}</v-btn>
                    </div>
                </div>
            </template>

        </transition-group>
    </div>

</template>
<script>
export default {
    
    name:'PinPanel',

    emit: ['selectedLocation'],

    props:{
        items: {
            type: Array,
            required: true,
            default: ()=>[],
        },
        image:{
            required: true
        }
    },


    watch:{
        $route(){
            this.calculatedPosition();
        }
    },

    computed:{
        size(){
            return this.$store.getters['Page/size'];
        },

        position(){
            return this.$store.getters['location/position'];
        },

        isDone(){
            return this.$store.getters['Page/is_animation_done'];
        }
    },

    methods:{
        calculatedPosition(item){
            //the background image should not resize to the 

            let x = window.innerWidth * (item.x/100);
            let y = window.innerHeight * (item.y/100);

            let image = new Image();

                image.src = this.image;

            let x_point = x/image.width;
            let y_point = y/image.height;

            console.log(x_point, y_point);

            return{
                top: x_point * innerWidth+'px',
                left: y_point * innerHeight+'px',
            }

        }

    },

    mounted(){
       

    }
}
</script>
<style scoped>
.theme--light.v-btn.v-btn--has-bg {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
}

.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
}


.panel{
      white-space: nowrap;
      display: inline-block;
      position: absolute;
      bottom: calc(45px - 8px);
      transform: translateX(-45%);
      cursor: pointer;
      z-index: 1;
}

.pin{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background: #fff; */
    position: absolute;
}

.post{
    position: absolute;
     top: -38px;
    left: -10px;
     border-left: 15px solid transparent;
     border-right: 15px solid transparent;
     border-top: 20px solid rgba(0, 0, 0, 0.6);
    /* width: 0px;
    height: 50px;
    background: transparent;
    border-left: 2px dashed rgba(255,255,255,0.6);
    position: absolute;
    top: -50px;
    left: 3px;
    border-radius: 14px;
    cursor: pointer;
    z-index: 1;

  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
}
</style>
