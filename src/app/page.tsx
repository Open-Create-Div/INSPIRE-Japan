"use client";

import React from 'react';
import Image from 'next/image';
import { Noto_Sans_JP } from 'next/font/google'
import ContactForm, { ContactFormRef } from '@/components/ContactForm';
import SubmitButton from '@/components/SubmitButton';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

export default function Home() {
  const formRef = React.useRef<ContactFormRef>(null);
  const contactFormRef = React.useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* ヘッダーセクション */}
      <header className="bg-[#E5F6FF] py-2">
        <div className="container mx-auto flex flex-col items-center">
          <span className="text-[10px] sm:text-sm whitespace-nowrap text-gray-700">遮熱フィルムの貼付なら</span>
          <Image src="/images/logo.webp" alt="NH本舗" width={120} height={40} className="w-20 sm:w-28 md:w-36 h-auto" />
        </div>
      </header>

      {/* 固定フッター */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#E5F6FF]/90 backdrop-blur-sm py-2 z-50">
        <div className="container mx-auto flex items-center justify-center gap-4 px-4">
          {/* 電話番号 */}
          <a href="tel:0120-488-895" className="flex items-center gap-1">
            <span className="text-green-600 font-bold text-sm sm:text-base whitespace-nowrap">
              <span className="inline-block align-middle">☎</span>0120-488-895
            </span>
          </a>

          {/* ボタン */}
          <button onClick={scrollToContactForm} className="bg-gradient-to-b from-[#4DB5E8] via-[#00A0E9] to-[#0090D9] text-white h-[36px] min-w-[80px] rounded font-bold flex items-center justify-center gap-1 shine-effect transform hover:scale-105 transition-all duration-300">
            <span className="text-sm">✉</span>
            <span className="text-xs">無料相談</span>
          </button>

          <a href="https://lin.ee/xOGQHrD" target="_blank" rel="noopener noreferrer" 
             className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 text-white h-[36px] min-w-[80px] rounded font-bold flex items-center justify-center gap-1 shine-effect transform hover:scale-105 transition-all duration-300">
            <Image src="/images/line-icon.webp" alt="LINEアイコン" width={16} height={16} className="w-4 h-4" />
            <span className="text-xs">LINE相談</span>
          </a>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="pb-16">
        {/* ファーストビュー（メインビジュアル） */}
        <div className="w-full">
          {/* PC（Web）版 */}
          <div className="hidden sm:block w-full">
          <Image
              src="/images/first-pc.webp"
              alt="ガラスフィルム施工の様子"
              width={1920}
              height={1080}
              className="w-full h-auto"
            priority
          />
          </div>
          {/* スマホ（SP）版 */}
          <div className="block sm:hidden w-full">
        <Image
              src="/images/first-sp.webp"
              alt="ガラスフィルム施工の様子"
              width={800}
              height={1200}
              className="w-full h-auto"
          priority
        />
          </div>
        </div>

        {/* お悩みセクション */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span style={{ color: '#D10000' }}>こんなお悩み</span>
              <br className="sm:hidden" />
              <span style={{ color: '#333333' }}>ありませんか?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* 左側：クマのキャラクター */}
              <div className="w-[150px] sm:w-[200px] flex-shrink-0">
                <Image
                  src="/images/nayami.webp"
                  alt="お悩みアイコン"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              {/* 右側：お悩みリスト */}
              <div className="flex-1 max-w-xl">
                <ul className="space-y-8">
                  <li className="flex items-center border-b border-dashed border-gray-300 pb-6">
                    <Image
                      src="/images/10002.webp"
                      alt="チェックアイコン"
                      width={32}
                      height={32}
                      className="mr-4"
                    />
                    <span className="text-lg">できるだけ費用は抑えたい</span>
            </li>
                  <li className="flex items-center border-b border-dashed border-gray-300 pb-6">
                    <Image
                      src="/images/10002.webp"
                      alt="チェックアイコン"
                      width={32}
                      height={32}
                      className="mr-4"
                    />
                    <span className="text-lg">親切なスタッフに相談したい</span>
            </li>
                  <li className="flex items-center border-b border-dashed border-gray-300 pb-6">
                    <Image
                      src="/images/10002.webp"
                      alt="チェックアイコン"
                      width={32}
                      height={32}
                      className="mr-4"
                    />
                    <span className="text-lg">作業後の保証など安心が欲しい</span>
                  </li>
                  <li className="flex items-center border-b border-dashed border-gray-300 pb-6">
                    <Image
                      src="/images/10002.webp"
                      alt="チェックアイコン"
                      width={32}
                      height={32}
                      className="mr-4"
                    />
                    <span className="text-lg">気軽に見積りを頼みたい</span>
          </li>
                  <li className="flex items-center border-b border-dashed border-gray-300 pb-6">
                    <Image
                      src="/images/10002.webp"
                      alt="チェックアイコン"
                      width={32}
                      height={32}
                      className="mr-4"
                    />
                    <span className="text-lg">経験豊富なスタッフに教えてほしい</span>
          </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 選ばれる理由セクション */}
        <section className="bg-[#E5F6FF] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">
              <span className="inline-block">
                <span className="text-black font-bold text-3xl">INSPIRE Japan</span>
                <br className="sm:hidden" />
                <span className="text-black font-bold text-2xl">が選ばれる</span>
                <br className="sm:hidden" />
                <span className="text-[#FF4D1D] font-bold text-4xl">5</span>
                <span className="text-[#FF4D1D] font-bold text-4xl">つの理由</span>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* 理由1 */}
              <div className="bg-[#E5F6FF] p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-[160px] h-[160px] relative mb-4">
              <Image
                      src="/images/r1.webp"
                      alt="自社施工なので低価格"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mb-2">
                    <span className="text-[#00A0E9] font-bold">自社施工なので</span><br />
                    <span className="text-[#00A0E9] font-bold">低価格</span>
                  </h3>
                  <p className="text-sm text-center">私たちはガラスフィルム施工を最も得意にしております。自社施工を行うことで中間マージンを削減し、他社よりもお得な 6,600円(税込)～/㎡ という低価格での施工を実現しています。</p>
                </div>
              </div>

              {/* 理由2 */}
              <div className="bg-[#E5F6FF] p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-[160px] h-[160px] relative mb-4">
                    <Image
                      src="/images/r2.webp"
                      alt="施工実績年間180件超え"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mb-2">
                    <span className="text-[#00A0E9] font-bold">施工実績</span><br />
                    <span className="text-[#00A0E9] font-bold">年間500件超え</span>
                  </h3>
                  <p className="text-sm text-center">当社は、お客様に高品質な施工を行い続け、年間500件以上の施工実績を誇ります。豊富な経験と確かな技術力を活かし、個人のお客様から企業様まで、幅広いニーズに対応しています。</p>
                </div>
              </div>

              {/* 理由3 */}
              <div className="bg-[#E5F6FF] p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-[160px] h-[160px] relative mb-4">
                    <Image
                      src="/images/r3.webp"
                      alt="施工完了後3~5年保証付"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mb-2">
                    <span className="text-[#00A0E9] font-bold">施工完了後</span><br />
                    <span className="text-[#00A0E9] font-bold">10年保証付</span>
                  </h3>
                  <p className="text-sm text-center">お客様に安心していただけますよう、施工完了後、業界初の10年間の保証行っております。見積り時に詳しくお話いたしますので、まずはお気軽にお問い合わせください。</p>
                </div>
              </div>

              {/* 理由4 */}
              <div className="bg-[#E5F6FF] p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-[160px] h-[160px] relative mb-4">
                    <Image
                      src="/images/r4.webp"
                      alt="お見積り後のキャンセル無料"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mb-2">
                    <span className="text-[#00A0E9] font-bold">お見積り後の</span><br />
                    <span className="text-[#00A0E9] font-bold">キャンセル無料</span>
                  </h3>
                  <p className="text-sm text-center">現地調査を実施し、必要な施工内容を正確に判断した上でお見積りをご提示します。そのため、「費用がどれくらいかかるのか不安」という方も、事前にしっかりご確認いただけます。</p>
                </div>
              </div>

              {/* 理由5 */}
              <div className="bg-[#E5F6FF] p-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <div className="w-[160px] h-[160px] relative mb-4">
                    <Image
                      src="/images/r5.webp"
                      alt="施工後もアドバイス"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mb-2">
                    <span className="text-[#00A0E9] font-bold">施工後も</span><br />
                    <span className="text-[#00A0E9] font-bold">アドバイス</span>
                  </h3>
                  <p className="text-sm text-center">施工後の保証以外にも、メンテナンス方法など製品を長持ちさせるアドバイスも行います。他の製品のご相談や追加や修理の施工についても、お気軽にご相談ください。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-gradient-to-b from-[#4DB5E8] to-[#0090D9] py-8 sm:py-12 relative overflow-hidden">
          {/* オレンジの背景に斜めのストライプを追加 */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}></div>
          
          <div className="container mx-auto px-2 sm:px-4 relative">
            {/* 白い背景のカード */}
            <div className="bg-[#E5F6FF] rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-center mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="text-[#00A0E9] text-xl sm:text-2xl md:text-3xl font-bold">遮熱フィルムの貼付なら</span>
                  <Image
                    src="/images/logo.webp"
                    alt="INSPIRE Japan"
                    width={200}
                    height={50}
                    className="object-contain sm:-mt-3"
                  />
                </div>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* 左側：パンダのキャラクターと価格 */}
                <div className="flex items-center">
                  <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]">
                    <Image
                      src="/images/cta.webp"
                      alt="パンダのキャラクター"
                      fill
                      className="object-contain scale-x-[-1]"
                    />
                  </div>
                  <div className="relative ml-2">
                    <div className="absolute left-[-20px] top-1/2 w-0 h-0 border-t-[10px] border-r-[20px] border-b-[10px] border-t-transparent border-r-[#00A0E9] border-b-transparent transform -translate-y-1/2"></div>
                    <div className="bg-[#00A0E9] p-2 rounded-lg">
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm whitespace-nowrap text-white">専門店だから低価格</span>
                        <span className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap text-white">6,600円(税込)～/㎡</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右側：電話番号とボタン */}
                <div className="flex flex-col gap-0.5 items-center w-full sm:w-[280px] lg:w-auto">
                  {/* 電話番号 */}
                  <div className="bg-[#E5F6FF] rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-md w-full lg:w-[260px] text-center">
                    <span className="text-xs">受付時間9:00～19:00</span>
                    <div className="flex items-center justify-center">
                      <a href="tel:0120-488-895" className="flex flex-col items-center">
                        <span className="text-green-600 text-base sm:text-lg md:text-xl font-bold whitespace-nowrap hover:text-green-700 transition-colors">
                          <span className="inline-block align-middle">☎</span>0120-488-895
                        </span>
                      </a>
                    </div>
                    <span className="text-xs">お電話でのご相談はこちら</span>
                  </div>

                  {/* メールとLINEボタン */}
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
                    <a href="#contact-form" className="bg-gradient-to-b from-[#4DB5E8] via-[#00A0E9] to-[#0090D9] text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <span className="text-lg sm:text-xl">✉</span>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">無料相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
                        </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>

                    <a href="https://lin.ee/xOGQHrD" target="_blank" rel="noopener noreferrer" 
                       className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <Image
                        src="/images/line-icon.webp"
                        alt="LINEアイコン"
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">LINE相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
          </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* トラブル解決セクション */}
        <section className="py-16 bg-[#E5F6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#D10000]">こんなトラブル</span>
              <br className="sm:hidden" />
              <span>を解決できます</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* 左側のトラブル */}
              <div className="flex flex-col gap-8 w-full lg:w-1/3">
                {/* トラブル1 */}
                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2">①室内温度が高い、眩しい</h3>
                        <p className="text-sm">太陽光の反射・吸収により、室温を快適に保ち、冷房効果が上がります。UVカット効果で日焼け防止にも役立ちます。</p>
                      </div>
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src="/images/t1.webp"
                          alt="トラブル1のイメージ"
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full border-2 border-[#FF4D1D]"
                        />
                      </div>
                    </div>
                  </div>
                  {/* オレンジの矢印 */}
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-2 bg-[#FF4D1D]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                </div>

                {/* トラブル2 */}
                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2">②室内温度が低い、結露が多い</h3>
                        <p className="text-sm">冷気を遮断し室内の暖気を保つことで、暖房効果を最大限に高めます。また、外との気温差を狭めることで結露発生を軽減します。</p>
                      </div>
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src="/images/trouble2.webp"
                          alt="トラブル2のイメージ"
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full border-2 border-[#FF4D1D]"
                        />
                      </div>
                    </div>
                  </div>
                  {/* オレンジの矢印 */}
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-2 bg-[#FF4D1D]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                </div>
              </div>

              {/* 中央の画像 */}
              <div className="w-full lg:w-1/3 flex justify-center items-center">
                <Image
                  src="/images/trouble-center.webp"
                  alt="トラブル解決のイメージ"
                  width={200}
                  height={200}
                  className="hidden lg:block"
                />
              </div>

              {/* 右側のトラブル */}
              <div className="flex flex-col gap-8 w-full lg:w-1/3">
                {/* トラブル3 */}
                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src="/images/t3.webp"
                          alt="トラブル3のイメージ"
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full border-2 border-[#FF4D1D]"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">③防犯対策や視線の遮り</h3>
                        <p className="text-sm">耐衝撃性があると、窓ガラスが割れにくくなり不正侵入を防ぐことができます。また、外部からの視線の遮りも行えます。</p>
                      </div>
                    </div>
                  </div>
                  {/* オレンジの矢印 */}
                  <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-2 bg-[#FF4D1D]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}></div>
                </div>

                {/* トラブル4 */}
                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src="/images/t4.webp"
                          alt="トラブル4のイメージ"
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full border-2 border-[#FF4D1D]"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">④安全対策や飛散防止</h3>
                        <p className="text-sm">ガラスの破損で破片が飛び散らないようにし、怪我やリスクを大幅に軽減します。透明な素材で自然光を損なわずに耐衝撃性を上げます。</p>
                      </div>
                    </div>
                  </div>
                  {/* オレンジの矢印 */}
                  <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-2 bg-[#FF4D1D]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 他社比較セクション */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-32">他社比較</h2>
            
            <div className="flex justify-center items-start gap-2">
              {/* 項目の表 */}
              <table className="border-collapse border-t-2 border-black">
                <thead>
                  <tr>
                    <th className="bg-[#00A0E9] text-white py-1.5 px-3 border border-black text-center w-[120px] text-sm h-[48px]">項目</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-3 bg-[#E5F6FF] font-bold text-center h-[80px]">取扱商品数</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-[#E5F6FF] font-bold text-center h-[80px]">専門性</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-[#E5F6FF] font-bold text-center h-[80px]">施工者</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-[#E5F6FF] font-bold text-center h-[80px]">実績</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-[#E5F6FF] font-bold text-center h-[100px]">価格<br/>（税込）/㎡</td>
                  </tr>
                </tbody>
              </table>

              {/* INSPIRE Japan の表 */}
              <div className="w-[300px] -mt-20">
                <div className="bg-[#E5F6FF] rounded-lg shadow-lg border-2 border-black mx-2">
                  <div className="bg-white p-6 flex justify-center items-center border-b-2 border-black">
                    <Image
                      src="/images/logo.webp"
                      alt="INSPIRE Japan"
                      width={200}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-8 space-y-8">
                    <div className="text-center">
                      <div className="text-[#00A0E9] font-bold text-[1.1rem] sm:text-xl md:text-2xl">100種類以上</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#00A0E9] font-bold text-[1.1rem] sm:text-xl md:text-2xl">ガラスフィルム専門店</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#00A0E9] font-bold text-[1.1rem] sm:text-xl md:text-2xl">自社施工</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#00A0E9] font-bold text-[1.1rem] sm:text-xl md:text-2xl">個人宅・法人など実績多数</div>
                    </div>
                    <div className="text-center pt-2">
                      <div className="text-[#00A0E9] font-bold text-[1.1rem] sm:text-xl md:text-2xl">低価格</div>
                      <div className="text-[#00A0E9] font-bold text-2xl sm:text-3xl md:text-4xl mt-2">6,600円</div>
                      <div className="text-[#00A0E9] font-bold text-base sm:text-lg md:text-xl">（税込）～/㎡</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 他社の表 */}
              <table className="border-collapse border-t-2 border-black">
                <thead>
                  <tr>
                    <th className="bg-[#00A0E9] text-white py-1.5 px-3 border border-black text-center text-sm h-[48px]">他社1</th>
                    <th className="bg-[#00A0E9] text-white py-1.5 px-3 border border-black text-center text-sm h-[48px]">他社2</th>
                    <th className="bg-[#00A0E9] text-white py-1.5 px-3 border border-black text-center text-sm h-[48px]">他社3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">50種類程度</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">30種類程度</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">10種類程度</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">専門ではない</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">専門ではない</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">専門ではない</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">協力会社</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">自社施工</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">協力会社</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">個人宅が多い</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">多数</td>
                    <td className="border border-black p-3 bg-white text-center h-[80px]">非公開</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-3 bg-white text-center h-[100px]">8,800円<br/>（税込）～/㎡</td>
                    <td className="border border-black p-3 bg-white text-center h-[100px]">9,900円<br/>（税込）～/㎡</td>
                    <td className="border border-black p-3 bg-white text-center h-[100px]">8,800円<br/>（税込）～/㎡</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 施工事例セクション */}
        <section className="py-16 bg-[#E5F6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">施工事例</h2>
            <div className="relative">
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-8 min-w-max">
                  {/* 事例1 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex1.webp"
                        alt="新宿区マンション施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
                width={20}
                height={20}
              />
                        <h3 className="text-xl font-bold">新宿区</h3>
                      </div>
                      <p className="text-gray-600 mb-4">透明遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：マンション</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱</p>
                        <p className="text-sm">施工平米数：9.72㎡</p>
                        <p className="text-sm">掃き出し窓6枚：131,640円(税込)</p>
                      </div>
                    </div>
                  </div>

                  {/* 事例2 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex2.webp"
                        alt="茨城県個人宅施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
                          width={20}
                          height={20}
                        />
                        <h3 className="text-xl font-bold">茨城県</h3>
                      </div>
                      <p className="text-gray-600 mb-4">ミラー遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：個人宅</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱、目隠し</p>
                        <p className="text-sm">施工平米数：13.77㎡</p>
                        <p className="text-sm">掃き出し窓10枚、腰高窓4枚：157,000円(税込)</p>
                      </div>
                    </div>
                  </div>

                  {/* 事例3 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex3.webp"
                        alt="東京都企業オフィス施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
                          width={20}
                          height={20}
                        />
                        <h3 className="text-xl font-bold">東京都</h3>
                      </div>
                      <p className="text-gray-600 mb-4">透明遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：企業オフィス</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱</p>
                        <p className="text-sm">施工平米数：20.56㎡</p>
                        <p className="text-sm">掃き出し窓10枚：261,720円(税込)</p>
                      </div>
                    </div>
                  </div>

                  {/* 事例4 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex4.webp"
                        alt="東京都個人宅施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
                          width={20}
                          height={20}
                        />
                        <h3 className="text-xl font-bold">東京都</h3>
                      </div>
                      <p className="text-gray-600 mb-4">ミラー遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：個人宅</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱、目隠し</p>
                        <p className="text-sm">施工平米数：2.88㎡</p>
                        <p className="text-sm">掃き出し窓2枚：48,180円(税込)</p>
                      </div>
                    </div>
                  </div>

                  {/* 事例5 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex5.webp"
                        alt="愛知県企業オフィス施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
                          width={20}
                          height={20}
                        />
                        <h3 className="text-xl font-bold">愛知県</h3>
                      </div>
                      <p className="text-gray-600 mb-4">ミラー遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：企業オフィス</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱、目隠し</p>
                        <p className="text-sm">施工平米数：50.3㎡</p>
                        <p className="text-sm">腰高窓37枚：316,800円(税込)</p>
                      </div>
                    </div>
                  </div>

                  {/* 事例6 */}
                  <div className="bg-[#E5F6FF] rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0">
                    <div className="relative h-64">
                      <Image
                        src="/images/ex6.webp"
                        alt="東京都店舗施工事例"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
            <Image
                          src="/images/ex-icon.webp"
                          alt="場所アイコン"
              width={20}
              height={20}
            />
                        <h3 className="text-xl font-bold">東京都</h3>
                      </div>
                      <p className="text-gray-600 mb-4">透明遮熱フィルム</p>
                      <div className="space-y-2">
                        <p className="text-sm">建物：店舗</p>
                        <p className="text-sm">性能：紫外線カット、飛散防止、遮熱</p>
                        <p className="text-sm">施工平米数：6.7㎡</p>
                        <p className="text-sm">掃き出し窓3枚：95,400円(税込)</p>
                      </div>
                    </div>
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-gradient-to-b from-[#4DB5E8] to-[#0090D9] py-8 sm:py-12 relative overflow-hidden">
          {/* オレンジの背景に斜めのストライプを追加 */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}></div>
          
          <div className="container mx-auto px-2 sm:px-4 relative">
            {/* 白い背景のカード */}
            <div className="bg-[#E5F6FF] rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-center mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="text-[#00A0E9] text-xl sm:text-2xl md:text-3xl font-bold">遮熱フィルムの貼付なら</span>
                  <Image
                    src="/images/logo.webp"
                    alt="INSPIRE Japan"
                    width={200}
                    height={50}
                    className="object-contain sm:-mt-3"
                  />
                </div>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* 左側：パンダのキャラクターと価格 */}
                <div className="flex items-center">
                  <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]">
                    <Image
                      src="/images/cta.webp"
                      alt="パンダのキャラクター"
                      fill
                      className="object-contain scale-x-[-1]"
                    />
                  </div>
                  <div className="relative ml-2">
                    <div className="absolute left-[-20px] top-1/2 w-0 h-0 border-t-[10px] border-r-[20px] border-b-[10px] border-t-transparent border-r-[#00A0E9] border-b-transparent transform -translate-y-1/2"></div>
                    <div className="bg-[#00A0E9] p-2 rounded-lg">
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm whitespace-nowrap text-white">専門店だから低価格</span>
                        <span className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap text-white">6,600円(税込)～/㎡</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右側：電話番号とボタン */}
                <div className="flex flex-col gap-0.5 items-center w-full sm:w-[280px] lg:w-auto">
                  {/* 電話番号 */}
                  <div className="bg-[#E5F6FF] rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-md w-full lg:w-[260px] text-center">
                    <span className="text-xs">受付時間9:00～19:00</span>
                    <div className="flex items-center justify-center">
                      <a href="tel:0120-488-895" className="flex flex-col items-center">
                        <span className="text-green-600 text-base sm:text-lg md:text-xl font-bold whitespace-nowrap hover:text-green-700 transition-colors">
                          <span className="inline-block align-middle">☎</span>0120-488-895
                        </span>
                      </a>
                    </div>
                    <span className="text-xs">お電話でのご相談はこちら</span>
                  </div>

                  {/* メールとLINEボタン */}
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
                    <a href="#contact-form" className="bg-gradient-to-b from-[#4DB5E8] via-[#00A0E9] to-[#0090D9] text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <span className="text-lg sm:text-xl">✉</span>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">無料相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
                        </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>

                    <a href="https://lin.ee/xOGQHrD" target="_blank" rel="noopener noreferrer" 
                       className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <Image
                        src="/images/line-icon.webp"
                        alt="LINEアイコン"
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">LINE相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
          </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 対応エリアセクション */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">対応エリア</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* 左側：テキストコンテンツ */}
              <div className="flex-1 space-y-8 flex flex-col items-center text-center">
                <div className="bg-white rounded-3xl border-2 border-[#00A0E9] p-6 inline-block">
                  <span className="text-xl text-[#00A0E9]">お気軽にご相談ください！</span>
                </div>
                
                
                <div className="bg-[#00A0E9] text-white rounded-3xl p-6 max-w-md w-full">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">対応エリア</h2>
                    <p className="text-4xl mb-8"><strong>日本全国</strong></p>
                    <p className="text-lg mb-8">全国どこでも対応可能です。</p>
                  </div>
                </div>
              </div>

              {/* 右側：日本地図イラスト */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
                    src="/images/area.webp"
                    alt="日本全国対応エリアマップ"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 選べるお支払いセクション */}
        <section className="py-16 bg-[#E5F6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">選べるお支払い</h2>
            <div className="flex justify-center">
              <Image
                src="/images/air-pay.webp"
                alt="お支払い方法"
                width={800}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-gradient-to-b from-[#4DB5E8] to-[#0090D9] py-8 sm:py-12 relative overflow-hidden">
          {/* オレンジの背景に斜めのストライプを追加 */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}></div>
          
          <div className="container mx-auto px-2 sm:px-4 relative">
            {/* 白い背景のカード */}
            <div className="bg-[#E5F6FF] rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-center mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="text-[#00A0E9] text-xl sm:text-2xl md:text-3xl font-bold">遮熱フィルムの貼付なら</span>
                  <Image
                    src="/images/logo.webp"
                    alt="INSPIRE Japan"
                    width={200}
                    height={50}
                    className="object-contain sm:-mt-3"
                  />
                </div>
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* 左側：パンダのキャラクターと価格 */}
                <div className="flex items-center">
                  <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px]">
                    <Image
                      src="/images/cta.webp"
                      alt="パンダのキャラクター"
                      fill
                      className="object-contain scale-x-[-1]"
                    />
                  </div>
                  <div className="relative ml-2">
                    <div className="absolute left-[-20px] top-1/2 w-0 h-0 border-t-[10px] border-r-[20px] border-b-[10px] border-t-transparent border-r-[#00A0E9] border-b-transparent transform -translate-y-1/2"></div>
                    <div className="bg-[#00A0E9] p-2 rounded-lg">
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm whitespace-nowrap text-white">専門店だから低価格</span>
                        <span className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap text-white">6,600円(税込)～/㎡</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右側：電話番号とボタン */}
                <div className="flex flex-col gap-0.5 items-center w-full sm:w-[280px] lg:w-auto">
                  {/* 電話番号 */}
                  <div className="bg-[#E5F6FF] rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-md w-full lg:w-[260px] text-center">
                    <span className="text-xs">受付時間9:00～19:00</span>
                    <div className="flex items-center justify-center">
                      <a href="tel:0120-488-895" className="flex flex-col items-center">
                        <span className="text-green-600 text-base sm:text-lg md:text-xl font-bold whitespace-nowrap hover:text-green-700 transition-colors">
                          <span className="inline-block align-middle">☎</span>0120-488-895
                        </span>
                      </a>
                    </div>
                    <span className="text-xs">お電話でのご相談はこちら</span>
                  </div>

                  {/* メールとLINEボタン */}
                  <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto">
                    <a href="#contact-form" className="bg-gradient-to-b from-[#4DB5E8] via-[#00A0E9] to-[#0090D9] text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <span className="text-lg sm:text-xl">✉</span>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">無料相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
                        </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>

                    <a href="https://lin.ee/xOGQHrD" target="_blank" rel="noopener noreferrer" 
                       className="bg-gradient-to-b from-green-400 via-green-500 to-green-600 text-white px-3 sm:px-4 md:px-5 py-2 lg:py-2.5 rounded font-bold flex items-center gap-2 shine-effect transform hover:scale-105 transition-all duration-300 hover:brightness-110 justify-center w-full lg:w-[260px]">
                      <Image
                        src="/images/line-icon.webp"
                        alt="LINEアイコン"
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm sm:text-base font-bold">LINE相談</span>
                          <span className="text-[10px] ml-1">はこちら</span>
          </div>
                        <span className="text-[10px]">24時間受付</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 代表挨拶セクション */}
        <section className="py-16 bg-[#E5F6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">代表挨拶</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-full md:w-1/3">
                  <Image
                    src="/images/fuse.webp"
                    alt="布施 博成"
                    width={300}
                    height={400}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6">【窓ガラスフィルム】に<br className="sm:hidden" />かける想い</h2>
                  <p className="text-lg mb-4">
                    INSPIRE Japan(株)代表の<br className="sm:hidden" />
                    布施 博成（ふせ ひろしげ）です。
                  </p>
                  <p className="text-lg mb-4">
                    何故、INSPIRE Japanが【窓ガラスフィルム】事業を行っているのかについてお話します。
                    それは、大切な家族が自然災害によって割れたガラスで被災した経験があるからです。
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-lg">
                <p className="font-bold text-xl sm:text-2xl">〈私のおばあちゃんに起きた<br className="sm:hidden" />実際の体験談になります〉</p>
                
                <p>
                  戸建のリビングにいたおばあちゃんを、突如として発生した竜巻が襲ったのです。
                  家中のガラスが割れて、破片が身体中に刺さりました。
                  最悪だったのが左手への損傷で、神経を傷つけたことにより自由を奪われました。
                  手芸や園芸が趣味だったおばあちゃんにとって、左手が不自由になったことは致命的でした。
                </p>

                <p>
                  家族である私には、何もしてあげられなかった自分への怒り・悔しさがこみ上げました。
                  家はお金で元通りに戻ります。
                  しかし、人は違います。
                  後悔の感情だけは、ずっと消える事はありません。
                </p>

                <p>
                  建物において、もっとも無防備な状態にあるのが〈窓〉です。
                  地震や台風が多い日本ですが、具体的な対策が取られていない建物が非常に多いのが現状です。
                </p>

                <p>
                  既存のガラスに貼るだけで「ガラスの飛散防止効果」「紫外線99％以上カット効果」を得られる【窓ガラスフィルム】という手段をとても素晴らしいと思っています。
                  また、真夏・真冬の室内を快適な温度に保つ効果のある「遮熱・断熱フィルム」は貼るだけで省エネ・CO2削減にも役立てられます。
                  自分や家族だけでなく、地球にとっても良いのが【窓ガラスフィルム】なんです。
                </p>

                <p>
                  窓ガラスを交換する大々的なリフォームを、もっと手の届きやすい形で手軽に行えることも魅力の１つです。
                </p>

                <p>
                  INSPIRE Japan(株)の目指すものは、全国で【窓ガラスフィルム】の普及率を増やすことです。
                  それが、私のような《やらず後悔》をするような人を失くすことに繋がると信じているからです。
                </p>

                <p className="text-center text-2xl font-bold my-8">
                  ～たった一枚のフィルムが<br className="sm:hidden" />大切なヒトの未来を守る！～
                </p>

                <p className="text-right">
                  この信念に基づき、これからも一生懸命フィルムを貼り続けていきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスの流れセクション */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">サービスの流れ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/s1.webp"
                    alt="問い合わせ"
                    width={100}
                    height={100}
                    className="h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 h-[60px]">step1 問い合わせ</h3>
                <p>ご要望やお悩みをお聞きし、最適なフィルムの選定やスケジュール調整を行います。</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/s2.webp"
                    alt="調査と見積り"
                    width={100}
                    height={100}
                    className="h-[80px] object-contain mt-2"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 h-[60px]">step2 調査と見積り</h3>
                <p>専門スタッフが現地に伺い、窓のサイズや環境、目的に応じたフィルムを選定します。</p>
                <p className="mt-4 text-red-600 font-bold">ここまで無料！費用が合わなければお断りOK!</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/s3.webp"
                    alt="ご契約"
                    width={100}
                    height={100}
                    className="h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 h-[60px]">step3 ご契約</h3>
                <p>見積りと施工プランをご確認いただき、ご納得いただけた場合にご契約をいただきます。</p>
              </div>
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/s4.webp"
                    alt="作業当日"
                    width={100}
                    height={100}
                    className="h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 h-[60px]">step4 作業当日</h3>
                <p>プロの施工スタッフが専用の道具と技術で、迅速かつ丁寧にフィルムを貼り付けます。</p>
              </div>
              {/* Step 5 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
            <Image
                    src="/images/s5.webp"
                    alt="施工終了"
                    width={100}
                    height={100}
                    className="h-[100px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 h-[60px]">step5 施工終了</h3>
                <p>施工後の清掃方法やフィルム使用の注意点もアドバイスを行い、保証書も発行します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問セクション */}
        <section className="py-16 bg-[#E5F6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* 質問1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: 見積りはどのくらいの費用がかかりますか？</h3>
                <p className="text-gray-600">お見積りは無料です。</p>
              </div>

              {/* 質問2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: ご対応頂けるエリアはどこまで可能ですか？</h3>
                <p className="text-gray-600">日本全国対応可能です。お気軽にご相談ください。</p>
              </div>

              {/* 質問3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: 窓ガラスフィルムにはどんな種類がありますか？</h3>
                <p className="text-gray-600">飛散防止フィルム、防犯フィルム、遮熱フイルム、目隠しフイルム、断熱フイルム、抗菌・抗ウィルスなど。お客様のニーズに当てはまる内容がありましたらお気軽にご相談ください。</p>
              </div>

              {/* 質問4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: フィルムのお手入れは難しいですか？</h3>
                <p className="text-gray-600">日常のお手入れは水拭きでOKです。汚れが落ちにくい場合は中性洗剤を少し使って水拭きしてください。ガラスクリーナーなどの酸性やアルカリ性の洗剤はフィルムを傷める原因となるので使わないようにしてください。また乾拭きも表面を傷つけるためご注意が必要です。</p>
              </div>

              {/* 質問5 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: 使用しているフィルムはどのようなものですか？</h3>
                <p className="text-gray-600">当店が取り扱うフィルムメーカーは、スリーエムジャパン、サンゲツ、GLAFIL(グラフィル）、NEXFILM（ネックスフィルム）、中川ケミカル、ユタカなどになります。</p>
              </div>

              {/* 質問6 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Q: 見積り後もキャンセルできますか？</h3>
                <p className="text-gray-600">可能です。押し売りなどもしておりませんので、ご安心ください！</p>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせフォームセクション */}
        <section ref={contactFormRef} id="contact-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              お問い合わせ
            </h2>
            <ContactForm ref={formRef} />
          </div>
        </section>

        {/* 規約関連セクション */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="max-h-[100px] overflow-y-auto border border-gray-200 rounded-lg p-4 bg-white text-xs">
                {/* 個人情報保護方針 */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4 text-center">個人情報保護方針</h2>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      INSPIRE Japan 株式会社（以下「当社」）は、お客様より預かった個人情報の保護に努めることを社会的責務として認識し、すべての従業員が以下の項目について取り組むべく宣言いたします。
                    </p>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報の取得について</h3>
                      <p className="text-gray-600">
                        当社は、適法かつ公正な手段によってのみ、個人情報を取得致します。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報の利用について</h3>
                      <p className="text-gray-600">
                        当社は、個人情報を取得の際に示した利用目的の範囲内で、業務の遂行上必要な限りにおいて、利用致します。
                      </p>
                      <p className="text-gray-600 mt-2">
                        当社は個人情報を第三者との間で共同利用、または個人情報の取り扱いを第三者に委託する場合には、当該第三者につき厳正な調査を行ったうえ、個人情報の機密保持について契約を定める等の適切な措置を講じます。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報の第三者提供について</h3>
                      <p className="text-gray-600">
                        当社は、以下の場合を除いて、お客様の個人情報を第三者に提供することはありません。
                      </p>
                      <ul className="list-disc list-inside mt-2 text-gray-600">
                        <li>お客様が事前に第三者に提供する旨を同意されている場合。</li>
                        <li>法律等により、提供が必要とされている場合。</li>
                        <li>個人を識別できない状態で利用する場合。</li>
                        <li>弊社とお客様の権利、財産、安全などを保護、防御する為に必要であると合理的に判断できる場合。</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報の管理について</h3>
                      <p className="text-gray-600">
                        当社は、個人情報の正確性を保ち、これを安全に管理いたします。
                      </p>
                      <p className="text-gray-600 mt-2">
                        不正アクセス、コンピュータウィルス等に対する適正な情報セキュリティ対策を講じ、個人情報の漏えいや紛失等を防止します。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報の開示、訂正、利用停止、消去について</h3>
                      <p className="text-gray-600">
                        お客様ご自身の情報に関して、開示・訂正・利用停止・消去のご希望があれば、誠意をもって対応します。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">Cookie（クッキー）やウェブビーコンについて</h3>
                      <p className="text-gray-600">
                        Cookie・ウェブビーコンを利用し、サイトの利用状況分析や広告の効果測定を行います。
                      </p>
                      <p className="text-gray-600 mt-2">
                        これにより氏名や住所などが当社に伝わることはありません。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">個人情報に関するお問い合わせ先</h3>
                      <p className="text-gray-600">
                        INSPIRE Japan 株式会社<br />
                        〒197-0023<br />
                        東京都福生市志茂14-1 ロードサイド福生C号<br />
                        Tel.0120-488-895
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">その他の事項</h3>
                      <p className="text-gray-600">
                        当社サービスの提供において、個人情報が必須となる場合があることを予めご了承ください。
                      </p>
                      <p className="text-gray-600 mt-2">
                        方針は法改正等により随時見直します。
                      </p>
                      <p className="text-gray-600 mt-2">
                        16歳未満の方は保護者の同意を得てご提供ください。
                      </p>
                      <p className="text-gray-600 mt-4">
                        制定 令和4年1月1日
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-gray-200" />

                {/* 特定商取引法に基づく表示 */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4 text-center">特定商取引法に基づく表示</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xs font-bold mb-1">事業者</h3>
                      <p className="text-gray-600">INSPIRE Japan 株式会社</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">代表者</h3>
                      <p className="text-gray-600">布施 博成</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">運営統括責任者</h3>
                      <p className="text-gray-600">布施 博成</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">所在地</h3>
                      <p className="text-gray-600">〒197-0023 東京都福生市志茂14-1 ロードサイド福生C号</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">電話番号</h3>
                      <p className="text-gray-600">0120-488-895</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">商品販売価格</h3>
                      <p className="text-gray-600">弊社との契約書に記載されている請負金額。</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">商品販売代金以外の必要料金</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold">キャンセル料金</h4>
                          <p className="text-gray-600">お客様都合のキャンセルは、規定により割増料金をご請求する場合あり</p>
                        </div>
                        <div>
                          <h4 className="font-bold">中断・延長による割増料金</h4>
                          <p className="text-gray-600">同上</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">引渡し時期</h3>
                      <p className="text-gray-600">
                        初回訪問日程を調整後、現地で確認書にご署名いただいた時点で完了。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">キャンセル・返品</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>お電話でのキャンセル連絡必須</li>
                        <li>特性上（役務の提供）、返品不可</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">瑕疵担保責任</h3>
                      <p className="text-gray-600">
                        サービス提供後24時間以内にご連絡ください。必要と判断した場合は再提供いたします。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">免責事項</h3>
                      <p className="text-gray-600">
                        条件変更による瑕疵責任は負いかねます。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">お支払い方法</h3>
                      <p className="text-gray-600">
                        現地での現金またはクレジットカード決済
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">購入限度</h3>
                      <p className="text-gray-600">
                        60日先まで受付、30万円超はお電話にて確認
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-gray-200" />

                {/* 利用規約 */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold mb-4 text-center">利用規約</h2>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      この利用規約（以下「本規約」）は、INSPIRE Japan 株式会社（以下「当社」）が提供するウェブサイトの利用条件を定めるものです。
                    </p>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第1条（適用）</h3>
                      <p className="text-gray-600">
                        本規約は、利用者と当社の間の全てのウェブサイト利用に適用されます。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第2条（利用登録）</h3>
                      <p className="text-gray-600">
                        登録が必要な機能をご利用の場合は、真実かつ正確な情報での登録をお願いします。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第3条（禁止事項）</h3>
                      <p className="text-gray-600">
                        法令違反、サーバー妨害、他者の権利侵害等を禁止します。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第4条（サービスの停止）</h3>
                      <p className="text-gray-600">
                        保守や天災等、事前通知なくサービスを一時停止する場合があります。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第5条（免責事項）</h3>
                      <p className="text-gray-600">
                        提供情報の正確性や信頼性は保証いたしません。
                      </p>
                      <p className="text-gray-600 mt-2">
                        利用による損害についても責任を負いません（当社の重過失を除く）。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第6条（サービス内容の変更）</h3>
                      <p className="text-gray-600">
                        通知なくサービス内容を変更または中止することがあります。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第7条（利用規約の変更）</h3>
                      <p className="text-gray-600">
                        本規約は予告なく改定される場合があります。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第8条（個人情報の取扱い）</h3>
                      <p className="text-gray-600">
                        当社は「個人情報保護方針」に則って適切に管理いたします。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold mb-1">第9条（準拠法および管轄）</h3>
                      <p className="text-gray-600">
                        本規約は日本法に準拠し、東京都福生市を管轄する裁判所を第一審の専属的合意管轄とします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 送信ボタン */}
        <div className="flex justify-center mb-8 bg-gray-50">
          <SubmitButton formRef={formRef} />
        </div>
      </main>

      {/* フッターセクション */}
      <footer className="bg-gradient-to-b from-[#4DB5E8] to-[#0090D9] text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">会社概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左側：会社情報 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-sm font-bold">遮熱フィルムの貼付なら</div>
              </div>
              <div className="flex justify-start">
          <Image
                    src="/images/logo.webp"
                    alt="INSPIRE Japanロゴ"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
              </div>
              <div className="text-sm">
                <p>INSPIRE Japan株式会社</p>
                <p>〒197-0023</p>
                <p>東京都福生市志茂14-1 ロードサイド福生C号</p>
                <p>Tel.0120-488-895</p>
                <p>受付時間：9:00～19:00</p>
              </div>
            </div>
            {/* 右側：地図 */}
            <div className="relative h-[300px] w-full bg-white rounded-lg shadow-md overflow-hidden">
              <a
                href="https://www.google.com/maps/place/INSPIRE+Japan/@35.7324312,139.3243114,17z/"
          target="_blank"
          rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477.283486066799!2d139.3290692!3d35.7350284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e690cdd152f1%3A0x5517c2ae9d25fe0c!2zSU5TUElSRSBKYXBhbuagquW8j-S8muekvg!5e0!3m2!1sja!2sjp!4v1745254355609!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>Copyright©INSPIRE Japan All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}