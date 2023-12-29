import { createContext, useState } from "react";
import { GymProps } from "../components/Gyms/Gym";

interface GymContextProps {
  gymsList: GymProps[];
  setGymsList: React.Dispatch<React.SetStateAction<GymProps[]>>;
  children?: React.ReactNode;

  gymChecks: GymContextCheckProps;
  setGymCheck: React.Dispatch<React.SetStateAction<GymContextCheckProps>>;
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

  return (
    <GymContext.Provider
      value={{
        gymsList,
        setGymsList,
        gymChecks,
        setGymCheck,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};
