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

export interface ICredentials {
    username: string;
    password: string;
}

export interface IGetAppealsQueryOpts {
    isProcessed: boolean;
    sort: string;
    page: string;
    name: string;
    email: string;
    startDate: Date;
    endDate: Date;
    id: number;
}

export enum SortOpts {
    DATE_CREATED,
    DATE_UPDATED,
}
