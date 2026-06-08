export default function MetricTooltip({ active, payload, label, suffix }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      <span>
        {payload[0].value}
        {suffix}
      </span>
    </div>
  );
}
