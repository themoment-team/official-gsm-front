const descriptionFormatting = (description: string) =>
  description.replace(/\n/g, ' ').replace(/\s+/g, ' ').slice(0, 120);

export default descriptionFormatting;
