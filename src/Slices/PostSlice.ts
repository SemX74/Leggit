import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IPost {
  value: IPostValue[];
  status: string;
}
export interface IPostValue {
  title: string;
  description: string;
  id: string;
  score: number;
}
export interface AddPost{
  title: string;
  description: string;
}

const initialState: IPost = {
  value: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jaksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jaksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description: "asdalksdlkl jaksld laksdj l asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus hic quae libero vel rem eaque dolores inventore quam? Minus nobis officiis laborum, cupiditate quia asperiores et vero sint quibusdam veniam, repellat aut temporibus earum expedita cum praesentium harum nesciunt.asdalksdlkl jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas dgashkdhasd kasgd ajksgd kjasd jhagsd asd aasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jjaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas aksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jaksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jaksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description: "asdalksdlkl jaksld laksdj l asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas dgashkdhasd kasgd ajksgd kjasd jhagsd asd aasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, officia?",
      id: nanoid(),
      description:
        "asdalksdlkl jjaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas jaksld laksdj lahjkd hasd jalsg hjagd hjaksgd khasdg hjksagd ajksgd jas aksld laksdj lasjd alk jkalsdj as jaksd jalds jasld kjalsdja ldjsal asd asd as jda sd",
      score: 0,
    },
  ],
  status: "ok",
};

export const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<AddPost>) => {
      const { title, description } = action.payload;
      state.value.push({
        title: title,
        description: description,
        id: nanoid(),
        score: 0,
      });
    },

    addScore: (state, action: PayloadAction<string>) => {
      const scoreAdded = state.value.find((el) => el.id === action.payload);
      scoreAdded && scoreAdded.score++;
    },
    decScore: (state, action: PayloadAction<string>) => {
      const scoreAdded = state.value.find((el) => el.id === action.payload);
      scoreAdded && scoreAdded.score--;
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
  },
});
export const GetPost = (ID: string | undefined) => {
  let post = initialState.value.find((el) => el.id === ID);
  if (post) {
    return post;
  } else {
    post = {
      title: "Post not found",
      description: "Something went wrong",
      id: "0",
      score: 0,
    };
  }
};
export const { addPost, deletePost, addScore, decScore } = postSlice.actions;
export default postSlice.reducer;
