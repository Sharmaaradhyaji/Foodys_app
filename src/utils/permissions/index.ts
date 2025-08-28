import { PermissionsAndroid, Platform } from 'react-native';
import { addFoodText } from '../../globals/constants/constants';

export const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: addFoodText.cameraPermission,
          message: addFoodText.permissionMessage,
          buttonPositive: addFoodText.ok,
          buttonNegative: addFoodText.cancel,
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  }
  return true;
};
