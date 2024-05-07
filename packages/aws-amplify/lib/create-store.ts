export function createStore<T = unknown>(initial?: T) {
  type Subscriber = (state: T) => void
  let previous: T
  let current: T
  let _subscriber: Subscriber

  if (initial) current = initial

  const update = (state: T) => {
    previous = current
    current = state
    _subscriber(current)
  }
  const get = () => current
  const set = (state: T) => update(state)
  const subscribe = (subscriber: Subscriber) => {
    _subscriber = subscriber
  }

  return {
    get,
    set,
    subscribe,
  }
}
