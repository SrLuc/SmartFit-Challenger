import { createContext, useState } from "react";
import { GymProps } from "../components/Gyms/Gym";

interface GymContextProps {
  gymsList: GymProps[];
  setGymsList: React.Dispatch<React.SetStateAction<GymProps[]>>;
  children?: React.ReactNode;

  gymChecks: GymContextCheckProps;
  setGymCheck: React.Dispatch<React.SetStateAction<GymContextCheckProps>>;

  morningCheckBox: boolean;
  setMorningCheckBox: React.Dispatch<React.SetStateAction<boolean>>;

  afternoonCheckBox: boolean;
  setAfternoonCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  
  nightCheckBox: boolean;
  setNightCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GymContextCheckProps {
  status: boolean;
}

export const GymContext = createContext<GymContextProps>({} as GymContextProps);

export const GymProvider = ({ children }: GymContextProps) => {
  const [gymsList, setGymsList] = useState<GymProps[]>([]);

  const [gymChecks, setGymCheck] = useState({
    status: false,
  });

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
