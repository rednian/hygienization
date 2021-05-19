<template>
    <div class="pin" :style="`top:${item.x}%;left:${item.y}%`">
        <div class="post"></div>
        <div class="panel">
            <v-btn :to="path"  small>{{ item.name }}</v-btn>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Pin',
    props:['item'],
    data(){
        return{
            url: this.$route
        }
    },

    computed:{
        path(){
            return `${this.url.fullPath}/${this.item.link}`
        }
    }
}
</script>

<style scoped>

    .panel{
      white-space: nowrap;
      display: inline-block;
      position: absolute;
      /* background: #fff; */
      bottom: calc(45px - 8px);
      transform: translateX(-45%);
      /* padding: 3px; */
      /* padding-left: 10px; */
      /* padding-right: 10px; */
      cursor: pointer;
      /* font-weight: 600; */
      /* animation: pin_fade_in-data-v-efc0bcde .17s; */
      z-index: 1;
      /* box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%); */
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      /* border: 1px solid #FFF; */
  }

  .pin{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
  }

  .post{
    width: 0px;
    height: 30px;
    background: transparent;
    border-left: 2px dashed rgba(255,255,255,0.6);
    position: absolute;
    top: -30px;
    left: 3px;
    border-radius: 14px;
    cursor: pointer;
    /* animation: pin_fade_in-data-v-efc0bcde .17s; */
    z-index: 1;
  }
</style>