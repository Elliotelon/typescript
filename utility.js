// type Partial<T> = {
//     [P in keyof T]?: T[P]
// } 
// type PartialUser = {
//     name?: string | undefined;
//     age?: number | undefined;
//     phone?: number | undefined;
// }
var user = { name: "kim" };
console.log(user.name); // kim
console.log(user.age); // undefined
console.log(user.phone); // undefined
/*
type Required_User = {
    name: string;
    age: number;
    phone: number;
}
*/
var user2 = {
    name: 'lee',
    age: 22,
    phone: "01012341234"
};
console.log(user2.phone);
/*
type ReadonlyUser = {
    readonly name?: string;
    readonly age?: number;
    readonly phone: number;
}
*/
var user3 = {
    name: '홍길동',
    age: 22,
    phone: 111,
};
/*
type RecordUser = {
    name: number;
    age: number;
    phone: number;
}
*/
var user4 = {
    name: 9999,
    age: 22,
    phone: 111,
};
/*
type PickUser = {
    name: string;
    email: string;
}
*/
var user5 = {
    name: 'kim',
    email: 'kim@naver.com',
};
/*
type Exclude_Type = string | object
*/
var a = 'string';
var b = { name: '홍길동' };
var c = 'string';
var d = 123123;
/*
type Extract_Type = number
*/
var num = 123123;
