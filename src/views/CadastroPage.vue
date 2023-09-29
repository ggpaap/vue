<template>
    <div>
      <h1>Cadastro</h1>
      <form @submit.prevent="registrar">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="nome" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="senha" required>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        senha: ''
      };
    },
    methods: {
      registrar() {

        console.log('Dados do formulário:', {
          nome: this.nome,
          email: this.email,
          senha: this.senha
        });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>