#!/bin/bash

declare -a buildGradles=(
  "node_modules/@react-native-community/masked-view/android/build.gradle"
  "node_modules/react-native-gesture-handler/android/build.gradle"
  "node_modules/react-native-image-picker/android/build.gradle"
  "node_modules/react-native-safe-area-context/android/build.gradle"
  "node_modules/react-native-svg/android/build.gradle"
  "node_modules/rn-fetch-blob/android/build.gradle"
)

declare -a namespaces=(
  "org.reactnative.maskedview"
  "com.swmansion.gesturehandler"
  "com.imagepicker"
  "com.th3rdwave.safeareacontext"
  "com.horcrux.svg"
  "com.RNFetchBlob"
)

for i in "${!buildGradles[@]}"; do
  buildGradle=${buildGradles[$i]}
  namespace=${namespaces[$i]}

  if [ -f "$buildGradle" ]; then
    echo "Adding namespace to $buildGradle"
    sed -i.bak "1i android {\n    namespace '$namespace'\n}" "$buildGradle"
  else
    echo "$buildGradle not found"
  fi
done

echo "All specified build.gradle files have been processed."

