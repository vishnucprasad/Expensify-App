import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import MySwal from '../swal/swal';

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        MySwal.fire({
            title: 'Are you sure you want to remove this expense ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Remove',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.startRemoveExpense({ id: this.props.expense.id });
                this.props.history.push('/');
            }
        });
    };
    render() {
        return (
            <div className="content">
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container card">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--danger" onClick={this.onClick}>Remove Expense</button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => { dispatch(startEditExpense(id, expense)) },
    startRemoveExpense: (data) => { dispatch(startRemoveExpense(data)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);