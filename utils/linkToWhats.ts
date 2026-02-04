export default function linkToWhats(message?: string) {
  const phone = "55XXXXXXXXXXX"; // placeholder

  if (!message) {
    return `https://wa.me/${phone}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
