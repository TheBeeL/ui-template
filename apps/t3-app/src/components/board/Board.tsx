"use client";

import { atom } from "jotai";

type ItemId = Branded<number, "ItemId">;

type BoardContents = {};

type BoardItem = {
  uid: ItemId;
};

type BoardItemContainer = BoardItem & {
  children: Record<number, BoardItem>;
};

const boardContentsAtom = atom<BoardContents>({});

interface BoardProps {}

const Board = (props: BoardProps) => {
  const {} = props;

  return (
    <div>
      <div>Board</div>
    </div>
  );
};

export { Board };
