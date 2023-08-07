import {ApiResponse, AsyncApiResponse, RequestProps} from "./request.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../presentation/environments/environment";
import {inject, Inject, Injectable} from "@angular/core";
import axios from "axios";


const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const SendRequest = async <T>(
  props: RequestProps
): Promise<AsyncApiResponse<T>> => {
  let response: any = null
  const axiosRequest = axios.create(httpOptions)
  try {
    if (props.get) {
      response = axiosRequest.get(environment.apiUrl + props.get.path);
    }
    if (props.post) {
      response = axiosRequest.post(environment.apiUrl + props.post.path, props.post.body);
    }
  } catch (e) {
    debugger
    response = e
  }
  return response
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


