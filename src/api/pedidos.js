import axios from "axios";
export default class PedidosApi {
  async buscarTodosOsPedidos() {
    const { data } = await axios.get("pedidos/");
    return data;
  }
  async buscarPedidoPorId(id) {
    const { data } = await axios.get(`pedidos/${id}/`);
    return data;
  }
  async adicionarPedido(pedido) {
    const { data } = await axios.post("pedidos/", pedido);
    return data;
  }
  async atualizarPedido(pedido) {
    const { data } = await axios.patch(`pedidos/${pedido.id}/`, pedido);
    return data;
  }
  async excluirPedido(id) {
    const { data } = await axios.delete(`pedidos/${id}/`);
    return data;
  }
}
