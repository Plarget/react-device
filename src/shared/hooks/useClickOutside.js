import { useEffect } from 'react'

const useClickOutside = (callback, ref) => {
  const onClick = (event) => {
    if (!ref.current) return

    const path = event.composedPath()
    const isClickOutside = !path.includes(ref.current)

    if (isClickOutside) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
    }
  })
}

export default useClickOutside