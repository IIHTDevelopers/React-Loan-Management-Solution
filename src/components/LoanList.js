// LoanList.js
import React, { useState } from 'react';

const LoanList = ({ loans, deleteLoan, setEditLoan }) => {
    const [filters, setFilters] = useState({ customer: '' });

    const filteredLoans = loans.filter((loan) => {
        return loan.customer.toLowerCase().includes(filters.customer.toLowerCase());
    });

    const handleDelete = (id) => {
        deleteLoan(id);
    };

    const handleEdit = (loan) => {
        setEditLoan(loan);
    };

    return (
        <div>
            <div>
                <label htmlFor="customer">
                    Filter by Customer:
                    <input
                        id="customer"
                        type="text"
                        value={filters.customer}
                        onChange={(e) => setFilters({ ...filters, customer: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredLoans.length > 0 ? (
                    filteredLoans.map((loan) => (
                        <li key={loan.id}>
                            <strong>Customer:</strong> {loan.customer}
                            <br />
                            <strong>Amount:</strong> {loan.amount}
                            <br />
                            <strong>Interest Rate:</strong> {loan.interestRate}
                            <br />
                            <button onClick={() => handleEdit(loan)}>Edit</button>
                            <button onClick={() => handleDelete(loan.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No loans found</li>
                )}
            </ul>
        </div>
    );
};

export default LoanList;
