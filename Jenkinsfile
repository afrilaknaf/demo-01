pipeline{
    agent any


    stages{
    
    
        stage("Git_Checkout"){
            steps{
                git branch : "main",
                url : "https://github.com/afrilaknaf/demo-01.git"
            }
        }

        stage("Check_Node"){
            steps{
                bat '''
                echo Check the version of node js is installed master system
                node -v
                '''
            }
        }

        stage("Install_Package"){
            steps{
                bat '''
                echo INstall Package inside the pipeline 
                npm ci
                '''
            }
        }


      
        
        stage("Start_App"){
            steps{
                bat '''
                echo Start the Node App
                '''
            }
        }

        stage("Backend_Start"){
            steps{
                bat '''
                echo backend App was Started
                '''
            }
        }
    }


    post{
        success{
            bat "echo All Stage are Successfully"
        }
        failure{
            bat "echo One Stage is failed i will run"
        }
        always{
            bat "echo I will run always"
        }
    }
}