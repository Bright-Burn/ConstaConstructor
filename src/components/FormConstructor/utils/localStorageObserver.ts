import EventEmitter from 'events'

class LocalStorageObserver extends EventEmitter {
  constructor() {
    super()
    window.addEventListener('storage', this.handleStorageChange)
  }

  private handleStorageChange = (event: StorageEvent) => {
    if (event.storageArea === localStorage) {
      this.emit('change', {
        key: event.key,
        newValue: event.newValue,
        oldValue: event.oldValue,
      })
    }
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value)
    this.emit('change', { key, newValue: value, oldValue: null })
  }

  public removeItem(key: string) {
    const oldValue = localStorage.getItem(key)
    localStorage.removeItem(key)
    this.emit('change', { key, newValue: null, oldValue })
  }

  public clear() {
    localStorage.clear()
    this.emit('change', { key: null, newValue: null, oldValue: null })
  }
}
export const localStorageObserver = new LocalStorageObserver()
