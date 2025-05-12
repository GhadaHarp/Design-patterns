export function Confirmable(message: string) {
  return function (_: any, __: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (confirm(message)) {
        return original.apply(this, args);
      }
    };
  };
}
