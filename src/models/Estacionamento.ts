export class Estacionamento {

  constructor(
    private getThis: string,
    private nome: string,
    private cnpj:string,
    private telefone: string,
    private endereco: string,
    private bairro: string,
    private cidade: string,
    private estado: string,
    private horario: string,
    private diasAtendimento: string,
    private qtdVagas:number
  ) {}

  public getPath(): string {
    return this.getThis;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public setCnpj(cnpj: string) {
    this.cnpj = cnpj;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public setEndereco(endereco: string) {
    this.endereco = endereco;
  }

  public getBairro(): string {
    return this.bairro;
  }

  public setBairro(bairro: string) {
    this.bairro = bairro;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public setCidade(cidade: string) {
    this.cidade = cidade;
  }

  public getEstado(): string {
    return this.estado;
  }

  public setEstado(estado: string) {
    this.estado = estado;
  }

  public getHorario(): string {
    return this.horario;
  }

  public setHorario(horario: string) {
    this.horario = horario;
  }

  public getDiasAtendimento(): string {
    return this.diasAtendimento;
  }

  public setDiasAtendimento(diasAtendimento: string) {
    this.diasAtendimento = diasAtendimento;
  }

  public getqtdVagas(): number {
    return this.qtdVagas;
  }

  public setqtdVagas(qtdVagas: number) {
    this.qtdVagas = qtdVagas;
  }
}
