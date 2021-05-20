// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "dcekfce3mohqdpk7m32uorhn3",     // CognitoClientID
  "api_base_url": "https://394bp44uab.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "firstwebapptodo-test-app-todo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d10i02udm2us54.amplifyapp.com"                                    // AmplifyURL
};

export default config;
