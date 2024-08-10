const dateStringToDate = (dateString: string): Date => {
  const data = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(data[2], data[1] - 1, data[0]);
};

export default dateStringToDate;
