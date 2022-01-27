export const classNames = (classes: (string | false)[]) =>
  classes.filter(Boolean).join(' ')
