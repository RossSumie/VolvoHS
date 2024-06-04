import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroNode,
} from "@viro-community/react-viro";
import CameraIcon from '../../../assets/icons/Device_Camera_White.svg';
import BackIcon from '../../../assets/icons/Symbol_Arrow left_Black.svg';
import Information from '../../../assets/icons/Symbol_Info_Black.svg';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  INSQuestionnaire: { screenshotUri: string };
};

const InitialScene = ({ onAnchorFound, markerVisible }: { onAnchorFound: () => void, markerVisible: boolean }) => {

  ViroARTrackingTargets.createTargets({
    radiatorImage: {
      source: require('../../../assets/images/radiator.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165 // meters
    }
  });

  return (
    <ViroARScene>
      <ViroARImageMarker target="radiatorImage" onAnchorFound={onAnchorFound}>
        <ViroNode visible={markerVisible}>
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
        </ViroNode>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export const RadiatorAR = () => {
  const navigatorRef = useRef<ViroARSceneNavigator>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentText, setCurrentText] = useState("Please point your camera to the radiator");
  const [step, setStep] = useState(0);
  const [markerVisible, setMarkerVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 1) {
      timer = setTimeout(() => {
        setCurrentText("Press the camera button below to take a picture centralizing the radiator on the screen");
        setMarkerVisible(false);
        setStep(2);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  const takeScreenshot = () => {
    navigatorRef.current?._takeScreenshot("screenshot", true).then((result) => {
        console.log("Screenshot URL:", result.url); 
        navigation.navigate('INSQuestionnaire', { screenshotUri: result.url });
    }).catch((error) => {
        console.error("Failed to take screenshot: ", error);
    });
  };

  const handleAnchorFound = () => {
    if (step === 0) {
      setCurrentText("Keep the image pointed to the radiator for 7 seconds. Don't move your camera");
      setStep(1);
    }
  };

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        ref={navigatorRef}
        autofocus={true}
        initialScene={{
          scene: () => <InitialScene onAnchorFound={handleAnchorFound} markerVisible={markerVisible} />,
        }}
      />
      <View style={styles.controlBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={takeScreenshot}>
          <CameraIcon width={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Information width={32} />
        </TouchableOpacity>
      </View>
      <View style={styles.overlay}>
        <Text style={styles.fixedTextStyle}>{currentText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1 },
  controlBar: {
    height: 104,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    justifyContent: 'space-between',
  },
  cameraButton: {
    backgroundColor: '#202a44',
    borderRadius: 20,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MachinePartTextStyle: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
    width: 100,
  },
  fixedTextStyle: {
    fontFamily: "VolvoNovum3-Bold",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default RadiatorAR;
