import React from 'react'
import { useSelector } from 'react-redux';
import  noData  from '../assets/undraw_No_data_re_kwbl.png'

export const Nodata = ({ className }: { className: string }) => {
    const { role }: { role: string } = useSelector( (state: any) => state.auth );
    return (
        <div className={ className } style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img 
                style={{ marginTop: '5rem' }}
                width={ 250 } 
                src={noData} 
                alt="no data" 
            />
            <span style={{ marginTop: '2rem' }}>
               {
                   role === 'ADMIN_ROLE'
                    ? 'Lo siento, Aun no has creado algun registro.'
                    : 'Lo siento, Tu usuario solo puede consultar información'
               }
                               
            </span>
        </div>
    )
}
