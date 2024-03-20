import { Item, ItemId } from "~/components/board/Item";
import { BrandedValue } from "~/Utils/branding";

export type ContainerItemId = BrandedValue<number, "ContainerItemId">;
export const ContainerItemId = brand<ContainerItemId>();

export type ContainerItem = {
  id: ContainerItemId;
  children: {
    order: number;
    item: Item | ContainerItem;
  }[];
};

interface ContainerItemProps {
  item: ContainerItem;
}

export const ContainerItem = (props: ContainerItemProps) => {
  const { item } = props;

  return (
    <div className="size-5 cursor-grab rounded bg-purple-300">
      {item.children.map((child) => {
        if (ItemId.check(child.item.id)) {
          return <Item key={child.order} item={child.item} />;
        }
      })}
    </div>
  );
};
