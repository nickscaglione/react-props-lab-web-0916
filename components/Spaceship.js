const React = require('react');
const defaultProps = {colors: ['black', 'red'], hasRockets: false}

class Spaceship extends React.Component {

  render(){
    return(
      <ul>
        <li>name: {this.props.name}</li>
        <li>speed: {this.props.speed}</li>
        <li>rockets: {(this.props.hasRockets || defaultProps.hasRockets).toString()}</li>
        <li>colors: {(this.props.colors || defaultProps.colors).join(', ')}</li>
      </ul>
    )
  }
}

Spaceship.defaultProps = defaultProps

module.exports = Spaceship
