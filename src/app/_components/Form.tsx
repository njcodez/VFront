import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';


interface FormProps {
  onChange: (formData: any) => void;
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
  



  const handleCopyToClipboard = async (event: React.FormEvent) => {
    event.preventDefault();
    const a4Div = document.querySelector('.a4-div') as HTMLElement;
  
    if (a4Div) {
      try {
        const transform = a4Div.style.transform;
        a4Div.style.transition = 'none';
        a4Div.style.transform = 'scale(1.1)';
        await new Promise(resolve => setTimeout(resolve, 10));
        a4Div.style.transition = 'transform 0.5s ease-in-out';
        a4Div.style.transform = transform;
        const imageBlob: Blob | null = await htmlToImage.toBlob(a4Div);
  
        if (imageBlob) {
          // Copy the image blob to the clipboard
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': imageBlob })]);
  
          console.log(imageBlob);
  
          // Show a brief pop-up message
          const popup = document.createElement('div');
          popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: purple;
            color: white;
            font-size: 18px;
            border-radius: 8px;
            z-index: 9999;
            opacity:0;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          `;
          popup.textContent = 'Image of A4 preview copied to clipboard';
          document.body.appendChild(popup);
          popup.style.opacity = '1';

          setTimeout(() => {
            document.body.removeChild(popup);
          }, 1000);
        } else {
          throw new Error('Failed to generate image blob');
        }
        
        setTimeout(() => {
          a4Div.style.transition = 'none';
          a4Div.style.transform = transform;
        }, 500);
  
      } catch (error) {
        console.error('Error capturing A4 preview:', error);
        alert('Failed to capture A4 preview');
      }
    } else {
      alert('A4 preview element not found');
    }
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
