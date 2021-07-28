/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  "Your Library": undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string,
  name: string,
  by: string,
  numberOfLikes: number,
  imageUri: string,
  artistsHeadline: string,
};

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}
