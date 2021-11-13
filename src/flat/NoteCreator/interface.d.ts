import { NoteInterface } from "../../features/GratitudeNote/interfaces";

export interface NoteCreatorProps{
    addNewButtonText: string;
    exampleNotes?: NoteInterface[];
    onNextClick: () => void;
    //setStep: Dispatch<SetStateAction<number>>;
}
