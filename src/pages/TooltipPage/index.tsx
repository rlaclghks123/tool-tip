import './index.css';

import BasicTooltips from '../../components/BasicTooltips';
import DelayAndHoverNotHidden from '../../components/DelayAndHoverNotHidden';

function TooltipPage() {
  return (
    <main className="container-layout">
      <section className="tooltip-section">
        <BasicTooltips />
        <DelayAndHoverNotHidden />
      </section>
    </main>
  );
}

export default TooltipPage;
