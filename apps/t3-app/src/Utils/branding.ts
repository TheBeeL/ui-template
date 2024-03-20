import { use } from "react";

declare const __brand: unique symbol;
declare const __base: unique symbol;

type Brand<Base, B> = {
  [__brand]: B;
  [__base]: Base;
};

export type BrandedValue<TType, TName> = TType & Brand<TType, TName>;
type BrandValueType<T> = T extends Brand<infer Base, any> ? Base : never;

type BrandedModel<
  TObj,
  BId extends BrandedValue<TId, any>,
  TId = BrandValueType<BId>,
> = TObj extends Object ? TObj & { id: BId } : never;
type B<TObj extends Object, BrandName extends string> = TObj & {
  id: string;
} & Brand<string, BrandName>;
export type TypeBrand<BrandName extends string> = Brand<string, BrandName>;
type User = TypeBrand<"User"> & { id: string; name: string };
const me = { id: "123", name: "me" } as User;

type BrandIdObjecType<BObj> =
  BObj extends BrandedModel<infer TObj, any> ? TObj : never;

// type BrandIdObjectBuilder<TObj extends BrandedIdObject<BObj,any>, BId extends BrandedValue<TId, any> , BObj = BrandIdObjecType<TObj>, TId = BrandedValueType<>> = {

type BrandValueBuilder<
  T extends BrandedValue<Base, any>,
  Base = BrandValueType<T>,
> = {
  check: (value: Base) => value is T;
  assert: (value: Base) => asserts value is T;
  from: (value: Base) => T;
};
// type TypeBrandBuilder<T extends Object & TypeBrand<BName>, BName extends string> = {
//   check: (value: Base) => value is T;
//   assert: (value: Base) => asserts value is T;
//   from: (value: Base) => T;
// }

type BrandBuilderOptions<Base> = {
  validate?: (value: Base) => boolean | string;
};
export function brand<
  T extends BrandedValue<Base, any>,
  Base = BrandValueType<T>,
>({ validate = () => true }: BrandBuilderOptions<Base> = {}): BrandValueBuilder<
  T,
  Base
> {
  function assertIsBrand(value: Base): asserts value is T {
    const result = validate(value);
    if (typeof result === "string") {
      throw new Error(result);
    }
    if (result === false) {
      throw new Error(`Invalid value ${value}`);
    }
  }

  return {
    check: (value): value is T => validate(value) === true,
    assert: assertIsBrand,
    from: (value: Base) => {
      assertIsBrand(value);
      return value as T;
    },
  };
}
