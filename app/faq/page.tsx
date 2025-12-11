import { FaqClient } from './faq-client';

export const metadata = {
  title: 'Часто задаваемые вопросы',
  description: 'Ответы на часто задаваемые вопросы о наших услугах и процессе работы',
};

export default function FaqPage() {
  return <FaqClient />;
}