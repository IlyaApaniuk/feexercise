export interface IAnswers {
    [p: string]: string | undefined;
    role?: string;
    companySize?: string;
    applicationIdeaToBuild?: string;
}

export enum PropName {
    Role = "role",
    CompanySize = "companySize",
    ApplicationIdeaToBuild = "applicationIdeaToBuild"
}
