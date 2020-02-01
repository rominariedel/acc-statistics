import React from "react";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

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
    <TableRow onClick={onRowClick} role="checkbox" hover>
      <TableCell padding="checkbox">
        <Checkbox checked={isSelected(statisticData)} />
      </TableCell>
      <TableCell>{statisticData.name}</TableCell>
      <TableCell>{statisticData.name}</TableCell>
      <TableCell>{statisticData.acc6Per}</TableCell>
      <TableCell>{statisticData.acc6}</TableCell>
      <TableCell>{statisticData.acc7Per}</TableCell>
      <TableCell>{statisticData.acc7}</TableCell>
      <TableCell>{statisticData.acc8Per}</TableCell>
      <TableCell>{statisticData.acc8}</TableCell>
      <TableCell>{statisticData.average}</TableCell>
    </TableRow>
  );
}

StatisticsRow.propTypes = {
  isSelected: PropTypes.func.isRequired,
  onStatisticDeselect: PropTypes.func.isRequired,
  onStatisticSelect: PropTypes.func.isRequired,
  statisticData: PropTypes.instanceOf(Statistic).isRequired
};

export default StatisticsRow;
