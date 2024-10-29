import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const uploadDir = path.join(process.cwd(), '/public/uploads');

export async function GET() {
  try {
    const files = fs.readdirSync(uploadDir); // 读取上传目录
    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json({ error: 'Error reading files' }, { status: 500 });
  }
}
