import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { contactSchema, type ContactFormData } from '@/src/lib/validation';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram credentials missing in environment variables');
      alert('System configuration error. Please try again later.');
      return;
    }

    const text = `
🆕 <b>Uusi yhteydenotto (IS-Autopaint)</b>
👤 <b>Nimi:</b> ${data.name}
📞 <b>Puhelin:</b> ${data.phone}
💬 <b>Viesti:</b> ${data.message}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        alert(t('contact.error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('contact.error'));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-white/10 p-16 text-center premium-shadow"
          >
            <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">
              {t('contact.success')}
            </h3>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
                  {t('contact.name')}
                </label>
                <input
                  {...register('name')}
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-accent transition-colors font-light text-white"
                  placeholder="Matti Meikäläinen"
                />
                {errors.name && (
                  <span className="absolute -bottom-6 left-0 text-red-500 text-[10px] uppercase tracking-widest">
                    {t(errors.name.message as string)}
                  </span>
                )}
              </div>

              <div className="relative">
                <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
                  {t('contact.phone')}
                </label>
                <input
                  {...register('phone')}
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-accent transition-colors font-light text-white"
                  placeholder="+358 40 123 4567"
                />
                {errors.phone && (
                  <span className="absolute -bottom-6 left-0 text-red-500 text-[10px] uppercase tracking-widest">
                    {t(errors.phone.message as string)}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
                {t('contact.message')}
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-accent transition-colors resize-none font-light text-white"
                placeholder="..."
              />
              {errors.message && (
                <span className="absolute -bottom-6 left-0 text-red-500 text-[10px] uppercase tracking-widest">
                  {t(errors.message.message as string)}
                </span>
              )}
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-white text-black py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50 overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {t('contact.submit')}
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
