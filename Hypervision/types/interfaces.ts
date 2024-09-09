export interface User {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Job: string;
    IsEnable: boolean;
    Roles: Role;
}

export interface Role {
    Id: number;
    Name: string;
}