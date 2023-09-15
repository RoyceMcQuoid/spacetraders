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
export default {
  name: 'Register',
  methods: {
    async submit() {
      this.$emit('agentRegisterSubmit',
        {symbol: this.symbol, faction: this.faction}
      );
    },
  },
  data() {
    return {
      token: null,
      faction: null,
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