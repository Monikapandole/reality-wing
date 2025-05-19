import React, { useEffect, useState } from 'react';
import { getTermsAndConditions } from '../Api/services/policy';

const TermsAndConditions = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await getTermsAndConditions();
        setContent(data);
      } catch (error) {
        setContent(error.message);
      }
    };

    loadContent();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <pre className="whitespace-pre-wrap text-gray-800">{content}</pre>
    </div>
  );
};

export default TermsAndConditions;
