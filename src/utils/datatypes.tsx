export type UserToken = {
    access_token: string;
    token_type: string;
}

export type LoginValues = {
    email: string;
    password: string;
}

export enum EntryType {
    EXPENSE = "EXPENSE",
    INCOME = "INCOME"
}

export enum ExpenseKind {
    NEED = "NEED",
    WANT = "WANT"
}

export type EntryValues = {
    amount: number;
    kind: EntryType;
    expenseKind?: ExpenseKind;
}

export type Entry = {
    id: string;
    kind: EntryType;
    amount: number;
    expenseKind?: ExpenseKind;
    timestamp: string;
}