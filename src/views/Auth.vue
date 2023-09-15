<template>
  <main>
    <div v-if="showAuthOptions">
      <h1 style="text-align: center;">Let's get started!</h1>
      <div class="flex">
        <Login
          @loggedIn="loggedIn"
          @error="handleError"
        />
        <h1>Or</h1>
        <Register
          @registered="registered"
          @error="handleError"
        />
      </div>
    </div>
    <div v-if="showRegisterMessage">
      <h1>Nice to meet you Agent {{ agentName }}</h1>
      <h2>This is your Agent Token. You will need it to log in again, so save it somewhere safe.</h2>
      <div class="box break-word-wrap">
        <h2>Token:</h2>
        <h3>{{ authStore.agentToken }}</h3>
      </div>
    </div>
    <div v-if="showLoginMessage">
      <h1>Welcome back Agent {{ agentName }}.</h1>
    </div>
    <div v-if="showRegisterMessage || showLoginMessage" >
      <button
        @click="startButtonClicked"
      >
        Let's Go!
      </button>
    </div>
    <div v-if="errorMessage">
      <h1 class="error-text">{{ errorMessage }}</h1>
    </div>
  </main>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import Login from '@/components/Login.vue'
import Register from "@/components/Register.vue";
import {ref} from "vue";
import { computed } from 'vue'
import router from "@/router";


const authStore = useAuthStore();
const agentName = computed<string | null>(() => authStore.agent.symbol);
const errorMessage = ref<string | null>(null);
const showAuthOptions = ref<boolean>(true);
const showRegisterMessage = ref<boolean>(false);
const showLoginMessage = ref<boolean>(false);

function handleError(error: string) {
  errorMessage.value = error;
}

function loggedIn() {
  errorMessage.value = null;
  showAuthOptions.value = false;
  showLoginMessage.value = true;
}

function registered() {
  errorMessage.value = null;
  showAuthOptions.value = false;
  showRegisterMessage.value = true;
}

function startButtonClicked() {
  router.push({name: 'home'});
}
</script>

<style>
.flex{
  display: flex;
  align-items: center;
}

.break-word-wrap{
  overflow-wrap: break-word;
}
</style>