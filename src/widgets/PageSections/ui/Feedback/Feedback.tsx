import { FeedbackForm, } from "@/features/FeedbackForm"
import { Section, } from "@/shared/ui/Section"
import { TextBanner, } from "@/shared/ui/TextBanner"

export const Feedback = () => {
    return (
        <Section
            SectionClassName="py-22.5 max-xl:p-[34px] max-md:py-6 max-md:px-2.5"
            ContainerClassName="flex flex-col gap-16 max-md:gap-5 items-center"
            id="form"
        >
            <TextBanner
                type="h2"
                variant="light"
                headerText="Готовы обсудить проект?"
                subheaderText="Обсудим ваш проект и предложим лучшее решение"
            />

            <FeedbackForm />
        </Section>
    )
}