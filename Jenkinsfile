pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 7000:7000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage("Build") {
            steps {
                echo "Installing npm package"
                sh "npm install"
               
            }
        }
        stage("Test") {
            steps {
                echo "Test completed"
            }
        }
        stage("Deploy") {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}