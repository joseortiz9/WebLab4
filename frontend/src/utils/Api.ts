import axios, {AxiosPromise, AxiosResponse, Method} from 'axios';
import {ApiHost, ApiVersion} from "./config";
import {AuthSession} from "../models/AuthSession";

interface IApiProps {
    method: Method
    requestUrl: string
    authSession?: AuthSession | null
    data?: { [key: string]: any }
    headers?: { [key: string]: any }
}

export const api = (apiProps: IApiProps)
    : AxiosPromise => {

    const {method, requestUrl, headers, data} = apiProps;
    return axios({
        method: method,
        url: `${ApiHost}/${ApiVersion}/${requestUrl}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            ...headers,
        },
        data: data
    });
};

export const authApi = ({method, requestUrl, authSession, data = {}, headers = {}}: IApiProps)
    : AxiosPromise => {

    headers.Authorization = authSession?.token;
    return api({method, requestUrl, authSession, data, headers});
};