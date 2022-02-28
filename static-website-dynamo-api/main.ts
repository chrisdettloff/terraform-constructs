import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    // Use updated website bucket construct for static website
    new S3Bucket(this, "aws_s3_bucket", {
      bucket: "portfolio",
      acl: "public_read",
    });
  }
}

const app = new App();
new MyStack(app, "static-website-dynamo-api");
app.synth();
