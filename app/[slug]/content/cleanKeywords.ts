const cleanKeywords = (keywords: string): ReadonlyArray<string> =>
  keywords.toLowerCase().split(', ')

export default cleanKeywords
