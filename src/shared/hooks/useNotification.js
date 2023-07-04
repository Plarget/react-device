import { useDispatch } from 'react-redux'
import { addToNotification, deleteFromNotification } from '@shared/store/reducers/NotificationSlice'
import { v4 as uuidv4 } from 'uuid'

const useNotification = () => {
  const dispatch = useDispatch()

  return (text) => {
    const id = uuidv4()
    dispatch(addToNotification({ id, text }))
    setTimeout(() => dispatch(deleteFromNotification(id)), 3000)
  }
}

export default useNotification