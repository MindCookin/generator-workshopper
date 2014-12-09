This is an example exercise

----------------------------------------------------------------------
## HINTS

Just go through your __/exercises__ directory and you will see multiple folders. Each of these folders should be listed in _menu.json_ array to be available in the workshopper selector.

To see this example exercise running you just have to write a program that logs anything coming in the arguments (insert the code below in a file called program.js)

```js
console.log(process.argv)
```

Run it with `node program.js` and some numbers as arguments. e.g:

```sh
$ node program.js 1 2 3
```

In which case the output would be an array looking something like:

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

{appname} will be supplying arguments to your program when you run `{appname} verify program.js` so you don't need to supply them yourself. To test your program without verifying it, you can invoke it with `{appname} run program.js`. When you use `run`, you are invoking the test environment that {appname} sets up for each exercise.

For more information on creating your own exercises check out https://github.com/rvagg/workshopper

----------------------------------------------------------------------

