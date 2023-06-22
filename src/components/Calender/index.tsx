import { FC } from "react";
import "./styles.css";
import { Table } from "./table";
import { useCalenderDates } from "./hooks";

interface Props {
  date?: Date;
}

const Calender: FC<Props> = ({ date = new Date() }) => {
  const { getMonthAndYear } = useCalenderDates(date);

  return (
    <div className="date-container">
      <span className="calender-heading">{getMonthAndYear()}</span>
      <Table numRows={5} date={date} />
    </div>
  );
};

export default Calender;
