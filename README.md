# typrescript-practice

### Install TypeScript globaly

```
npm install -g typescript ts-node
```

#### To check the compiler:

```
tsc -- help
```

#### VSCode configurations(optional):

Set theme to 'Solarized Light'
settings - workbench themes - solarized light

#### Fetch from jsonplaceholder.typicode.com API

- Init json
- Create an index.ts file, add axios, create an axios call to the API

```
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});
```

Then in terminal compile index.ts file

```
tsc index.ts
```

It will create a index.js file that then you can run with node:

```
node index.js
```

You can use ts-node to compile and run at the same time:

```
ts-node index.tx
```

## Some Typescript datatypes

- interface are used to describe the structure of an object

```
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```
