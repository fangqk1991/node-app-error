export default class AppError extends Error {
  public name: string
  public statusCode: number
  public extras: any

  constructor(message: string, statusCode = 500, extras: any = {}) {
    super(message)
    this.name = 'AppError'
    this.statusCode = statusCode
    this.extras = extras
  }
}
