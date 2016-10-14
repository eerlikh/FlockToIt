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

  setFacebookData() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken
        const responseInfoCallback = (error, result) => {
          if (error) {
            console.log(error)
            alert('Error fetching data: ' + error.toString());
          } else {

            //store the user's name in AsyncStorage (you should put this in its
            //own method along with other setItem() calls when you eventually
            //need to save more values)
            AsyncStorage.setItem("name", result.name);
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
