import Vue from 'vue'
import app from './components/app.vue'

new Vue({
    render(h) {
        return h(app)
    }
}).$mount('#app')