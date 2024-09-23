import { withDesign } from 'storybook-addon-designs';
import { NavBarButton } from './NavBarButton';
import '../WfHeader/style.css';

export default {
    title: 'NavBarButton',
    component: NavBarButton,
    parameters: {
      layout: 'centered',
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/SplxWaLyx6KGfavSR8M1Eu/TriStatePaperInc?node-id=114-1365&t=LVG8xEhQ7eGj0L8h-1',
      },
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    args: { onClick: () => {} },
  };
  
  export const Primary = {
    args: {
      primary: true,
      label: 'NavBarButton',
    },
  };

  Primary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/SplxWaLyx6KGfavSR8M1Eu/TriStatePaperInc?node-id=114-1365&t=LVG8xEhQ7eGj0L8h-1',
    },
  };

//https://www.figma.com/design/SplxWaLyx6KGfavSR8M1Eu/TriStatePaperInc?node-id=114-1365&t=LVG8xEhQ7eGj0L8h-1