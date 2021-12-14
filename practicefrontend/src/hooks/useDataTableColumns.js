import React from "react";

function useDataTableColumns ( {
    columns = [],
    onEdit,
    onDelete
} ) {
    return [ ...columns, {
        name: 'Acciones',
        selecttor: row => row.id,
        cell: ( row, index ) => {
            return ( <>
                {
                    onEdit && (
                        <button
                            style={ { marginRight: '5px' } }
                            className='btn btn-sm btn-outline-success'
                            onClick={ () => onEdit( row ) }
                        >
                            Editar
                        </button>
                    )
                }
                {
                    onDelete && (
                        <button
                            style={ { marginRight: '5px' } }
                            className='btn btn-sm btn-outline-danger'
                            onClick={ () => onDelete( row ) }
                        >
                            Eliminar
                        </button>
                    )
                }
            </> )
        }
    } ]
};

export default useDataTableColumns;
