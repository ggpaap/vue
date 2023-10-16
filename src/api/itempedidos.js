import axios from "axios";
export default class ItemPedidosApi {
  async buscarTodosOsItemPedidos() {
    const { data } = await axios.get("itempedidos/");
    return data;
  }
  async buscarItemPedidoPorId(id) {
    const { data } = await axios.get(`itempedidos/${id}/`);
    return data;
  }
  async adicionarItemPedido(itempedido) {
    const { data } = await axios.post("itempedidos/", itempedido);
    return data;
  }
  async atualizarItemPedido(itempedido) {
    const { data } = await axios.patch(`itempedidos/${itempedido.id}/`, itempedido);
    return data;
  }
  async excluirItemPedido(id) {
    const { data } = await axios.delete(`itempedidos/${id}/`);
    return data;
  }
}
