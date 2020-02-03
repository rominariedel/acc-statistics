import React from "react";
import CsvDownloader from "react-csv-downloader";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";
import statisticColumns from "../constants/StatisticColumns";

function StatisticsExporter({ selectedStatistics }) {
  return (
    <CsvDownloader
      columns={statisticColumns}
      filename="Statitics"
      datas={selectedStatistics}
      text="Exportar a CSV"
    />
  );
}

StatisticsExporter.propTypes = {
  selectedStatistics: PropTypes.arrayOf(PropTypes.instanceOf(Statistic))
    .isRequired
};

export default StatisticsExporter;
