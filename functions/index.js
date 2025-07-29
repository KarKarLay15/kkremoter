const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.setUserRole = functions.auth.user().onCreate(async (user) => {
  return admin.database().ref(`/roles/${user.uid}`).set("user");
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  console.log(`Welcome email triggered for: ${user.email}`);
  return null;
});