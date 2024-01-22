import {
  Text,
  SafeAreaView,
  View,
  Button,
  Linking,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Camera, CameraType } from 'expo-camera';

import { useState, useRef } from 'react';

import ThemedView from './ThemedView';

export default App = () => {
  
  //activating camera area
  const [type, setType] = useState(CameraType.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    // Request camera permissions when taking a photo
    const cameraAllow = await Camera.requestCameraPermissionsAsync();
    console.log(cameraAllow);
    console.log('Camera is on!');

    if (cameraAllow.status !== 'granted') {
      console.log('Camera permission not granted');
      return;
    }

    if (cameraRef.current) {
      console.log('getting ready for photo!');
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo.uri);
        console.log('Capturing photo...', photo.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <ThemedView>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type} ref={(ref) => (cameraRef.current = ref)}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.paragraph}>Captured Image:</Text>
          <Image
            source={{ uri: capturedImage }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Text> </Text>
        <Button title="Take Photo" onPress={takePhoto} style={styles.buttons} />
      </View>

    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  cameraContainer: {
    flex: 2,
  },
  camera: {
    flex: 1,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    padding: 5,
  },
});
