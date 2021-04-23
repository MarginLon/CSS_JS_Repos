import Vue from 'vue'
import { Button,NavBar } from 'vant'
[Button, NavBar].forEach(item => {
    Vue.use(item)
})
