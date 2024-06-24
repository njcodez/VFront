import React, { useState, useEffect } from 'react';

interface FormProps {
  onChange: (formData: FormData) => void;
}

interface FormData {
  title: string;
  subject: string;
  courseCode: string;
  facultyName: string;
  studentName: string;
  registrationNumber: string;
}

const Form: React.FC<FormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    subject: '',
    courseCode: '',
    facultyName: '',
    studentName: '',
    registrationNumber: ''
  });

  const [showCourseCode, setShowCourseCode] = useState(false);
  const [showFacultyName, setShowFacultyName] = useState(false);

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    let updatedValue = value;

    switch (name) {
      case "title":
      case "subject":
      case "studentName":
      case "facultyName":
        updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
        break;
      case "courseCode":
      case "registrationNumber":
        updatedValue = value.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
        break;
      default:
        break;
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: updatedValue
    }));
  };

  return (
    <form>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </div>
      <div>
        <label>Course Code:</label>
        <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} />
      </div>
      <div>
        <label>Faculty Name:</label>
        <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} />
      </div>
      <div>
        <label>Student Name:</label>
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
      </div>
      <div>
        <label>Registration Number:</label>
        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
      </div>
    </form>
  );
};

export default Form;
