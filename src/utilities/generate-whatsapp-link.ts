export function generateWhatsAppLink(message: string): string {
  const number = "552733727171";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}

export const contactWhatsAppUrl = generateWhatsAppLink("Olá! Vim pelo site da Mil Cópias Gráfica Rápida e gostaria de esclarecer algumas dúvidas. Pode me ajudar?");
export const quoteWhatsAppUrl = generateWhatsAppLink("Olá! Vim pelo site da Mil Cópias Gráfica Rápida e gostaria de solicitar um orçamento. Pode me ajudar?");
export const careerWhatsAppUrl = generateWhatsAppLink("Olá! Vim pelo site da Mil Cópias Gráfica Rápida e gostaria de enviar meu currículo. Pode me orientar?");
