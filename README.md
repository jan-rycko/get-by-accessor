# get-by-accessor
Strongly typed get with lookup.
Return type is strongly typed and autocompletion works.

Lookup strongly typed getters known to me had it downsides – either autocompletion didn't work, fallback couldn't be provided or/and array types couldn't be strongly typed.
Below you can see how this version fixes those issues.

## Installation
```sh
npm install --save get-by-accessor
```

## Usage
Let's say we have fairly simple nested object.
```JS
const object = {
    prop1: 1,
    prop2: {
        prop3: 'a',
        prop4: {
            prop5: true,
        },
        prop6: [1, 2, 3],
        prop7: [1, 'a', true],
    }
};
```
Now let's try to get some nested properties. Of course if any fail, we'll get default fallback.
```JS
import get from 'get-by-accessor';

const a = get(object, obj => obj.prop1) // number | null
const b = get(object, obj => obj.prop2.prop3) // string | null
const c = get(object, obj => obj.prop2.prop4.prop5) // boolean | null
```
Doesn't matter if it's object type or array type. Only downside is, when we have an array of different types – it'll resolve as union type.
```JS
const d = get(object, obj => obj.prop2.prop6[0]) // number | null
const e = get(object, obj => obj.prop2.prop7[0]) // number | string | true | null

```
Since accessor is not array of strings as in other implementations, we can provide fallback which defaults to `null`.
```JS
delete object.prop1;

const e = get(object, obj => obj.prop1, true) // number | true
```

## Issues and contribution
If you have any issues, use GitHub issue tracker. If you want to contribute, you're very welcome to send pull request.
