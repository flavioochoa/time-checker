const { parseResponse } = require('../helpers/common');
const { UserDAO } = require('../dao/userDAO');;

class UserService {
    constructor() {
        this.userDAO = new UserDAO('users');
    }

    set(user) {
        let newUser = this.userDAO.save(user);
        return newUser;
    }

    async get() {
        let result = await this.userDAO.get();
        return parseResponse(result);
    }

    async getById(id) {
        let result = await this.userDAO.getById(id);
        return result ? result : null;
    }

    async getByUserPin(user, pin) {
        let allItems = await this.get();
        let result = allItems.find(item => item.user === user && item.pin == pin);
        return result ? result : null;
    }
}

module.exports = {
    userService : new UserService()
}