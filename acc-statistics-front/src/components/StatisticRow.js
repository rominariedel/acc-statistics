import React from "react";

function StatisticsRow({
  onStatisticDeselect,
  onStatisticSelect,
  isSelected,
  statisticData
}) {
  // TODO: check if the average is being calculated correctly
  let average =
    (statisticData.bar1 + statisticData.bar2 + statisticData.bar3) / 3;

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
      <td>{statisticData["acc6%"]}</td>
      <td>{statisticData.acc6}</td>
      <td>{statisticData["acc7%"]}</td>
      <td>{statisticData.acc7}</td>
      <td>{statisticData["acc8%"]}</td>
      <td>{statisticData.acc8}</td>
      <td>{Math.round(average * 100) / 100}</td>
    </tr>
  );
}

export default StatisticsRow;
