import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import {PRIMARY, TEXT} from '../constants/colors';

interface Props {
  ref?: any;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  autoCompleteType?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year';
  autoCorrect?: boolean;
  onBlur?: any;
  // value?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  action?: any;
  onSubmitEditing?: any;
  returnKeyType?:
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'default'
    | 'emergency-call'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo';
  styles?: object;
  multiline?: boolean;
  numberOfLines?: number;
  value?: string;
}

const InputForm: React.FC<Props> = ({
  placeholder = '',
  secureTextEntry = false,
  autoCompleteType,
  autoCorrect = true,
  keyboardType = 'default',
  action = () => {},
  onSubmitEditing = () => {},
  returnKeyType = Platform.OS === 'ios' ? 'default' : 'none',
  onBlur = () => {},
  styles,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      style={styles || s.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCompleteType={autoCompleteType}
      autoCorrect={autoCorrect}
      keyboardType={keyboardType}
      onChangeText={action}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      onBlur={onBlur}
    />
  );
};

const s = StyleSheet.create({
  input: {
    // backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
    //color: 'rgba(0, 0, 0, 0.6)',
    color: TEXT,
    fontFamily: 'Nunito-Bold',
    borderBottomColor: PRIMARY,
    borderBottomWidth: 1.5,
  },
});

export default InputForm;
