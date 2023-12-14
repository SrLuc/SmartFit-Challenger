import { createContext, useState } from "react";
import { GymProps } from "../components/Gyms/Gym";

interface GymContextProps {
  gymsList: GymProps[];
  setGymsList: React.Dispatch<React.SetStateAction<GymProps[]>>;
  children?: React.ReactNode;

  activeGymList?: GymActiveContextProps;
  setActiveGymList?: React.Dispatch<
    React.SetStateAction<GymActiveContextProps>
  > | undefined;
}

interface GymActiveContextProps {
  morgning: boolean;
  afternoon: boolean;
  night: boolean;
  closed: boolean;
}

export const GymContext = createContext<GymContextProps>({} as GymContextProps);

export const GymProvider = ({ children }: GymContextProps) => {
    
  const [gymsList, setGymsList] = useState<GymProps[]>([]);

  const [activeGymList, setActiveGymList] = useState<GymActiveContextProps>({
    morgning: false,
    afternoon: false,
    night: false,
    closed: false,
  });

  return (
    <GymContext.Provider
      value={{
        gymsList,
        setGymsList,
        activeGymList,
        setActiveGymList,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};
