import React, { useEffect, useState } from 'react';
import { getPrivacyPolicy } from '../Api/services/policy';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await getPrivacyPolicy();
        setContent(data);
      } catch (error) {
        setContent(error.message);
      }
    };

    loadContent();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <pre className="whitespace-pre-wrap text-gray-800">{content}</pre>
    </div>
  );
};

export default PrivacyPolicy;
