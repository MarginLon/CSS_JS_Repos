import Vue from 'vue'
import { Button,NavBar, Form, Field} from 'vant'
[Button, NavBar,Form,Field].forEach(item => {
    Vue.use(item)
})
