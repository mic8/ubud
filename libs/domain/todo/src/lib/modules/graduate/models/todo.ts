export class Data {
    public id: string | undefined | null; // generate by system
    public tittle: string | undefined | null;
    public created_at: string | undefined | null;
    
    public constructor(data: Partial<Data>) {
        Object.assign(this, data);
    }
}
