#!/bin/bash

set -eufo pipefail

node index.js

aws s3 cp build/ s3://misc.tools/ --recursive
aws s3api put-bucket-website --bucket misc.tools --website-configuration file://site.json
aws s3api put-bucket-website --bucket www.misc.tools --website-configuration file://www-redirect.json
