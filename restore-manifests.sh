#!/bin/bash

# List of paths to the AndroidManifest.xml files that need restoring
declare -a manifests=(
  "node_modules/@react-native-community/masked-view/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-gesture-handler/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-image-picker/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-safe-area-context/android/src/main/AndroidManifest.xml"
  "node_modules/react-native-svg/android/src/main/AndroidManifest.xml"
  "node_modules/rn-fetch-blob/android/src/main/AndroidManifest.xml"
)

# Restore the package attribute from each backup file
for manifest in "${manifests[@]}"; do
  if [ -f "$manifest.bak" ]; then
    echo "Restoring $manifest"
    mv "$manifest.bak" "$manifest"
  else
    echo "$manifest.bak not found"
  fi
done

echo "All specified manifests have been restored."
