pipeline {
    agent any
    tools {nodejs "Node17"}
     environment {
        CI = 'true'
    }
    stages {
        stage("Build") {
            steps {
                echo "Started installing package..."
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
                echo "PATH: ${env.WORKSPACE}"
                sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/deliver.sh"
                sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/kill.sh"
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}