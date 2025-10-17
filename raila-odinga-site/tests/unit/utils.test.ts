import { cn, formatDate } from '@/lib/utils';

test('cn combines truthy classes', () => {
  expect(cn('a', false && 'b', 'c')).toBe('a c');
});

test('formatDate returns human readable date', () => {
  const s = formatDate('2025-01-01T00:00:00.000Z');
  expect(s).toContain('2025');
});
