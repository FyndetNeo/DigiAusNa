interface ButtonProps --> setzt die möglichen mitgebbaren properties und types fest
<></> --> Reactfragment
typoOfFunction --> : () => void
void --> gibt keinen return typ

export function Button --> erstellung der function und export
({ onClick }: children) --> Paramter ist onclick wird als Button Props definiert
<><> --> kann man als Grundgerüst nutzen (keine Pflicht)

```ts
const myPerson = {
    name: "max",
    age: 10
}

// normal way 
const name = myPerson.name
const age = myPerson.age

// when using destruction pattern 
const {name, age} = myPerson
```

export function Button({ onClick, children }: ButtonProps) --> mit buttonText einen weiteren Parameter mitgegeben in der Function, welchen den Text in dem Button Variabel macht, sodass man diesen auf mehreren Seiten nutzen kann. Den Text definiert man in der tsx Datei, indem der Button verwendet wird

children --> ist sinnvoller als eine Variable, da children keinen festen Datentyp nutzt und man so mehr möglichkeiten hat