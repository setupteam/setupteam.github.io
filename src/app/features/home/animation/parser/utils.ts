import { CssPropertyValue } from "./types";

export function stringifyParsedValue(value: CssPropertyValue): string {
    switch (value.type) {
      case 'numeric':
        return value.values.map(([num, unit]) => num + unit).join(' ');
      case 'transform':
        return Array.from(value.values)
          .map(
            ([fnName, numData]) =>
              `${fnName}(${numData.map(([num, unit]) => num + unit).join(', ')})`,
          )
          .join(' ');
      case 'color':
        const v = value.value;
        let color = v[0] + '(';
        for (let i = 1; i < v.length; i++) {
          color += v[i] + (i < v.length - 1 ? ', ' : '');
        }
        return color + ')';
      case 'static':
        return value.value;
    }
}

export function copyParsedValue<T = CssPropertyValue>(value: T): T {
  return structuredClone(value);
}