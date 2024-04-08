import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
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
