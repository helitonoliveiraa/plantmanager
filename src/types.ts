export type PlantProps = {
  id: 1;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
  hour: string;
  dateTimeNotification: Date;
};

export type StoragePlantProps = {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  };
};

export type ConfirmationParams = {
  icon: 'smile' | 'hug';
  title: string;
  subtitle: string;
  buttonTitle: string;
  nextScreen: string;
};
