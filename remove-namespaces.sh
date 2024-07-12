#!/bin/bash

# List of paths to the build.gradle files that need fixing
declare -a buildGradles=(
  "node_modules/@react-native-community/masked-view/android/build.gradle"
  "node_modules/react-native-gesture-handler/android/build.gradle"
  "node_modules/react-native-image-picker/android/build.gradle"
  "node_modules/react-native-safe-area-context/android/build.gradle"
  "node_modules/react-native-svg/android/build.gradle"
)

# Remove the namespace attribute from each build.gradle file
for buildGradle in "${buildGradles[@]}"; do
  if [ -f "$buildGradle" ]; then
    echo "Removing namespace from $buildGradle"
    sed -i.bak '/namespace/d' "$buildGradle"
  else
    echo "$buildGradle not found"
  fi
done

echo "All specified build.gradle files have been processed."
