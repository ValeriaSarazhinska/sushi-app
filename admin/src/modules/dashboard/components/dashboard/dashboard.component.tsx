import {Card, CardContent, Typography} from "@mui/material";
import {FinanceChart} from "@app/modules/dashboard/components/finance-chart/finance-chart.component";

export const Dashboard = () => {
    return (
        <Card sx={{marginTop: '64px'}}>
            <CardContent>
                <Typography variant="h5">Вітаємо в адмінці 🍣SushiApp </Typography>
            </CardContent>
        </Card>
    )
}