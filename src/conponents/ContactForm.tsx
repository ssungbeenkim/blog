'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    sendContactEmail(form)
      .then(() => {
        setLoading(false);
        setBanner({
          message: '성공적으로 전송되었습니다 👍🏻',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setLoading(false);
        setBanner({
          message: 'Failed to send email. Please try again later.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='my-4 flex w-full flex-col gap-2 rounded-xl bg-neutral-700 p-4 text-white'
      >
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className='bg-neutral-50 px-1 text-black'
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
          className='bg-neutral-50 px-1 text-black'
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          autoFocus
          value={form.message}
          onChange={onChange}
          className='bg-neutral-50 px-1 text-black'
        />
        <button className='h-7 w-full bg-blue-300 font-bold text-black transition ease-in-out hover:bg-blue-400'>
          {loading ? (
            <div className='flex animate-spin justify-center text-black'>
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            `Send 📨`
          )}
        </button>
      </form>
    </section>
  );
}
