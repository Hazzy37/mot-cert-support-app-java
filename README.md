# Timesheet Manager Test Repo

This project runs a test suite against the time sheet manager app. The application will be started and the tests executed against the 
running application. 

## Getting Started

### Pre-Requisites 

- Java 18
- Maven 3.12.1 <release 18>
- Spring boot 3.2.5
- Maven surefire plugin - 3.2.5
- Maven failsafe plugin - 3.2.5

#### Repo Location
https://github.com/Hazzy37/mot-cert-support-app-java.git

## Building the project
To build the project simply run `mvn clean install` to create a jar file in the target directory.

## Running the project
To run the project simply run `java -jar target/mot-cert-support-app-java-*-exec.jar` to run the jar file. 

# Running E2E Checks. 
The E2E checks are executed as part of the build process. If you wish to run them independently you can use the following command (again service will need to be running):

`mvn test -Dtest=LoginTest`

## CI/CD integration 
This project is integrated with GitHub Actions. The build and test process can be triggered each time a change is pushed to the main/trunk branch.

The config for Actions can be found in the following location:

`github/workflows/build_test_maven.yml`

Workflow outputs can be found in the Actions section of GitHub repository

# GitHub Actions

To upload any changes to Git and trigger the process, using the following 3 commands:
```
git add .

git commit -m "Added in Github Actions"

git push origin trunk
```

# Test Cafe Area

As a trial in one of the exercises we installed Test Cafe. 
There has been a Folder created in the src\test folder with a trial test in it. 
NOTE : Just ignore the TestCafeExample.js file. 

To install Test Cafe its best to use npm which is a Node.js pacakge manager
To check if you have node.js available, in a command prompt type npm --version
You should have a version number returned. 
If not....

Go to the following web page:
https://nodejs.org/en/download/prebuilt-installer/current

And download the installer and open. 

OR......
Access this web page:
https://nodejs.org/en/download/package-manager/current

Then run the following commands listed on the page

---------

Once done... run the following to install Test Cafe

```
npm install -g testcafe
```

NOTE : project needs to be running. Simply run
`java -jar target/mot-cert-support-app-java-*-exec.jar` to run the jar file.

To run the test via Chrome run the following command to specify browser and which test to execute:
NOTE : May need to specify file path for the .js file

```
testcafe chrome TestCafeTrial.js
```


