import "./test.scss";
// I know it is weird and defintely non-sense to require webpack config on the entry,
// I choose this js file since it has many js dependencies, thus
// when webpack find a js compilation error, chances are the sass compile worker has been started, which may become hang later

// expected to throw compilation error `fs` is not defined on `extract-webpack-text-plugin`
import "./config";
