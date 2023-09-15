<template>
  <div class="box">
    <h1>Register new Agent</h1>
    <div>
      <label class="login-label" for="date-range-start-date">Agent Name: </label>
      <input
        class="token-input"
        v-model="symbol"/>
    </div>
    <div>
      <label class="login-label" for="date-range-start-date">Faction: </label>
      <select @change="changeFaction">
        <option v-for="faction in factions" :key="faction" :value="faction">{{ faction }}</option>
      </select>
    </div>
    <button
      :disabled="!symbol || !faction"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth.store";
import {ref} from "vue";
import {FactionSymbol} from "@/models/Faction";
import {API} from "@/api";

const emit = defineEmits(['registered', 'error']);
const authStore = useAuthStore();
const symbol = ref<string>('');
const faction = ref<string>('');
const factions = ref<string[]>(Object.values(FactionSymbol));

function changeFaction(event: any) {
  faction.value = event.target.value;
}

async function submit() {
  try {
    const response = await API.registerAgent({
      symbol: symbol.value,
      faction: faction.value
    });
    if(response.data.error) {
      emit('error', response.data.error.message);
      return;
    }
    if(response.data) {
      authStore.agentToken = response.data.data.token;
      authStore.agent = response.data.data.agent;
      authStore.contracts = response.data.data.contracts;
      authStore.faction = response.data.data.agent.faction;
      authStore.ships = response.data.data.agent.ships;
      emit('registered');
      return;
    }
  }
  catch (error) {
    console.log(`Errored on registerAgent: `, error);
    emit('error', error);
    return;
  }
  emit('error', "Invalid Registration");
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