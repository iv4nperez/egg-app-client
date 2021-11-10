import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingAllUserRegisterByEmail } from '../../actions/egg';
import { IUser } from '../../interfaces/eggInterface';
import { EggCard } from '../core/index';
import { Nodata } from '../Nodata';
import { EggButton } from '../core/index'

interface IProps {
    className?: string
}

export const EggListChild = ({ className }: IProps) => {
    const dispatch = useDispatch();
    const { email, role }: { email: string, role: string } = useSelector( (state: any) => state.auth );
    const { listUsers }: { listUsers: any } = useSelector( (state: any) => state.users );

    
    const [limit] = useState(10);
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if( listUsers.page <=  listUsers.totalPages){
            setPage( listUsers.nextPage )
        }
    }

    const previousPage = () => {
        if( listUsers.prevPage == null){
            setPage( 1 )
        }else{
            setPage( listUsers.prevPage )
        }
    }



    useEffect(() => {
        dispatch( startLoadingAllUserRegisterByEmail( email, limit, page ) )
    }, [dispatch, limit, page, email])

    return (
        <div className={ className }>
            
            {
                
                listUsers?.docs?.length > 0 
                    ?  listUsers.docs.map( (user : IUser ) => ( <EggCard key={ user._id }  item={ user }></EggCard>))
                    :  ( <Nodata className="animate__animated animate__fadeIn animate__faster" /> )
                
            }

            {
                role === 'ADMIN_ROLE' && (<div className="animate__animated animate__fadeIn animate__faster"  style={{display: 'flex', justifyContent: 'center'}}> 
                    <EggButton className="mr-2" onClick={previousPage} disabled={!listUsers?.hasPrevPage}  width="250" >Previous Page</EggButton>
                    <EggButton onClick={nextPage}  disabled={!listUsers?.hasNextPage}  width="250">Next Page</EggButton>
                </div>)
                        
            }

        
            
        </div>
    )
}
