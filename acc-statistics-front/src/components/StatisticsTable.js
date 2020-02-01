import React from "react";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";
import StatisticRow from "./StatisticRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

function StatisticsTable({
  isSelected,
  onStatisticDeselect,
  onStatisticSelect,
  selectedStatistics,
  statistics
}) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell />
            <TableCell>% de Tiempo Ac 6</TableCell>
            <TableCell>Acc B6 Total Eff #</TableCell>
            <TableCell>% de Tiempo Ac 7</TableCell>
            <TableCell>Acc B7 Total Eff #</TableCell>
            <TableCell>% de Tiempo Ac 8</TableCell>
            <TableCell>Acc B8 Total Eff #</TableCell>
            <TableCell>Promedio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map(statistic => {
            return (
              <StatisticRow
                key={statistic.username}
                onStatisticDeselect={onStatisticDeselect}
                onStatisticSelect={onStatisticSelect}
                isSelected={isSelected}
                statisticData={statistic}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

StatisticsTable.propTypes = {
  isSelected: PropTypes.func.isRequired,
  onStatisticDeselect: PropTypes.func.isRequired,
  onStatisticSelect: PropTypes.func.isRequired,
  selectedStatistics: PropTypes.arrayOf(PropTypes.instanceOf(Statistic))
    .isRequired,
  statistics: PropTypes.arrayOf(PropTypes.instanceOf(Statistic)).isRequired
};

export default StatisticsTable;
