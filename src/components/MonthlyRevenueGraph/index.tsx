import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from "victory";
import { MonthRevenue } from "../../pages/ShopkeeperReports"; // Adjust the path as necessary

interface MonthlyRevenueGraphProps {
  monthlyRevenues: MonthRevenue[];
}

const MonthlyRevenueGraph: React.FC<MonthlyRevenueGraphProps> = ({ monthlyRevenues }) => {
  // Format month numbers into readable labels
  const monthLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Aug", "Set", "Out", "Nov", "Dez"];

  const maxRevenue = Math.max(...monthlyRevenues.map((data) => data.revenue));

  return (
    <div className="monthlyRevenue">
      <VictoryChart 
        domain={{
            y: [0, maxRevenue * 1.2], // Extend the y-axis slightly above the highest bar
        }}
        domainPadding={{ x: 50 }} // Increase spacing between bars
        theme={VictoryTheme.material}
        width={500} // Make the graph longer
        >
        {/* X-Axis */}
        <VictoryAxis
            tickValues={monthlyRevenues.map((data) => data.month)} // Months 1-12
            tickFormat={(x) => monthLabels[x - 1]} // Convert month numbers to names
            label="Mês" // Add the label "Mês"
            style={{
                axisLabel: { padding: 30, fontSize: 12, fontWeight: 450 }, // Position and style for the label
                tickLabels: { fontSize: 12 }, // Style for the month names
            }}
        />
        {/* Y-Axis */}
        <VictoryAxis
          dependentAxis
          label="Faturamento (R$)"
          style={{
            axisLabel: { padding: 10, fontSize: 12, fontWeight: 450 }, // Position and style for the label
            tickLabels: { fill: "none" }, // Hide tick labels
          }}
        />
        {/* Bar Graph */}
        <VictoryBar
          data={monthlyRevenues}
          x="month" // Month numbers
          y="revenue" // Revenue
          labels={({ datum }: { datum: MonthRevenue }) => `${datum.revenue.toLocaleString("pt-BR")}`} // Tooltip
          labelComponent={<VictoryLabel dy={-5} />} // Adjust label position
          barWidth={20} // Increased bar width
          style={{
            data: { fill: "#0A5FDF" }, // Bar color
            labels: { fontSize: 12 }, // Label styling
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default MonthlyRevenueGraph;
