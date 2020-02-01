import React from "react";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";

function StatisticsRow({
  isSelected,
  onStatisticDeselect,
  onStatisticSelect,
  statisticData
}) {
  let onRowClick = () => {
    if (isSelected(statisticData)) {
      onStatisticDeselect(statisticData);
    } else {
      onStatisticSelect(statisticData);
    }
  };

  return (
    <tr onClick={onRowClick}>
      <td>{statisticData.name}</td>
      <td>{statisticData.acc6Per}</td>
      <td>{statisticData.acc6}</td>
      <td>{statisticData.acc7Per}</td>
      <td>{statisticData.acc7}</td>
      <td>{statisticData.acc8Per}</td>
      <td>{statisticData.acc8}</td>
      <td>{statisticData.average}</td>
    </tr>
  );
}

StatisticsRow.propTypes = {
  isSelected: PropTypes.func.isRequired,
  onStatisticDeselect: PropTypes.func.isRequired,
  onStatisticSelect: PropTypes.func.isRequired,
  statisticData: PropTypes.instanceOf(Statistic).isRequired
};

export default StatisticsRow;
