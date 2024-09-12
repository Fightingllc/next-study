"use client";

import React, { useState } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  children: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative">
      <pre className={`language-${language}`}>
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 text-sm bg-gray-800 text-white rounded focus:outline-none hover:bg-gray-700"
      >
        {copied ? <FiCheck /> : <FiClipboard />}
      </button>
    </div>
  );
};

export default CodeBlock;
