import React, { createContext, useCallback, useMemo, useState } from 'react';

type mbtiContextType = {
  selectedMbti: string;
  selectMbti: (mbti: string) => void;
};

export const MbtiContext = createContext<mbtiContextType>({
  selectedMbti: '',
  selectMbti: () => {},
});

export const MbtiProvider = ({ children }: any) => {
  const [selectedMbti, setSelectedMbti] = useState('');

  const selectMbti = useCallback(
    (mbti: string) => {
      setSelectedMbti(mbti);
    },
    [setSelectedMbti]
  );

  const value = useMemo(() => ({ selectedMbti, selectMbti }), [selectedMbti, selectMbti]);

  return <MbtiContext.Provider value={value}>{children}</MbtiContext.Provider>;
};
