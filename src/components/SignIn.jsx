import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Pressable } from 'react-native';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
//import AuthStorage from '../utils/authStorage';

//let authStorage = new AuthStorage()

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'blue',
    width: 200,
    margin: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be 3 characters or longer')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password must be 3 characters or longer')
    .required('Password is required')
})

const SignIn = () => {
  const [ signIn ] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data.authenticate.accessToken)
      navigate('./AppBar.jsx', { replace: true });
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Formik 
      initialValues={initialValues}  
      validationSchema={validationSchema} 
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values)
        resetForm()}}
    >
        {({ handleSubmit }) => (
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" />
          <Pressable 
            onPress={handleSubmit} 
            style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </Pressable>
        </View>
        )}
    </Formik>
  );
};

export default SignIn;