class ApiRequest {
    constructor(url, extraHeaders = {}) {
        this.url = url;
        this.extraHeaders = extraHeaders;
    }

    get(params = null) {
        let config = this._getDefaultConfig();
        if(params !== null) {
            config = { ...config, method: 'GET' };
            this.url = `${this.url}?${new URLSearchParams(params)}`
        }
        return this.request(this.url, config);
    }

    post(body = null) {
        let config = this._getDefaultConfig();
        if (body !== null) {
            config = { ...config, method: 'POST', body: JSON.stringify(body) };
        }
        return this.request(this.url, config);
    }

    request(url, config) {
        return fetch(url, config)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(function (error) {
            error.json().then(error => {
                throw new Error(error);
            });
        });
    }

    _getDefaultConfig() {
        return {
            headers: {
                'Content-Type': 'application/json',
                ...this.extraHeaders,
            }
        }
    }
}

export default ApiRequest