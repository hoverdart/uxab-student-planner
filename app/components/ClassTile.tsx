export default function ClassTile(props: {
    name?: string;
    color?: string;
    className?: string;
}) {
    return (
        <button
            className={`w-full max-w-28 md:max-w-32 min-h-max h-16 md:h-20 rounded-md p-2 z-10 hover:shadow-sm border-2 border-neutral-500/30 text-center cursor-grab active:cursor-grabbing transition-colors ${props.color} ${props.className}`}
            id={props.name}
            style={{touchAction: "none",}}>
            <p className="wrap-break-word text-sm md:text-base leading-5">{props.name}</p>
        </button>
    );
}
