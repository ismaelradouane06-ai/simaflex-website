'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
}

const DEFAULT_PHONE = '[WHATSAPP_NUMBER]';
const DEFAULT_MESSAGE = 'Bonjour SIMAFLEX, je suis intéressé par vos produits.';

export default function WhatsAppButton({
  message = DEFAULT_MESSAGE,
  phoneNumber = DEFAULT_PHONE,
}: WhatsAppButtonProps) {
  if (phoneNumber === '[WHATSAPP_NUMBER]') {
    return null; // Don't render if phone number is not set
  }

  const whatsappLink = getWhatsAppLink(message, phoneNumber);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
