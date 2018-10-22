export class User {

  constructor(
    private email: string,
    private password: string,
    private returnSecureToken:boolean,
    private token: string,
    private refreshToken: string,
    private uid: string
  ) {}

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }

  public setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  public getUid(): string {
    return this.uid;
  }

  public setUid(uid: string) {
    this.uid = uid;
  }
}
