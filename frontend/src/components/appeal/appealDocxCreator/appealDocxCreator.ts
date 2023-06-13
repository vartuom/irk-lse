import { Packer } from "docx";
import moment from "moment";
import logo from "../../../images/lselogo.png";
import { IAppeal } from "../../../types/types";
import { docForMultipleAppeals, docForOneAppeal } from "./document-cv";

/** Singletone class for generating docx files based on Docx schemas */
export default class AppealDocxCreator {
    static instance: AppealDocxCreator;

    static init(): AppealDocxCreator {
        if (!AppealDocxCreator.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    private appeal: IAppeal | undefined;

    private appeals: Array<IAppeal>;

    private constructor() {
        this.appeal = undefined;
        this.appeals = [];
    }

    public setAppeal(new_appeal: IAppeal) {
        this.appeal = new_appeal;
    }

    public setAllAppeals(appeals: Array<IAppeal>) {
        this.appeals = appeals;
    }

    /** before proceeding with generate docx file
     *  requires initialization of appeal
     *  by calling setAppeal method */
    public async generate(): Promise<Blob> {
        if (!this.appeal)
            throw Error(
                'appeal data uninitialized, perhaps method "setAppeal" for docxGenerator wasn\'t called'
            );
        const doc = await docForOneAppeal(this.appeal);
        const blob = await Packer.toBlob(doc);
        return blob;
    }

    /** before proceeding with generateAllAppeal
     *  requires initialization of appeal
     *  by calling setAppeals method */
    public async generateAllAppeals(): Promise<Blob> {
        if (!this.appeals) {
            throw Error(
                'appeals List uninitialized, perhaps method "setAllAppeals" for docxGenerator wasn\'t called'
            );
        }
        const doc = await docForMultipleAppeals(this.appeals);
        const blob = await Packer.toBlob(doc);
        return blob;
    }
}
