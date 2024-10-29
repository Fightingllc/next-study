"use client";
import React, { useState, useEffect } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);

  // 上传文件到服务器
  const uploadFile = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      fetchImages(); // 上传成功后重新获取图片
    }
  };

  // 获取本地存储的图片
  const fetchImages = async () => {
    const res = await fetch('/api/images');
    const data = await res.json();
    setImages(data);
  };

  // 页面加载时获取图片
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
      <button onClick={uploadFile}>Upload</button>

      <div>
        <h2>Uploaded Images</h2>
        <div>
          {images.map((image, index) => (
            <img key={index} src={`/uploads/${image}`} alt={`uploaded ${index}`} style={{ width: '150px', margin: '10px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}
