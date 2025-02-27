# React Native Android Setup

This guide will help you set up and run a React Native for Android development.

## Prerequisites

Ensure you have the following installed:

1. **Node.js** (Recommended: v18+)
2. **React Native CLI**
   ```sh
   npm install -g react-native-cli
   ```
3. **Java Development Kit (JDK)** (Recommended: OpenJDK 17)
4. **Android SDK & Build Tools**


### Configure Environment Variables
- Add the following paths to your system’s environment variables:
  ```sh
  ANDROID_HOME=$HOME/Library/Android/sdk
  PATH=$PATH:$ANDROID_HOME/emulator
  PATH=$PATH:$ANDROID_HOME/platform-tools
  ```
- For Windows:
  - Add `C:\Users\YourUser\AppData\Local\Android\Sdk` to the system variables.

---

## Run the Android Build


### Start Metro Bundler
```sh
npx react-native start
```

### Build and Run the App
```sh
npx react-native run-android
```
If the build fails, try cleaning and rebuilding:
```sh
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

 **Gradle Build Failed**
   - Run:
   ```sh
   cd android && ./gradlew clean && cd ..
   ```
   - Ensure `gradle.properties` has:
   ```properties
   android.useAndroidX=true
   android.enableJetifier=true
   ```
  - Run:
 ```sh
    cd android
   ./gradlew assembleDebug
   ```


