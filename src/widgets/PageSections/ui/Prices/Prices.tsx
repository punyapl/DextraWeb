import { prices, } from "@/shared/mocks/prices";
import { Section, } from "@/shared/ui/Section"
import { TextBanner, } from "@/shared/ui/TextBanner"
import { PriceCard, } from "@/widgets/PriceCard";

export const Prices = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5 bg-background-secondary"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="prices"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Наши цены"
            />
            <div className="flex flex-col gap-6 w-full">
                {prices.map((item, index) => (
                    <PriceCard key={index} item={item} />
                ))}
            </div>
        </Section>
    );
};
