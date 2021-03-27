import React, {PureComponent} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    onPress: () => {},
    disabled: false,
    isLoading: false,
  };

  render() {
    const {name, disabled, onPress, isLoading, buttonStyle} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={buttonStyle}>
        <Image source={require('../../assets/images/search.png')} />
      </TouchableOpacity>
    );
  }
}
