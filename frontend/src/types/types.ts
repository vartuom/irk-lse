export interface IAppeal {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    appealText: string;
    isProcessed?: boolean;
    extraContacts?: string;
}
