import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const useBodyLock = (state, ref) => {
  return () => {
    if (state) {
      enableBodyScroll(ref)
    } else {
      disableBodyScroll(ref, { reserveScrollBarGap: true, })
    }
  }
}

export default useBodyLock