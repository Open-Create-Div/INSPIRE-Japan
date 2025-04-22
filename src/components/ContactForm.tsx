"use client";

import React, { useState, useEffect } from 'react';
import { PhoneIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import ConfirmationModal from './ConfirmationModal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const validateEmail = async (email: string) => {
    try {
      // ドメイン部分を抽出
      const domain = email.split('@')[1];
      if (!domain) return false;

      // DNS MXレコードの存在確認
      const response = await fetch(`/api/validate-email?domain=${domain}`);
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error('メールアドレスの検証に失敗しました:', error);
      return false;
    }
  };

  const validatePhone = async (phone: string) => {
    try {
      // ハイフンやスペースを除去
      const cleanedPhone = phone.replace(/[-\s]/g, '');
      
      // 電話番号の形式チェック
      const response = await fetch(`/api/validate-phone?phone=${cleanedPhone}`);
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error('電話番号の検証に失敗しました:', error);
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // エラーメッセージをクリア
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsValidating(true);
    
    // バリデーション
    const newErrors = {
      email: '',
      phone: ''
    };

    try {
      const [isEmailValid, isPhoneValid] = await Promise.all([
        validateEmail(formData.email),
        validatePhone(formData.phone)
      ]);

      if (!isEmailValid) {
        newErrors.email = '有効なメールアドレスを入力してください';
      }

      if (!isPhoneValid) {
        newErrors.phone = '正しい形式の電話番号を入力してください（例：09012345678）';
      }

      setErrors(newErrors);

      // エラーがない場合のみモーダルを表示
      if (!newErrors.email && !newErrors.phone) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('バリデーション中にエラーが発生しました:', error);
      alert('入力内容の確認中にエラーが発生しました。\n時間をおいて再度お試しください。');
    } finally {
      setIsValidating(false);
    }
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      // 送信成功後、フォームをリセット
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      // モーダルは閉じない（ConfirmationModalコンポーネントで完了画面を表示）
    } catch (error) {
      alert('送信に失敗しました。\n時間をおいて再度お試しください。');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isValidating}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : ''
            } ${isValidating ? 'opacity-50' : ''}`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isValidating}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : ''
            } ${isValidating ? 'opacity-50' : ''}`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            ご住所 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            disabled={isValidating}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              isValidating ? 'opacity-50' : ''
            }`}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isValidating}
            rows={4}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              isValidating ? 'opacity-50' : ''
            }`}
          />
        </div>
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        formData={formData}
      />
    </div>
  );
};

export default ContactForm; 