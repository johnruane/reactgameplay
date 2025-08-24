import { createContext } from 'react';

type MastermindContextType = {
  secretCode: number[];
};

const defaultValues: MastermindContextType = {
  secretCode: [],
};

const MastermindContext = createContext<MastermindContextType>(defaultValues);

export default MastermindContext;
