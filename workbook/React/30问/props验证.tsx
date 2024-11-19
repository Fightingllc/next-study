import PropTypes from 'prop-types'

class MyComponent extends React.Component {
  render() {
      // ...
  }
}
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['male', 'female']),
  friends: PropTypes.arrayOf(PropTypes.string),
  greet: PropTypes.func,
  // ...
}

// ts写法
interface MyComponentProps {
  name: string
  age?: number
  sex?: 'male' | 'female'
  friends?: string[]
  greet?(name: string): void
}

const MyComponent: React.FC<MyComponentProps> = (
    { name, age, sex, friends, greet }
) => {
  // ...
  return <div>{name}</div>;
}