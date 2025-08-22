export default function Stepper({
    steps,
    activeStep,
}: {
    steps: string[];
    activeStep: number;
}) {
    return (
        <div className="w-full flex items-center justify-center">
            <ul className="flex gap-x-24 mt-4">
                {steps.map((step, index) => (
                    <li
                        key={index}
                        className="text-gray-800 flex grow flex-1 group justify-between"
                    >
                        <div className="flex flex-1 flex-col items-center">
                            <div
                                className={`size-7 text-center ${
                                    index <= activeStep
                                        ? "bg-blue-300"
                                        : "bg-gray-100"
                                } text-xl text-white rounded-full`}
                            >
                                {index + 1}
                            </div>
                            <div className="mt-3 text-sm text-nowrap">
                                {step}
                            </div>
                        </div>
                        <div
                            className={`mt-3 h-px w-12 -mr-8 ${
                                index < activeStep
                                    ? "bg-blue-300"
                                    : "bg-gray-200"
                            } group-last:hidden`}
                        ></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
