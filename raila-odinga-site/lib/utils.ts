export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(input: string | number | Date) {
  const date = new Date(input);
  return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
