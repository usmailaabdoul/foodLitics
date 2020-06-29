import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {Actions} from 'react-native-router-flux';

import styles from './UserInfo.style';
import theme from '../../styles/theme';
import {SecondaryInputs} from '../../components/';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      profileImageURL: null,
      displayName: '',
      wrong_displayName: false,
      loading: false,
      selectedImage: null,
    };
  }

  selectImage() {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then((image) => {
        this.setState({
          selectedImage: image,
          profileImageURL: {uri: image.path}, //temporary for display
        });
      })
      .catch((err) => {
        //user cancled image selection
        //do nothing
      });
  }

  async uploadImage(image, name) {
    if (!image) {
      return null;
    }
    const metadata = {
      contentType: image.mime,
    };

    const imageRef = storage().ref(`images/${name}`);
    await imageRef.putFile(image.path, metadata).catch((error) => {
      throw error;
    });
    const url = await imageRef.getDownloadURL().catch((error) => {
      throw error;
    });
    console.log(url);
    return url;
  }

  async updateDisplayNameAndPotoURL(displayName, photoURL) {
    const {I18n} = this.props;
    const obj = {};
    if (displayName) {
      obj.displayName = displayName;
    }
    if (photoURL) {
      obj.photoURL = photoURL;
    }

    try {
      await auth().currentUser.updateProfile(obj);
      this.setState(obj);

      return true;
    } catch (e) {
      alert(I18n.t('phrases.ErrorUpdatingProfile'));
      console.log(e);
      throw e;
    }
  }

  async handleSave() {
    this.setState({loading: true});
    const {displayName, selectedImage} = this.state;

    const uid = auth().currentUser.uid;
    console.log('uid', uid);
    var photoURL;

    try {
      photoURL = await this.uploadImage(selectedImage, uid);
      console.log('photoURL', photoURL); //can be null if there was no image to upload
    } catch (e) {
      console.log(e);
      alert('something unexpected happended');
      this.setState({loading: false});
      return;
    }

    try {
      await this.updateDisplayNameAndPotoURL(displayName, photoURL);
      this.setState({photoURL: photoURL});
      Alert.alert(
        'Update Profile',
        'yourProfileHasBeenUpdated',
        [
          {
            text: 'OK',
            onPress: () => Actions.home(),
          },
        ],
        {cancelable: false},
      );
    } catch (e) {
      alert('network Requets Failed');
      console.log(e);
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {displayName, profileImageURL} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>Set your profile Information</Text>

          <View style={styles.profileImageWrapper}>
            {profileImageURL == null ? (
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../../../res/img/profile_Img.png')}
                  style={styles.profileImage}
                />
              </View>
            ) : (
              <Image source={profileImageURL} style={styles.profileImage} />
            )}
            <TouchableOpacity
              onPress={() => this.selectImage()}
              activeOpacity={0.4}
              style={styles.cameraIcon}>
              <Image
                source={require('../../../res/img/camera.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.input}>
            <SecondaryInputs
              placeholder={'john doe'}
              label={'User Name'}
              value={displayName}
              onChangeText={(text) => this.setState({displayName: text})}
              icon={require('./../../../res/img/user.png')}
            />
          </View>

          {this.state.loading ? (
            <TouchableOpacity style={styles.saveButton}>
              <ActivityIndicator size={25} color={theme.WHITE_COLOR} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => this.handleSave()}
              style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default UserInfo;
