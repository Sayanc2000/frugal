export type Store = {
    suggestions: string[]
    addSuggestion: (data: string) => void
}

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
    title: string;
    amount: number;
    kind: EntryType;
    expenseKind?: ExpenseKind;
}

export type Entry = {
    id: string;
    title: string;
    kind: EntryType;
    amount: number;
    expenseKind?: ExpenseKind;
    timestamp: string;
}