import {
    AlignmentType,
    Document,
    Packer,
    Paragraph,
    SectionType,
    TextRun,
} from "docx";

interface IAppeal {
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

export default class AppealDocxCreator {
    static instance: AppealDocxCreator;

    static init(): AppealDocxCreator {
        if (!AppealDocxCreator.instance) {
            this.instance = new this();
            console.log("AppealDocxCreater Singleton created!");
        }
        return this.instance;
    }

    private appeal: IAppeal | undefined;

    private constructor() {
        this.appeal = undefined;
    }

    public setAppeal(new_appeal: IAppeal) {
        this.appeal = new_appeal;
    }

    public async generate(): Promise<Blob> {
        if (!this.appeal)
            throw Error(
                'Appeal data uninitialized, perhaps method "setAppeal" wasn\'t called'
            );
        const doc = new Document({
            sections: [
                {
                    properties: {
                        type: SectionType.CONTINUOUS,
                    },
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [new TextRun(this.appeal.email)],
                        }),
                    ],
                },
            ],
        });
        const blob = await Packer.toBlob(doc);
        return blob;
    }
}
