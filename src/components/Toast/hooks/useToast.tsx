import { useDispatch } from 'react-redux'

import { getRandomNumber } from '@/shared/utils/number'
import { TOAST_TIMEOUT } from '@/components/Toast/constant'
import { notificationActions } from '@/services/redux/notification/slice'
import { Toast } from '../type'

const useToast = () => {
  const dispatch = useDispatch()

  const remove = (id: number) => {
    const timeout = setTimeout(() => {
      dispatch(notificationActions.removeToast({ id }))
      clearTimeout(timeout)
    }, TOAST_TIMEOUT)
  }

  const addToast = ({ variety, desc }: Pick<Toast, 'desc' | 'variety'>) => {
    const id = getRandomNumber()

    dispatch(notificationActions.addToast({ variety, desc, id }))

    remove(id)
  }

  return { addToast }
}

export default useToast
