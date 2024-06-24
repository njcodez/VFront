export interface FormData {
    title: string;
    subject: string;
    courseCode: string;
    facultyName: string;
    studentName: string;
    registrationNumber: string;
  }
  
  export interface FormProps {
    onChange: (newFormData: Partial<FormData>) => void;
  }
  