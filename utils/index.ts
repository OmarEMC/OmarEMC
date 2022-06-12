export function getMonthsDiff (date1: Date, date2: Date) {
  const diff = date2.getTime() - date1.getTime()
  return diff / (1000 * 3600 * 24 * 30)
}

export function limitString (str: string, limit: number = 150, suffix: string = '...') {
  if (str.length > limit) {
    return str.substring(0, limit) + suffix
  }

  return str
}

/**
 * Human readable elapsed or remaining time (example: 3 minutes ago)
 * @author github.com/victornpb
 * @see https://stackoverflow.com/a/67338038/938822
 */
export function fromNow (date: Date | number | string, nowDate: Date | number | string = Date.now(), rft = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' })): string {
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR
  const WEEK = 7 * DAY
  const MONTH = 30 * DAY
  const YEAR = 365 * DAY
  const intervals: { ge: number; divisor: number; text?: string; unit?: Intl.RelativeTimeFormatUnit }[] = [
    { ge: YEAR, divisor: YEAR, unit: 'year' },
    { ge: MONTH, divisor: MONTH, unit: 'month' },
    { ge: WEEK, divisor: WEEK, unit: 'week' },
    { ge: DAY, divisor: DAY, unit: 'day' },
    { ge: HOUR, divisor: HOUR, unit: 'hour' },
    { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
    { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
    { ge: 0, divisor: 1, text: 'just now' }
  ]
  const now = nowDate instanceof Date ? nowDate.getTime() : new Date(nowDate).getTime()
  const diff = now - (date instanceof Date ? date : new Date(date)).getTime()
  const diffAbs = Math.abs(diff)

  let result = ''

  for (const interval of intervals) {
    if (diffAbs >= interval.ge) {
      const x = Math.round(Math.abs(diff) / interval.divisor)
      const isFuture = diff < 0
      result = interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text!
      break
    }
  }

  return result
}
