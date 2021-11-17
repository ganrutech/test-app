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
                sh './jenkins/scripts/deliver.sh'
                script {
                    try {
                        timeout(time: 5, unit: 'SECONDS') { // change to a convenient timeout for you
                            userInput = input(
                            id: 'Proceed', message: 'Finished using the web site? (Click "Proceed" to continue)', parameters: [
                            [$class: 'BooleanParameterDefinition', defaultValue: true, description: '', name: 'Please confirm you agree with this']
                            ])
                        }
                    } catch(err) { // timeout reached or input false
                        def user = err.getCauses()[0].getUser()
                        if('SYSTEM' == user.toString()) { // SYSTEM means timeout.
                            echo "Timeout Default"
                        } else {
                            sh "chmod +x ${env.WORKSPACE}/jenkins/scripts/kill.sh"
                            sh './jenkins/scripts/kill.sh'
                            echo "Aborted by: [${user}]"
                        }
                    }
                }
            }
        }
    }
}