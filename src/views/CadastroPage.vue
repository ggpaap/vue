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
  /* Centralize o conteúdo verticalmente e horizontalmente */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    margin-bottom: 10px;
    padding: 70px;
  }

  /* Estilize o formulário */
  form {
    width: 300px;
    padding: 50px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  /* Estilize o botão com a cor laranja */
  button[type="submit"] {
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
  

  </style>