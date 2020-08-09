<template>
  <h1>สวัสดีชาวโลก</h1>
  <h2>นี่ Vue นะจะใครละ</h2>
  <h3>
    <span v-if="myinfo.name"> {{ myinfo.name }} </span>
    <span v-if="myinfo.nick"> เรียกสั้นๆ {{ myinfo.nick }}</span>
  </h3>
  <h4 v-if="myinfo.fullname">ในวงการเรียก {{ myinfo.fullname }}</h4>
  <div>
    <label>
      ชื่อ:
      <input type="text" v-model="myinfo.name" title="Name" />
    </label>
    <label>
      ชื่อเล่น:
      <input type="text" v-model="myinfo.nick" title="Nick" />
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import state from '../state'

  export default defineComponent({
    name: 'About',
    setup() {
      const myinfo = computed(() => state.myinfo)
      return {
        myinfo
      }
    }
  })
</script>

<style></style>
