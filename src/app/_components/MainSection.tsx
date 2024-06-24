// MainSection.tsx

"use client";
import React, { useState } from 'react';
import Form from './Form';
import CoverPreview from './CoverPreview';
import { FormData } from '../interfaces/interfaces';

const MainSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    subject: '',
    courseCode: '',
    facultyName: '',
    studentName: '',
    registrationNumber: ''
  });

  const handleFormDataChange = (newFormData: Partial<FormData>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      ...newFormData
    }));
  };

  return (
    <main className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 flex justify-center items-center bg-black">
        <Form onChange={handleFormDataChange} />
      </div>

      <div className="md:w-1/2 flex justify-center items-center bg-black">
        <CoverPreview formData={formData} />
      </div>
    </main>
  );
};

export default MainSection;
