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
import { NoteInterface } from "../GratitudeNote/interfaces";
import { GratitudeNoteCreatorProps } from "./interface";

function GratitudeNoteCreator({setStep}: GratitudeNoteCreatorProps) {
  const notesRef = useRef<HTMLInputElement[] | null[]>([]);
  const [notes, setNotes] = useState<NoteInterface[]>([
    {
      id: 0,
      body: "",
    },
  ]);

  function onTextChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    let new_notes = [...notes];
    new_notes[id].body = e.currentTarget.value;
    setNotes(new_notes);
  }

  function onNewNoteClick() {
    let new_notes = [...notes];
    new_notes.push({
      id: new_notes.length,
      body: "",
    });
    setNotes(new_notes);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key == "Enter") {
      onNewNoteClick();
    }
  }

  function handleRemoveNote(index: number) {
    let new_notes = [...notes];
    new_notes.splice(index, 1);
    setNotes(new_notes);
  }

  function onNextClick(){
    setStep(1);
  }

  useEffect(() => {
    notesRef.current[notesRef.current.length - 1]?.focus();
  }, [notes.length]);

  return (
    <VStack w="100%" maxW="500px" spacing={4} align="stretch">
      {notes.map((note: NoteInterface, i: number) => (
        <InputGroup key={note.id}>
          <Input
            ref={(el) => (notesRef.current[i] = el)}
            variant="filled"
            placeholder="Note"
            value={note.body}
            onKeyDown={handleKeyDown}
            onChange={(e) => onTextChange(e, note.id)}
          />
          {notes.length > 1 && (
            <InputRightElement>
              <CloseButton onClick={() => handleRemoveNote(i)} />
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
            Add gratitude note
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
      <ButtonGroup
        pt="50px"
        justifyContent="center"
        variant="outline"
        spacing="6"
        size="lg"
      >
        <Button>Skip</Button>
        <Button colorScheme="teal" variant="solid" onClick={onNextClick}>
          Done
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default GratitudeNoteCreator;
