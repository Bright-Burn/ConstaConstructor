export class Vertex<T> {
  public next: Vertex<T> | null = null
  public prev: Vertex<T> | null = null
  public data: T
  constructor(data: T) {
    this.data = data
  }
}

export interface History<T> {
  head: Vertex<T> | null
  tail: Vertex<T> | null
  size: number
  maxSize: number
}

export interface IHistoryList<T> extends History<T> {
  insert(data: T): Vertex<T>
  clear(): void
  pop(): void
}

export class HistoryList<T> implements IHistoryList<T> {
  private _head: Vertex<T> | null = null
  private _tail: Vertex<T> | null = null
  private _size: number = 0
  private _maxSize: number

  constructor(history: History<T>) {
    this._maxSize = history.maxSize
    this._tail = history.tail
    this._size = history.size
    this._head = history.head
  }

  public insert(data: T): Vertex<T> {
    const node = new Vertex(data)

    if (!this._head) {
      this._head = node

      this._tail = node
    } else if (this._tail) {
      if (this.tail?.next) {
        this.tail.next.prev = null
        this.tail.next = null
      }
      this._tail.next = node
      node.prev = this._tail
      this._tail = node

      if (this._size === this._maxSize) {
        this._head = this._head.next
        if (this._head) {
          if (this._head.next != null) {
            this._head.next.prev = this._head
          }
          this._head.prev = null
        }

        return node
      }

      this._size += 1
    }

    return node
  }

  clear() {
    this._head = null
    this._tail = null
    this._size = 0
  }

  public pop() {
    this._tail = this._tail?.prev || null
    if (this._size > 0) {
      this._size--
    }

    if (this.tail === null) {
      this._head = null
    }
  }

  public get tail() {
    return this._tail
  }

  public get head() {
    return this._head
  }

  public get maxSize() {
    return this._maxSize
  }

  public get size() {
    return this._size
  }
}

