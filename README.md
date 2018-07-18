This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run eject](#npm-run-eject)
* [Writing and Running Tests](#writing-and-running-tests)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
* [Sharing and Deployment](#sharing-and-deployment)
  * [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
  * [Building an Expo "standalone" app](#building-an-expo-standalone-app)
  * [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
    * [Build Dependencies (Xcode & Android Studio)](#build-dependencies-xcode-android-studio)
    * [Should I Use ExpoKit?](#should-i-use-expokit)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:
```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).

#### Should I Use ExpoKit?

If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) for more details about this option.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.


##TODO:
FREE VECTOR MAPS – Updated August 2013
LICENSE AGREEMENT
THIS LICENSE AGREEMENT is between you, the licensee, and Striped Candy LLC, the licensor. By purchasing or downloading any stock maps, icons or digital items licensed by Striped Candy LLC, you automatically agree to the following terms and conditions:
All ownership and copyright of the licensed maps, icons or digital items remain the property of Striped Candy LLC.
The maps, icons or digital items can be used royalty-free by the licensee for personal, commercial, and client projects, including advertising, web design, software application, multimedia design, film, video, computer games, catalogues, brochures, promotional greeting cards and promotional postcards (i.e. not for resale, license or other distribution) up to 250,000 copies. Any additional uses must be approved by Striped Candy LLC in writing.
Our maps, icons or digital items may be altered, cropped or otherwise modified or manipulated for your needs.
Your purchase or use of our maps, icons or digital items implies that you have read and accepted the terms of this license. If you have any questions or concerns regarding this license, or wish to negotiate an alternate license for a use not permitted here, please contact us.
All purchasers or downloaders must also abide by the following restrictions:
You may not sub-license, resell, rent, transfer, or redistribute the maps, icons or digital items without express written permission from Striped Candy LLC.
You may not use them at places like Cafe Press, Zazzle or any print on demand service.
You may not place these licensed maps, icons or digital items on any website in a complete or archived downloadable format or enable it to be distributed in any other way.
The maps, icons or digital items may not be placed on any electronic bulletin board or downloadable format.
Making modifications or alterations to any of our maps, icons or digital items or other materials does not free you to then sell, license or distribute them to anyone else.
Our maps, icons or digital items may not be incorporated into a logo or other trademark without written permission of Striped Candy LLC.
Our maps, icons or digital items may not be used to create merchandise or items for resale without written permission of Striped Candy LLC.
You may not use, or allow anyone else to use our maps, icons or digital items to create pornographic, libelous, obscene or defamatory material.
ATTRIBUTION
Free downloads require attribution. Please provide a note and link on your website, like "Map by Free Vector Maps" or similar, plus a link back to http://freevectormaps.com, is the preferred form of attribution. If you are unable to provide the appropriate attribution, please purchase a Royalty Free License.
TERMINATION & REVOCATION
The license contained in this agreement will automatically terminate without notice from Striped Candy LLC if you fail to comply with any of the provisions of this agreement or fail to pay in full. Upon termination, you must immediately stop using our symbols, delete or remove all material containing our symbols from your premises and confirm completion of this to Striped Candy LLC in writing. If Striped Candy LLC finds anyone guilty of copying, stealing, reselling, leasing or renting our symbols and/or symbol designs, all licenses of said person will automatically be cancelled and they will be liable to legal action.
Striped Candy LLC reserves the right to revoke the license to use the Licensed Material for good cause and elect to replace such Licensed Material with alternative Licensed Material. Upon notice of any revocation of such license, you shall immediately cease using such Licensed Material and shall where possible ensure that your clients and customers do likewise. You shall delete all electronic copies of Licensed Material from electronic storage media, confirming the same to Striped Candy LLC in writing.
PAYMENT
We use Stripe, http://stripe.com, for payments. You can read their Terms of Service and Privacy Policy on their site.
REFUND POLICY
No refund will be offered for products once sold. Since these are digital files, all maps and assets are not refundable or exchangeable. However, files can be replaced if damaged or lost. Simply send an email to hello@freevectormaps.com
DISCLAIMER
All licensed maps, icons or digital items are provided “as is” without warranty of any kind, either expressed or implied. Striped Candy LLC is not liable for any damages arising out of any defects in our materials. You agree to hold Striped Candy LLC harmless for any result that may occur during the course of using, or inability to use these licensed maps, icons or digital items. In no event shall we be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses arising out of the use of or inability to use our products.
Striped Candy LLC makes no claims as to the completeness, accuracy or content of the maps or data, and makes no representation of any kind, including, but not limited to, any warranty as to the accuracy or fitness of the maps or data for a particular use (nor shall the act of distribution constitute any such warranty).
Whilst we make every attempt possible to provide the most accurate up-to-date maps, it must be emphasized that we cannot guarantee their accuracy. If you have questions regarding the geo data used to create these maps, please visit the Natural Earth website, http://www.naturalearthdata.com.
CONTACT
hello@freevectormaps.com
RESERVED RIGHTS
We reserve rights to change the prices of our maps, icons, digital items and/or map bundles without prior notice and at our sole discretion. We reserve the rights to make changes to these ‘Terms and Conditions and License Agreement’ without any prior notice at our sole discretion. Any such changes will reflect at http://www.freevectormaps.com.
