import classNames from 'classnames';

interface Props extends React.ComponentPropsWithoutRef<'span'> {
    size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    color?: 'black' | 'grey' | 'red' | 'white';
    weight?: 'light' | 'normal' | 'bold';
    link?: string;
}

export default function Text({
    size = 'md',
    color = 'black',
    weight = 'normal',
    link,
    ...props
}: Props) {
    const className = classNames(
        props.className,
        {
            'text-4xl': size === '4xl',
            'text-3xl': size === '3xl',
            'text-2xl': size === '2xl',
            'text-xl': size === 'xl',
            'text-lg': size === 'lg',
            'text-base': size === 'md',
            'text-sm': size === 'sm',
            'text-xs': size === 'xs',
        },
        {
            'text-black': color === 'black',
            'text-zinc-400': color === 'grey',
            'text-red-500': color === 'red',
            'text-white': color === 'white',
        },
        {
            'font-light': weight === 'light',
            'font-normal': weight === 'normal',
            'font-bold': weight === 'bold',
        },
    );

    if (link) {
        return (
            <a {...props} href={link} className={className}>
                {props.children}
            </a>
        );
    }

    return (
        <span {...props} className={className}>
            {props.children}
        </span>
    );
}
