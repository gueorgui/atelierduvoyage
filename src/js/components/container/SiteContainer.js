import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';
import Header from '../presentational/Header';
import Footer from '../presentational/Footer';
import style from './Site.scss';

class SiteContainer extends Component {
  constructor() {
    super();

    this.state = {
      seo_title: 'Test',
      current_menu: 'main'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { seo_title, current_menu } = this.state;
    return(
      <div className="container">
        <Header
          highlight={current_menu}
        />
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <Footer />
      </div>
    );
  }
}

export default SiteContainer;

const wrapper = document.getElementById('adv-container');
wrapper ? ReactDOM.render(<SiteContainer />, wrapper) : false;
