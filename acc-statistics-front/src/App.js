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
          statistics: statistics
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
    this.setState({
      selectedStatistics: [...this.state.selectedStatistics, statistic]
    });
    console.log(this.state);
  }

  onStatisticDeselect(statistic) {
    let newSelected = this.state.selectedStatistics.filter(
      selectedStatistic => selectedStatistic !== statistic
    );
    this.setState({ selectedStatistics: newSelected });
  }

  isSelected(statistic) {
    return this.state.selectedStatistics.includes(statistic);
  }

  render() {
    return (
      <div className="App">
        <h1>Acc Statistics</h1>
        <StatisticsChart selectedStatistics={this.showStatistics()} />
        <StatisticsTable
          isSelected={this.isSelected.bind(this)}
          onStatisticDeselect={this.onStatisticDeselect.bind(this)}
          onStatisticSelect={this.onStatisticSelect.bind(this)}
          selectedStatistics={this.state.selectedStatistics}
          statistics={this.state.statistics}
        />
      </div>
    );
  }
}

export default App;
