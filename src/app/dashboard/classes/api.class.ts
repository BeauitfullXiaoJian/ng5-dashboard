export class ApiData {
    constructor(public result: boolean, public message: string, public datas?: any, public id?: number) { }
}
export const HttpError = {
    API_DATA_ERROR: '服务器数据错误，无法解析的数据格式~',
    SERVER_ERROR: '服务器处理异常，无法获取正常的服务器响应',
    NOTFOUND_ERROR: '哎呀，请求地址不存在',
    AUTH_ERROR: '权限校验失败，请提供正确的令牌',
    NETWORK_ERROR: '网络好像出问题了',
};
