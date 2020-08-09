<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>หน้านี้โหลด {{ counter }} ครั้ง</div>
  <router-view />
</template>

<script>
  import { computed, defineComponent } from 'vue'
  import state from './state'
  import router from './router'

  export default defineComponent({
    name: 'App',
    setup() {
      const counter = computed(() => {
        const current_route = router.currentRoute.value.name?.toString() || ''
        return state.counter[current_route] ? state.counter[current_route] : 0
      })
      return {
        counter
      }
    }
  })
</script>
