export const greet = (name: string): string => `Hello ${name}`;

export const foo = async () => console.log(greet('World'));
