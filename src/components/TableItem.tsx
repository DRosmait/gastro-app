import React from 'react';

interface TableItemProps {
    ordered: boolean;
    id: number;
    toggleOrder: (id: number) => void;
}

const TableItem: React.FC<TableItemProps> = ({ ordered, toggleOrder, id }) => {
    const orderedModifier = ordered ? ' nx-table-item--ordered' : '';
    return <li className={"nx-table-item" + orderedModifier} onClick={() => toggleOrder(id)}>
        <h3 className="nx-table-itme__title">Talbe is {ordered ? 'ordered' : 'free'}</h3>
    </li>;
}

export default TableItem;