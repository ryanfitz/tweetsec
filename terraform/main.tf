provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_iam_role" "lambdaRole" {
  name = "tweetsec_lambda_role"
  assume_role_policy = "${file("${path.module}/assumeRolePolicy.json")}"
}

resource "aws_lambda_function" "tweetsecLambdaFunc" {
  filename = "tmp/tweetsec-lambda.zip"
  function_name = "tweetsec-lambda-func"
  role = "${aws_iam_role.lambdaRole.arn}"
  handler = "dist/lambda.handler"
  memory_size = 128
  runtime = "nodejs"
  timeout = 5
}

output "roleArn" {
  value = "${aws_iam_role.lambdaRole.arn}"
}

output "lambdaFuncArn" {
  value = "${aws_lambda_function.tweetsecLambdaFunc.arn}"
}