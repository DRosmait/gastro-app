import React from 'react';

import TableItem from './TableItem';

interface TalbleListProps {
    amount: number;
    orderedId: Set<number>
    toggleOrder: (id: number) => void;
}

function createArray(lenght: number): string[] {
    return new Array(lenght).join('1,').split(',');
}

const TalbleList: React.FC<TalbleListProps> = ({ amount, orderedId, toggleOrder }) => {
    return <ul className="nx-table-list">
        {
            createArray(amount).map((_, idx) => <TableItem ordered={orderedId.has(idx)} toggleOrder={toggleOrder} key={idx} id={idx} />)
        }
    </ul>
}

export default TalbleList;