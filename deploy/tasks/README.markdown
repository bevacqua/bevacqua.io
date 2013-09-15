# Deploying to Amazon Web Services

The first time around, you'll [**need to get**](http://www.pip-installer.org/en/latest/installing.html) `pip` to be able to deploy. Then, this command will install the `awscli` command-line tools for AWS:

```shell
grunt deploy_setup
```

You'll also need to have a **Security Group** set up on AWS. Make sure to enable rules for inbound SSH (port 22) and HTTP (port 80) traffic.

The `ec2_launch` command will create a key pair, launch a new EC2 instance, and tag it with the name you provided.

```shell
grunt ec2_launch:voodoo
```

To terminate the `voodoo` instance, you can run the following:

```shell
grunt ec2_shutdown:voodoo
```

Note that this command will look for all instances described with a tag Name whose value is `voodoo`. The key-pair registered for this instance will also be removed.
