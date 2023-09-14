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
export default {
  name: 'Login',
  methods: {
    async submit() {
      this.$emit('agentTokenSubmit', this.token);
    },
  },
  data() {
    return {
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