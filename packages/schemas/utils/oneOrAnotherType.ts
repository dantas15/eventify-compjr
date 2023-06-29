type Only<I, J> = {
[P in keyof I]: I[P];
} & {
  [P in keyof J]?: never;
};

export type OneOrAnother<I, J> = Only<I, J> | Only<J, I>;