import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";
import { MonthRevenue } from "../../pages/ShopkeeperReports"; // Adjust the path as necessary

interface MonthlyRevenueGraphProps {
  monthlyRevenues: MonthRevenue[];
}

const MonthlyRevenueGraph: React.FC<MonthlyRevenueGraphProps> = ({ monthlyRevenues }) => {
  const monthLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"];

  const maxRevenue = Math.max(...monthlyRevenues.map((data) => data.revenue));

  return (
    <div className="monthlyRevenue">
      <VictoryChart 
        domain={{
            y: [0, maxRevenue * 1.2], 
        }}
        domainPadding={{ x: 50 }}
        theme={VictoryTheme.material}
        width={500}
        >
        {/* X-Axis */}
        <VictoryAxis
            tickValues={monthlyRevenues.map((data) => data.month)}
            tickFormat={(x) => monthLabels[x - 1]}
            label="Mês"
            style={{
                axisLabel: { padding: 30, fontSize: 12, fontWeight: 450 },
                tickLabels: { fontSize: 12 },
            }}
        />
        {/* Y-Axis */}
        <VictoryAxis
          dependentAxis
          label="Faturamento (R$)"
          style={{
            axisLabel: { padding: 10, fontSize: 12, fontWeight: 450 },
            tickLabels: { fill: "none" },
          }}
        />
        {/* Bar Graph */}
        <VictoryBar
          data={monthlyRevenues}
          x="month"
          y="revenue" 
          labels={({ datum }: { datum: MonthRevenue }) => `${datum.revenue.toLocaleString("pt-BR")}`}
          labelComponent={<VictoryLabel dy={-5} />}
          barWidth={20}
          style={{
            data: { fill: "#0A5FDF" },
            labels: { fontSize: 12 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default MonthlyRevenueGraph;
