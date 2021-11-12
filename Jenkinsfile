pipeline {
    agent any
     stages {
        stage("Build") {
            steps {
                echo "Execting npm"
                nodejs('Node-14') {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }
        stage("Test") {
            steps {
                echo "Testing..."
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /Users/ticvictech/Desktop/jenkins-react-app"
                sh "cp -r ${WORKSPACE}/build/ /Users/ticvictech/Desktop/jenkins-react-app/"
                echo "Folder copied"
                echo "Starting server..."
                sh "npm run build:start"
                echo "Deploy Success"
            }
        }
    }
}