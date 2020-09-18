import ApiRequest from '../helpers/apiRequest';

export const getUsersRequest = () => {
    const request = new ApiRequest('api/users');
    return request.get();
}

export const newUserRequest = (body) => {
    const request = new ApiRequest('api/users');
    return request.post(body);
}