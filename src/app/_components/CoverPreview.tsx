import React from "react";

interface CoverPreviewProps {
  formData: {
    title: string;
    subject: string;
    courseCode: string;
    facultyName: string;
    studentName: string;
    registrationNumber: string;
  };
}

const CoverPreview: React.FC<CoverPreviewProps> = ({ formData }) => {
  const {
    title,
    subject,
    courseCode,
    facultyName,
    studentName,
    registrationNumber,
  } = formData;

  return (
    <div className="bg-white transform a4-div flex h-full w-fullitems-center justify-center shadow-xl scale-75">
      <div className="a4-content flex flex-col h-full justify-between">
        <div className="flex justify-center mt-8 mb-8">
          <img
            id="collegeLogo"
            src="vit.png"
            alt="College Logo"
            style={{ maxHeight: "140px" }}
          />
        </div>

        <div className="flex flex-col items-center">
          {/* Title */}
          <div className="mb-8 mt-8 text-center">
            <h1 className="font-times-new-roman text-5xl font-bold">{title}</h1>
          </div>

          {/* Subject */}
          <div className="mb-2 text-center">
            <p className="font-times-new-roman text-2xl">Course: {subject}</p>
          </div>

          {/* Course Code (if provided) */}
          {courseCode && (
            <div className="mb-2 text-center">
              <p className="font-times-new-roman text-2xl">Course Code: {courseCode}</p>
            </div>
          )}

          {/* Submitted to */}{facultyName && (
          <div className="mb-2 mt-16 text-center">
            <p className="font-times-new-roman text-2xl font-semibold">Submitted to</p>
          </div> )}

          {/* Faculty Name (if provided) */}
          {facultyName && (
            <div className="mb-2 text-center">
              <p className="font-times-new-roman text-2xl">Prof. Dr. {facultyName}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col items-end mt-8">
          {/* Done by (Student Name) */}
          <div className="mb-2 text-right">
            <p className="font-times-new-roman text-2xl font-semibold">Done by</p>
            <p className="font-times-new-roman text-2xl">{studentName}</p>
          </div>

          {/* Registration Number */}
          <div className="text-right">
            <p className="font-times-new-roman text-2xl">{registrationNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPreview;
