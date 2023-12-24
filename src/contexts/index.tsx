import { createContext, useState } from "react";
import { GymProps } from "../components/Gyms/Gym";

interface GymContextProps {
  gymsList: GymProps[];
  setGymsList: React.Dispatch<React.SetStateAction<GymProps[]>>;
  children?: React.ReactNode;

  gymChecks: GymContextCheckProps;
  setGymCheck: React.Dispatch<React.SetStateAction<GymContextCheckProps>>;

  gymHours: { startHour: string; endHour: string };
  setGymHours: React.Dispatch<
    React.SetStateAction<{ startHour: string; endHour: string }>
  >;
}

interface GymContextCheckProps {
  morning: string;
  afternoon: string;
  night: string;
  status: boolean;
}

export const GymContext = createContext<GymContextProps>({} as GymContextProps);

export const GymProvider = ({ children }: GymContextProps) => {
  const [gymsList, setGymsList] = useState<GymProps[]>([]);

  const [gymChecks, setGymCheck] = useState({
    morning: "",
    afternoon: "",
    night: "",
    status: false,
  });

  const [gymHours, setGymHours] = useState<{
    startHour: string;
    endHour: string;
  }>({
    startHour: "",
    endHour: "",
  });

  return (
    <GymContext.Provider
      value={{
        gymsList,
        setGymsList,
        gymChecks,
        setGymCheck,
        gymHours,
        setGymHours,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};
