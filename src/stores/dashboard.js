"use client";

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import dayjs from "dayjs";

const TIME_FORMAT = "YYYY/MM/DD  ddd  HH:mm:ss";

const store = {
  initialState: {
    num: 1,
    time: "",
    isLoading: false
  }
};

export const useDashboardStore = create(
  subscribeWithSelector((set, get) => ({
    ...store.initialState,

    setTime: () => {
      const currentTime = dayjs().format(TIME_FORMAT);
      const { time: previousTime } = get();

      if (currentTime !== previousTime) {
        set({
          time: currentTime
        });
      }
    }
  }))
);
