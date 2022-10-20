// import React, { Component } from "react";
// import key from '../../app.json';
// import { Linking, Platform, StyleSheet } from "react-native";

// let BASE_URL = "https://api.loginradius.com";

// class LoginRadiusSDK extends Component {
//   /**
//    * The photo API is used to get photo data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param A valid albumId, it return album photos
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getPhotos(token, albumId, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/photo?albumid=" + albumId + "&access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Check In API is used to get check-ins data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getCheckins(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/checkin?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Albums API is used to get the Albums data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getAlbums(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/album?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Audio API is used to get audio files data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getAudios(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/audio?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Mention API is used to get mention data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getMentions(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/mention?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Following API is used to get the followers’ information from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getFollowings(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/following?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Event API is used to get the event data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getEvents(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/event?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Post API is used to get posted messages from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getPosts(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/post?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Company API is used to get the followed company’s data in the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getCompanies(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/company?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Group API is used to get group data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getGroups(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/group?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Status API is used to get the status messages from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getStatus(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/status?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Contact API is used to get contacts/friends/connections data from the user’s social account. The data will normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param cursor value for getting next records set
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getContacts(token, cursor, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/contact?nextcursor=" + cursor + "&access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Video API is used to get videos data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getVideos(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/video?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Likes API is used to get likes data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getLikes(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/like?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Page API is used to get the page data from the user’s social account.
//    *
//    * @function
//    * @public
//    * @param Name of the page you want to retrieve info from
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getPage(token, pagename, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/page?pagename=" + pagename + "&access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The User Profile API is used to get the profile data from the user’s social account. The data will be normalized into LoginRadius' data format.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getSocialProfile(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/userprofile?access_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * POST Message API (POST Method)
//    *
//    * @function
//    * @public
//    * @param Recipient's social provider's id
//    * @param The subject field is for the subject
//    * @param The contained message
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static postMessage(to, subject, message, token, callback) {
//     RestRequest.httpPostRequest(
//       "/api/v2/message?to=" +
//         to +
//         "&subject=" +
//         subject +
//         "&message=" +
//         message +
//         "&access_token=" +
//         token,
//       {},
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Status Posting (POST Method)
//    *
//    * @function
//    * @public
//    * @param The resetpasswordurl you would like to the user to be presented when receiving the email.
//    * @param Title of Linked URL
//    * @param URL to be included when clicking on the share.
//    * @param Imageurl to be displayed in the share(Requires URL).
//    * @param Main body of the Status update. [REQUIRED]
//    * @param Message displayed below the description(Requires URL, Under 70 Characters).
//    * @param Description of the displayed URL and Image(Requires URL)
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static postStatus(
//     title,
//     url,
//     status,
//     imageurl,
//     caption,
//     description,
//     token,
//     callback
//   ) {
//     RestRequest.httpPostRequest(
//       "/api/v2/status?title=" +
//         title +
//         "&url=" +
//         url +
//         "&imageurl=" +
//         imageurl +
//         "&status=" +
//         status +
//         "&caption=" +
//         caption +
//         "&description=" +
//         description +
//         "&access_token=" +
//         token,
//       {},
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Check Email Availability API is used to check the email exists or not on your site.
//    *
//    * @function
//    * @public
//    * @param the email of the user you want to retrieve info from
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static checkEmailAvailability(email, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/email?email=" + email + "&apikey=" + key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Check The Availability of a UserName
//    *
//    * @function
//    * @public
//    * @param Username of the user you want to retrieve info from
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static checkUserNameAvailability(username, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/username?username=" +
//         username +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Check The Availability of a PhoneID
//    *
//    * @function
//    * @public
//    * @param PhoneID of the user you want to retrieve info from
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static checkPhoneNumberAvailability(phone, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/phone?phone=" + phone + "&apikey=" + key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Send One time Passcode
//    *
//    * @function
//    * @public
//    * @param PhoneID of the user you want to retrieve info from
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static phoneSendOtp(phone, smstemplate, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/login/otp?phone=" +
//         phone +
//         "&apikey=" +
//         key.apiKey +
//         "&smstemplate=" +
//         smstemplate,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Read all Profiles by Token API is used to Read all of the profiles provided by a user.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static readAllProfilesByToken(token, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/account?access_token=" +
//         token +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * This API is called just after account linking API and it prevents the raas profile of the second account from getting created.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static socialIdentity(token, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/socialidentity?access_token=" +
//         token +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * this API is used to validate the access token.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static validateAccessToken(token, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/access_token/validate?access_token=" +
//         token +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Verify Email API Call consumes the validation token from the email sent to the user.
//    *
//    * @function
//    * @public
//    * @param verificationtoken of the email sent to the user
//    * @param url received in the email sent to the user
//    * @param optional welcome email template
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static verifyEmail(verificationtoken, welcomeemailtemplate, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/email?verificationtoken=" +
//         verificationtoken +
//         "&welcomeemailtemplate=" +
//         welcomeemailtemplate +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Access Token Invalidate API Call invalidates a current Access Token.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static accessTokenInvalidate(token, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/access_token/invalidate?access_token=" +
//         token +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Get Security Questions By Access Token
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getSecurityQuestionsByAccessToken(token, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/securityquestion/accesstoken?access_token=" +
//         token +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Get Security Questions By Email
//    *
//    * @function
//    * @public
//    * @param email of the user you want to retrieve security questions for.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getSecurityQuestionsByEmail(email, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/securityquestion/email?email=" +
//         email +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Get Security Questions By User Name
//    *
//    * @function
//    * @public
//    * @param UserName of the user you want to retrieve security questions for.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getSecurityQuestionsByUserName(username, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/securityquestion/username?username=" +
//         username +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Get Security Questions By Phone
//    *
//    * @function
//    * @public
//    * @param phone of the user you want to retrieve security questions for.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getSecurityQuestionsByPhone(phone, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/securityquestion/phone?phone=" +
//         phone +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Custom Object by Token - Retrieves the Custom Object Data for the account.
//    *
//    * @function
//    * @public
//    * @param objectname you would like to target.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getCustomObjectByToken(token, objectname, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/customobject?access_token=" +
//         token +
//         "&objectname=" +
//         objectname +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Custom Object by ObjectRecordId and Token
//    *
//    * @function
//    * @public
//    * @param objectname you would like to target.
//    * @param objectrecordid you would like to target.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static getCustomObjectByRecordIdAndToken(
//     token,
//     objectname,
//     objectrecordid,
//     callback
//   ) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/customobject/" +
//         objectrecordid +
//         "?access_token=" +
//         token +
//         "&objectname=" +
//         objectname +
//         "&apikey=" +
//         key.apiKey,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Google JWT API Call is used to retrieve an access_token via Google's idToken.
//    *
//    * @function
//    * @public
//    * @param The idToken provided by Google's API.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static GoogleJWT(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/access_token/googlejwt?key=" + key.apiKey + "&id_token=" + token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Facebook Native Login API Call is used to retrieve an access_token via Facebook's accessToken.
//    *
//    * @function
//    * @public
//    * @param The facebook accessToken provided by facebook's API.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static facebookNativeLogin(token, callback) {
//     RestRequest.httpGetRequest(
//       "/api/v2/access_token/facebook?key=" +
//         key.apiKey +
//         "&fb_access_token=" +
//         token,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * This API is used to delete an account by passing it a delete token.
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static deleteAccount(deletetoken, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/account/delete?apikey=" +
//         key.apiKey +
//         "&deletetoken=" +
//         deletetoken,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * This API is used to verify the email of user..
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static verifyEmailByOTP(otp, email, url, welcomeemailtemplate, callback) {
//     RestRequest.httpGetRequest(
//       "/identity/v2/auth/email?apikey=" +
//         key.apiKey +
//         "&otp=" +
//         otp +
//         "&email=" +
//         email +
//         "&url=" +
//         url +
//         "&welcomeemailtemplate" +
//         welcomeemailtemplate,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Add additional email to user profile
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The verification url to be sent to the user.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static addEmail(token, emailtemplate, payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/email?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Send the Forgot Password Email
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The reset password url you would like to the user to be presented when receiving the email.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static forgotPasswordByEmail(email, emailtemplate, callback) {
//     let payload = {
//       email: email,
//     };

//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/password?apikey=" +
//         key.apiKey +
//         "&resetpasswordurl=" +
//         key.resetPasswordUrl +
//         "&emailtemplate=" +
//         emailtemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Send the Forgot Password Phone
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The reset password url you would like to the user to be presented when receiving the email.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static forgotPasswordByPhone(phone, smstemplate, callback) {
//     let payload = {
//       phone: phone,
//     };

//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/password/otp?apikey=" +
//         key.apiKey +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Reset Password by OTP
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The reset password url you would like to the user to be presented when receiving the email.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static restPasswordByOtp(payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/password/otp?apikey=" + key.apiKey,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Register User by Email
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The verification url you would like to the user to be presented when receiving the email.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static userRegistrationByEmail(emailtemplate, payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/register?apikey=" +
//         key.apiKey +
//         "&sott=" +
//         key.sott +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Register User by Phone
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The verification url you would like to the user to be presented when receiving the email.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static userRegistrationByPhone(smstemplate, payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/register?apikey=" +
//         key.apiKey +
//         "&sott=" +
//         key.sott +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Login By Email API is used to login a user via their Email (GET) METHOD
//    *
//    * @function
//    * @public
//    * @param Email of the user you want to retrieve info from
//    * @param Password of the user you want to retrieve info from
//    * @param verificationurl to be used.
//    * @param emailtemplate to be used.
//    * @param g-recaptcha-response when required.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static loginByEmail(emailtemplate, grecaptcha_response, payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/login?apikey=" +
//         key.apiKey +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate +
//         "&g-recaptcha-response=" +
//         grecaptcha_response,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Login By UserName API is used to login a user via their Email (GET) METHOD
//    *
//    * @function
//    * @public
//    * @param UserName of the user you want to retrieve info from
//    * @param Password of the user you want to retrieve info from
//    * @param verificationurl to be used.
//    * @param emailtemplate to be used.
//    * @param g-recaptcha-response when required.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static loginByUserName(
//     emailtemplate,
//     grecaptcha_response,
//     payload,
//     callback
//   ) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/login?apikey=" +
//         key.apiKey +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate +
//         "&g-recaptcha-response=" +
//         grecaptcha_response,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Login By Phone API is used to login a user via their Email (GET) METHOD
//    *
//    * @function
//    * @public
//    * @param Phone of the user you want to retrieve info from
//    * @param Password of the user you want to retrieve info from
//    * @param verificationurl to be used.
//    * @param smstemplate to be used.
//    * @param g-recaptcha-response when required.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static loginByPhone(smstemplate, grecaptcha_response, payload, callback) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/login?apikey=" +
//         key.apiKey +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&smstemplate=" +
//         smstemplate +
//         "&g-recaptcha-response=" +
//         grecaptcha_response,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Create Custom Object By Token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The objectname you would like to target.
//    * @param The email template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static createCustomObjectByToken(
//     token,
//     objectname,
//     emailtemplate,
//     payload,
//     callback
//   ) {
//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/customobject?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&objectname=" +
//         objectname +
//         "&emailtemplate=" +
//         emailtemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Resend Verification OTP
//    *
//    * @function
//    * @public
//    * @param JavaScript phone Object containing the POST body parameters
//    * @param The smas template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static phoneResndOtp(phone, smstemplate, callback) {
//     let payload = {
//       phone: phone,
//     };

//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/phone/otp?apikey=" +
//         key.apiKey +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Resend Verification OTP By Phone
//    *
//    * @function
//    * @public
//    * @param JavaScript phone Object containing the POST body parameters
//    * @param The smas template to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static phoneResndOtpByToken(access_token, phone, smstemplate, callback) {
//     let payload = {
//       phone: phone,
//     };

//     RestRequest.httpPostRequest(
//       "/identity/v2/auth/phone/otp?apikey=" +
//         key.apiKey +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Verification by OTP
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static phoneVerificationByOtp(phone, otp, smstemplate, callback) {
//     let payload = {
//       phone: phone,
//     };

//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/phone/otp?apikey=" +
//         key.apiKey +
//         "&otp=" +
//         otp +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Verification by OTP By Token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static phoneVerificationOtpByToken(token, otp, smstemplate, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/phone/otp?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&otp=" +
//         otp +
//         "&smstemplate=" +
//         smstemplate,
//       {},
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Change Password
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static changePassword(token, payload, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/password?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Link Social Identities
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static linkSocialIdentities(token, candidatetoken, callback) {
//     let payload = {
//       candidatetoken: candidatetoken,
//     };

//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/socialidentity?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Resend Email Verification
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The verification url you would like to the user to be presented when receiving the email.
//    * @param The emailtemplate to be used.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static resendEmailVerification(eamil, emailtemplate, callback) {
//     let payload = {
//       email: eamil,
//     };
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/register?apikey=" +
//         key.apiKey +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Reset Password by Reset Token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static resetPasswordByResetToken(payload, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/password?apikey=" + key.apiKey,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Reset Password by otp
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static resetPasswordByOtp(payload, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/password?apikey=" + key.apiKey,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Reset Password by Security Question
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static resetPasswordBySecurityQuestion(payload, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/password/securityanswer?apikey=" + key.apiKey,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Set or Change UserName
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static setUserName(token, username, callback) {
//     let payload = {
//       username: username,
//     };

//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/username?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Update Profile by Token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The verification url you would like to the user to be presented when receiving the email.
//    * @param The emailtemplate to be used
//    * @param The smstemplate to be used
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static updateProfileByToken(
//     token,
//     emailtemplate,
//     smstemplate,
//     payload,
//     callback
//   ) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/account?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&verificationurl=" +
//         key.verificationUrl +
//         "&emailtemplate=" +
//         emailtemplate +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Update Security Question by Access token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static updateSecurityQuestionByToken(token, payload, callback) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/account?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Phone Number Update
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static updatePhoneNumber(token, phone, smstemplate, callback) {
//     let payload = {
//       phone: phone,
//     };
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/phone?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&smstemplate=" +
//         smstemplate,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Update Custom Object By Access Token
//    *
//    * @function
//    * @public
//    * @param JavaScript Object containing the POST body parameters
//    * @param The objectname you would like to target.
//    * @param The updatetype to be used
//    * @param The objectrecordid you would like to target.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static updateCustomObjectByObjectRecordIdAndToken(
//     token,
//     objectname,
//     objectrecordid,
//     updatetype,
//     payload,
//     callback
//   ) {
//     RestRequest.httpPutRequest(
//       "/identity/v2/auth/customobject/" +
//         objectrecordid +
//         "?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&objectname=" +
//         objectname +
//         "&updatetype=" +
//         updatetype,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * The Delete Account API call deletes the user profile based on the delete token provided to the user.
//    *
//    * @function
//    * @public
//    * @param deletetoken received in the email
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static deleteAccountWithEmailConfirmation(token, callback) {
//     RestRequest.httpDeleteRequest(
//       "/identity/v2/auth/account?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       {},
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * This API is used to remove additional emails from a user's account..
//    *
//    * @function
//    * @public
//    * @param deletetoken received in the email
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static removeEmail(email, token, callback) {
//     let payload = { email: email };
//     RestRequest.httpDeleteRequest(
//       "/identity/v2/auth/email?apikey=" + key.apiKey + "&access_token=" + token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database.
//    *
//    * @function
//    * @public
//    * @param deletetoken received in the email
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static unlinkSocialIdentities(token, provider, providerid, callback) {
//     let payload = { provider: provider, providerid: providerid };
//     RestRequest.httpDeleteRequest(
//       "/identity/v2/auth/socialidentity?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token,
//       payload,
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Custom Object Delete by Record Id And Token
//    *
//    * @function
//    * @public
//    * @param The objectname you would like to target.
//    * @param The objectrecordid you would like to target.
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static deleteCustomObjectByRecordIdAndToken(
//     token,
//     objectname,
//     objectrecordid,
//     callback
//   ) {
//     RestRequest.httpDeleteRequest(
//       "/identity/v2/auth/customobject/" +
//         objectrecordid +
//         "?apikey=" +
//         key.apiKey +
//         "&access_token=" +
//         token +
//         "&objectname=" +
//         objectname,
//       {},
//       function (handle) {
//         callback(handle);
//       }
//     );
//   }

//   /**
//    * Social browser  login
//    *
//    * @function
//    * @public
//    * @param handle {CallbackHandler} callback handler, invoke after getting Responce from LoginRadius
//    */

//   static socialLogin(action, callback) {
//     var platform = 0;
//     var url = "";
//     const instructions = Platform.select({
//       ios: (platform = 1),
//       android: (platform = 2),
//     });
//     if (platform == 1) {
//       var url =
//         "https://" +
//         key.appName +
//         ".hub.loginradius.com/RequestHandlor.aspx?same_window=1&is_access_token=1&apikey=" +
//         key.apiKey +
//         "&callbacktype=hash&provider=" +
//         action +
//         "&callback=" +
//         key.appName +
//         "://";
//     } else if (platform == 2) {
//       url =
//         "https://" +
//         key.appName +
//         ".hub.loginradius.com/RequestHandlor.aspx?ismobile=1&is_access_token=1&apikey=" +
//         key.apiKey +
//         "&provider=" +
//         action;
//     }

//     callback(url);
//   }
// }

// class RestRequest extends Component {
//   static httpGetRequest(url, handle) {
//     fetch(BASE_URL + url, {
//       method: "GET",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//     })
//       .then((response) => response.text())
//       .then((responseText) => {
//         handle(responseText);
//       })
//       .catch((error) => {
//         handle(error);
//       });
//   }

//   static httpPostRequest(url, payload, handle) {
//     fetch(BASE_URL + url, {
//       method: "POST",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.text())
//       .then((responseText) => {
//         handle(responseText);
//       })
//       .catch((error) => {
//         handle(error);
//       });
//   }

//   static httpPutRequest(url, payload, handle) {
//     fetch(BASE_URL + url, {
//       method: "PUT",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.text())
//       .then((responseText) => {
//         handle(responseText);
//       })
//       .catch((error) => {
//         handle(error);
//       });
//   }

//   static httpDeleteRequest(url, payload, handle) {
//     fetch(BASE_URL + url, {
//       method: "DELETE",
//       headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }),
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.text())
//       .then((responseText) => {
//         handle(responseText);
//       })
//       .catch((error) => {
//         handle(error);
//       });
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });

// export default LoginRadiusSDK;
