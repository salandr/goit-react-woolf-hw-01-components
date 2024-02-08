import { getRandomHexColor } from './getRandomHexColor';
import {
  StatsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

export default Statistics;
