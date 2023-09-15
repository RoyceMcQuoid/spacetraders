<template>
  <div class="box">
    <h1>Login</h1>
    <label class="login-label" for="date-range-start-date">Token:</label>
    <input
      class="login-token-input"
      data-testid="login-token-input"
      v-model="token"/>
    <button
      class="login-submit-button"
      :disabled="!token"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {ref} from "vue";
import {API} from "@/api";

const emit = defineEmits(['loggedIn', 'error']);
const authStore = useAuthStore();
const token = ref<string>('');

async function submit() {
  try {
    const response = await API.getAgent(token.value);
    if(response.data.error) {
      emit('error', response.data.error.message);
      return;
    }
    authStore.agentToken = token.value;
    authStore.agent = response.data.data;
    emit('loggedIn');
    return;
  }
  catch (error) {
    console.log(`Errored on getAgent: `, error);
    emit('error', error);
    return;
  }
}

</script>

<style scoped>
.login-token-input {
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