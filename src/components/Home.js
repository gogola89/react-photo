import React, { Component } from "react";
import "../styles/App.css";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import { API_URL, API_KEY, RESULTS_PER_PAGE } from "../helpers/config";
import { ajaxRequest } from "../helpers/requests";

class Home extends Component {
  state = { images: [], isLoading: null, isError: false, errorMsg: "" };
  onSearchSubmit = async (entry) => {
    try {
      this.setState({ isLoading: true });
      const fetchUrl = `${API_URL}?key=${API_KEY}&q=${entry}&per_page=${RESULTS_PER_PAGE}&image_type=photo`;
      const response = await ajaxRequest(fetchUrl);
      const { hits } = response;
      this.setState({ images: hits, isLoading: false });
    } catch (error) {
      this.setState({ isError: true });
      this.setState({ errorMsg: error.message });
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <div className="ui ui-header container" style={{ marginTop: "3.2rem" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.images}
          isLoading={this.state.isLoading}
          isError={this.state.isError}
          errorMsg={this.state.errorMsg}
        />
      </div>
    );
  }
}
export default Home;
