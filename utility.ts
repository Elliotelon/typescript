// type Partial<T> = {
//     [P in keyof T]?: T[P]
// } 

interface User {
    name: string;
    age: number;
    phone: number;
}

type PartialUser = Partial<User>; // User의 속성을 모두 옵셔널로 설정

// type PartialUser = {
//     name?: string | undefined;
//     age?: number | undefined;
//     phone?: number | undefined;
// }



let user : PartialUser = {name: "kim"};

console.log(user.name); // kim
console.log(user.age); // undefined
console.log(user.phone); // undefined


// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

interface User2 {
    name?: string;
    age?: number;
    phone: string;
 }
 
 type RequiredUser = Required<User2>; // User의 속성을 모두 일반 타입으로
 /*
 type Required_User = {
     name: string;
     age: number;
     phone: number;
 }
 */
 
 const user2: Required<User2> = {
    name: 'lee',
    age: 22,
    phone: "01012341234"
}

console.log(user2.phone)

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };


interface User3 {
    name?: string;
    age?: number;
    phone: number;
 }
 
 type ReadonlyUser = Readonly<User3>; // 인터페이스 User의 속성을 모두 readonly 설정
 /*
 type ReadonlyUser = {
     readonly name?: string;
     readonly age?: number;
     readonly phone: number;
 }
 */
 
 const user3: Readonly<User3> = {
    name: '홍길동',
    age: 22,
    phone: 111,
 };
 
//  user3.age = 11; // ERROR !!

// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

type Key = 'name' | 'age' | 'phone';

type RecordUser = Record<Key, number>; // 유니온 Key의 'name', 'age', 'phone' 타입들을 속성으로 하여 number 타입으로 설정
/*
type RecordUser = {
    name: number;
    age: number;
    phone: number;
}
*/

const user4: Record<Key, number> = {
   name: 9999,
   age: 22,
   phone: 111,
};

// type Pick<T, K extends keyof T> = { // 핵심은 제네릭 T 와 K의 관계를 extends로 먼저 조건을 명시해주어야 한다.
//     [P in K]: T[P];
// };

interface User {
    name: string;
    age: number;
    email: string;
    isValid: boolean;
 }
 
 type Key2 = 'name' | 'email';
 
 type PickUser = Pick<User, Key2>; // User 인터페이스의 속성에서 'name', 'email' 만 선택
 /*
 type PickUser = {
     name: string;
     email: string;
 }
 */
 
 const user5: Pick<User, Key2> = {
    name: 'kim',
    email: 'kim@naver.com',
 };


//  type Exclude<T, U> = T extends U ? never : T;

type Type = string | number | object;

type Exclude_Type = Exclude<Type, number>; // 유니온 Type의 string | number | object 에서 number을 제외
/*
type Exclude_Type = string | object
*/

const a: Exclude<Type, number> = 'string';
const b: Exclude<Type, number> = { name: '홍길동' };

const c: Exclude<Type, object> = 'string';
const d: Exclude<Type, object> = 123123;

type T0 = Exclude<("a" | "b" | "c"), ("a")>;  // "b" | "c"
type T1 = Exclude<("a" | "b" | "c"), ("a" | "b")>;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// type Extract<T, U> = T extends U ? T : never;

type Type1 = string | number | object | null;
type Type2 = number | boolean;

type Extract_Type = Extract<Type1, Type2>; // 유니온 Type1에서 유니온 Type2 와 일치하는 타입 number만 추출
/*
type Extract_Type = number
*/

const num: Extract<Type1, Type2> = 123123;

