# Example 

```shell
$ npm install censor-words
```

```javascript
import { censorWords } from 'censor-words'

const filtered = censorWords('My name is Tien', ['Tien'])

console.log(filtered)
// My name is ***
```