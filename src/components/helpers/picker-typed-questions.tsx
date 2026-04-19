//rename questionPicker
// callbacks; blackbox; it should just return a callback with a number.
// onNumberClick it emits the
//onPickNumber
//whichever component has the picker
//inside parent handleNumberClick function that gets a number as the arg and do sth with it
//this component should be stateless and shouldn't know anything

interface setNumberQuestionsProps {
    setNumberQuestions(arg: number): void;
    showPicker: boolean;
    setShowPicker(arg: boolean): void;
}

const Picker = ({
    setNumberQuestions,
    setShowPicker,
    showPicker,
}: setNumberQuestionsProps) => {
    const handleSelectedByNumber = (selectedNumber: number) => {
        setNumberQuestions(selectedNumber);
        setShowPicker(!showPicker);
    };

    const questionPickerArray = [2, 5, 10, 15, 20]; // this is how many questions we need

    //question prop inside the component; an array of numbers and map through them - DONE
    return (
        <div className="flex w-full flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-slate-900">
                How many questions?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                {questionPickerArray.map((element, index) => (
                    <button
                        className="rounded-xl border border-brand-300 bg-white px-4 py-2 font-semibold text-brand-700 transition hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                        onClick={() => handleSelectedByNumber(element)}
                        key={index}
                    >
                        {element}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Picker;
