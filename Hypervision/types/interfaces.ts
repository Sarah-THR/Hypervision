export interface User {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Job: string;
    IsEnable: boolean;
    Role: Role;
}

export interface Role {
    Id: number;
    Name: string;
}

export interface Groups {
    Id: number;
    Name: string;
    IsEnable: boolean;
    Users: UserGroups[];
}

export interface UserGroups{
    UserId: number,
    GroupId: number,
    StartDate: Date,
    EndDate: Date,
}
