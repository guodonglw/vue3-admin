import {  Message } from 'element3'

export const openMsg = (message, type) => {
  Message({
    message,
    type,
    center: true
  })
}
