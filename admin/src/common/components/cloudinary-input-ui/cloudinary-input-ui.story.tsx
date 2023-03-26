import {CloudinaryInputUI} from "@app/common/components/cloudinary-input-ui/cloudinary-input-ui.component";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThemeProvider} from "react-admin";
import {theme} from "@app/core/theme";

export default {
    title: 'Common/Cloudinary Input',
    component: CloudinaryInputUI,
} as ComponentMeta<typeof CloudinaryInputUI>;

const Template: ComponentStory<typeof CloudinaryInputUI> = (args) => (
  <ThemeProvider theme={theme}>
      <CloudinaryInputUI {...args}/>
  </ThemeProvider>
    )

export const View = Template.bind({});
 View.args = {
     label: "Головне зображення"
 }