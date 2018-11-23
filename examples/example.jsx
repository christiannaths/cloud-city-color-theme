import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const MY_CONSTANT = 42;

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}

const HellWorld = (props) => {
  const foo = 'bar';
  let bar = 'baz';
  var baz = (13 * 2) / (2 + 4);
  const { foo, bar } = props;

  return (
    <MyComponent attr1={foo} attr2={bar} attr3="baz">
      <p>Hello world!</p>
    </MyComponent>
  );
};

// This is a comment
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  aMethodThatSwitches() {
    switch (prop.key) {
      case 'foo':
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div
        style={{ height: '100%' }}
        onMouseMove={this.handleMouseMove}
      >
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

console.error('hello world', { HelloWorld });

export default MouseTracker;
export { HelloWorld };
