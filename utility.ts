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