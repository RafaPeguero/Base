import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component'
import { shallowEqual, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { startLoadingFreestylers } from '../redux/Freestylers/FreestylersAction';
import { ModalForm } from './ModalForm';

export const FreestylersPage = () => {

    const [showModal, setshowModal] = useState(false);

    const handleShowModal = () => {
        setshowModal(!showModal);
    }

    const dispatch = useDispatch();

    const FreeStylersTableColumns = [
        {
            name: 'Nombre',
            selector: row => row.name
        },
        {
            name: 'Titulos',
            selector: row => row.tittles
        },
        {
            name: 'Nacionalidad',
            selector: row => row.nacionality,  
        }
    ]

    const {entities, isLoading} = useSelector(state => state.freestylersReducer, shallowEqual);
    
    
    console.log(entities);

    return (
        <>
            <br />
            <div className='d-flex justify-content-between w-100'>
                <div className="col-md-5">
                    <h3>Listado de freestylers</h3>
                </div>
                <div className="col-md-5 text-end">
                    <button
                        className='btn btn-sm btn-primary'
                        onClick={() => setshowModal(!showModal) }
                    >
                        Agregar Nuevo
                    </button>
                </div>
            </div>
            <br />

            <DataTable
                pagination
                data={ entities }
                columns={ FreeStylersTableColumns }
                progressPending={ false }
                progressComponent={ <Spinner animation='border' /> }
            />

            {
                showModal &&
                <ModalForm 
                showModal={showModal}
                onHide={handleShowModal}
                />
            }
        </>
    )
};


