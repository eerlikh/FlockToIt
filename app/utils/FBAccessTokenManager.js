'use strict'
const FBSDK = require('react-native-fbsdk');
const {
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

var React = require("react-native");
var {
    AsyncStorage
} = React;

module.exports = {

  setFacebookData(callback) {
    return AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken
        const responseInfoCallback = (error, result) => {
          if (error) {
            console.log(error)
            alert('Error fetching data: ' + error.toString());
          } else {
            // AsyncStorage.setItem("name", result.name);

            // return new Promise((resolve, reject) => {
            //   resolve("fuckface");
            // });

            callback(result.name);
          }
        }

        const infoRequest = new GraphRequest(
          '/me',
          {
            accessToken: accessToken,
            parameters: {
              fields: {
                string: 'email,name,first_name,middle_name,last_name'
              }
            }
          },
          responseInfoCallback
        );

        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start()
      }
    )
  }

}
