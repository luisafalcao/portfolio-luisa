import { PrismicNextLink } from '@prismicio/next';
import { LanguageSwitcherProps } from '@/app/types/customTypes';
import clsx from 'clsx';

const localeLabels = {
    'en-us': 'EN-US',
    'pt-br': 'PT-BR',
};

export const LanguageSwitcher = ({ locales, className }: LanguageSwitcherProps) => (
    <div className={clsx("flex flex-wrap gap-3", className)}>
        <ul className="flex flex-wrap gap-3">
            {locales.map((locale) => (
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
            ))}
        </ul>
    </div>
);