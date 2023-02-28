/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_users_auth_jwt_login } from '../models/Body_users_auth_jwt_login';
import type { UserRead } from '../models/UserRead';
import type { UserUpdate } from '../models/UserUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Users:Current User
   * @returns UserRead Successful Response
   * @throws ApiError
   */
  public getAuthenticated(): CancelablePromise<UserRead> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/users/me',
      errors: {
        401: `Missing token or inactive user.`,
      },
    });
  }

  /**
   * Users:Patch Current User
   * @returns UserRead Successful Response
   * @throws ApiError
   */
  public updateAuthenticated({
    requestBody,
  }: {
    requestBody: UserUpdate,
  }): CancelablePromise<UserRead> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/users/me',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Missing token or inactive user.`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Users:User
   * @returns UserRead Successful Response
   * @throws ApiError
   */
  public get({
    id,
  }: {
    id: any,
  }): CancelablePromise<UserRead> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v1/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Missing token or inactive user.`,
        403: `Not a superuser.`,
        404: `The user does not exist.`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Users:Delete User
   * @returns void
   * @throws ApiError
   */
  public delete({
    id,
  }: {
    id: any,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/v1/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Missing token or inactive user.`,
        403: `Not a superuser.`,
        404: `The user does not exist.`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Users:Patch User
   * @returns UserRead Successful Response
   * @throws ApiError
   */
  public update({
    id,
    requestBody,
  }: {
    id: any,
    requestBody: UserUpdate,
  }): CancelablePromise<UserRead> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/v1/users/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Missing token or inactive user.`,
        403: `Not a superuser.`,
        404: `The user does not exist.`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Auth:Jwt.Login
   * @returns any Successful Response
   * @throws ApiError
   */
  public jwtLogin({
    formData,
  }: {
    formData: Body_users_auth_jwt_login,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/users/login',
      formData: formData,
      mediaType: 'application/x-www-form-urlencoded',
      errors: {
        400: `Bad Request`,
        422: `Validation Error`,
      },
    });
  }

  /**
   * Auth:Jwt.Logout
   * @returns any Successful Response
   * @throws ApiError
   */
  public logout(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v1/users/logout',
      errors: {
        401: `Missing token or inactive user.`,
      },
    });
  }

}
