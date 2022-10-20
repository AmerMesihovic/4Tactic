// import React, { Component } from 'react';
// import {
//     ScrollView,
//     Text,
//     View,
//     Button,
//     TextInput,
//     StyleSheet
// } from 'react-native';
// import { blue } from 'ansi-colors';
// import { StackNavigator } from 'react-navigation';
// import LoginRadiusSDK from '../../../helpers/LoginRadiusSDK';

// const ForgotPasswordScreen = () => {
//     state = {
//        email: ''
      
//     };
//     function giriraj() {
//         alert("dfdfd");
//     };
//     return (
//         <ScrollView style={{ padding: 20 }}>
//             <TextInput placeholder='Email' 
//              onChangeText={(email) => this.state.email = email} />
//             <View style={{ margin: 7 }} />
//             <Button
//                 onPress={() => {
//                     LoginRadiusSDK.forgotPasswordByEmail(this.state.email, "", function (handle) {
//                         // process returned object
//                         alert(JSON.stringify(handle));
//                     });
//                 }}
//                 title="Submit"
//             />
//         </ScrollView>
//     );

// };

// ForgotPasswordScreen.navigationOptions = {
//     title: "ForgotPassword",
// 	headerTitleStyle: {color:'white'},
//     headerStyle: {backgroundColor:'#337ab7'},
//     headerTintColor: 'white'
	
// };

// export default ForgotPasswordScreen;