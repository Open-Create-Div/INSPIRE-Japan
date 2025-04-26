"use client";

import React, { useEffect, useState } from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<boolean>;
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    message: string;
  };
  onFormReset: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  formData,
  onFormReset,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // モーダルが開かれた時に状態をリセット
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleConfirm = async () => {
    try {
      setIsSubmitting(true);
      const success = await onConfirm();
      
      if (success) {
        setIsSubmitted(true);
        onFormReset();
      }
    } catch (error) {
      console.error('送信に失敗しました:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        {!isSubmitted ? (
          <>
            <h2 className="text-xl font-bold mb-4">入力内容の確認</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-gray-700">お名前</label>
                <p className="mt-1">{formData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">メールアドレス</label>
                <p className="mt-1">{formData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">電話番号</label>
                <p className="mt-1">{formData.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">ご住所</label>
                <p className="mt-1">{formData.address}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">お問い合わせ内容</label>
                <p className="mt-1 whitespace-pre-wrap">{formData.message}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
              >
                修正する
              </button>
              <button
                onClick={handleConfirm}
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-4">送信完了</h2>
            <p className="text-gray-600 mb-6">
              お問い合わせいただきありがとうございます。
              <br />
              1営業日以内に担当者から折り返しご連絡させていただきます。
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              閉じる
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationModal; 