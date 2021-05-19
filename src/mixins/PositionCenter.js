const PositionCenter ={
methods: {
    makeThePositionCenter(){
        let wrapper = document.querySelector('.wrapper');
        let x = window.innerWidth;
        wrapper.scrollTo(x, 0);
    }
},
mounted() {
    this.$nextTick(()=>{
        this.makeThePositionCenter();
    });   
}
}

export default  PositionCenter;