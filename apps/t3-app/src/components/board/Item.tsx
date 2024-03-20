interface ItemProps {
  item: Item;
}

export const Item = (props: ItemProps) => {
  const { item } = props;

  return <div className="size-5 cursor-grab rounded bg-cyan-300"></div>;
};
