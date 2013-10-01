# [**io**](http://bevacqua.io)

Technical concept-proofing Node module architecture

_(oh, and my personal website)_

# Setup

For a first time developer environment setup, you'll want to run the following:

```shell
grunt dev_setup
```

Now you're all set to start working in the development environment. Just issue this command to start your continuous development cycle:

```shell
grunt dev # aliased `grunt`
```

That will configure everything required to run the development environment from scratch. Note that you'll need to be provided with the `env/private/dev.pem` key in order to be able to decrypt `env/secure/dev.pemjson`.

# Development Flow

In local development you can use `grunt` to configure and build everything. As you make changes, the `watch` task will re-compile any assets as needed, and its `livereload` target will load changes in the browser, making for continuous development.

In order to enable `livereload`, you'll need to install the [browser extension](http://feedback.livereload.com/knowledgebase/articles/86242).

# Deployment

See the [README](https://github.com/bevacqua/io/tree/master/deploy/README.markdown) about deploys.
