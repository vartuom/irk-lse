import {
    AlignmentType,
    Document,
    HorizontalPositionAlign,
    HorizontalPositionRelativeFrom,
    ImageRun,
    Paragraph,
    SectionType,
    TextRun,
    TextWrappingSide,
    TextWrappingType,
    VerticalPositionAlign,
    VerticalPositionRelativeFrom,
} from "docx";
import moment from "moment";

import { IAppeal } from "../../../types/types";
import logo from "../../../images/lselogo.png";

export async function docForOneAppeal(appeal: IAppeal): Promise<Document> {
    const lseLogo = await fetch(logo);
    const doc = new Document({
        sections: [
            {
                properties: {
                    type: SectionType.NEXT_PAGE,
                },
                children: [
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new ImageRun({
                                data: await lseLogo.blob(),
                                transformation: {
                                    width: 208,
                                    height: 200,
                                },
                                floating: {
                                    horizontalPosition: {
                                        relative:
                                            HorizontalPositionRelativeFrom.MARGIN,
                                        align: HorizontalPositionAlign.RIGHT,
                                        /* offset: 500, */
                                    },
                                    verticalPosition: {
                                        relative:
                                            VerticalPositionRelativeFrom.MARGIN,
                                        align: VerticalPositionAlign.TOP,
                                        /* offset: 500, */
                                    },
                                    wrap: {
                                        type: TextWrappingType.SQUARE,
                                        /* side: TextWrappingSide.LEFT, */
                                    },
                                    margins: {
                                        /* bottom: 100, */
                                    },
                                },
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: `Обращение: #${appeal.id}`,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: `От ${moment(appeal.createdAt).format(
                                    "Do MMMM YYYY"
                                )}`,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [new TextRun("\n")],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: `Отправитель: ${appeal.lastName} ${
                                    appeal.firstName
                                } ${appeal.middleName ?? ""}`,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: `E-mail: ${appeal.email}`,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: `Доп. Информация: ${appeal.extraContacts}`,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 10, before: 0 },
                        thematicBreak: true,
                        children: [new TextRun("")],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: appeal.appealText,
                                size: 28,
                            }),
                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 160, before: 160 },
                        children: [new TextRun("\n")],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 160, before: 160 },
                        children: [new TextRun({ text: "Печать", size: 28 })],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 160, before: 160 },
                        children: [new TextRun("\n")],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { after: 160, before: 160 },
                        children: [
                            new TextRun({
                                text: "____________________",
                                size: 28,
                            }),
                        ],
                    }),
                ],
            },
        ],
    });
    return doc;
}

export async function docForMultipleAppeals(
    appeals: Array<IAppeal>
): Promise<Document> {
    const lseLogo = await fetch(logo);
    const lseLogoBlob = lseLogo.blob();
    const opts = await Promise.all(
        appeals.map(async (appeal) => ({
            properties: {
                type: SectionType.NEXT_PAGE,
            },
            children: [
                new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new ImageRun({
                            data: await lseLogoBlob,
                            transformation: {
                                width: 208,
                                height: 200,
                            },
                            floating: {
                                horizontalPosition: {
                                    relative:
                                        HorizontalPositionRelativeFrom.MARGIN,
                                    align: HorizontalPositionAlign.RIGHT,
                                    /* offset: 500, */
                                },
                                verticalPosition: {
                                    relative:
                                        VerticalPositionRelativeFrom.MARGIN,
                                    align: VerticalPositionAlign.TOP,
                                    /* offset: 500, */
                                },
                                wrap: {
                                    type: TextWrappingType.SQUARE,
                                    /* side: TextWrappingSide.LEFT, */
                                },
                                margins: {
                                    /* bottom: 100, */
                                },
                            },
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: `Обращение: #${appeal.id}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: `От ${moment(appeal.createdAt).format(
                                "Do MMMM YYYY"
                            )}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [new TextRun("\n")],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: `Отправитель: ${appeal.lastName} ${
                                appeal.firstName
                            } ${appeal.middleName ?? ""}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: `E-mail: ${appeal.email}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: `Доп. Информация: ${appeal.extraContacts}`,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 10, before: 0 },
                    thematicBreak: true,
                    children: [new TextRun("")],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: appeal.appealText,
                            size: 28,
                        }),
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 160, before: 160 },
                    children: [new TextRun("\n")],
                }),
                new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 160, before: 160 },
                    children: [new TextRun({ text: "Печать", size: 28 })],
                }),
                new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 160, before: 160 },
                    children: [new TextRun("\n")],
                }),
                new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { after: 160, before: 160 },
                    children: [
                        new TextRun({
                            text: "____________________",
                            size: 28,
                        }),
                    ],
                }),
            ],
        }))
    );
    const doc = new Document({
        sections: opts,
    });
    return doc;
}
