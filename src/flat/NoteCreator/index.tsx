import React, { useState, useRef, useEffect } from "react";
import {
  Stack,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Box, StackDivider, Flex } from "@chakra-ui/layout";
import { CloseButton } from "@chakra-ui/close-button";
import { IconButton } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { NoteInterface } from "../../features/GratitudeNote/interfaces";
import { NoteCreatorProps } from "./interface";
import { changeStep } from "../../features/Progress/progressSlice";
import uuidv4 from "../../utils/uuid";

function NoteCreator({
  addNewButtonText,
  exampleNotes,
  onNextClick,
}: NoteCreatorProps) {
  const dispatch = useDispatch();
  const notesRef = useRef<HTMLInputElement[] | null[]>([]);
  const [notes, setNotes] = useState<NoteInterface[]>(
    exampleNotes
      ? exampleNotes
      : [
          {
            id: uuidv4(),
            body: "",
          },
        ]
  );

  function onTextChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    let new_notes = [...notes];
    const foundNote = new_notes.find(note=>note.id==id);
    if(foundNote){
      foundNote.body = e.currentTarget.value;
    }
    setNotes(new_notes);
  }

  function onNewNoteClick() {
    let new_notes = [...notes];
    new_notes.push({
      id: uuidv4(),
      body: "",
    });
    setNotes(new_notes);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key == "Enter") {
      let emptyNoteIndex = notes.findIndex((note)=>note.body=='' || !note.body)
      if(emptyNoteIndex==-1){
        onNewNoteClick();
      }else{
        notesRef.current[emptyNoteIndex]?.focus();
      }
    }
  }

  function handleRemoveNote(id: string) {
    let index = notes.findIndex((note)=>note.id == id)
    let new_notes = [...notes];
    new_notes.splice(index, 1);
    setNotes(new_notes);
  }

  function handleNextClick() {
    onNextClick();
    // dispatch(changeStep(1));
  }

  useEffect(() => {
    // first check if there are empty inputs and attempt to focus on these
    // this can be the case on the initial load where there are 3 empty inputs
    let emptyNoteIndex = notes.findIndex((note)=>note.body=='' || !note.body)
    if(emptyNoteIndex!=-1){
      notesRef.current[emptyNoteIndex]?.focus();
    }else{
      notesRef.current[notesRef.current.length - 1]?.focus();
    }
  }, [notes.length]);

  return (
    <VStack w="100%" maxW="500px" spacing={4} align="stretch">
      {notes.map((note: NoteInterface, i: number) => (
        <InputGroup key={note.id}>
          <Input
            ref={(el) => (notesRef.current[i] = el)}
            variant="filled"
            placeholder={
              note.placeholder
                ? note.placeholder
                : exampleNotes
                ? exampleNotes[Math.floor(Math.random() * exampleNotes.length)].placeholder
                : ''
            }
            value={note.body}
            onKeyDown={handleKeyDown}
            onChange={(e) => onTextChange(e, note.id)}
          />
          {notes.length > 1 && (
            <InputRightElement>
              <CloseButton onClick={() => handleRemoveNote(note.id)} />
            </InputRightElement>
          )}
        </InputGroup>
      ))}
      {/* <Input placeholder="Note" onChange={(e)=>onTextChange(e, notes.length)}/> */}
      <Flex w="100%">
        <ButtonGroup
          w="100%"
          justifyContent="space-between"
          variant="outline"
          spacing="6"
        >
          <Button
            w="100%"
            leftIcon={<AddIcon />}
            onClick={onNewNoteClick}
            colorScheme="teal"
            variant="solid"
          >
            {addNewButtonText}
          </Button>
        </ButtonGroup>
      </Flex>

      {/* <IconButton
        maxW="100px"
        onClick={onNewNoteClick}
        colorScheme="teal"
        aria-label="Add note"
        size="lg"
        icon={<AddIcon />}
      /> */}
      {/* <ButtonGroup
        pt="50px"
        justifyContent="center"
        variant="outline"
        spacing="6"
        size="lg"
      >
        <Button>Skip</Button>
        <Button colorScheme="teal" variant="solid" onClick={handleNextClick}>
          Done
        </Button>
      </ButtonGroup> */}
    </VStack>
  );
}

export default NoteCreator;
