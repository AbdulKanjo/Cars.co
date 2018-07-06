import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    this.setState({ inventory: this.props.inventory });
  }
  handleDelete(id) {
    axios.delete(`/api/product/${id}`).then(() => {
      this.props.get();
    });
  }
  render() {
    console.log(this.props.inventory);
    let invenList = this.props.inventory.map((e, i) => {
      return (
        <div key={i}>
          <div>
            name: {e.name} ${e.price} <img src={e.image} />
          </div>
          <button onClick={id => this.handleDelete(e.product_id)}>
            delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <Product />
        {invenList}
      </div>
    );
  }
}
export default Dashboard;
