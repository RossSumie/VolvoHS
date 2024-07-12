#!/bin/bash

# List of paths to the AndroidManifest.xml files that need fixing
declare -a manifests=(
  "node_modules/@react-native-community/masked-view/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-gesture-handler/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-image-picker/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-svg/android/src/main/AndroidManifest.xml"
  "node_modules/rn-fetch-blob/android/src/main/AndroidManifest.xml"
)

# Remove the package attribute from each manifest file
for manifest in "${manifests[@]}"; do
  if [ -f "$manifest" ]; then
    echo "Fixing $manifest"
    sed -i.bak '/package/d' "$manifest"
  else
    echo "$manifest not found"
  fi
done

echo "All specified manifests have been processed."
