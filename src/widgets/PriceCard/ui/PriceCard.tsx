import { useState, } from "react";
import { PriceItem, } from "@/entities/Price/types";
import { Button, } from "@/shared/ui/Button";
import { Icon, } from "@/shared/ui/Icon";
import { Footnote } from "@/shared/ui/Footnote/Footnote";

type PriceCardProps = {
    item: PriceItem;
};

export const PriceCard = ({ item, }: PriceCardProps) => {
    const [isExpanded, setIsExpanded,] = useState(false);
    const [activeTab, setActiveTab,] = useState(0);

    const currentTab = item.tabs[activeTab];

    return (
        <div className="flex flex-col py-15 max-md:py-10 border-y border-primary overflow-hidden w-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between max-md:gap-4 gap-16">
                <span className="font-p-xl text-text-secondary w-[195px]">
                    {item.category}
                </span>
                <div className="flex flex-col gap-4.5 flex-1">
                    <h4 className="font-h4 text-primary-dark">
                        {item.title}
                    </h4>
                    <p className="font-p-lg text-text-secondary">
                        {item.description}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="font-h4 text-primary-dark">
                        {item.price}
                    </span>
                    <Button
                        theme={isExpanded ? "blue" : "white-blue"}
                        size="small"
                        text="Подробнее"
                        onClick={() => setIsExpanded(!isExpanded)} className="w-[170px] self-end max-md:w-full"
                    />
                </div>
            </div>
            {isExpanded && (
                <>
                    <div className="flex flex-col lg:flex-row w-full gap-6 p-5 md:p-4">
                        <div className="flex flex-col gap-3 lg:w-[217px] flex-shrink-0">
                            {item.tabs.map((tab, index) => (
                                <Button
                                    key={tab.id}
                                    text={tab.label}
                                    size="regular"
                                    theme={activeTab === index ? "blue" : "white-blue"}
                                    onClick={() => setActiveTab(index)}
                                    className="text-nowrap !text-left"
                                />
                            ))}
                        </div>
                        <div className="flex-1 flex flex-col gap-6">
                            {currentTab.content.features && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {currentTab.content.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-row gap-6 max-md:gap-4 items-center border 
                                            bg-background border-border rounded-xl p-[25px] w-full`}
                                        >
                                            <div className={`bg-primary p-3 rounded-lg`}>
                                                <Icon
                                                    Svg={feature.icon}
                                                    width={24}
                                                    height={24}
                                                    className={feature.iconType === 'stroke' ? 'stroke-primary-light' : 'fill-primary-light'}
                                                />
                                            </div>
                                            <p className={`font-p-xl text-text-main font-bold`}>{feature.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {currentTab.content.sections && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {currentTab.content.sections.map((section, index) => (
                                        <div key={index} className="flex flex-col gap-4 p-6 rounded-3xl bg-background border border-border">
                                            <p className="font-p-xl font-bold text-primary">
                                                {section.title}
                                            </p>
                                            <ul className="flex flex-col gap-2 list-disc pl-5">
                                                {section.items.map((listItem, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="font-p-md text-text-secondary"
                                                    >
                                                        {listItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {currentTab.content.cards && (
                                <div className="flex flex-col gap-6">
                                    {currentTab.content.cards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-6 bg-white p-6 rounded-3xl border border-border"
                                        >
                                            <div className={`bg-primary p-3 rounded-lg`}>
                                                <Icon
                                                    Svg={card.icon}
                                                    width={24}
                                                    height={24}
                                                    className={card.iconType === 'stroke' ? 'stroke-primary-light' : 'fill-primary-light'}
                                                />
                                            </div>
                                            <div className="flex flex-col items-start gap-4">
                                                <p className="font-p-xl font-bold text-primary">
                                                    {card.title}
                                                </p>
                                                <ul className="flex flex-col gap-2.5 list-disc list-inside">
                                                    {card.items.map((item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="font-p-md text-text-secondary"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {item.footnotes && item.footnotes.length > 0 && (
                        <Footnote items={item.footnotes} variant="dark" className="mt-2 px-5 md:px-4" />
                    )}
                </>
            )}
        </div>
    );
};