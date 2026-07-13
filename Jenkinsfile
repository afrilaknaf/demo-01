pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                git branch : "main",
                url : "https://github.com/afrilaknaf/jenkins-project-code.git" 
            }
        }

        stage("Test"){
            steps{
                bat '''
                echo Test the stages in jenkins
                dir
                 '''
            }
        }


        stage("Build"){
            steps{
                bat '''
                echo Build the project
                if exist package.json (
                    echo Test Passed : package.json is exists
                ) else (
                    echo Test Failed : package.json is not exists
                )
                 '''
            }
        }
    }


    post{
        success{
            bat "echo i will all stage is successfull"
        }
        failure{
            bat "echo i will run if one stage is unsuccessfull"
        }
    }
}