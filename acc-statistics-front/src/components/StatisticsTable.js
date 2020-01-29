import React from "react";
import StatisticRow from "./StatisticRow";

function StatisticsTable({
  isSelected,
  onStatisticDeselect,
  onStatisticSelect,
  selectedStatistics,
  statistics
}) {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>% de Tiempo Ac 6</th>
          <th>Acc B6 Total Eff #</th>
          <th>% de Tiempo Ac 7</th>
          <th>Acc B7 Total Eff #</th>
          <th>% de Tiempo Ac 8</th>
          <th>Acc B8 Total Eff #</th>
          <th>Promedio</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default StatisticsTable;
