import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export default function ProcessSteps({ steps }) {
  return (
    <StaggerGroup className="flex flex-col gap-[38px]">
      {steps.map((step) => (
        <StaggerItem
          key={step.n}
          className="grid grid-cols-[48px_1fr] min-[520px]:grid-cols-[56px_1fr] gap-[18px] min-[520px]:gap-[22px] items-start"
        >
          <div className="w-12 h-12 min-[520px]:w-[52px] min-[520px]:h-[52px] rounded-full bg-navy text-gold font-display text-[21px] flex items-center justify-center flex-shrink-0 shadow-[0_10px_24px_rgba(22,32,47,0.12)]">
            {step.n}
          </div>
          <div>
            <h3 className="m-0 mb-2.5 font-display font-medium tracking-[0.05em] text-2xl text-navy">
              {step.title}
            </h3>
            <p className="m-0 text-base leading-[1.7] text-grey-text max-w-[540px]">
              {step.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
