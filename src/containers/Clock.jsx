import React, { Component, useEffect, useState } from 'react';

class Clock extends Component {
  constructor() {
    super();

    // clockUpdate utilise le this de la CLASS et non celui de la fonction elle même
    this.clockUpdate = this.clockUpdate.bind(this);
  }

  state = {
    hour: new Date().toLocaleString(),
  };

  // state = {} équivaut à :
  // construct(props) {
  //   super(props);
  //   this.state = {
  //     hour: new Date(),
  //   };
  // }

  clockUpdate() {
    this.setState({
      hour: new Date().toLocaleString(),
    });
  }

  componentDidMount() {
    setInterval(this.clockUpdate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockUpdate);
  }

  render() {
    return <h3>{this.state.hour}</h3>;
  }
}

/**
 * EXEMPLE AVEVC LES HOOKS
 */
// const Clock = () => {
//   const [hour, setHour] = useState(new Date().toLocaleString());
//   const clockUpdate = () => setHour(new Date().toLocaleString());

//   useEffect(() => {
//     setInterval(clockUpdate, 1000);

//     return () => clearInterval(clockUpdate);
//   }, []);

//   return <h3>{hour}</h3>;
// };

export default Clock;
