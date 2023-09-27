

<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Usuário:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: ""
      };
    },
    methods: {
      login() {
        // Aqui você pode adicionar a lógica de autenticação
        if (this.username === "seu_usuario" && this.password === "sua_senha") {
          // Lógica de autenticação bem-sucedida, redirecione ou faça o que for necessário
          // Por exemplo, redirecionar para outra página
          this.$router.push("/dashboard");
        } else {
          // Autenticação falhou, exiba uma mensagem de erro
          this.error = "Usuário ou senha incorretos.";
        }
      }
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
  