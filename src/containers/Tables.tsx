import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TablesState } from '../store/tables/types';
import { toggleTable } from '../store/tables/actions';
import { AppState } from '../store';
import TableList from '../components/TableList';

interface TablesProps {
    tables: TablesState;
    toggleTable: (id: number) => void;
}

const Tables: React.FC<TablesProps> = ({ tables, toggleTable}) => {
    return <section className="nx-section">
        <div className="nx-container">
            <h1 className="nx-section__title">Tables to order</h1>

            <TableList amount={tables.amount} orderedId={tables.orderedId} toggleOrder={toggleTable} />
        </div>
    </section>
}

const mapStateToProps = ({ tables }: AppState) => ({
    tables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTable: (id: number) => dispatch(toggleTable(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tables);