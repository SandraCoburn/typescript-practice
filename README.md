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

- Types: are used by the Typescript Compiler to analyze our code for errors. Types allow other engineers to understand whant values are flowing around our codebase.
  - Easy way to refer to the different properties and functions that a value has like arrays, strings etc.
  - Every value that we create has a type assigned to it.
  - Primitive Types:
    - number, string, boolean, symbol, void, null, undefined
  - Object Types:
    - functions, classes, arrays, objects
  - Type Annotations - Code we add to tell typescript what type of value a variable will refer to.
    - Variables
    - Functions
    - Objects
  - Type annotations are needed:
    - When we declare a variable on one line then initialize it later
    - When we sant a variable to have a type that can't be inferred
    - When a function returns they "any" type and we need to clarigy the value
      - any - Type:
        - A type, just as "string" or "boolean" are
        - Means TS has no idea wha this is - can't check for correct property references
        - Avoid variables with "any" at all costs
  - Type Inference - Typrescript tries to figure out what type of value a variable refers to
