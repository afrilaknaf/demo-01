pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                git branch : "main",
                url : "https://github.com/afrilaknaf/Jenkins-backend-demo-project.git"
            }
        }

        stage("Validate"){
            steps{
                bat ''' 
                if exist package.json (
                    echo Test Build successfully passed
                ) else (
                    echo Test Build Successfully failed
                    exit /b 1
                )
                 '''
            }
        }

        stage("Install"){
            steps{
                bat '''  
                echo Node js install
                npm install
                '''
            }
        }

        

        stage("Build"){
            steps{
                bat  '''  
                echo Node js Build
                node --check index.js
                '''
            }
        }
    }

    post {
        success {
            echo "All stages completed successfully"
        }

        failure {
            echo "Pipeline failed. Check the console output"
        }

        always {
            echo "Pipeline execution finished"
        }
    }
}