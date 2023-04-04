import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {FC} from "react";

interface FinanceChartProps {
    data: any[]
}

export const FinanceChart: FC<FinanceChartProps> = ({data}) => {
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="total" fill="#fbbf24"/>
        </BarChart>
    )

}
