<script setup>
import { onMounted, ref } from "vue";
import router from "../router";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
import UsuariosApi from "@/api/usuarios.js";

const Logout = () => {
  authStore.LogOut();
  window.alert("Usuário encerrou sessão com sucesso!");
  router.push("/");
};
const usuariosApi = new UsuariosApi();
const props = defineProps({
  id: {
    required: true,
  },
});
const usuario = ref({
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  telefone: "",
  cpf: "",
  data_nascimento: "",
  foto: "",
});

onMounted(async () => {
  usuario.value = await usuariosApi.buscarUsuarioPorId(props.id);
});

async function salvar() {
  if (usuario.value.id) {
    await usuariosApi.atualizarUsuario(usuario.value);
    window.alert("Usuário atualizado com sucesso!");
    router.push("/");
  } else {
    await usuariosApi.adicionarUsuario(usuario.value);
  }
}


</script>
<template>
  <div class="form-centralizado">
    <div class="form">
      <div class="usuario-imagem">
        <img class="foto" v-if="usuario.foto" :src="usuario.foto.url" alt="" />
          ADMIN<br />

        
      </div>
      <div class="usuario-info">
        <div class="email">
          <label class="label-user-login-cadastro" for="email">Email: </label>
          <input
            class="input-user-login-cadastro"
            id="email"
            type="email"
            v-model="usuario.email"
          />
        </div>
        <div class="first_name">
          <label class="label-user-login-cadastro" for="first_name"
            >Nome:
          </label>
          <input
            class="input-user-login-cadastro"
            id="first_name"
            type="text"
            v-model="usuario.first_name"
          />
        
        </div>
        <div class="telefone">
          <label class="label-user-login-cadastro" for="telefone"
            >Telefone:
          </label>
          <input
            class="input-user-login-cadastro"
            id="telefone"
            type="tel"
            v-model="usuario.telefone"
          />
        </div>
        <div class="endereço">
          <label class="label-user-login-cadastro" for="endereço">Endereço: </label>
          <input
            class="input-user-login-cadastro"
            id="cpf"
            type="text"
            v-model="usuario.cpf"
          />
        </div>
       
      </div>
      <div class="usuario-edit">
       
        <button class="sair" @click="Logout()">Sair</button>
        <button class="salvar" @click="salvar">Salvar Dados</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form {
  background-color: rgba(252, 94, 3, 0.8);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 80px 0;
}
.form-centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
}

.foto {
  height: 100%;
  width: 100%;
  border-radius: 100%;
}
.sem-img {
  line-height: normal;
  display: inline-block;
  vertical-align: middle;
}
.label-user-login-cadastro {
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  width: 300px;
  margin-top: 10px;
}
.input-user-login-cadastro {
  padding: 5px;
  margin-bottom: 10px;
  width: 290px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
}
button .certeza {
  display: none;
}

.email,
.password,
.first_name,
.telefone,
.endereço,
.data_nascimento {
  display: flex;
  flex-direction: row;
}
.carrinho,
.confirmacao,
.salvar,
.sair {
  cursor: pointer;
  padding: 8px;
  margin-top: -15px;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  display: flex;
}

.usuario-info {
  width: 450px;
  background-color: #ffffff;
  padding: 4%;
  border-radius: 10px;
  margin: 10px;
}
.usuario-edit {
  width: 450px;
  height: 50px;
  padding: 4%;
  border-radius: 10px;
  font-weight: bold;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
}
.carrinho:hover,
.salvar:hover,
.sair:hover {
  background-color: #ffffff;
}
</style>