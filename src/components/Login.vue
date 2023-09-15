<template>
  <div class="box">
    <h1>Login</h1>
    <label class="login-label" for="date-range-start-date">Token:</label>
    <input
      class="token-input"
      v-model="this.token"/>
    <button
      :disabled="!token"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>

<script>
import {AuthService} from "@/services/authService";
import {useAuthStore} from "@/stores/auth.store";

export default {
  name: 'Login',
  methods: {
    async submit() {
      try {
        const response = await AuthService.getAgent(this.token);
        if(response.error) {
          this.$emit('error', response.error.message);
          return;
        }
        if(response.data) {
          this.authStore.token = this.token;
          this.authStore.agent = response.data.data;
          this.$emit('loggedIn');
          return;
        }
      }
      catch (error) {
        console.log(`Errored on getAgent: `, error);
        this.$emit('error', error.message);
        return;
      }
      this.$emit('error', "Invalid token");
    },
  },
  data() {
    return {
      authStore: useAuthStore(),
      token: '',
    };
  },
}
</script>

<style scoped>
.token-input {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin: 10px;
}

.login-label {
  font-size: larger;
  margin: 10px;
}
</style>