
const parseResponse = (result) => {
    if(!result) {
        return [];
    }
    result = Object.keys(result).map(key => {
        return result[key];
    });

    return result ? result : null;
}

module.exports = {
    parseResponse,
}