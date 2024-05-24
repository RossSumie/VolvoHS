import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const CoolantAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [isTrackingInitialized, setIsTrackingInitialized] = useState(false);

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Coolant Tank");
      setIsTrackingInitialized(true);
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
      setIsTrackingInitialized(false);
    }
  }

  ViroARTrackingTargets.createTargets({
    coolantImage: {
      source: require('../../assets/images/coolant.jpg'),
      orientation: 'Up',
      physicalWidth: 0.165 // in meters
    }
  });

  const anchorFound = () => {
    console.log("Anchor Detected");
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARImageMarker target="coolantImage" onAnchorFound={anchorFound}>
        <ViroText
          text={text}
          scale={[0.15, 0.15, 0.15]}
          rotation={[-90,0,0]}
          position={[-0.03, 0, -0.05]} // Adjust the position to be above the image marker
          style={styles.MachinePartTextStyle}
        />
        {isTrackingInitialized && (
          <ViroImage
            source={require('../../assets/images/grid.png')} // Update the path to your texture image if needed
            position={[-0.03, 0, 0.01]} // Position the image at the center of the detected image marker
            scale={[0.1, 0.1, 0.1]} // Scale the image to match the physical width of the detected image
            width={1}
            rotation={[-90,0,0]}
            height={1}
          />
        )}
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: CoolantAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  MachinePartTextStyle: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
    width: 100,
  },
});
