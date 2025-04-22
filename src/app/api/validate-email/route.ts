import { NextResponse } from 'next/server';
import dns from 'dns/promises';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');

  if (!domain) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }

  try {
    // DNS MXレコードの存在確認
    await dns.resolveMx(domain);
    return NextResponse.json({ isValid: true });
  } catch (error) {
    return NextResponse.json({ isValid: false });
  }
} 