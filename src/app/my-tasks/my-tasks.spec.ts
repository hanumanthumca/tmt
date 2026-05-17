import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/angular';
import { MyTasksComponent } from './my-tasks';

describe('MyTasksComponent', () => {
  it('should render My Tasks page title', async () => {
    const { getByText } = await render(MyTasksComponent);
    expect(getByText('My Tasks')).toBeTruthy();
  });
});
