import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './Account.style';
import {Header, SecondaryInputs} from './../../components';
import theme from './../../styles/theme';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      userName: '',
      profileImageURL: null,
    };
  }

  componentDidMount() {
    this.getUserInformation();
  }

  async getUserInformation() {
    try {
      var user = await auth().currentUser;
      console.log(user);
      this.setState({
        email: user.email,
        userName: user.displayName,
        profileImageURL: user.photoURL,
      });
    } catch (e) {
      console.log(e);
      alert('something Unexpected Happend');
    }
  }

  selectImage() {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then((image) => {
        this.setState({
          selectedImage: image,
          profileImageURL: image.path, //temporary for display
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
      alert(
        'Update Profile',
        'yourProfileHasBeenUpdated',
        [
          {
            text: 'OK',
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
    const {email, password, userName, profileImageURL} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Acount" />
        <View style={styles.bodyWrapper}>
          <View style={styles.card}>
            <View style={styles.profileImageWrapper}>
              {profileImageURL === null ? null : (
                <Image
                  source={{uri: profileImageURL}}
                  style={styles.profileImage}
                />
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

            <View style={styles.inputWrapper}>
              <SecondaryInputs
                placeholder={'john doe'}
                label={'User Name'}
                value={userName}
                onChangeText={(text) => this.setState({userName: text})}
                icon={require('./../../../res/img/user.png')}
              />
              <SecondaryInputs
                placeholder={'example@example.com'}
                label={'Email'}
                value={email}
                onChangeText={(text) => this.setState({email: text})}
                icon={require('./../../../res/img/mail.png')}
                editable={false}
              />
              <SecondaryInputs
                placeholder={'location'}
                label={'Location'}
                value={password}
                onChangeText={(text) => this.setState({password: text})}
                icon={require('./../../../res/img/location.png')}
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
        </View>
      </SafeAreaView>
    );
  }
}

export default Account;
