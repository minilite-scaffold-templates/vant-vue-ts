/**
 * @description: 请求结果集
 */
export enum ResultEnum {
  SUCCESS = 1,
  ERROR = 0,
  TIMEOUT = 999,
  TYPE = 'success',
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  常用的contentTyp类型
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum PageEnum {
  // 登录
  BASE_LOGIN = '/login',
  BASE_LOGIN_NAME = 'Login',

  // 重定向
  REDIRECT = '/redirect',
  REDIRECT_NAME = 'Redirect',

  // 首页
  BASE_HOME = '/dashboard',
  // 首页跳转默认路由
  BASE_HOME_REDIRECT = '/dashboard/index',

  // 错误
  ERROR_PAGE_NAME = 'ErrorPage',
}
