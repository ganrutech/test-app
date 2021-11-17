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
                echo "PATH: ${env.WORKSPACE}"
                sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/deliver.sh"
                sh './jenkins/scripts/deliver.sh'
            }
        }
        stage("Test") {
            steps {
                echo "Test completed"
            }
        }
        stage("Deploy") {
            steps {
                timeout(time: 10, unit: "SECONDS") {
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                }
                sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/kill.sh"
                sh 'npx kill-port 7000'
            }
        }
    }
}