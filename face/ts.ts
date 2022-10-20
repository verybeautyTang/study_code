type Unpack<T> = T extends any[] ? T[number] : any




type Person = {
  name: string;
  age: number;
}

type Class = {
  stus: Person[]
}

type T2 = Class['stus']

type T1 = Unpack<T2>


