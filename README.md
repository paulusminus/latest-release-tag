# latest-release-tag

Sometimes we need te combine software from differenct projects in one product.
This github action gets the the tagname of the latest release from a github repository.

It can be used to download an asset from a repository to be used in another project.

## Usage

<!-- start usage -->
```yaml
name: "Publish Immutable Action Version"

on:
  push:
    tag: 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    - name: Report node version
      run: node --version
    - name: Check out repo
      uses: actions/checkout@v4
    - name: Get the latest release from paulusminus/lipl-control
      id: latest-release
      uses: paulusminus/latest-release-tag@v1
    - name: Download the latest-release
      run: mkdir -p download && wget -qO- &{URL} | tar xz -C download
      env:
        URL: https://github.com/paulusminus/lipl-control/releases/download/${{ steps.latest-release.outputs.latest }}/lipl-pwa.tar.gz
```
<!-- end usage -->
