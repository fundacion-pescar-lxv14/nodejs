interface color {
    Hex: `#${string}`;
    RGB: `rgb(${number},${number},${number})`;
    HSL: `hsl(${number}, ${number}%, ${number}%)`;
}

interface UserProfile {
    name: string;
    id: `${string}-${string}-${string}-${string}-${string}`;
    email: `${string}@${string}.${string}`|`${string}@${string}.${string}.${string}`;
}

interface userData extends UserProfile {
    address: `${string} - ${string} (${string})`;
    city: string;
    phone: `(${number})${number}-${number}`;
}

class User {
    name: userData["name"];
    id: userData["id"];
    email: userData["email"];
    constructor(public data: userData) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
        this.data = data;
    }
}

const user: userData = ({
    name: "John Doe",
    id: crypto.randomUUID(),
    email: "John.Doe@gmail.com",
    address: "123 Main St - New York (NY)",
    city: "New York",
    phone: "(011)456-7890",
});

console.log(user)

export default user;