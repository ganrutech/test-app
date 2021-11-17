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
                sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/build.sh"
                sh './jenkins/scripts/build.sh'
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
                sh 'npx kill-port 7000'
            }
        }
    }
}