const { adminApp } = require('./firebaseService');
const dbRef = adminApp.database().ref();

exports.saveContact = async (contactData) => {
  try {
    return await dbRef.push({
      firstname: contactData.firstname,
      lastname: contactData.lastname,
      phone: contactData.phone,
      address: contactData.address,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
