# node-include

Require local files relative to the path provided at require.

# install

npm install kfz-include

# usage

default path is yourProject/src/widget
```js
var include = require('widget');
```

#### without include

```js
var foo = require('../../../path/to/foo');
```

#### with include

```js
var foo = include('path/to/foo');
```

# license
MIT
