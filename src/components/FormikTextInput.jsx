import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 10,
    color: '#d73a4a'
  },
  input: {
    height: 40,
    margin: 12,
    width: 400, 
    borderWidth: 2,
    padding: 10,
  },
  inputError: {
    borderColor: '#d73a4a'
  },
  inputValid: {
    borderColor: 'green'
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  let borderColorStyle = showError ? styles.inputError : field.value.length > 0 ? styles.inputValid : null
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, borderColorStyle]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;