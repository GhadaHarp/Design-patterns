export function rangeIterator(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current <= end) {
            const result = { value: current, done: false };
            current += step;
            return result;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
