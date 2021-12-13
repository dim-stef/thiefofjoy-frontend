import { useQueryClient, useQuery } from "react-query";
import { NoteInterface } from "../../GratitudeNote/interfaces";
import axios from "axios";

async function getGratitudeNotes() {
  try {
    let response = await axios.get<NoteInterface[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/gratitude_notes/`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

function useGetGratitudeNotes(){
  const queryClient = useQueryClient();
  const query = useQuery('getGratitudeNotes', getGratitudeNotes);
  return query;
}

export default useGetGratitudeNotes;
