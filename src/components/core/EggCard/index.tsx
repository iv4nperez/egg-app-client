import { StyledCard } from './StyledCard'
import { HiOutlinePencilAlt, HiOutlineArchive } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { IUser } from '../../../interfaces/eggInterface'
import { setActiveEditUser, setShowFormChild, startDeleteUserById } from '../../../actions/egg';

interface IProps {
    item: IUser,
}

export const EggCard = ({ item }: IProps) => {

    const dispatch = useDispatch();
    const handleShowFormEdit = () => {
        // setshowFormChild(!showFormChild)
        dispatch( setShowFormChild() )
        dispatch( setActiveEditUser( item ) )
    }

    const handleDeleteItem = (uid: string) => {
        dispatch( startDeleteUserById( uid ))
    }

    return (
        <StyledCard style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>{ item.nombre }</span>
            <div>
                <HiOutlinePencilAlt onClick={ handleShowFormEdit } style={{marginRight: 15}} size={22} cursor="pointer"  />
                <HiOutlineArchive onClick={ ( e ) => handleDeleteItem( item._id ) } size={22} cursor="pointer" />
            </div>
        </StyledCard>
    )
}
