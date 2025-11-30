pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-cred'
        DOCKER_IMAGE = 'sgoyal-12/notes-nodejs-ci-cd'
        CONTAINER_NAME = 'notes-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: DOCKERHUB_CREDENTIALS,
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
                sh "docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                sh "docker push ${DOCKER_IMAGE}:latest"
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker rm -f ${CONTAINER_NAME} || true
                docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE}:latest
                """
            }
        }
    }

    post {
        success {
            echo "✅ Build & deploy successful!"
        }
        failure {
            echo "❌ Build or tests failed."
        }
    }
}
