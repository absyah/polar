/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BenefitCreate,
  BenefitType,
  BenefitUpdate,
  HTTPValidationError,
  ListResourceBenefitGrant,
  ListResourceUnionBenefitArticlesBenefitAdsBenefitCustomBenefitDiscordBenefitGitHubRepositoryBenefitDownloadables,
  NotPermitted,
  ResourceNotFound,
  ResponseBenefitsCreate,
  ResponseBenefitsGet,
  ResponseBenefitsUpdate,
} from '../models/index';

export interface BenefitsApiCreateRequest {
    body: BenefitCreate;
}

export interface BenefitsApiDeleteRequest {
    id: string;
}

export interface BenefitsApiGetRequest {
    id: string;
}

export interface BenefitsApiListRequest {
    organizationId?: string;
    type?: BenefitType;
    page?: number;
    limit?: number;
}

export interface BenefitsApiListGrantsRequest {
    id: string;
    isGranted?: boolean;
    userId?: string;
    githubUserId?: number;
    page?: number;
    limit?: number;
}

export interface BenefitsApiUpdateRequest {
    id: string;
    body: BenefitUpdate;
}

/**
 * 
 */
export class BenefitsApi extends runtime.BaseAPI {

    /**
     * Create a benefit.
     * Create Benefit
     */
    async createRaw(requestParameters: BenefitsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseBenefitsCreate>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a benefit.
     * Create Benefit
     */
    async create(requestParameters: BenefitsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseBenefitsCreate> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a benefit.  > [!WARNING] > Every grants associated with the benefit will be revoked. > Users will lose access to the benefit.
     * Delete Benefit
     */
    async deleteRaw(requestParameters: BenefitsApiDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling delete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a benefit.  > [!WARNING] > Every grants associated with the benefit will be revoked. > Users will lose access to the benefit.
     * Delete Benefit
     */
    async delete(requestParameters: BenefitsApiDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a benefit by ID.
     * Get Benefit
     */
    async getRaw(requestParameters: BenefitsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseBenefitsGet>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a benefit by ID.
     * Get Benefit
     */
    async get(requestParameters: BenefitsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseBenefitsGet> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List benefits.
     * List Benefits
     */
    async listRaw(requestParameters: BenefitsApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceUnionBenefitArticlesBenefitAdsBenefitCustomBenefitDiscordBenefitGitHubRepositoryBenefitDownloadables>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List benefits.
     * List Benefits
     */
    async list(requestParameters: BenefitsApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceUnionBenefitArticlesBenefitAdsBenefitCustomBenefitDiscordBenefitGitHubRepositoryBenefitDownloadables> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List the individual grants for a benefit.  It\'s especially useful to check if a user has been granted a benefit.
     * List Benefit Grants
     */
    async listGrantsRaw(requestParameters: BenefitsApiListGrantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceBenefitGrant>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling listGrants().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['isGranted'] != null) {
            queryParameters['is_granted'] = requestParameters['isGranted'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['user_id'] = requestParameters['userId'];
        }

        if (requestParameters['githubUserId'] != null) {
            queryParameters['github_user_id'] = requestParameters['githubUserId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/{id}/grants`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List the individual grants for a benefit.  It\'s especially useful to check if a user has been granted a benefit.
     * List Benefit Grants
     */
    async listGrants(requestParameters: BenefitsApiListGrantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceBenefitGrant> {
        const response = await this.listGrantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a benefit.
     * Update Benefit
     */
    async updateRaw(requestParameters: BenefitsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseBenefitsUpdate>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/benefits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a benefit.
     * Update Benefit
     */
    async update(requestParameters: BenefitsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseBenefitsUpdate> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
