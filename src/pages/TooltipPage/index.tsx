import './index.css';

import BasicTooltips from '../../components/BasicTooltips';
import DelayAndHoverNotHidden from '../../components/DelayAndHoverNotHidden';
import CustomContentTooltips from '../../components/CustomContentTooltips';
import CustomColorTooltips from '../../components/CustomColorTooltips';
import OnAndOffTooltips from '../../components/OnAndOffTooltips';

function TooltipPage() {
  return (
    <main className="container-layout">
      <section className="tooltip-section">
        <BasicTooltips />
        <DelayAndHoverNotHidden />
        <CustomContentTooltips />
        <CustomColorTooltips />
        <OnAndOffTooltips />
      </section>
    </main>
  );
}

export default TooltipPage;
