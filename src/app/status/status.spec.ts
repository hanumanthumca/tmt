import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/angular';
import { StatusComponent } from './status';

describe('StatusComponent', () => {
  it('should render status page title', async () => {
    const { getByText } = await render(StatusComponent);
    expect(getByText('Status')).toBeTruthy();
  });
});
