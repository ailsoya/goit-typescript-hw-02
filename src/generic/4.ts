/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor (public props: T) {}

  getTitle(): T {
    return this.props
  }
}

class Page extends Component<Props> {
  pageInfo (): void {
    console.log(this.props);
  }
}

export {};