import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, address, message } = await request.json();

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // お客様への送信完了メール
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '【INSPIRE Japan】お問い合わせありがとうございます',
      text: `
${name} 様

この度は、INSPIRE Japan株式会社にお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを承りました。

【お問い合わせ内容】
お名前：${name}
メールアドレス：${email}
電話番号：${phone}
ご住所：${address}
お問い合わせ内容：
${message}

担当者より、2営業日以内にご連絡させていただきます。
今しばらくお待ちください。

━━━━━━━━━━━━━━━━━━━━━━━━
INSPIRE Japan株式会社
〒197-0023
東京都福生市志茂14-1 ロードサイド福生C号
TEL: 0120-488-895
受付時間：9:00～19:00
━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    };

    // 事業者への通知メール
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '【遮熱LP】新規お問い合わせがありました',
      text: `
新規お問い合わせがありました。

【お問い合わせ内容】
お名前：${name}
メールアドレス：${email}
電話番号：${phone}
ご住所：${address}
お問い合わせ内容：
${message}

━━━━━━━━━━━━━━━━━━━━━━━━
INSPIRE Japan株式会社
〒197-0023
東京都福生市志茂14-1 ロードサイド福生C号
TEL: 0120-488-895
受付時間：9:00～19:00
━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    };

    // メール送信
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
} 