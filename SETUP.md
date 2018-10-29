# Android SDK setup

## Install Java

```bash
sudo apt-get update
sudo dpkg --add-architecture i386
sudo apt-get install libbz2-1.0:i386
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1
sudo apt-get install openjdk-8-jdk openjdk-8-jre
```

## Install Android Studio
Download ZIP archive for Linux from: https://developer.android.com/studio/install.html
1. move the .zip to /opt
2. extract it
3. chown the folder to your name
4. chmod 777 studio.sh and run it for the installer

Now the android sdk is installed to `~/Android/Sdk` run Android Studio and install needed SDKs (Android SDK Platform 26, ...)

## Install Gradle
ubutu:
```
sudo apt-get install gradle
```
MAC:
```
Download the Gradle Binary Only Distribution from https://gradle.org/gradle-download/

Open a terminal
Run the following to unzip the android sdk to the Development directory that is under your user home directory

unzip ~/Downloads/gradle-3.1-bin.zip -d ~/Development
Open up the vi editor and edit your bash profile. We need to add in the GRADLE_HOME environment variable

vi ~/.bash_profile
To edit in vi hit i to enter edit mode and add the text below to the .bash_profile

export GRADLE_HOME=~/Development/gradle-3.1/bin
Press the esc key to exit edit mode
Press : (colon key) to enter command mode.
type wq and press enter to save and exit vi
Run the following to make the change active in your existing session

source ~/.bash_profile
Test it by running

echo $GRADLE_HOME
```

Add ALL to path to ~/.profile
```bash
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export ANDROID_HOME=~/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools
export PATH=${PATH}:$ANDROID_HOME/platform-tools
```

Add `source ~/.profile` to `~/.bashrc` OR `~/.zshrc`

Run `android`, install the images (atom, etc) and then navigate to Tools -> Manage AVDs and create a new image
Make sure to install the android-23 version and confirm it exists in ~/Android/Sdk/platforms/


## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


### To build the project
```
ionic cordova build android --prod
```

### Authentication documentation:
https://ryanchenkie.com/angular-authentication-using-the-http-client-and-http-interceptors
http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial