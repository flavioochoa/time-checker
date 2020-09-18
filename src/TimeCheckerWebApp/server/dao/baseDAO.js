var firebaseAdmin = require('../firebaseDB');
const { db } = firebaseAdmin;

class BaseDAO {
    constructor(path) {
        this.db = db.ref('/');
        this.path = path;
    }

    async _get(path) {
        const eventref = this.db.ref.child(path);
        const snapshot = await eventref.once('value');
        const value = snapshot.val();
        return value;
    }
}

module.exports = {
    BaseDAO
}