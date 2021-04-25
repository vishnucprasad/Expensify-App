import selectEcpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectEcpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectEcpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up a multitple expenses', () => {
    const res = selectEcpensesTotal(expenses);
    expect(res).toBe(114195);
});