import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/angular';
import { RequestComponent } from './request';

describe('RequestComponent', () => {
  it('should render request page title', async () => {
    const { getByText } = await render(RequestComponent);
    expect(getByText('Request')).toBeTruthy();
  });
});
