
const compareStringResult = (a: string, b: string) => {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  }
  return 0;
};

const compareString = (a: string, b: string, asc?: boolean) =>
  asc ? compareStringResult(b, a) : compareStringResult(a, b);

const compareNumber = (a: number, b: number, asc?: boolean) =>
  asc ? b - a : a - b;

const sortKey = <T extends {}>(
  arr: T[],
  key: keyof T,
  asc?: boolean,
  sortType: "string" | "number" = "number"
) => {
  const fnSortToggle = (objA: T, objB: T) =>
    sortType === "number"
      ? compareNumber(objA[key] as any, objB[key] as any, asc)
      : compareString(objA[key] as any, objB[key] as any, asc);
  return arr.slice().sort(fnSortToggle);
};

export default sortKey;
