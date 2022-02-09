interface User {
    id: string;
    name: string;
    age?: number;
    role: "admin" | "moderator" | "user";
    occupation?: string;
}
// 1. create type in which all User properties will be required

type requiredUser = Required<User>

const user: requiredUser = {
    id: "123",
    name: "Nikusha",
    age: 33,
    role: "admin",
    occupation: "www"
}

// 2. create type from User and remove "age" property from it

type DeletedAge = Omit<User, "age">

const user1: DeletedAge = {
    id: "123",
    name: "Nikusha",
    role: "admin",
    occupation: "www"
}
// 3. create a method for editing user object, updateUser(user: User, fieldsToUpdate: X)

function updateUser(user: User, fieldsToUpdate: Partial<User>) {
    return {
        ...user,
        ...fieldsToUpdate,
    }
}
const updatedUser: User = updateUser(user, {
    role: "user",
    age: 34,
})
console.log(updatedUser);
// what type should be instead of X?
// იმიტომ, რომ შეგვიძლია შევცვალოთ ობიექტის ნებისმიერი ფროფერთი, რომლებიც არის სხვადასხვა ტიპის.

// 4. pick id and name from User into another type and make them readonly

type Readonlies = Readonly<Pick<User, "id" | "name">>;

const user2: Readonlies = {
    id: "1234",
    name: "Nikusha",
}

// 5. create a new type RoleUppercase, which gets one of the roles
// as a generic parameter and makes it uppercase

type Keys = User["role"];

type RoleUppercase<T extends Keys> = Uppercase<T>;


type Uppercased = RoleUppercase<"admin">;


const role: Uppercased = "ADMIN";

