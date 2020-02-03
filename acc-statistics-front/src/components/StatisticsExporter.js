import React from "react";
import CsvDownloader from "react-csv-downloader";
import GetAppIcon from "@material-ui/icons/GetApp";
import { DownloadCSV } from "../Styles";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";
import statisticColumns from "../constants/StatisticColumns";

function StatisticsExporter({ selectedStatistics }) {
  return (
    <DownloadCSV>
      <CsvDownloader
        columns={statisticColumns}
        filename="Statitics"
        datas={selectedStatistics}
      >
        <GetAppIcon />
      </CsvDownloader>
    </DownloadCSV>
  );
}

StatisticsExporter.propTypes = {
  selectedStatistics: PropTypes.arrayOf(PropTypes.instanceOf(Statistic))
    .isRequired
};

export default StatisticsExporter;
