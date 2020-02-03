import React from "react";
import PropTypes from "prop-types";
import Statistic from "../models/Statistic";
import statisticColumns from "../constants/StatisticColumns";
import StatisticRow from "./StatisticRow";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";

function StatisticsTable({
  isSelected,
  onStatisticDeselect,
  onStatisticSelect,
  order,
  orderBy,
  handleRequestSort,
  selectedStatistics,
  statistics
}) {
  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  function getSorting(order, orderBy) {
    return order === "desc"
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }

  const createSortHandler = property => event => {
    handleRequestSort(event, property);
  };

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            {statisticColumns.map(column => {
              return (
                <TableCell>
                  <TableSortLabel
                    active={orderBy === column.orderId}
                    direction={orderBy === column.orderId ? order : "asc"}
                    onClick={createSortHandler(column.orderId)}
                  >
                    {column.displayName}
                    {orderBy === column.orderId ? (
                      <span>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              );
            })}
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
