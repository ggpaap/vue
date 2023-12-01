<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Email:</label>
        <input type="text" id="username" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Entrar</button>
      <button @click="$router.push('/cadastro')">Cadastrar</button>
    </form>
    <p class="error">{{ errorMessage }}</p>

  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();


const email = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  try {
    const response = await axios.post("https://ourfood-backend.1.us-1.fl0.io/api/token/", {
      email: email.value,
      password: password.value,
    });
    const token = response.data.access;
    authStore.setToken(token);
    router.push("/");

  } catch (error) {
    errorMessage.value = "Erro ao fazer login";
  }
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;


}

button {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #FF842B;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
