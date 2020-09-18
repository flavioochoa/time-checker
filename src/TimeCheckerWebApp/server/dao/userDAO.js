const { v4: uuidv4 } = require('uuid');
const { BaseDAO } = require('./baseDAO');

class UserDAO extends BaseDAO {
    constructor(path) {
        super(path);
    }

    save(user) {
        user.id = uuidv4();
        var ref = this.db.ref.child(`${this.path}/${user.id}`);
        ref.set(user);
        return user;
    }

    async get() {
        let value = await this._get(`${this.path}`);
        return value;
    }

    async getById(id) {
        let value = await this._get(`${this.path}/${id}`);
        return value;
    }
}

module.exports = {
    UserDAO
}