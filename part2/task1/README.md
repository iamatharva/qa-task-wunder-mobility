# wunder-mobility-task2

> QA task to run WebdriverIO tests with Appium to test Android application:

## Chanage Directory
-- Execution directly `cd /part2/task1`

## Before
> Before running tests, please make sure FasTip app is available in `./app` directory, 
Else download (https://drive.google.com/drive/folders/1WgtQ3oDVWtjvkZnnAp18a50I1256a1zC)  the app from  and move to the  `./app` directory

> Copy the entire path of the .apk file and paste it to [here](config/wdio.android.app.conf.js) line no. 17.


## Setup
Please follow the following setup instruction to install appium on your local.

## Setting up Android on a local machine

## Android
To use this boilerplate on a local machine for Android, emulator(s) need to be available.
To setup your local machine you should download Android Studio, see for instructions [here](https://developer.android.com/studio/).

Follow the instructions to download and setup Android studio and configure a your emulators with [this](https://developer.android.com/studio/run/managing-avds) tutorial.

Please use Google to find the correct instructions to setup your environment (Windows / Mac / Linux).

### Start the emulator
If you were able to create emulators you can use the following options to start the emulators

- From Android Studio itself through:
    - Open `Tools > AVD Manager`
    
    - Select your emulator and configure
    ```
    'deviceName': 'Pixel_8.1',
    'platformVersion': '8.1',

    ```
    - Click on the `play`-button

> It is advised to keep an emulator open and start tests against an already opened emulator to speed up tests. Starting an emulator manually/by Appium is time consuming and will slow down the test execution.

## Installing Appium on a local machine

To setup the local test environment the following needs to be installed:

- [Appium](https://github.com/appium/appium) with `npm install appium -g`
- [appium-doctor](https://github.com/appium/appium-doctor) with `npm install appium-doctor -g`
- [appium-desktop](https://github.com/appium/appium-desktop). This one needs to be downloaded from [here](https://github.com/appium/appium-desktop/releases) and pick the latest stable releases

### Appium Doctor
appium-doctor is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. You only run it once to check your local machine. See an example output below.

```bash
appium-doctor

info AppiumDoctor Appium Doctor v.1.4.3
info AppiumDoctor ### Diagnostic starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: [Location]
info AppiumDoctor  ✔ Node version is 8.9.1
info AppiumDoctor  ✔ Xcode is installed at: [Location]
info AppiumDoctor  ✔ Xcode Command Line Tools are installed.
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
info AppiumDoctor  ✔ Carthage was found at: [Location]
info AppiumDoctor  ✔ HOME is set to: /Users/wswebcreation
info AppiumDoctor  ✔ ANDROID_HOME is set to: [Location]
info AppiumDoctor  ✔ JAVA_HOME is set to: [Location]
info AppiumDoctor  ✔ adb exists at: [Location]
info AppiumDoctor  ✔ android exists at: [Location]
info AppiumDoctor  ✔ emulator exists at: [Location]
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor ### Diagnostic completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor Everything looks good, bye!
info AppiumDoctor
```

## How to run the tests
Choose one of the following options:

1. Install the dependencies and node modules using`npm install`

2. Run the tests `npm run android.app`