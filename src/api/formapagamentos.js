import axios from "axios";
export default class FormaPagamentosApi {
  async buscarTodosOsFormaPagamentos() {
    const { data } = await axios.get("formapagamentos/");
    return data;
  }
  async buscarFormaPagamentoPorId(id) {
    const { data } = await axios.get(`formapagamentos/${id}/`);
    return data;
  }
  async adicionarFormaPagamento(formapagamento) {
    const { data } = await axios.post("formapagamentos/", formapagamento);
    return data;
  }
  async atualizarFormaPagamento(formapagamento) {
    const { data } = await axios.put(`formapagamentos/${formapagamento.id}/`, formapagamento);
    return data;
  }
  async excluirFormaPagamento(id) {
    const { data } = await axios.delete(`formapagamentos/${id}/`);
    return data;
  }
}
