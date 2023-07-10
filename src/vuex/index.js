let Vue = null
export const mapState = (keys)=>{
    if(!Array){
    }
}
export default {
    Store:class{
        constructor(options = {}){
            this._options = options
            if(Object.prototype.toString.call(this._options.state).slice(8,-1) != 'Object') return
            this.state = Vue.observable(this._options.state ?? {})
        }
    },
    install(_vue){
        Vue = _vue
        Vue.mixin({
            beforeCreate(){
                if(!this.parent){
                    Vue.prototype.$store = this.$options.store
                }
            }
        })
    }
}