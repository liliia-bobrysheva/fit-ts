import { ExtendedLap, FitRecord, Lap, Length, Session } from "./messages";

export const mapDataIntoLap = (inputLaps: ExtendedLap[], lapKey: "records" | "lengths", data: FitRecord[] | Length []): ExtendedLap[] => {
  const laps = [...inputLaps];
  let index = 0;
  for (let i = 0; i < laps.length; i++) {
    const lap = laps[i];
    const nextLap = laps[i + 1];
    const tempData = [];
    const lapStartTime = new Date(lap.start_time).getTime();
    const nextLapStartTime = nextLap ? new Date(nextLap.start_time).getTime() : null;
    for (let j = index; j < data.length; j++) {
      const row = data[j];
      if (nextLap) {
        const timestamp = new Date(row.timestamp).getTime();
        if (lapStartTime <= timestamp && nextLapStartTime && nextLapStartTime > timestamp) {
          tempData.push(row);
        } else if (nextLapStartTime && nextLapStartTime <= timestamp) {
          index = j;
          break;
        }
      } else {
        tempData.push(row);
      }
    }

    if (!laps[i][lapKey]) {
      laps[i][lapKey] = tempData;
    }
  }

  return laps;
};

export const mapDataIntoSession = (inputSessions: Session[], laps: Lap[]): Session[] => {
  const sessions = [...inputSessions];
  let lapIndex = 0;
  for (let i = 0; i < sessions.length; i++) {
    const session = sessions[i];
    const nextSession = sessions[i + 1];
    const tempLaps = [];
    const sessionStartTime = new Date(session.start_time).getTime();
    const nextSessionStartTime = nextSession ? new Date(nextSession.start_time).getTime() : null;
    for (let j = lapIndex; j < laps.length; j++) {
      const lap = laps[j];
      if (nextSession) {
        const lapStartTime = new Date(lap.start_time).getTime();
        if (sessionStartTime <= lapStartTime && nextSessionStartTime && nextSessionStartTime > lapStartTime) {
          tempLaps.push(lap);
        } else if (nextSessionStartTime && nextSessionStartTime <= lapStartTime) {
          lapIndex = j;
          break;
        }
      } else {
        tempLaps.push(lap);
      }
    }

    if (!sessions[i].laps) {
      sessions[i].laps = tempLaps;
    }
  }
  return sessions;
};
