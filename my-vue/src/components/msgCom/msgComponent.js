import msgComponent from './msg';

export default {
    install(Vue){
        const MsgConstructor = Vue.extend(msgComponent);
        Vue.prototype.zfMsg = (config) => {
            const instance = new MsgConstructor();
            instance.$mount(document.createElement('div'));
            instance.type = config.type ? config.type : instance.type;
            instance.msg = config.msg ? config.msg : instance.msg;
            document.querySelector('.zf-msg-box') && document.querySelector('.zf-msg-box').remove();
            document.body.appendChild(instance.$el);
            instance.$el.style.zIndex = (new Date()).valueOf();
            setTimeout(function(){
                instance.$el.remove();
            },config.time ? config.time : 3500);
        }
    }
}