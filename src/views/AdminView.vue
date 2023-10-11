<template>
    <div>
      <h2>Cadastro de Admin</h2>
      <form @submit.prevent="salvarDados">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="dados.nome" required>
  
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" v-model="dados.endereco" required>
  
        <label for="produto">Produto:</label>
        <input type="text" id="produto" v-model="dados.produto" required>
  
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dados: {
          nome: "",
          endereco: "",
          produto: "",
        },
      };
    },
    methods: {
      salvarDados() {
  
        console.log(this.dados);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>