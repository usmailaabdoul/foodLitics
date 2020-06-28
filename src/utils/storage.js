import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365, // 1 year
  enableCache: true,
  sync: {},
});

export default {
  storeInfo: (key, data) => {
    deviceStorage.save({
      key: key,
      data: data,
      expires: 1000 * 3600 * 24 * 5 * 100,
    });
  },
  load: async (obj) => {
    try {
      var value = await deviceStorage.load(obj);
      return value;
    } catch (e) {
      // console.log(e);
      throw e;
    }
  },
  remove: async (obj) => {
    try {
      await deviceStorage.remove(obj);
    } catch (e) {
      // console.log(e);
      throw e;
    }
  },
};
