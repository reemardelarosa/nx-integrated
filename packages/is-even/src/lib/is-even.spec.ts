import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(5)).toEqual(false);
  });
});
