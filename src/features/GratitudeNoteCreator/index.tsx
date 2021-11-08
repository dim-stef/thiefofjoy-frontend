import React, { useState, useEffect } from "react";
import { Stack, HStack, VStack, Input } from "@chakra-ui/react";
import { Box, StackDivider, Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { NoteInterface } from "../GratitudeNote/interfaces";

function GratitudeNoteCreator() {
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

  return (
    <VStack
      w="100%"
      maxW="500px"
      spacing={4}
      align="stretch"
    >
      {notes.map((note: NoteInterface) => (
        <Input
          variant="filled"
          placeholder="Note"
          value={note.body}
          key={note.id}
          onChange={(e) => onTextChange(e, note.id)}
        />
      ))}
      {/* <Input placeholder="Note" onChange={(e)=>onTextChange(e, notes.length)}/> */}
      <Flex w="100%" justifyContent="center">
        <Button
          leftIcon={<AddIcon />}
          onClick={onNewNoteClick}
          maxW="200px"
          colorScheme="teal"
          variant="solid"
        >
          Add gratitude note
        </Button>
      </Flex>

      {/* <IconButton
        maxW="100px"
        onClick={onNewNoteClick}
        colorScheme="teal"
        aria-label="Add note"
        size="lg"
        icon={<AddIcon />}
      /> */}
    </VStack>
  );
}

export default GratitudeNoteCreator;
