import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/angular';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
  it('should render login page title', async () => {
    const { getByText } = await render(LoginComponent);
    expect(getByText('Login')).toBeTruthy();
  });
});
