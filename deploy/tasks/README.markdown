# Deploying to Amazon Web Services

The first time around, you'll [**need to get**](http://www.pip-installer.org/en/latest/installing.html) `pip` to be able to deploy. Then, this command will install the `awscli` command-line tools for AWS:

```shell
grunt deploy_setup
```

You'll also need to have a **Security Group** set up on AWS. Make sure to enable rules for inbound SSH (port 22) and HTTP (port 80) traffic.
