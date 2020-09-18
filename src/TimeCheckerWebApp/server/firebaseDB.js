var admin = require("firebase-admin");

var serviceAccount = require("./time-checker-f70f1-firebase-adminsdk-1ohu0-77e2aaa9aa.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://time-checker-f70f1.firebaseio.com"
});

var db = admin.database();

module.exports = {
	db
}