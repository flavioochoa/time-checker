import ApiRequest from '../helpers/apiRequest';

export const setTimeRequest = (type, id) => {
    const request = new ApiRequest('api/time');
    return request.post({type, id});
}

export const getAvailableOptionsRequest = (id) => {
    const request = new ApiRequest(`api/time/availableOptions/${id}`);
    return request.get();
}

export const getWeeklyReportRequest = (id) => {
    const request = new ApiRequest(`api/time/weeklyReport/${id}`);
    return request.get();
}