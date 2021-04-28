# typescript-practice

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
ts-node index.ts
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

#### Type annotations for functions

- Code we add to tell Typescript what type of arguments a function will receive an what type of values it will return

#### Type inference for functions

- Typescript tries to figure out what type of value a function will return

### Typed Arrays

- Arrays where each element is some consistent type fo value
- TS can do type ingerence when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with 'map', 'forEach', 'reduce' functions
- Flexible - arrays can still contain multiple different types

#### When to use typed arrays?

- Any time we need to represent a collection of records with some arbitrary sort order

### Tuple - Array-like structure where each element represents some property of a record

- An array can be turned into a tuple by adding the type to it so the values won't be moved

```
const pepsi: [string, boolean, number] = ['brown', true, 40];
```

- Type alias can be use if when we have many instances of something:

```
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
```

### Interfaces

- Creates a new custom type, describig the property names and value types of an object

### General Strategy for Reusable Code in TS

- Create functions that accept arguments that are typed with interfaces
- Objectrs/classes can decide to 'implement' a given interface to work with a function

### Classes

- Blueprint to create an object with some fields(values) and methods(functions) to represent a "thing"
- Modifiers
  - public: This method can be called any where any time (default)
  - private: This method can only be called by other methods in this class
  - protected: This method can be called by other methods in this class, or by other methods in child classes
- Fields with inheritance:
  - If we add public to the constructor in the class we can use the constructor in child class

#### Interface + classes = How we get really strong code reuse in TS

## Bundling with Parcel

Tool to help us run Typescript in the browser:

```
npm install -g parcel-bundler
```

- Then create a new directory: maps. Inside create an index html, src directory and inside src create an index.ts
  - to use the parcel-bundler go inside directory maps:
  ```
  parcel index.html
  ```
  - This will create an app and run it in host 1234. Parcel creates an index Js file instead of index.ts

### Map app - It creates a marker on a google map for a user or company. When you click on marker it will show a pop up window personalized to company or user.

"src" Folder

- index.ts
- Map.ts
- User.ts
- Company.ts
  npmjs.com has a "faker" package to generate fake data. Look for API methods. Then Address module. This module can randomly generate: zipCode, city,, cityPrefix, citySuffix, streetName, streetAddres... etc.
  Name module can geneerate user information.
- To install faker package:
  - ```
    npm install faker
    ```
- We can also install types for faker from DefinitelyTyped: @types/faker

- ```
    npm install @types/faker

  ```

  Generate a Google Dev Project at http:console.developers.google.com

- Enable Google Maps support inside the project
- Generate an API key from google to be able to use google maps in the app.
- Add the google maps script tag to our html file

```
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKKSiZc6Fu2bumNd1tbMLaqinIs9CmwcA"></script>
```

- Then add types for google maps:

```
npm install --save @types/googlemaps
```

### Sorting Algorithm

- To organize file in this project we need to create a new directory named SORT. Add to directories there: src and build. Build will hold the compiler's files.
- to customize the compiler add a tsconfig.json file inside the sort directory with this command:

```
tsc --init
```

- To tell the compiler where to save the files go inside the configuration file and uncomment to lines:

```
"outDir": "./build" /* Redirect output structure to the directory. */,
"rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
```

Now when you run <strong>tsc</strong> in the Sort directory, it will compile the js files and send them to the build directory.

- If we type this command: tsc -W The compiler will watch for changes in our src directory

#### To have the compiler and TS working together without having to run the save and execute commands every time we make a change to json package, we can install a json file and nodemon to keep track of changes by doing npm start

```
npm init -y
npm install nodemon concurrently
```

- Open package json and add these scripts:

```
 "scripts": {
    "start:build": "tsc -W",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

### The sorter class should be able to sort numbers, strings, linkedLists. We could use <strong>Type Guards</strong> to personalize code for every different data type.

- To lift a restriction on two different types, like number and string, we use Type guards to trick TS into allowing to have array types on an array of numbers and an array of strings. So if we use an if statement, TS will only use number methods for an array of numbers.
- Type Guard for primitive types like number, string, boolean, symbol

```
if(typeof this.collection === "string"){}
```

- For any other type of value(every other value that is created with a constructor function) like Array, Date etc:

```
if (this.collection instanceof Array) {}
``
```

#### The Sorter class code should be completely generic for different kinds of data

- We'll create helper functions to make it happen:
  Instructions on how to be elegible for sorting:

```
classSorter {
  sort(){
    for() for()
    if(this.collection.compare()){
      this.collection.swap()
    }
  }
}
```

```
class NumbersCollection {
  data: number[];
  swap(i,j)
  compare(i,j)
  length: number
}
```

```
class CharactersCollection{
  swap(i,j)
  compare(i,j)
}
```

```
class LinkedList{
  swap(i,j)
  compare(i,j)
}
```

#### Abstrat Classes

- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet(we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method

#### Interfaces vs Inheritance/abstact Classes

- Interfaces:
  - Sets up a contract between different classes
  - Use when we have very different objects that we want to work together
  - Promotes loose coupling
- Inheritance/Abstract Classes:
  - Sets up a contract between different classes
  - Use when we are trying to build up a definition of an object
  - Strongly couples classes together

### Reusable Code, Stats app will read a CSV file, run it and analyze it.

#### CSV Data -> Load -> Parse -> Analyze -> Report

- Documentation on reading csv files: [NodeJS.org](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)
- To ready csv file, import fs into index.ts It will give us an error because we haven't installed the type definition file for node js.

```
npm install @types/node
```

To turn our Json data into an array of strings:

```
const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8',
});
```

Then, to return it into another two dimensional array of more usable data structure - string[][]:

```
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });
```

Using Enums - enumeration. Signaling to other engineers about a collection of closely related values.

```
enum MatchResult  {
  HomeWin ='H',
  AwayWin = 'A',
  Draw = 'D',
};
```

##### When to use Enums:

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

##### Make the reading, parsing, analysing data generic and reusable

- Create a separagte class that will only read the csv files
  - Fields - filename: string, data: string[][]
  - Methods - read():void
- Create a separate class to parse date from "10/28/2018" to [2018,10,28]
  <strong>Type assertion</strong> is when we as developers are trying to override TS default behavior, row[5] as MatchResult

```
type MatchData = [Date, string, string, number, number, MatchResult, string];

   .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult
        ];
      });
```

Tuples are very similar to arrays but organize the data in a specific order. Tuple type definitions to describe data.

```
To define a typle as a new type:
type MatchData = [Date, string, string, number, number, MatchResult, string];
```

##### Refactoring CsvFileReader to make it reausable. Aproach # 1 - Inheritance

- abstract class CsvFileReader -> read():void -> mapRow(string[]): MatchData
- class MatchReader - mapRow(string[]): MatchData (extends CsvFileReader)

### Generics - By convenction you use the letter T for Type of Data

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code ex:

```
class HoldAnything<T>{
  data: T
}
const holdNumber = new HoldAnything<number>()
holdNumber.data = 123

const holdString = new HoldAnything<string>()
holdString.data = "isString"
```

##### Refactoring CsvFileReader to make it reausable. Aproach # 2 - Interface-Based

- interface DataReader:
  - read(): void
  - data: string[][]
- class MatchReader
  - reader: DataReader
  - load(): void
- class CsvFileReader
  - read(): void
  - data: string[][]

### Inheritance vs Composition

- Inheritance is characterized by an "is a" relationship between two classes
- Composition(one object has a reference to another object) is characterized by a "has a" relationship between two classes
