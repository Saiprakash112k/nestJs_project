import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        role: string;
        createdAt: Date;
        uodateAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        role: string;
        createdAt: Date;
        uodateAt: Date;
    }>;
    create(user: Prisma.UserCreateInput): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        role: string;
        createdAt: Date;
        uodateAt: Date;
    }>;
    update(id: string, user: Prisma.UserUpdateInput): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        role: string;
        createdAt: Date;
        uodateAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        age: string;
        email: string;
        role: string;
        createdAt: Date;
        uodateAt: Date;
    }>;
}
