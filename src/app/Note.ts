export interface Note {
    id?: string;
    dateTime: Date;
    title: string;
    body: string;
    starred: boolean;
}