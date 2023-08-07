import {ApiResponse, AsyncApiResponse, RequestProps} from "./request.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../presentation/environments/environment";
import {inject} from "@angular/core";

export class RequestService {
  protected static httpClient = inject(HttpClient);
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  static sendRequest = async <T>(
    props: RequestProps
  ): Promise<AsyncApiResponse<T>> => {
    let response: any = null
    try {
      if (props.get) {
        response = this.httpClient.get(environment.apiUrl + props.get.path, {headers: this.httpOptions.headers});
      }
      if (props.post) {
        response = this.httpClient.post(environment.apiUrl + props.post.path, props.post.body, {headers: this.httpOptions.headers});
      }
    } catch (e) {
      response = e
    }
    return response
  }
}

export function makeError(
  code: number,
  text: string,
  data: any,
  exception?: any
): ApiResponse<any> {
  return {
    error: {
      status: code,
      statusText: text,
      content: data,
      exception
    }

  }
}


