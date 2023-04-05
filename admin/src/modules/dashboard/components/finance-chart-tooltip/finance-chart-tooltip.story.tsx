import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeProvider} from "react-admin";
import {theme} from "@app/core/theme";
import {
    FinanceChartTooltip
} from "@app/modules/dashboard/components/finance-chart-tooltip/finance-chart-tooltip.component";

export default {
    title: 'Dashboard/Finance chart tooltip',
    component: FinanceChartTooltip,
} as ComponentMeta<typeof FinanceChartTooltip>;

const Template: ComponentStory<typeof FinanceChartTooltip> = (args) => (
    <ThemeProvider theme={theme}>
        <FinanceChartTooltip {...args}/>
    </ThemeProvider>
)

export const View = Template.bind({});
View.args = {
    active: true,
    payload: [
        {
            payload: {
                count: 20,
                date: "2023-04-04",
                sum: 12845
            }
        }]
}