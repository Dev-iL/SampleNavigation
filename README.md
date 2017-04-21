### Instructions:
 1. Clone the repository or download a zip of the recent revision.
 2. Run `npm install` or `yarn install`.
 3. If building for android, replace the contents of `PROJECT_ROOT\node_modules\react-native-vector-icons\android\build.gradle` with:
 ```gradle
buildscript {
  repositories {
    jcenter()
  }

  dependencies {
    classpath 'com.android.tools.build:gradle:2.3.1'
  }
}

apply plugin: 'com.android.library'

android {
  compileSdkVersion 25
  buildToolsVersion "25.0.2"

  defaultConfig {
    minSdkVersion 16
    targetSdkVersion 25
    versionCode 1
    versionName "1.0"
  }
  lintOptions {
    abortOnError false
  }
}

repositories {
  mavenCentral()
}

dependencies {
  compile "com.facebook.react:react-native:+"
}
 ```
 4. `react-native run-android` or `react-native run-ios`.