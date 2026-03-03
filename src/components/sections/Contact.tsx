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
    // Simulate API call
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
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
            className="bg-green-50 border border-green-100 p-12 text-center rounded-sm"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              {t('contact.success')}
            </h3>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t('contact.name')}
              </label>
              <input
                {...register('name')}
                className="w-full bg-zinc-50 border border-black/5 px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="Matti Meikäläinen"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">
                  {t(errors.name.message as string)}
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t('contact.phone')}
              </label>
              <input
                {...register('phone')}
                className="w-full bg-zinc-50 border border-black/5 px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="+358 40 123 4567"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs mt-1">
                  {t(errors.phone.message as string)}
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                {t('contact.message')}
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full bg-zinc-50 border border-black/5 px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="..."
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">
                  {t(errors.message.message as string)}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  {t('contact.submit')}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
