import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';

interface FormData {
    title: string;
    subject: string;
    courseCode: string;
    facultyName: string;
    studentName: string;
    registrationNumber: string;
  }

interface FormProps {
  onChange: (formData: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState({
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
      case "studentName":
      case "facultyName":
        case "title":
            case "subject":
        
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
    const a4Div = document!.querySelector('.a4-div') as HTMLElement;
  
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
    <form
      onSubmit={handleCopyToClipboard}
       className="bg-white p-8 rounded-lg shadow-lg ring- ring-white ring-opacity-50 w-full max-w-md space-y-6 mt-24"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">⚡Generate Cover Pages⚡ </h2>
      <div>
        <label className="block text-gray-700">Student Name</label>
        <input
          type="text"
          name="studentName"
          placeholder="Enter student name"
          value={formData.studentName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">Registration Number</label>
        <input
          type="text"
          name="registrationNumber"
          placeholder="Enter registration number"
          value={formData.registrationNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-gray-700">
          Title
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700">
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </label>
      </div>
      <div className="toggle-switch-container">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={showCourseCode}
            onChange={() => {
              setShowCourseCode(prev => !prev);
              if (!showCourseCode) {
                setFormData(prevData => ({ ...prevData, courseCode: '' }));
              }
            }}
          />
          <span className="toggle-slider round"></span>
        </label>
        <span className="toggle-label">Course Code</span>
        {showCourseCode && (
          <input
            type="text"
            name="courseCode"
            placeholder="Enter course code"
            value={formData.courseCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )}
      </div>
      <div className="toggle-switch-container">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={showFacultyName}
            onChange={() => {
              setShowFacultyName(prev => !prev);
              if (!showFacultyName) {
                setFormData(prevData => ({ ...prevData, facultyName: '' }));
              }
            }}
          />
          <span className="toggle-slider round"></span>
        </label>
        <span className="toggle-label">Faculty Name</span>
        {showFacultyName && (
          <input
            type="text"
            name="facultyName"
            placeholder="Enter faculty name"
            value={formData.facultyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Copy to clipboard😉
      </button>
    </form>
  );
};

export default Form;
