import { useSelector, useDispatch } from "react-redux";
import NoteCreator from "../../flat/NoteCreator";
import { GratitudeNoteCreatorProps } from "./interface";
import { changeStep } from "../Progress/progressSlice";

function GratitudeNoteCreator({ exampleNotes }: GratitudeNoteCreatorProps) {
  const dispatch = useDispatch();

  function onNextClick() {
    dispatch(changeStep(1));
  }

  return (
    <NoteCreator
      exampleNotes={exampleNotes}
      addNewButtonText="Add gratitude note"
      onNextClick={onNextClick}
    />
  );
}

export default GratitudeNoteCreator;
