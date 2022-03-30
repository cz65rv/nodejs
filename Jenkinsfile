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

        stage('Deployment'){
            steps{
                sh "chmod +x change-tag.sh"
                sh "./change-tag.sh ${DOCKER_TAG}"
                sshagent(['Deployer']) {
                    sh "scp -o StrictHostKeyChecking=no nodejs-deployment.yaml ubuntu@10.1.1.21:/home/ubuntu/"
                    script{
                        try{
                            sh "ssh ubuntu@10.1.1.21 kubectl apply -f nodejs-deployment.yaml"
                        }
                        catch(error){
                            sh "ssh ubuntu@10.1.1.21 kubectl create -f nodejs-deployment.yaml"
                        }
                    }
                }
            }
        }
    }
}

def getDockerTag(){
    def tag  = sh script: 'git rev-parse HEAD | cut -c 1-8', returnStdout: true
    return tag
}