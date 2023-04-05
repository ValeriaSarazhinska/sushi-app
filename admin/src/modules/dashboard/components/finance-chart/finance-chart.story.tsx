import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeProvider} from "react-admin";
import {theme} from "@app/core/theme";
import {FinanceChart} from "@app/modules/dashboard/components/finance-chart/finance-chart.component";

export default {
    title: 'Dashboard/Finance chart',
    component: FinanceChart,
} as ComponentMeta<typeof FinanceChart>;

const Template: ComponentStory<typeof FinanceChart> = (args) => (
    <ThemeProvider theme={theme}>
        <FinanceChart {...args}/>
    </ThemeProvider>
)

export const View = Template.bind({});
View.args = {
    data: [
        {
            count: 5,
            date: "2023-03-30",
            sum: 2815
        },
        {
            count: 6,
            date: "2023-03-31",
            sum: 3060
        },
        {
            count: 5,
            date: "2023-04-01",
            sum: 2710
        },
        {
            count: 6,
            date: "2023-04-02",
            sum: 3260
        },
        {
            count: 5,
            date: "2023-04-03",
            sum: 2770
        },
        {
            count: 20,
            date: "2023-04-04",
            sum: 12845
        },
    ]

}