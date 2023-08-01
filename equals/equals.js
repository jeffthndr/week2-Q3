export const strictEquals1 = (a, b) => {
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  )
    return true;

  // TEMP if (Object.is(a, NaN) && Object.is(b, NaN)) {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;

  return Object.is(a, b);
};

export const strictEquals = (a, b) => {
  if (Object.is(a, NaN)) return false;
  if (!a && !b) return true;
  return Object.is(a, b);
};
