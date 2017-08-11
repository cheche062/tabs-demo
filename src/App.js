import React, { Component } from 'react';
import './App.css';

const FirstTabContent = () => <div className="content">第一个卡片的内容</div>
const SecondTabContent = () => <div className="content">第二个卡片的内容</div>

class App extends Component {

  state = {
    activeIndex: 0
  }

  handleClick = (i) => {
    this.setState({
      activeIndex: i
    })
  }

  render() {

    let { activeIndex } = this.state
    const contents = [
      <FirstTabContent key={111} />,
      <SecondTabContent key={222} />
    ]

    let tabs = contents.map((items, i) => (
      <li key={i} style={{ 'opacity' : activeIndex === i ? '1' : '0.6' }}
        onClick={() => this.handleClick(i)}>卡片{i}</li>
    ))

    let header = (
      <div className="header">
        <div className="title">
          React 制作选项卡
        </div>
        <div className="tabs">
          <ul>
            {tabs}
          </ul>
          <div style={{ 'transform' : `translateX(${100*activeIndex}%)` }}
            className="underline">
          </div>
        </div>
      </div>
    )
    let content = contents.map((item, i) => {
      if(i === this.state.activeIndex) {
        return item
      }else{
        return ''
      }
    })
    return (
      <div className="App">
        {header}
        {content}
      </div>
    );
  }
}

export default App;
