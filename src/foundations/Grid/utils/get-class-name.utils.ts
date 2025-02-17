export const getClassName = (className: string): string =>
  `${className}-${Math.random().toString(36).substring(2)}`
