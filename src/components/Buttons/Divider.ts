import Button, { type ButtonDefinition } from './Button';

export default class Divider extends Button {
  get button(): ButtonDefinition {
    return {
      divider: true,
    };
  }

  get name(): string {
    return 'divider';
  }
}
