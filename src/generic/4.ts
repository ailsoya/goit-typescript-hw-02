/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
class Component<TProps> {
  constructor (public props: TProps) {}

  getTitle(): TProps {
    return this.props
  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props);
  }
}

export {};