import React, { Component } from "react";
import StatisticsTable from "./components/StatisticsTable";
import StatisticsChart from "./components/StatisticsChart";
import "./App.css";

class App extends Component {
  state = { statistics: [], selectedStatistics: [] };

  componentDidMount() {
    fetch("/statistics")
      .then(res => res.json())
      .then(statistics => {
        this.setState({
          statistics: statistics,
          selectedStatistics: statistics
        });
      });
  }

  showStatistics() {
    if (this.state.selectedStatistics.length === 0) {
      return this.state.statistics;
    } else {
      return this.state.selectedStatistics;
    }
  }

  onStatisticSelect(statistic) {
    // TODO: add statistic to selectedStatistics.
  }

  onStatisticDeselect(statistic) {
    // TODO: remove statistic from selectedStatistics.
  }

  isSelected(statistic) {
    // TODO: check if statistic is included in selectedStatistics.
  }

  render() {
    return (
      <div className="App">
        <h1>Acc Statistics</h1>
        <StatisticsChart selectedStatistics={this.showStatistics()} />
        <StatisticsTable
          isSelected={this.isSelected}
          onStatisticDeselect={this.onStatisticDeselect}
          onStatisticSelect={this.onStatisticSelect}
          selectedStatistics={this.state.selectedStatistics}
          statistics={this.state.statistics}
        />
      </div>
    );
  }
}

export default App;
