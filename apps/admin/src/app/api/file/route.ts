import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('fileUrl');

  if (!fileUrl) return NextResponse.error();

  const res = await fetch(fileUrl);
  const file = await res.blob();

  return new NextResponse(file);
}
