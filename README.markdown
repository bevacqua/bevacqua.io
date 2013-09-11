# [**io**](http://bevacqua.io)

Technical concept-proofing Node module architecture

_(oh, and my personal website)_

# First Timer

For a first time developer environment setup, you'll want to run the following:

```shell
grunt dev_setup
```

That will configure everything required to run the development environment from scratch. Note that you'll need to be provided with the `env/.private.pem` key in order to be able to decrypt the `dev_sensitive.pemjson` file.

# Flow

In local development you can use `grunt` to configure and build everything. As you make changes, the `watch` task will re-compile any assets as needed, and its `livereload` target will load changes in the browser, making for continuous development.

In order to enable `livereload`, you'll need to install the [browser extension](http://feedback.livereload.com/knowledgebase/articles/86242).