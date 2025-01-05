const users = [
    { email: "ahnaf@gmail.com", password: "password" },
    { email: "abir@gmail.com", password: "password" },
    { email: "ahnafabir@gmail.com", password: "password" },
    { email: "ahnaf520@gmail.com", password: "password" },
];

export const getUser = email =>{
    const found = users.find(user=> user.email ===email);
    return found;
}