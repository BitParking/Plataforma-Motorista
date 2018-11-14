export class Reserva {

  constructor(
    private uidEstacionamento: string,
    private uidMotorista: string,
    private tempoReservado:number,
    private status: string,
    private dataHoraInicio: string,
    private dataHoraFim: string,
  ) {}

  public getUidEstacionamento(): string {
    return this.uidEstacionamento;
  }

  public setUidEstacionamento(uidEstacionamento: string) {
    this.uidEstacionamento = uidEstacionamento;
  }

  public getUidMotorista(): string {
    return this.uidMotorista;
  }

  public setUidMotorista(uidMotorista: string) {
    this.uidMotorista = uidMotorista;
  }

  public getTempoReservado(): number {
    return this.tempoReservado;
  }

  public setTempoReservado(tempoReservado: number) {
    this.tempoReservado = tempoReservado;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string) {
    this.status = status;
  }

  public getDataHoraInicio(): string {
    return this.dataHoraInicio;
  }

  public setDataHoraInicio(dataHoraInicio: string) {
    this.dataHoraInicio = dataHoraInicio;
  }

  public getDataHoraFim(): string {
    return this.dataHoraFim;
  }

  public setDataHoraFim(dataHoraFim: string) {
    this.dataHoraFim = dataHoraFim;
  }

}
