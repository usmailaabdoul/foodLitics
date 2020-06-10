import React from 'react';
import {View, Image} from 'react-native';

import theme from './../../styles/theme';
import Screens from './../TabIcons/Screens';
import styles from './Tabicons.style';

const TabIcon = ({title, focused, selected}) => {
  let iconName = '';
  switch (title) {
    case Screens.HOME:
      iconName = require('./../../../res/img/Nav_img/home.png');
      break;
    case Screens.ADD:
      iconName = require('./../../../res/img/Nav_img/button.png');
      break;
    case Screens.LIBRARY:
      iconName = require('./../../../res/img/Nav_img/education.png');
      break;
    case Screens.ACCOUNT:
      iconName = require('./../../../res/img/Nav_img/social.png');
      break;
  }

  let iconColor = focused ? '#fff' : theme.DARK_COLOR;
  return (
    <View
      style={[
        styles.mainWrapper,
        focused ? {backgroundColor: theme.PRIMARY_COLOR} : '#fff',
        title === Screens.HOME ? styles.rightIcon : null,
        title === Screens.ACCOUNT ? styles.leftIcon : null,
      ]}>
      <View style={styles.iconContainer}>
        <Image
          source={iconName}
          style={[styles.iconName, {tintColor: iconColor}]}
        />
      </View>
    </View>
  );
};

export default TabIcon;
