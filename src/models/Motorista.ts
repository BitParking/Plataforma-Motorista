import { Carro } from "./Carro";

export class Motorista {

  constructor(
    private uid:string,
    private nome: string,
    private cnh: number,
    private cpf:string,
    private telefone: string,
    private email: string,
    private carros: Array<Carro>
  ) {}

  public getUid():string{
    return this.uid;
  }

  public setUid(uid:string){
    this.uid = uid;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public getCnh(): number {
    return this.cnh;
  }

  public setCnh(cnh: number) {
    this.cnh = cnh;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string) {
    this.cpf = cpf;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getCarros(): Array<Carro> {
    return this.carros;
  }

  public setCarros(carros: Array<Carro>) {
    this.carros = carros;
  }
}
