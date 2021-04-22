const RADIAN = Math.PI / 180;

export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  category,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="outline"
    >
      {`${category.charAt(0).toUpperCase() + category.slice(1)}`}
    </text>
  );
};

export const setupChartCollection = (collection) => {
  let data = [];
  collection.forEach((cat) => {
    let current = data.find((item) => item.category === cat.category);
    current
      ? (current.amount += cat.amount)
      : data.push({
          category: cat.category,
          amount: cat.amount,
          color: cat.color,
        });
  });
  return data.length ? data.sort((a, b) => a.category.localeCompare(b.category)) : [{category: "No Records",
    amount: 0,
    color: "#EEE8AA"}]
};
