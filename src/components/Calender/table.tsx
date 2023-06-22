import { FC } from "react";
import { useCalenderDates } from "./hooks";
import "./styles.css";
import { daysOfWeek } from "./utils";

interface Props {
  date: Date;
  numRows: number;
  numCols?: number;
}

export const Table: FC<Props> = ({ date, numRows, numCols = 7 }) => {
  const { getNumberOfDaysInMonth, getFirstDayIndex } = useCalenderDates(date);
  
  const firstDay = getFirstDayIndex();
  const numberOfDaysInMonth = getNumberOfDaysInMonth();
  const givenDate = date.getDate();

  const printDate = (rowIndex: number, colIndex: number) => {
    const value = 7 * rowIndex + colIndex + 1 - firstDay;
    if (value > 0 && value <= numberOfDaysInMonth) {
      return value;
    }
  };

  const renderTableHeader = () => {
    return (
      <tr className="table-head-row">
        {Array.from({ length: numCols }, (_, index) => (
          <th className="table-head" key={index}>
            {daysOfWeek[index]}
          </th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    return Array.from({ length: numRows }, (_, rowIndex) => (
      <tr className="table-row" key={rowIndex}>
        {Array.from({ length: numCols }, (_, colIndex) => (
          <td
            className={
              printDate(rowIndex, colIndex) === givenDate
                ? "table-data highlight"
                : "table-data"
            }
            key={colIndex}
          >
            {printDate(rowIndex, colIndex)}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>{renderTableHeader()}</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};
