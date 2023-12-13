import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoanList from '../components/LoanList';

const loans = [
    { id: 1, customer: 'Customer 1', amount: 1000, interestRate: 5 },
    { id: 2, customer: 'Customer 2', amount: 2000, interestRate: 6 },
];

const deleteLoan = jest.fn();
const setEditLoan = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <LoanList
                loans={loans}
                deleteLoan={deleteLoan}
                setEditLoan={setEditLoan}
            />
        );
    });

    test('LoanListComponent boundary it has a "Filter by Customer" text field', () => {
        const customerInput = screen.getByLabelText('Filter by Customer:');
        expect(customerInput).toBeTruthy();
    });

    test('LoanListComponent boundary it displays the Customer of a loan after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Customer:');
        fireEvent.change(filterInput, { target: { value: 'Customer 1' } });
        const strongElement = await screen.findByText('Customer:');
        expect(strongElement).toBeTruthy();
    });

    test('LoanListComponent boundary it displays the Amount of a loan after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Customer:');
        fireEvent.change(filterInput, { target: { value: 'Customer 1' } });
        const strongElement = await screen.findByText('Amount:');
        expect(strongElement).toBeTruthy();
    });

    test('LoanListComponent boundary it displays the Interest Rate of a loan after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Customer:');
        fireEvent.change(filterInput, { target: { value: 'Customer 1' } });
        const strongElement = await screen.findByText('Interest Rate:');
        expect(strongElement).toBeTruthy();
    });

    test('LoanListComponent boundary it displays the "Edit" button to edit the loan', async () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons).toBeTruthy();
    });

    test('LoanListComponent boundary it calls deleteLoan when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteLoan).toHaveBeenCalledWith(loans[0].id);
    });

    test('LoanListComponent boundary it removes the loan after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Customer: Customer 1')).toBeNull();
        expect(screen.queryByText('Amount: 1000')).toBeNull();
        expect(screen.queryByText('Interest Rate: 5')).toBeNull();
    });

    test('LoanListComponent boundary it displays "No loans found" when there are no loans', async () => {
        render(
            <LoanList loans={[]} deleteLoan={deleteLoan} setEditLoan={setEditLoan} />
        );
        const noLoansMessage = await screen.findByText('No loans found');
        expect(noLoansMessage).toBeTruthy();
    });
});
