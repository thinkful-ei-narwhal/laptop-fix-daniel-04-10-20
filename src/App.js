import React from 'react';
import './App.css';
import Total from './Total';
import CustomizeList from './Customize-list';
import CartList from './Cart-list';


export default class App extends React.Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const {features} = this.props;
    const {selected} = this.state;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2> 
            <CustomizeList 
            onUpdate={this.updateFeature}
            features={features}
            selected={selected}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <CartList 
            selected={selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
                <Total
                selected={selected} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

