export class StudentsInit {
    public id: number;
    public sex: string;
    public name: string;
    public detail: Array<any>;
    constructor() {
        this.id = -1;
        this.sex = '女';
        this.name = 'lvxin';
        this.detail = [];
    }
}
