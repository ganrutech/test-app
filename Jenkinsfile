pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage("Build") {
            steps {
                echo "Started installing package..."
                sh "npm install"
                sh "npm run build"
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
                sh './jenkins/scripts/server.sh'
            }
        }
    }
}