'use client';

import { useState } from 'react';
import { profileStatic, socials } from '@/lib/translations';
import { getSocialIcon } from '@/lib/icons';
import { Reveal } from '@/components/reveal';
import { supabase } from '@/lib/supabase';
import { useI18n } from '@/components/language-provider';
import {
  LuSend,
  LuMapPin,
  LuMail,
  LuPhone,
  LuLoader,
  LuCircleCheckBig,
  LuCircleAlert,
  LuClock,
} from 'react-icons/lu';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg(t.ui.contact.errEmpty);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg(t.ui.contact.errEmail);
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name,
        email,
        subject,
        message,
      });

      if (error) throw error;

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg(t.ui.contact.errSend);
    }
  }

  const contactItems = [
    { icon: LuMail, label: t.ui.contact.email, value: profileStatic.email, href: `mailto:${profileStatic.email}`, aria: t.ui.contact.emailAria },
    { icon: LuPhone, label: t.ui.contact.phone, value: profileStatic.phone, href: `tel:${profileStatic.phone.replace(/\s/g, '')}`, aria: t.ui.contact.phoneAria },
    { icon: LuMapPin, label: t.ui.contact.location, value: profileStatic.location, href: undefined, aria: undefined },
    { icon: LuClock, label: t.ui.contact.availability, value: t.ui.contact.availabilityValue, href: undefined, aria: undefined },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute -top-20 left-1/2 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.ui.contact.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.ui.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.ui.contact.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal variant="scale">
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-border/60 bg-card/50 p-6">
              <div>
                <h3 className="font-display text-lg font-semibold">{t.ui.contact.details}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.ui.contact.detailsSub}
                </p>
              </div>

              <ul className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{item.label}</span>
                        <span className="block truncate text-sm font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          aria-label={item.aria}
                          className="flex items-center gap-3 rounded-xl p-1.5 transition-colors hover:bg-muted"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 p-1.5">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto border-t border-border/60 pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t.ui.contact.socials}
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Icon = getSocialIcon(s.icon);
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        aria-label={s.name}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} variant="scale">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8"
              noValidate
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                    <LuCircleCheckBig className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{t.ui.contact.successTitle}</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    {t.ui.contact.successMsg}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                  >
                    {t.ui.contact.another}
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.ui.contact.fullName} htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder={t.ui.contact.namePlaceholder}
                        className="form-input"
                      />
                    </Field>
                    <Field label={t.ui.contact.emailLabel} htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={t.ui.contact.emailPlaceholder}
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label={t.ui.contact.subject} htmlFor="subject">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder={t.ui.contact.subjectPlaceholder}
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label={t.ui.contact.message} htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t.ui.contact.messagePlaceholder}
                        className="form-input resize-none"
                      />
                    </Field>
                  </div>

                  {status === 'error' && (
                    <p className="mt-4 flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <LuCircleAlert className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-float transition-all duration-300 hover:shadow-float-lg hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <LuLoader className="h-4 w-4 animate-spin" />
                        {t.ui.contact.sending}
                      </>
                    ) : (
                      <>
                        <LuSend className="h-4 w-4" />
                        {t.ui.contact.send}
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: hsl(var(--foreground));
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.form-input)::placeholder {
          color: hsl(var(--muted-foreground));
        }
        :global(.form-input):focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/90">{label}</span>
      {children}
    </label>
  );
}
