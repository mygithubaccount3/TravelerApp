import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from "react-redux";
import {setStatus} from "../actions/getStatusAction";
import rlm from '../realm';

function Form (props) {
	/*const recoverPassword = () => props.navigation.navigate('Signup')*/
	
	const handleSubmit = values => {
		
		if (values.username.length > 0 && values.password.length > 0) {
			if(rlm.objects('Users').filtered(`username = "${values.username}" AND password = "${values.password}"`)[0].username) {
				setTimeout(() => {
					props.setStatus(true)
					/*props.navigation.navigate('Home')*/
				}, 3000)
			}
      	}
	}
	    return (
	    	<>
        		<Formik
        			initialValues={{username: '', password: ''}}
					onSubmit={values => handleSubmit(values)}
        			validationSchema={yup.object().shape({
          				username: yup.string().required(),
          				password: yup.string().required(),
        			})}
				>
			        {({
			          values,
					  handleChange,
					  handleSubmit,
			          errors,
			          setFieldTouched,
			          touched,
			          isValid,
					  isSubmitting
			        }) => (
			          <View
			            style={
			              props.orientation === 'portrait'
			                ? styles.form
			                : styles.formLandscape
			            }>
			            <View
			              style={
			                props.orientation === 'portrait'
			                  ? styles.inputWrapper
			                  : [styles.inputWrapper, styles.inputWrapperLandscape]
			              }>
			              <Image source={require('../img/user.png')} />
			              <TextInput
							name='username'
			                value={values.username}
			                onBlur={() => setFieldTouched('username')}
							onChangeText={handleChange('username')}
			                style={styles.input}
			                placeholder="Username"
			                placeholderTextColor={'white'}
			              />
			            </View>
			            {touched.username && errors.username && (
			              <Text style={styles.errorPortrait}>{errors.username}</Text>
			            )}
			
			            <View
			              style={
			                props.orientation === 'portrait'
			                  ? styles.inputWrapper
			                  : [styles.inputWrapper, styles.inputWrapperLandscape]
			              }>
			              <Image source={require('../img/pass.png')} />
			              <TextInput
			                style={
			                  props.orientation === 'portrait'
			                    ? styles.input
			                    : [styles.input, styles.inputLandscape]
			                }
							name='password'
							value={values.password}
			                onBlur={() => setFieldTouched('password')}
							onChangeText={handleChange('password')}
			                placeholder="Password"
			                placeholderTextColor={'white'}
			                secureTextEntry={true}
			              />
			            </View>
			            {touched.password && errors.password && (
			              <Text
			                style={
			                  props.orientation === 'portrait'
			                    ? styles.errorPortrait
			                    : [styles.errorMessage, styles.errorPassword]
			                }>
			                {errors.password}
			              </Text>
			            )}
			            <TouchableOpacity>
			              <Text style={styles.recoverLink}>Forgot password?</Text>
			            </TouchableOpacity>
			            <TouchableOpacity
			              style={styles.logIn}
			              onPress={handleSubmit}
			              disabled={!isValid}>
			              <Text style={styles.logInText}>Sign in</Text>
			            </TouchableOpacity>
			          </View>
			        )}
      </Formik>
      <TouchableOpacity>
        <Text style={styles.registration}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </>
	    )
}

function mapDispatchToProps(dispatch) {
  return {
    setStatus: status => dispatch(setStatus(status))
  };
}

export default connect(null, mapDispatchToProps)(Form);
/*const Form: () => React$Node = props => {
  return (
    
  );
};*/

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: 'center',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
  },
  inputWrapperLandscape: {
    marginBottom: 40,
  },
  input: {
    width: 300,
    color: Colors.white,

    fontFamily: 'Lato-Bold',
    fontSize: 18,
    letterSpacing: -0.164362,
    lineHeight: 22,
    marginLeft: 5,
    opacity: 0.7,
  },
  inputLandscape: {
    width: 350,
  },
  form: {
    alignItems: 'flex-start',
    marginTop: 141,
  },
  formLandscape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingRight: 15,
    paddingLeft: 15,
  },
  recoverLink: {
    color: Colors.white,
    opacity: 0.7,
    fontFamily: 'Lato-Bold',
    marginBottom: 47,
  },
  logIn: {
    borderColor: Colors.white,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    height: 50,
    width: 321,
  },
  logInText: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.164362,
    opacity: 0.7,
  },
  registration: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.164362,
    color: Colors.white,
    opacity: 0.7,
    marginTop: 14,
  },
  errorMessage: {
    fontSize: 10,
    color: 'red',
    position: 'absolute',
    left: 150,
    bottom: 75,
  },
  errorPassword: {
    left: 550,
  },
  errorPortrait: {
    fontSize: 10,
    color: 'red',
  },
});
