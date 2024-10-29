import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), '/public/uploads');

// 确保上传目录存在
const ensureDirExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// 处理 POST 请求
export async function POST(req: Request) {
  ensureDirExists(uploadDir); // 创建上传目录

  const form = new formidable.IncomingForm(); // 确保正确使用 IncomingForm
  
  return new Promise<NextResponse>((resolve, reject) => {
    const nodeReq = req as never; // 转换请求对象

    form.parse(nodeReq, (err, fields, files) => {
      if (err) {
        return reject(NextResponse.json({ error: 'File upload error' }, { status: 500 }));
      }

      // 获取文件信息
      const file = files.file as unknown as formidable.File;
      const filePath = path.join(uploadDir, file.originalFilename || file.newFilename || 'unknown'); // 使用合适的文件名

      // 移动文件到指定路径
      fs.renameSync(file.filepath, filePath);

      resolve(NextResponse.json({ filePath }, { status: 200 }));
    });
  });
}

// 处理 OPTIONS 请求
export async function OPTIONS() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
