export type TFuncStr = (str: string, str2?: string, str3?: string) => string;

export type TJsonVal = string | number | boolean | string[] | TJson | TJson[];
export interface TJson {
  [key: string]: TJsonVal;
}

export type TLitVal = string | number | boolean | undefined;

export type TAnyTestFunc = (payload: any) => void;

export type TAnyHook = React.Dispatch<React.SetStateAction<TLitVal | undefined>> | TAnyTestFunc;
