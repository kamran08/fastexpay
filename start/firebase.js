var admin = require("firebase-admin");

var serviceAccount = require("../app/Controllers/fastexpay-b933a-firebase-adminsdk-sxa7w-ae720059a2.json");
if (!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fastexpay-b933a.firebaseio.com"
});
}
module.exports.admin = FbAdmin