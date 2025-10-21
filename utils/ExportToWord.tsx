import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";

interface ExportToWordProps {
  content: string; // محتوى HTML أو نص تريد حفظه
  fileName?: string;
}

const ExportToWord: React.FC<ExportToWordProps> = ({ content, fileName = "distrubtion.docx" }) => {
  const handleExport = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph(content)],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, fileName);
  };

  return (
    <button onClick={handleExport} className="bg-blue-500 text-white px-4 py-2 rounded">
      حفظ كـ Word
    </button>
  );
};

export default ExportToWord;