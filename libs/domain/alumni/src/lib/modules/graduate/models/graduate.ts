export class Graduate {
    public id: string | undefined | null; // generate by system
    public name: string | undefined | null;
    public graduateYear: number | undefined | null;
    
    public constructor(data: Partial<Graduate>) {
        Object.assign(this, data);
    }
}
