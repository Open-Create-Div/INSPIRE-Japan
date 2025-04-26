import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// メール送信設定
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// お客様向けメールテンプレート
const customerEmailTemplate = (formData: any) => `
お問い合わせありがとうございます。

以下の内容でお問い合わせを受け付けました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お名前】
${formData.name}

【メールアドレス】
${formData.email}

【電話番号】
${formData.phone}

【お問い合わせ内容】
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

担当者より2営業日以内にご連絡させていただきます。
今しばらくお待ちください。

──────────────────────────────
INSPIRE Japan株式会社
〒197-0023
東京都福生市志茂14-1 ロードサイド福生C号
TEL: 0120-488-895
URL: https://inspire-japan.co.jp
──────────────────────────────
`;

// 自社向けメールテンプレート
const companyEmailTemplate = (formData: any) => `
新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お名前】
${formData.name}

【メールアドレス】
${formData.email}

【電話番号】
${formData.phone}

【お問い合わせ内容】
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2営業日以内にご対応をお願いします。
`;

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // お客様向けメール送信
    await transporter.sendMail({
      from: 'info@inspire-japan.co.jp',
      to: formData.email,
      subject: '【INSPIRE Japan】お問い合わせありがとうございます',
      text: customerEmailTemplate(formData),
    });

    // 自社向けメール送信
    await transporter.sendMail({
      from: 'info@inspire-japan.co.jp',
      to: 'info@inspire-japan.co.jp',
      subject: '【新規お問い合わせ】ウェブサイトからのお問い合わせ',
      text: companyEmailTemplate(formData),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { success: false, error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
} 