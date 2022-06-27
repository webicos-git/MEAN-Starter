export class Post {
  _id: string
  __v: number
  title: string
  description: string
  date: string

  constructor(
    _id: string,
    __v: number,
    title: string,
    description: string,
    date: string,
  ) {
    this._id = _id
    this.__v = __v
    this.title = title
    this.description = description
    this.date = date
  }

}
