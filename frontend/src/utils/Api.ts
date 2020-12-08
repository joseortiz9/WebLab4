import axios, {AxiosPromise, AxiosResponse, Method} from 'axios';
import {ApiHost, ApiVersion} from "./config";
import {AuthSession} from "./AuthSession";

interface IApiProps {
    method: Method
    requestUrl: string
    authSession?: AuthSession
    data?: { [key: string]: any }
    headers?: { [key: string]: any }
}

export const Api = ({method, requestUrl, data = {}, headers = {}}: IApiProps)
    : AxiosPromise<AxiosResponse> => {

    return axios({
        method: method,
        url: `${ApiHost}/${ApiVersion}/${requestUrl}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            ...headers,
        },
        data: data
    });
};

export const AuthApi = ({method, requestUrl, authSession, data = {}, headers = {}}: IApiProps)
    : AxiosPromise<AxiosResponse> => {

    headers.Authorization = authSession?.token;
    return Api({method, requestUrl, authSession, data, headers});
};