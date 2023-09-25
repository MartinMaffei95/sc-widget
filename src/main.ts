import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdShowchartSharp, FaLongArrowAltUp } from 'oh-vue-icons/icons'

addIcons(MdShowchartSharp, FaLongArrowAltUp)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
