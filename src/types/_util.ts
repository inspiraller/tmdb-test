


export type TLitVal = string | number | boolean | undefined;

export type TJsonVal = string | number | boolean | string[] | TJson | TJson[];
export interface TJson {
  [key: string]: TJsonVal;
}

export type TAnyTestFunc = (payload: any) => void;

export type TAnyHook = React.Dispatch<React.SetStateAction<TLitVal | undefined>> | TAnyTestFunc;

