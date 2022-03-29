pipeline {
    agent any

    environment{
        DOCKER_TAG = getDockerTag()
    }

    stages{
        stage('Build Docker Image'){
            steps{
                sh "docker build . -t cz65rv/nodejs:${DOCKER_TAG}"
            }
        }
        stage('Push Docker Image'){
            steps{

                withCredentials([string(credentialsId: 'DOCKER_HUB_CRED', variable: 'PASSWORD')]) {
                    sh 'docker login -u cz65rv -p $PASSWORD'
                    sh "docker push cz65rv/nodejs:${DOCKER_TAG}"
                }            
            }
        }
    }
}

def getDockerTag(){
    def tag  = sh script: 'git rev-parse HEAD | cut -c 1-8', returnStdout: true
    return tag
}