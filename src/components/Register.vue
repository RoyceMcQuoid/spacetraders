<template>
  <div class="box">
    <h1>Register new Agent</h1>
    <div>
      <label class="login-label" for="date-range-start-date">Agent Name: </label>
      <input
        class="token-input"
        v-model="this.symbol"/>
    </div>
    <div>
      <label class="login-label" for="date-range-start-date">Faction: </label>
      <input
        class="token-input"
        v-model="this.faction"/>
    </div>
    <button
      :disabled="!token || !faction"
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
  name: 'Register',
  methods: {
    async submit() {
      try {
        const response = await AuthService.registerAgent(this.symbol, this.faction);
        if(response.error) {
          this.$emit('error', response.error.message);
          return;
        }
        if(response.data) {
          this.authStore.saveAgentRegistration(response.data.data);
          this.$emit('registered');
          return;
        }
      }
      catch (error) {
        console.log(`Errored on registerAgent: `, error);
        this.$emit('error', error.message);
        return;
      }
      this.$emit('error', "Invalid Registration");
    },
  },
  data() {
    return {
      authStore: useAuthStore(),
      faction: null,
      symbol: null,
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