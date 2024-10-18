import { PrismicNextLink } from '@prismicio/next';
import { LanguageSwitcherProps } from '@/app/types/customTypes';
import clsx from 'clsx';

const localeLabels = {
    'en-us': 'EN-US',
    'pt-br': 'PT-BR',
};

export const LanguageSwitcher = ({ locales, className }: LanguageSwitcherProps) => (
    <div className={clsx("absolute top-10 left-10", className)}>
        <ul className="flex flex-wrap gap-3 fixed">
            {locales?.map((locale) => {
                if (typeof locale === 'string') {
                    return (
                        <li key={locale} className="first:font-semibold">
                            <PrismicNextLink
                                href={`/${locale}`}
                                locale={locale}
                                aria-label={`Change language to ${locale}`}
                            >
                                {localeLabels[locale as keyof typeof localeLabels] || locale}
                            </PrismicNextLink>
                        </li>
                    )
                }

                return (
                    <li key={locale.lang} className="first:font-semibold">
                        <PrismicNextLink
                            href={locale.url}
                            locale={locale.lang}
                            aria-label={`Change language to ${locale.lang_name}`}
                        >
                            {localeLabels[locale.lang as keyof typeof localeLabels] ||
                                locale.lang}
                        </PrismicNextLink>
                    </li>
                )
            })}
        </ul>
    </div>
);