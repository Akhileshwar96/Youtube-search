import React, {PureComponent} from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomTextInput extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    textColor: PropTypes.string,
    value: PropTypes.string,
    onSubmitEditing: PropTypes.func,
  };

  static defaultProps = {
    label: '',
    keyboardType: 'default',
    secureTextEntry: false,
    onChangeText: () => {},
    onEndEditing: () => {},
    value: '',
    onSubmitEditing: () => {},
    placeholder: 'Enter your text',
  };

  render() {
    const {
      onChangeText,
      value,
      placeholder,
      onEndEditing,
      containerStyle,
      keyboardType,
    } = this.props;
    return (
      <TextInput
        style={containerStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onEndEditing={onEndEditing}
        onSubmitEditing={onEndEditing}
      />
    );
  }
}
