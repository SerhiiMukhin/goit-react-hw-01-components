import PropTypes from "prop-types"
import css from "./TransactionsHistory.module.css"

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead className={css.head}>
      <tr className={css.row}>
        <th className={css.headCell}>Type</th>
        <th className={css.headCell}>Amount</th>
        <th className={css.headCell}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tableBody}>
      {items.map(item => (
        <tr className={css.row} key={item.id}>
          <td className={css.cell}>{item.type}</td>
          <td className={css.cell}>{item.amount}</td>
          <td className={css.cell}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}