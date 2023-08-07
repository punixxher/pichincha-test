export type RequestProps = {
  get?: GetRequest
  post?: PostRequest
  put?: PutRequest
  patch?: any
  delete?: any
}


type PutRequest = {
  headers?: any
  path: string
  body: any
}

type PostRequest = {
  headers?: any
  path: string
  body: any
  offline?: { records: any }
}

type GetRequest = {
  path: string
  query?: any
  offline?: any
  responseType?: string
}

export type ErrorResponse = {
  status: number
  statusText: string
  content?: any
  exception?: any
}

export type ApiResponse<T> = {
  error?: ErrorResponse
  data?: T
}


export type AsyncApiResponse<T> = Promise<ApiResponse<T>>

