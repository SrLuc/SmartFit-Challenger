export function getCleanContent(text: string): string {
  const strippedText = text.replace(/<[^>]+>/g, "");
  return strippedText.replace(/\s+/g, " ");
}
