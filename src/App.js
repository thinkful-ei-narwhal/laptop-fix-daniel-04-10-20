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
    // const features = Object.keys(this.props.features).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const options = this.props.features[feature].map(item => {
    //      const itemHash = slugify(JSON.stringify(item));
    //      return (
    //        <div key={itemHash} className="feature__item">
    //          <input
    //            type="radio"
    //             id={itemHash}
    //             className="feature__option"
    //             name={slugify(feature)}
    //             checked={item.name === this.state.selected[feature].name}
    //             onChange={e => this.updateFeature(feature, item)}
    //           />
    //        <label htmlFor={itemHash} className="feature__label">
    //          {item.name} ({USCurrencyFormat.format(item.cost)})
    //        </label>
    //      </div>
    //       )
    //     );
    //   });

    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //         <h3>{feature}</h3>
    //       </legend>
    //       {options}
    //     </fieldset>
    //   );
    // });

    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });


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
            features={this.props.features}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <CartList 
            selected={this.state.selected}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
                <Total
                selected={this.state.selected} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

