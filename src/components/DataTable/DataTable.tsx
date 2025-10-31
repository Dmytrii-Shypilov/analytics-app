import s from "./table.module.scss";

type CSVData = {
  [key: string]: string | number;
}[];

type TableProps = {
    data: CSVData,
    name: string
}

const DataTable: React.FC<TableProps> = ({ data, name }) => {
const summary  = data.splice(0,10)
  const columnNames = Object.keys(data[0]);
  return (
    <table className={s.table}>
      <caption>{name}</caption>
      <thead>
        <tr>
          {columnNames.map((col) => (
            <th className={s.th} scope="col" key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {summary.map((row, idx) => {
          return (
            <tr key={idx}>
              {Object.values(row).map((el, idx, arr) => (
                <td className={s.td} key={String(el)+String(arr[0])}>{el}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
