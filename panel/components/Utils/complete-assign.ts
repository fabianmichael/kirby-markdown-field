// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_accessors
export default function completeAssign<T extends Record<string, unknown>>(
  target: T,
  ...sources: Array<Record<string, unknown>>
): T {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce<Record<string, PropertyDescriptor>>(
      (descriptors, key) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        if (descriptor) {
          descriptors[key] = descriptor;
        }
        return descriptors;
      },
      {},
    );

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor && descriptor.enumerable) {
        descriptors[sym as unknown as string] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}
