

class Calculator {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any): any {
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
    } else if (typeof x === 'string' && typeof y === 'string') {
      return x + y;
    } else {
      throw new Error('Invalid arguments');
    }
  }
}
