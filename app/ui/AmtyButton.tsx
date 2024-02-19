export default function AmtyButton(props: any) {
    const { name, isSelected, onClick } = props;
    return (
        <button onClick={onClick}
                className="text-neutral text-sm font-normal
                            inline-flex justify-center items-center
                            bg-white
                            border border-solid border-1 border-gray-300 rounded-lg
                            px-2 py-1 mx-1 my-1
                            hover:border-accent">
            <span>{ name }</span>
            { !isSelected &&
                <span className="inline-flex">
                    <svg className="w-6 h-6 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         style={{ fill: "var(--color-secondary)" }} viewBox="0 0 24 24">
                            <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z"/>
                    </svg>
                </span>
            }
            { isSelected &&
                <span className="inline-flex">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="#d24f45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14"/>
                    </svg>
                </span>
            }
        </button>
    );
}
