import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phone = searchParams.get('phone');

  if (!phone) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }

  try {
    // 電話番号の形式チェックのみ
    // 日本の電話番号の場合
    const japanRegex = /^0[789]0\d{8}$|^0\d{9}$/;
    const isValid = japanRegex.test(phone);

    // デモ用に、形式が正しければ常に有効とみなす
    return NextResponse.json({ isValid });
  } catch (error) {
    return NextResponse.json({ isValid: false });
  }
} 