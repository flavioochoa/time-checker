import ApiRequest from '../helpers/apiRequest';

export const signInRequest = (body) => {
    const request = new ApiRequest('api/sign-in');
    return request.post(body);
}