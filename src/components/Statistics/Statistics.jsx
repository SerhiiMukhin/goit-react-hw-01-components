import PropTypes from "prop-types"
import css from "./Statistics.module.css"
import { getRandomHexColor } from "utils/getRandomColor";

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(item => (
          <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}
