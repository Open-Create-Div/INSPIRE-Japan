"use client";

import React, { useRef, RefObject } from 'react';
import { ContactFormRef } from './ContactForm';

interface SubmitButtonProps {
  formRef: RefObject<ContactFormRef>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ formRef }) => {
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (formRef.current) {
      await formRef.current.submitForm();
    }
  };

  return (
    <button
      type="submit"
      form="contact-form"
      className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-bold"
      onClick={handleSubmit}
    >
      送信する
    </button>
  );
};

export default SubmitButton; 