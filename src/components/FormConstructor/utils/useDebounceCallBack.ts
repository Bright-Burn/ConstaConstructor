import { useEffect, useRef } from 'react'

// функция, которая откладывает вызов другой функции до того момента, когда с последнего вызова пройдёт определённое количество времени
export function useDebouncedCallback<A extends any[]>(
  callback: (...args: A) => void,
  wait: number,
) {
  // track args & timeout handle between calls
  const argsRef = useRef<A>()
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }

  // make sure our timeout gets cleared if
  // our consuming component gets unmounted
  useEffect(() => cleanup, [])

  return function debouncedCallback(...args: A) {
    // capture latest args
    argsRef.current = args

    // clear debounce timer
    cleanup()

    // start waiting again
    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current)
      }
    }, wait)
  }
}
