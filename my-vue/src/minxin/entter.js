
var closeSelect = {
    mounted(){
        document.addEventListener('click',(event)=>{
            console.log(0)
            this.isShow = false;
        });
    }
}
module.exports = {
    closeSelect,
}