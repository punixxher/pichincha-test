import {ApiResponse, AsyncApiResponse, RequestProps} from "./request.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../presentation/environments/environment";
import {inject, Inject, Injectable} from "@angular/core";
import axios from "axios";


const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'authorId': '170085'
  },
};

export const SendRequest = async <T>(
  props: RequestProps
): Promise<AsyncApiResponse<T>> => {
  let response: any = null
  const axiosRequest = axios.create(httpOptions)
  try {
    if (props.get) {
      const r: any  = await axiosRequest.get(environment.apiUrl + props.get.path);
      response = r?.data || r
    }
    if (props.post) {
      const r: any = await axiosRequest.post(environment.apiUrl + props.post.path, props.post.body);
      response = r?.data || r
    }
    if (props.put) {
      const r: any = await axiosRequest.put(environment.apiUrl + props.put.path, props.put.body);
      response = r?.data || r
    }
  } catch (e) {
    response = e
  }
  return makeResponse<T>(response)
}

export const makeResponse = <T>(response: any): ApiResponse<T> => {
  const result: ApiResponse<T> = {
    data:
      response.data === ''
        ? null
        : response.data != null && typeof response.data != 'undefined'
          ? response.data
          : response
  }
  return result
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


