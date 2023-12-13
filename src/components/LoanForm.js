// LoanForm.js
import React, { useState, useEffect } from 'react';

const LoanForm = ({ addLoan, editLoan, updateLoan }) => {
    const [loan, setLoan] = useState({
        customer: '',
        amount: '',
        interestRate: '',
    });

    useEffect(() => {
        if (editLoan) {
            setLoan({ ...editLoan });
        } else {
            setLoan({
                customer: '',
                amount: '',
                interestRate: '',
            });
        }
    }, [editLoan]);

    const isEditForm = !!editLoan;

    const isFormIncomplete = !loan.customer || !loan.amount || !loan.interestRate;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditForm) {
            updateLoan(loan);
        } else {
            addLoan(loan);
        }
        setLoan({ customer: '', amount: '', interestRate: '' });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Loan' : 'Add a Loan'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customer">
                    Customer:
                    <input
                        id="customer"
                        type="text"
                        value={loan.customer}
                        onChange={(e) => setLoan({ ...loan, customer: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="amount">
                    Amount:
                    <input
                        id="amount"
                        type="number"
                        value={loan.amount}
                        onChange={(e) => setLoan({ ...loan, amount: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="interestRate">
                    Interest Rate:
                    <input
                        id="interestRate"
                        type="number"
                        value={loan.interestRate}
                        onChange={(e) => setLoan({ ...loan, interestRate: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Loan' : 'Add Loan'}
                </button>
            </form>
        </div>
    );
};

export default LoanForm;
