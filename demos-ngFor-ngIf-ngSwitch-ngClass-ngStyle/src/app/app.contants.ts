
export interface StudentDetailColoun {
    month: number;
    maths: number;
    chinese: number;
    english: number;
}
export interface StudentsColoum {
    name: string;
    sex: string;
    age?: number;
    details?: Array<StudentDetailColoun>;
}