export type Decorator = (type: any, props: any, key: any) => [any, any, any];

export const decorators: Decorator[] = [];

export function addDecorator(decorator: Decorator) {
  decorators.push(decorator);

  return function removeDecorator() {
    const index = decorators.indexOf(decorator);
    if (index > -1) {
      decorators.splice(index, 1);
    }
  };
}

export function removeDecorator(decorator: Decorator) {
  const index = decorators.indexOf(decorator);
  if (index > -1) {
    decorators.splice(index, 1);
  }
}
