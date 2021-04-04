import Vue from 'vue'
import App from './App.vue'

export function createApp() {
    const app = new Vue({
        render: h => {
            console.log('app render', App)
            return h(App)
        }
    })

    return { app }
}