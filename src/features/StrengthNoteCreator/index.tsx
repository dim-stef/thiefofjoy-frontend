import { useSelector, useDispatch } from "react-redux";
import NoteCreator from "../../flat/NoteCreator";
import { changeStep } from "../Progress/progressSlice";

function StrengthNoteCreator() {
  const dispatch = useDispatch();

  function onNextClick(){
    dispatch(changeStep(2))
  }

  return(
    <NoteCreator addNewButtonText="Add strength" onNextClick={onNextClick}/>
  )
}

export default StrengthNoteCreator;
