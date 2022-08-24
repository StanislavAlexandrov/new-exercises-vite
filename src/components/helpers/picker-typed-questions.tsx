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
        <>
            <h2>How many questions?</h2>
            {questionPickerArray.map((element, index) => (
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleSelectedByNumber(element)}
                    key={index}
                >
                    {element}
                </button>
            ))}

            {/* remove below */}

            {/* <button onClick={() => handleSelectedByNumber(2)}>2</button>
        <button onClick={() => handleSelectedByNumber(5)}>5</button>
        <button onClick={() => handleSelectedByNumber(10)}>10</button>
        <button onClick={() => handleSelectedByNumber(15)}>15</button>
        <button onClick={() => handleSelectedByNumber(20)}>20</button> */}
        </>
    );
};

export default Picker;
