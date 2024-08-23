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
