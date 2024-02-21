export function createStore<T>(initial?: T) {
  let previous: T
  let current: T

  const update = (state: T) => {
    previous = current
    current = state
  }

  const get = () => current
  const set = (state: T) => update(state)
  const subscribe = (subscriber: (state: T) => void) => {
    subscriber(current)
  }

  return {
    get,
    set,
    subscribe,
  }
}
