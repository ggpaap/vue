import axios from "axios";
export default class PagamentosApi {
  async buscarTodosOsPagamentos() {
    const { data } = await axios.get("pagamentos/");
    return data;
  }
  async buscarPagamentoPorId(id) {
    const { data } = await axios.get(`pagamentos/${id}/`);
    return data;
  }
  async adicionarPagamento(pagamento) {
    const { data } = await axios.post("pagamentos/", pagamento);
    return data;
  }
  async atualizarPagamento(pagamento) {
    const { data } = await axios.put(`pagamentos/${pagamento.id}/`, pagamento);
    return data;
  }
  async excluirPagamento(id) {
    const { data } = await axios.delete(`pagamentos/${id}/`);
    return data;
  }
}
