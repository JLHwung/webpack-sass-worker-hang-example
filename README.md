# webpack-sass-worker-hang-example

A webpack example to demonstrate that when js compilation error occurs, there are chances that the sass compile worker is hang, thus the webpack does not exit on such compilation error.

See the project files for the brief construction ideas of this example.

## Reproduce
```
npm test
```
`webpack` will hang. The sample of the `node` process can be found in [sample.log](sample.log)

See also the [build status](https://travis-ci.org/JLHwung/webpack-sass-worker-hang-example) which reproduces the hang on travis.
