export default class AppError<T = any> extends Error {
  public name: string
  public statusCode: number
  public extras: T

  constructor(message: string, statusCode = 500, extras: any = {}) {
    super(message)
    this.name = 'AppError'
    this.statusCode = statusCode
    this.extras = extras
  }
}

export interface ErrorModel {
  phrase: string
  message?: string
  statusCode?: number
}

export class AppException extends AppError<ErrorModel> {
  public errorBody: ErrorModel

  constructor(errorBody: ErrorModel, statusCode = 400) {
    super(JSON.stringify(errorBody), statusCode, errorBody)
    this.errorBody = errorBody
    this.name = 'AppException'
    this.statusCode = statusCode
  }

  public static exception(phrase: string, params: Partial<ErrorModel> = {}) {
    const errorBody: ErrorModel = {
      ...params,
      phrase: phrase,
    }
    return new AppException(errorBody, params.statusCode || 400)
  }
}
