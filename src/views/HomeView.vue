<template>
  <main>
    <h1>Welcome Space Traders!</h1>
    <Login
      v-if="!authStore.agent"
      @agentTokenSubmit="getAgent"
    />
    <p v-if="message"> {{ message }}</p>
  </main>
</template>

<script>
import Login from '@/components/Login.vue'
import {useAuthStore} from "@/stores/auth.store";

export default {
  name: 'Home',
  title: 'StarTraders',
  components: {Login},
  methods: {
    async getAgent(token) {
      await this.authStore.getAgent(token);
      console.log(`agent: `, this.authStore.agent);
    },
  },
  data() {
    return {
      message: '',
      authStore: useAuthStore()
    };
  },
}
</script>