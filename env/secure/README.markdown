# Secure Environment Configuration

These values are encrypted using a `.pem` key that isn't distributed as part of the repository. The configuration present in these files pertains to API credentials, secure passwords, and the like. In production, environment variables are preferred.

The upside of this approach is that you can distribute changes to the configuration values safely through `git`, and decrypt the updated version using the same `.pem` key you already have, making the process a bit less tedious.