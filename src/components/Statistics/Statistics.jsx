import PropTypes from "prop-types"

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title !== undefined && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
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
