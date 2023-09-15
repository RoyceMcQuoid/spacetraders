<template>
  <main>
    <div v-if="showAuthOptions">
      <h1 style="text-align: center;">Let's get started!</h1>
      <div class="flex">
        <Login @agentTokenSubmit="getAgent"/>
        <h1>Or</h1>
        <Register @agentRegisterSubmit="registerAgent"/>
      </div>
    </div>
    <div v-if="showRegisterMessage">
      <h1>Nice to meet you Agent {{ this.authStore.agent.symbol }}</h1>
      <h2>This is your Agent Token. You will need it to log in again, so save it somewhere safe.</h2>
      <div class="box break-word-wrap">
        <h2>Token:</h2>
        <h3>{{ this.authStore.agentToken }}</h3>
      </div>
    </div>
    <div v-if="showLoginMessage">
      <h1>Welcome back Agent {{ this.authStore.agent.symbol }}.</h1>
    </div>
    <div v-if="errorMessage">
      <h1 class="error-text">{{ errorMessage }}</h1>
    </div>
  </main>
</template>

<script>
import Login from '@/components/Login.vue'
import {useAuthStore} from "@/stores/auth.store";
import Register from "@/components/Register.vue";

export default {
  name: 'Auth',
  title: 'StarTraders',
  components: {Register, Login},
  methods: {
    async getAgent(token) {
      await this.authStore.getAgent(token);
      if(this.authStore.agentToken){
        this.showAuthOptions = false;
        this.showLoginMessage = true;
      }
    },
    async registerAgent(registerData) {
      await this.authStore.registerAgent(
        registerData.symbol,
        registerData.faction
      );
      if(this.authStore.agentToken){
        this.showAuthOptions = false;
        this.showRegisterMessage = true;
      }
    },
  },
  data() {
    return {
      authStore: useAuthStore(),
      errorMessage: null,
      message: '',
      showAuthOptions: true,
      showRegisterMessage: false,
      showLoginMessage: false,
    };
  },
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