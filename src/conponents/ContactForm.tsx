'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: 'Success', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };
  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='my-4 flex w-full flex-col gap-2 rounded-xl bg-slate-700 p-4 text-white'
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
          className='text-black'
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
          className='text-black'
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
          className='text-black'
        />
        <button className='bg-yellow-300 font-bold text-black transition ease-in-out hover:bg-yellow-400'>
          Submit
        </button>
      </form>
    </section>
  );
}
