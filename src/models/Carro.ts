export class Carro {

  constructor(
    private placa: string,
    private cor: string,
    private modelo:string
  ) {}

  public getPlaca(): string {
    return this.placa;
  }

  public setPlaca(placa: string) {
    this.placa = placa;
  }

  public getCor(): string {
    return this.cor;
  }

  public setCor(cor: string) {
    this.cor = cor;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string) {
    this.modelo = modelo;
  }
}
