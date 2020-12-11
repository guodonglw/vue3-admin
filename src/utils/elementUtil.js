import { useNotify } from 'element3'

export const openMsg = (message = '', type = 'info', title = '提示') => {
  const notify = useNotify()
  notify({
    title,
    message,
    type
  })
}
