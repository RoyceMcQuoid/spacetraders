<template>
  <div id="app">
    <Header />
    <RouterView id="content"/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

import App from './App.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia';


const app = createApp(App)
app.use(createPinia())
</script>

<style scoped>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  min-width: 825px;
}

#content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  min-height: 100%;
  flex: 1;
  margin: 20px;
}

</style>