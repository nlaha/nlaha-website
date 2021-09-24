import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    SectionType,
} from "docx";
import { saveAs } from "file-saver";

function exportSiteAsPDF(data) {
    var request = new XMLHttpRequest();
    request.open("GET", "./styles.xml", false);
    request.send();
    var styles = request.responseText;
    console.log(styles);
    let doc = new Document({
        title: "Nathan Laha Resume",
        externalStyles: styles,
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        heading: HeadingLevel.TITLE,
                        children: [
                            new TextRun({
                                children: [new TextRun("Nathan Laha")],
                            }),
                        ],
                    }),
                    new Paragraph({
                        heading: HeadingLevel.SUBTITLE,
                        children: [
                            new TextRun({
                                children: [new TextRun("Computer Science Student @ WSU")
                                ],
                            }),
                        ],
                    }),
                ],
            },
            {
                properties: {
                    type: SectionType.CONTINUOUS,
                },
                children: [
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [
                            new TextRun("Contact Information"),
                        ],
                    }),
                    ...data.contacts.map((contact) => {
                        const arr = [];
                        arr.push(new Paragraph({
                            spacing: {
                                before: 0,
                                after: 0
                            },
                            indent: {
                                left: 320,
                            },
                            children: [
                                new TextRun({
                                    children: [
                                        new TextRun(contact.type + ": "),
                                        new TextRun(contact.value),
                                    ],
                                }),
                            ],
                        }));
                        return arr;
                    }).reduce((prev, curr) => prev.concat(curr), []),
                    new Paragraph({
                        spacing: {
                            before: 0,
                            after: 0
                        },
                        children: [
                            new TextRun({
                                text: "",
                            }),
                        ],
                    }),

                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("Education & Exeprience")],
                        spacing: {
                            before: 0,
                            after: 130,
                        },
                    }),
                    ...data.experiences
                        .map((experience) => {
                            const arr = [];

                            arr.push(
                                new Paragraph({
                                    heading: HeadingLevel.HEADING_3,
                                    children: [new TextRun(experience.title)],
                                    indent: {
                                        left: 320,
                                    },
                                }),
                                new Paragraph({
                                    heading: HeadingLevel.SUBTITLE,
                                    children: [new TextRun(experience.date)],
                                    indent: {
                                        left: 320,
                                    },
                                }),
                                new Paragraph({
                                    children: [new TextRun(experience.description)],
                                    indent: {
                                        left: 320,
                                    },
                                    spacing: {
                                        before: 0,
                                        after: 200,
                                    },
                                }),
                            );

                            return arr;
                        })
                        .reduce((prev, curr) => prev.concat(curr), []),
                    new Paragraph({
                        pageBreakBefore: true,
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("Skills")],
                        spacing: {
                            before: 0,
                            after: 130,
                        },
                    }),
                    ...data.skills
                        .map((skill) => {
                            const arr = [];

                            arr.push(
                                new Paragraph({
                                    children: [new TextRun("-  " + skill.name)],
                                    indent: {
                                        left: 320,
                                    },
                                    spacing: {
                                        before: 0,
                                        after: 130,
                                    },
                                })
                            );

                            return arr;
                        })
                        .reduce((prev, curr) => prev.concat(curr), []),
                    new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [new TextRun("Past Projects")],
                        spacing: {
                            before: 0,
                            after: 130,
                        },
                    }),
                    ...data.programming
                        .map((project) => {
                            const arr = [];

                            arr.push(
                                new Paragraph({
                                    heading: HeadingLevel.HEADING_3,
                                    children: [new TextRun(project.title)],
                                    indent: {
                                        left: 320,
                                    },
                                }),
                                new Paragraph({
                                    children: [new TextRun(project.description)],
                                    indent: {
                                        left: 320,
                                    },
                                    spacing: {
                                        before: 0,
                                        after: 200,
                                    },
                                }),
                            );

                            return arr;
                        })
                        .reduce((prev, curr) => prev.concat(curr), []),
                ],
            },
        ],
    });

    Packer.toBlob(doc).then((blob) => {
        // saveAs from FileSaver will download the file
        saveAs(blob, "NathanLaha_Resume.docx");
    });
}

export {
    exportSiteAsPDF,
};