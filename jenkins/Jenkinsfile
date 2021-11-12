pipeline {
    agent any
     stages {
        stage("Build") {
            steps {
                echo "Execting npm"
                nodejs('Node-14') {
                    sh "sudo npm install"
                    sh "sudo npm run build"
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
                sh "sudo rm -rf /Users/ticvictech/Desktop/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /Users/ticvictech/Desktop/jenkins-react-app/"
                echo "Folder copied"
                echo "Starting server..."
                sh "sudo npm run build:start"
                echo "Deploy Success"
            }
        }
    }
}