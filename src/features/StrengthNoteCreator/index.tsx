import { useSelector, useDispatch } from "react-redux";
import NoteCreator from "../../flat/NoteCreator";
import { changeStep } from "../Progress/progressSlice";
import { StrengthJournalCreatorProps } from "./interface";

function StrengthNoteCreator({
  exampleStrengths,
}: StrengthJournalCreatorProps) {
  const dispatch = useDispatch();

  function onNextClick() {
    dispatch(changeStep(2));
  }

  return (
    <NoteCreator
      addNewButtonText="Add strength"
      onNextClick={onNextClick}
      exampleNotes={exampleStrengths}
    />
  );
}

export default StrengthNoteCreator;
