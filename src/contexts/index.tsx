import { createContext, useState } from "react";
import { GymProps } from "../components/Gyms/Gym";

interface GymContextProps {
  gymsList: GymProps[];
  setGymsList: React.Dispatch<React.SetStateAction<GymProps[]>>;
  children?: React.ReactNode;

  gymChecks: boolean;
  setGymCheck: React.Dispatch<React.SetStateAction<boolean>>;

  morningCheckBox: boolean;
  setMorningCheckBox: React.Dispatch<React.SetStateAction<boolean>>;

  afternoonCheckBox: boolean;
  setAfternoonCheckBox: React.Dispatch<React.SetStateAction<boolean>>;

  nightCheckBox: boolean;
  setNightCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GymContext = createContext<GymContextProps>({
  gymsList: [],
  setGymsList: () => {},
  gymChecks: false,
  setGymCheck: () => {},
  morningCheckBox: false,
  setMorningCheckBox: () => {},
  afternoonCheckBox: false,
  setAfternoonCheckBox: () => {},
  nightCheckBox: false,
  setNightCheckBox: () => {},
});

export const GymProvider = ({ children }: GymContextProps) => {
  const [gymsList, setGymsList] = useState<GymProps[]>([]);

  const [gymChecks, setGymCheck] = useState(false);

  const [morningCheckBox, setMorningCheckBox] = useState(false);
  const [afternoonCheckBox, setAfternoonCheckBox] = useState(false);
  const [nightCheckBox, setNightCheckBox] = useState(false);

  return (
    <GymContext.Provider
      value={{
        gymsList,
        setGymsList,
        gymChecks,
        setGymCheck,
        morningCheckBox,
        setMorningCheckBox,
        afternoonCheckBox,
        setAfternoonCheckBox,
        nightCheckBox,
        setNightCheckBox,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};
