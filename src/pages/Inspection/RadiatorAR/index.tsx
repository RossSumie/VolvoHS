import React, { useRef } from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
} from "@viro-community/react-viro";
import CameraIcon from '../../../assets/icons/Device_Camera_White.svg';
import BackIcon from '../../../assets/icons/Symbol_Arrow left_Black.svg';
import Information from '../../../assets/icons/Symbol_Info_Black.svg';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';

type RootStackParamList = {
  INSQuestionnaire: { file: string, screenshotUri: string };
};

const InitialScene = () => {

  ViroARTrackingTargets.createTargets({
    radiatorImage: {
      source: require('../../../assets/images/radiator.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165 // meters
    }
  });

  const anchorFound = () => {
    console.log("Anchor Detected");
  };
  return(
          <ViroARScene>
            <ViroARImageMarker target="radiatorImage" onAnchorFound={anchorFound}>
              <ViroText
                text="Radiator"
                scale={[0.15, 0.15, 0.15]}
                rotation={[-90, 0, 0]}
                position={[0.02, 0, -0.11]}
                style={styles.MachinePartTextStyle}
              />
              <ViroImage
                source={require('../../../assets/images/grid.png')}
                position={[0.02, 0, -0.03]}
                scale={[0.1, 0.15, 0.12]}
                width={1}
                height={1}
                rotation={[-90, 0, 0]}
              />
            </ViroARImageMarker>
          </ViroARScene>
        )

}

export const RadiatorAR = () => {
  const navigatorRef = useRef<ViroARSceneNavigator>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const takeScreenshot = async() => {
    try { 
      const screenshot = await navigatorRef.current?._takeScreenshot("screenshot", true)
      // Url of the screenshot
      // URI -> File 
      const file = await RNFetchBlob.fs.readFile(screenshot.url, 'base64')
      navigation.navigate('INSQuestionnaire', { file: file as string, screenshotUri:screenshot.url });
    } catch(e) {
      console.log("Error On opening", e)
    }

    // navigatorRef.current?._takeScreenshot("screenshot", true).then((result) => {
    //     console.log("Screenshot URL:", result.url); 
    // }).catch((error) => {
    //     console.error("Failed to take screenshot: ", error);
    // });
  };

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
      ref={navigatorRef}
      autofocus={true}
      initialScene={{
        scene: InitialScene}} />
      <View style ={styles.controlBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={32}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraButton} onPress={takeScreenshot}>
        <CameraIcon width={40}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Information width={32}/>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView:{flex:1},
  controlBar: {
    height: 104, 
    width:'100%', 
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center',
    padding: 24,
    justifyContent:'space-between',
  },
  cameraButton: {backgroundColor:'#202a44', borderRadius:20, height:64, width: 64, alignItems:'center', justifyContent:'center'},
  MachinePartTextStyle: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
    width: 100,
  },
});

export default RadiatorAR;
