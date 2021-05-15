// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2eo2bsf7t07lv4vtrh2hieod9v",     // CognitoClientID
  "api_base_url": "https://um9cbfkz2f.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-testtodoapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d11h0d8d6sddez.amplifyapp.com"
  // AmplifyURL
};

export default config;
