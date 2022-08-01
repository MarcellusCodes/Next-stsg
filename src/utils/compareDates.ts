const compareDates = (battleDate: string) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  const todayDate: Date = new Date(date);

  if (todayDate < new Date(battleDate) || todayDate === new Date(battleDate)) {
    return true;
  }
  return false;
};

export default compareDates;
