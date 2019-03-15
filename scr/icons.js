import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

// setup use react-native-vector-icons
export const initIcons = () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      IconIon.getImageSource('ios-settings', 30),
      IconIon.getImageSource('ios-cog', 30),
      IconIon.getImageSource('ios-people', 30),
      IconIon.getImageSource('ios-navigate-outline', 30),
      IconIon.getImageSource('ios-navigate', 30),
      IconAnt.getImageSource('home', 30),
      IconAnt.getImageSource('user', 30),
      IconAnt.getImageSource('setting', 30),
      IconAnt.getImageSource('closecircleo', 30, 'red'),
      IconFontAwesome.getImageSource('cc-paypal', 30, 'blue'),
      IconFontAwesome.getImageSource('cc-amex', 30, '#6CC4EE'),
      IconFontAwesome.getImageSource('cc-visa', 30, '#1a1f71'),
      IconFontAwesome.getImageSource('cc-mastercard', 30, 'orange'),
    ])
      .then((values) => {
        settingsIconIon = values[0];
        cogIconIon = values[1];
        peopleIconIon = values[2];
        iosNavigateOutlineIon = values[3];
        iosNavigateIon = values[4];
        homeIconAnt = values[5];
        userIconAnt = values[6];
        settingIconAnt = values[7];
        closeIconAnt = values[8];
        paypalIconFontAwesome = values[9];
        amexIconFontAwesome = values[10];
        visaIconFontAwesome = values[11];
        mastercardIconFontAwesome = values[12];
        resolve(true);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
      .done();
  });
};
