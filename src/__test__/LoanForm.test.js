import React from 'react';
import { render, screen } from '@testing-library/react';
import LoanForm from '../components/LoanForm';

const addLoanMock = jest.fn();
const updateLoanMock = jest.fn();

describe('boundary', () => {
    test('LoanFormComponent boundary it is rendered', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('LoanFormComponent boundary it has "Add a Loan" h2', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add a Loan');
    });

    test('LoanFormComponent boundary it has "Edit Loan" h2 when in edit mode', () => {
        render(<LoanForm editLoan={{ customer: 'Edit Loan' }} updateLoan={updateLoanMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Loan');
    });

    test('LoanFormComponent boundary it has customer input field', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        const customerInput = screen.getByLabelText('Customer:');
        expect(customerInput).toBeTruthy();
    });

    test('LoanFormComponent boundary it has amount input field', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        const amountInput = screen.getByLabelText('Amount:');
        expect(amountInput).toBeTruthy();
    });

    test('LoanFormComponent boundary it has interest rate input field', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        const interestRateInput = screen.getByLabelText('Interest Rate:');
        expect(interestRateInput).toBeTruthy();
    });

    test('LoanFormComponent boundary it has an "Add Loan" button', () => {
        render(<LoanForm addLoan={addLoanMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Loan' });
        expect(addButton).toBeTruthy();
    });

    test('LoanFormComponent boundary it has an "Update Loan" button when in edit mode', () => {
        render(<LoanForm editLoan={{ customer: 'Edit Loan' }} updateLoan={updateLoanMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Loan' });
        expect(updateButton).toBeTruthy();
    });
});
