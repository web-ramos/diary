import { FC } from 'react'
import { IContext } from '../types/types'
import { useDispatch } from 'react-redux'
import { deleteContext } from '../store/diarySlice'
import { useSelector } from 'react-redux'
import { ListItem } from '../components/ListItem/ListItem'

const Contexts: FC = () => {

  const contexts: IContext[]  = useSelector((state: any) => state.diary.contexts)
  const dispatch = useDispatch()

  const deleteHandler = (id: string) => {
    console.log(id);
    dispatch(deleteContext(id))
  }

  return (
    <div className="container m-auto p-3">
      <ul>
        {contexts.map((item: IContext) => (
          <ListItem
            key={item.id}
            item={item}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default Contexts