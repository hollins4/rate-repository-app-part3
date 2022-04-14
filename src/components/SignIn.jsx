import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Pressable } from 'react-native';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const onSubmitValues = (values) => {
  console.log(values)
}

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
    .required('Username is required')
})

const SignIn = () => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitValues} validationSchema={validationSchema}>
        {({ handleSubmit}) => (
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="password" />
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