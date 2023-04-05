import {Card, CardContent, Typography} from "@mui/material";
import {FC} from "react";
import {DateTime} from "luxon";

interface FinanceChartTooltipProps {
    active?: boolean;
    payload?: [
        {
            payload: {
                date: string;
                sum: number;
                count: number;
            }
        }
    ]
}

export const FinanceChartTooltip: FC<FinanceChartTooltipProps> = ({active, payload}) => {
    if (!active || !payload || !payload[0]) return null

    return (
        <Card>
            <CardContent>
                <Typography>
                    <span>{DateTime.fromFormat(payload[0].payload.date, 'y-LL-dd').toLocaleString(DateTime.DATE_MED)}</span>
                </Typography>
                <Typography>Сума Замовлень:{payload[0].payload.sum}</Typography>
                <Typography>Кількість Замовлень:{payload[0].payload.count}</Typography>
            </CardContent>
        </Card>
    )
}