# stylus-test-runner

DSL for testing your stylus source code

### Preview
```
// @it should support 1 2 3 and 4up with sides only
.foo
  clockhand(1)
  clockhand(1 2)
  clockhand(1 2 3)
  clockhand(1 2 3 4)
// @expect
.foo {
  top: 1; right: 1; bottom: 1; left: 1;
  top: 1; right: 2; bottom: 1; left: 2;
  top: 1; right: 2; bottom: 3; left: 2;
  top: 1; right: 2; bottom: 3; left: 4;
}
```
```
$ make test

  Clockhand
    ✓ should support 1 2 3 and 4up for a given property (69ms)
```


### Install

I will eventually publish to Npm, add git url to `package.json` for now


### Api

No APi docs yet, see example usage until I write some:
- https://github.com/jasonkuhrt/clockhand-stylus/tree/master/test
- https://github.com/jasonkuhrt/clockhand-stylus/blob/master/test-runner.js
