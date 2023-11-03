import { StatList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <h3>There is no feedback</h3>
      ) : (
        <StatList>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total {total}</span>
          <span>Positive percentage: {positivePercentage} %</span>
        </StatList>
      )}
    </div>
  );
};
