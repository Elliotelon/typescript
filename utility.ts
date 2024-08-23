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