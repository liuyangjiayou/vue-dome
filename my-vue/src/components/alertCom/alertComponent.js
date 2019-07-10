import ToastComponent from './alert'
const alert = {}
// 注册Toast
alert.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    Vue.prototype.zfAlert = (config) => {
        // 生成一个该子类的实例
        const instance = new ToastConstructor()
        // 将这个实例挂载在我创建的div上
        // 并将此div加入全局挂载点内部
        instance.$mount(document.createElement('div'));
        // 通过Vue的原型注册一个方法
        // 让所有实例共享这个方法
        instance.msg = config.msg ? config.msg : instance.msg;
        instance.title = config.title ? config.title : instance.title;
        instance.subBtn = config.subBtn ? config.subBtn : instance.subBtn;
        instance.closeBtn = config.closeBtn ? config.closeBtn : instance.closeBtn;
        instance.$el.style.zIndex = (new Date()).valueOf();
        document.body.appendChild(instance.$el);
        instance.sucFn = config.sucFn ? function () {
            config.sucFn(instance)
        } : function () {
            instance.isshow = false
        };
        instance.closeFn = config.closeFn ? function () {
            config.closeFn(instance)
        } : function () {
            instance.isshow = false
        }
        return instance
    }
}
export default alert