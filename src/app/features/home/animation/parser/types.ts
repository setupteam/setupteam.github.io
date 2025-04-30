export type NumericValue = {
    type: 'numeric';
    values: [number, string][];
  };
  
  export type StaticValue = {
    type: 'static';
    value: string;
  };
  
  export type ColorValue = {
    type: 'color';
    value: ['rgb', number, number, number] | ['rgba', number, number, number, number];
  };
  
  export type TransformValue = {
    type: 'transform';
    values: Map<string, [number, string][]>;
  };
  
  export type CssPropertyValue = NumericValue | StaticValue | ColorValue | TransformValue;