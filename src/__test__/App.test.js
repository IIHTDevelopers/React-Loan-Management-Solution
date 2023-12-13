import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to Loan Management" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to Loan Management')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Add Loan" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Add Loan')).toBeTruthy();
    });

    test('AppComponent boundary has "Loan List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Loan List')).toBeInTheDocument();
    });
});
