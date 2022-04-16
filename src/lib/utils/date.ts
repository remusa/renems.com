const formatter = new Intl.DateTimeFormat('en-US')

export function formatDate(date) {
  return formatter.format(date)
}
